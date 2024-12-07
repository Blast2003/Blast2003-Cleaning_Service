import React, { useEffect, useState } from "react";
import './ServiceList.css';
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import contractAtom from "../../atom/contractAtom";

function CustomerBookedServiceList({successMessage}) {
    const [services, setServices] = useState([]);
    const [taskStatuses, setTaskStatuses] = useState({});
    const setContract = useSetRecoilState(contractAtom);
    const [showMessage, setShowMessage] = useState(false);

    // Predefined image mapping for services
    const serviceImages = {
        "Carpet Cleaning": carpet,
        "Furniture Cleaning": furniture,
        "Wall Washing": wall,
        "Floor Cleaning": floor,
    };

    // Predefined href mapping for services
    const serviceLinks = {
        "Carpet Cleaning": "/customer/booked/service/carpet",
        "Furniture Cleaning": "/customer/booked/service/furniture",
        "Wall Washing": "/customer/booked/service/wall",
        "Floor Cleaning": "/customer/booked/service/floor",
    };

    // Fetch contracts and services
    const fetchContractsAndServices = async () => {
        try {
            const res = await fetch("/api/user/getContractsByUser", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
            });

            const contracts = await res.json();
            if (contracts.error) {
                console.error("Error fetching contracts:", contracts.error);
                return;
            }

            const servicePromises = contracts.map(async (contract) => {
                const serviceRes = await fetch(
                    `/api/service/getServiceByServiceId/${contract.ServiceId}`,
                    { method: "GET" }
                );
                const service = await serviceRes.json();
                return { ...service, 
                    contractStatus: contract.Complete, 
                    contractId: contract._id, 
                    examiner: contract?.Examiner, 
                    staff: contract?.Staff, 
                    executionTime: contract.executionTime, 
                    executionDate: contract.executionDate };
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

            // console.log(taskStatuses[serviceId]);
        } catch (error) {
            console.error(`Error fetching tasks for service ${serviceId}:`, error);
        }
    };

    // Delete User from Contract
    const handleDeleteUserFromContract = async (contractId) => {
        try {
            const response = await fetch(`/api/user/DeleteUserInContract/${contractId}`, {
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
        localStorage.removeItem("contract-cleanings");
        setContract(null);
    
        const hasSeenMessage = sessionStorage.getItem("hasSeenSuccessMessage");

    if (hasSeenMessage === "true" && successMessage) {
        setShowMessage(true);   
        // Optionally, hide the message after 5 seconds
        const timer = setTimeout(() => {
            setShowMessage(false);
            sessionStorage.setItem("hasSeenSuccessMessage", "false");
        }, 5000);

        return () => clearTimeout(timer);
    }
    }, [setContract, successMessage]);

    return (    
    <div>
      {showMessage && (
            <div
            style={{
                position: "fixed",
                top: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#4caf50",
                color: "white",
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
            }}
            >
            {successMessage}
            </div>
      )}
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
                            state={{ serviceId: service._id, examiner: service?.examiner ,staff: service?.staff, executionTime: service.executionTime, executionDate: service.executionDate }}
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
    </div>
    );
}

export default CustomerBookedServiceList;
