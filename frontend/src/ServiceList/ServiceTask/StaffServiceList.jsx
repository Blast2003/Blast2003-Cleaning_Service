import React, { useEffect, useState } from "react";
import './ServiceList.css';
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

function StaffServiceList() {
    const [services, setServices] = useState([]);
    const [taskStatuses, setTaskStatuses] = useState({});

    const serviceImages = {
        "Carpet Cleaning": carpet,
        "Furniture Cleaning": furniture,
        "Wall Washing": wall,
        "Floor Cleaning": floor,
    };

    const serviceLinks = {
        "Carpet Cleaning": "/staff/staffcarpet",
        "Furniture Cleaning": "/staff/stafffurniture",
        "Wall Washing": "/staff/staffwall",
        "Floor Cleaning": "/staff/stafffloor",
    };

    // Fetch contracts and services
    const fetchContractsAndServices = async () => {
        try {
            const res = await fetch("/api/staff/getContractsByStaff", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const contracts = await res.json();
            console.log(contracts);
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
                    examiner: contract?.Examiner,
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

            const allTasksComplete = tasks.every((task) => task.complete);
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
            const response = await fetch(`/api/staff/DeleteStaffInContract/${contractId}`, {
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
                                examiner: service?.examiner,
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
                            disabled={taskStatuses[service._id] !== "Complete"}
                        >
                            {taskStatuses[service._id] || "Loading..."}
                        </button>

                        {taskStatuses[service._id] === "Complete" && (
                            <button
                                className="overall-status__button-secondary"
                                style={{ marginTop: "10px" }}
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

export default StaffServiceList;
