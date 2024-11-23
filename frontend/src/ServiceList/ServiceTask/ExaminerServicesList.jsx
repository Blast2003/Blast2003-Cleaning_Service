import React, { useEffect, useState } from "react";
import "./examiner/ServiceList_E.css"
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function ExaminerServicesList() {
    const [services, setServices] = useState([]);
    const [taskStatuses, setTaskStatuses] = useState({});

    // Predefined image mapping for services
    const serviceImages = {
        "Carpet Cleaning": carpet,
        "Furniture Cleaning": furniture,
        "Wall Washing": wall,
        "Floor Cleaning": floor,
    };

    const serviceLinks = {
        "Carpet Cleaning": "/examiner/examinercarpet",
        "Furniture Cleaning": "/examiner/examinerfurniture",
        "Wall Washing": "/examiner/examinerwall",
        "Floor Cleaning": "/examiner/examinerfloor",
    };

    // Fetch contracts and services
    const fetchContractsAndServices = async () => {
        try {
            const res = await fetch("/api/examiner/getContractsByExaminer", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // check include cookie
            });

            const contracts = await res.json();
            if (contracts.error) {
                console.error("Error fetching contracts:", contracts.error);
                return;
            }

            const servicePromises = contracts.map(async (contract) => {
                // Fetch service
                const serviceRes = await fetch(
                    `/api/service/getServiceByServiceId/${contract.ServiceId}`,
                    { method: "GET" }
                );
                const service = await serviceRes.json();

                return {
                    ...service,
                    contractStatus: contract.Complete, 
                    contractId: contract._id,
                    staff: contract?.Staff,
                    customer: contract?.User,
                    executionTime: contract.executionTime,
                    executionDate: contract.executionDate,
                };
            });

            const serviceList = await Promise.all(servicePromises);
            setServices(serviceList);

            // Fetch task statuses for all services
            serviceList.forEach(async (service) => {
                await fetchTasksForService(service._id);
            });
        } catch (error) {
            console.error("Error fetching services:", error);
        }
    };

    // Fetch tasks for a specific service and check completion status
    const fetchTasksForService = async (serviceId) => {
        try {
            const res = await fetch(`/api/task/getTaskByService/${serviceId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const tasks = await res.json();

            if (tasks.error) {
                console.error(`Error fetching tasks for service ${serviceId}:`, tasks.error);
                return;
            }

            // Check if all tasks are complete
            const allTasksComplete = tasks.every((task) => task.complete);

            // Update the task status using map
            setTaskStatuses((prev) => ({
                ...prev,
                [serviceId]: allTasksComplete ? "Complete" : "Pending",
            }));
        } catch (error) {
            console.error(`Error fetching tasks for service ${serviceId}:`, error);
        }
    };

    // Delete User from Contract
    const handleDeleteUserFromContract = async (contractId) => {
        try {
            const response = await fetch(`/api/examiner/DeleteExaminerInContract/${contractId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // To include the session cookie
            });

            const result = await response.json();
            if (response.ok) {
                // Successfully deleted the user from the contract in frontend => must to set the useState immediately
                setServices(services.filter(service => service.contractId !== contractId));
            } else {
                console.error("Failed to delete user from contract:", result.error);
            }
        } catch (error) {
            console.error("Error deleting user from contract:", error);
        }
    };

    useEffect(() => {
        fetchContractsAndServices();
    }, []);

    const handleUpdateContractStatus = async (contractId) => {
        try {
            const response = await fetch(`/api/contract/updateContractStatus/${contractId}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include session cookies
            });
    
            const result = await response.json();
    
            if (response.ok) {
                // Update the specific contract's status in the state
                setServices((prevServices) =>
                    prevServices.map((service) =>
                        service.contractId === contractId
                            ? { ...service, contractStatus: true }
                            : service
                    )
                );
            } else {
                console.error("Failed to update contract status:", result.error);
                alert(result.error); // Optionally show an error message to the user
            }
        } catch (error) {
            console.error("Error updating contract status:", error);
            alert("An error occurred. Please try again.");
        }
    };
    

    return (
        <div className="serviceList__content">
            {services.map((service, index) => (
                <div key={index} className="serviceList__task">
                    <div className="service__execution-date">
                        {service.executionDate}
                    </div>
                    <img
                        src={serviceImages[service.ServiceName] || carpet}
                        className="serviceList__img"
                        alt={service.ServiceName}
                    />
                    <h2>{service.ServiceName}</h2>
                    <p className="serviceList__description">{service.description}</p>
                    <button className="serviceList__button">
                    <Link
                            to={serviceLinks[service.ServiceName] || "#"}
                            state={{
                                serviceId: service._id,
                                staff: service?.staff, 
                                customer: service?.customer,
                                executionTime: service.executionTime,
                                executionDate: service.executionDate,
                            }}
                        >
                            See details
                        </Link>
                    </button>
                    <div className="service__overall-status">
                        <button
                            className={`overall-status__button ${taskStatuses[service._id] === "Complete" ? "complete" : "pending"}`}
                        >
                            {taskStatuses[service._id] || "Loading..."}
                        </button>

                        {taskStatuses[service._id] === "Complete" && (
                            <button
                                className="overall-status__button-secondary"
                                style={{ marginTop: "10px" }}
                                onClick={() => handleUpdateContractStatus(service.contractId)}
                                disabled={service.contractStatus} 
                            >
                                {service.contractStatus ? "Completed, checked" : "Completed, unchecked"}
                            </button>
                        )}

                        <div className="service__delete-icon" onClick={() => handleDeleteUserFromContract(service.contractId)}>
                            <MdDeleteForever size={24} color="red" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}


export default ExaminerServicesList;