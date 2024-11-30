import React, { useEffect, useState } from 'react';
import './furnitureDetail_E.css';

import { FaArrowCircleDown } from "react-icons/fa";
import Leather_conditioning from '../../../../assets/leather.png';
import Dusting from '../../../../assets/dust.png';
import Vacuuming from '../../../../assets/vacuum.png';
import Spot_cleaning from '../../../../assets/spot.png';
import Upholstery_cleaning from '../../../../assets/upholstery.png';

function FurnitureDetail_E({ serviceId, staff, customer, executionTime }) {
    const [tasks, setTasks] = useState([]);
    const [isDropdownCOpen, setIsDropdownCOpen] = useState(false);
    const [isDropdownSOpen, setIsDropdownSOpen] = useState(false);

    const taskImages = {
        "Dusting": Dusting,
        "Vacuuming": Vacuuming,
        "Spot cleaning": Spot_cleaning,
        "Upholstery cleaning": Upholstery_cleaning,
        "Leather conditioning": Leather_conditioning,
    };

    const toggleDropdownC = () => {
        setIsDropdownCOpen((prev) => !prev);
    };

    const toggleDropdownS = () => {
        setIsDropdownSOpen((prev) => !prev);
    };
    
    // Fetch tasks for the specific service
    const fetchTasks = async () => {
        try {
            console.log(serviceId)
            const response = await fetch(`/api/task/getTaskByService/${serviceId}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });

            if (!response.ok) throw new Error("Failed to fetch tasks");

            const taskData = await response.json();
            setTasks(taskData);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [serviceId]);

    return (
        <div className="furniture__container">
            <h2>Furniture Cleaning</h2>
            <div>
            <div className="staff__bar">
                    <span><strong>✨Customer</strong></span>
                    <button className="dropdown__icon" onClick={toggleDropdownC}>
                        <FaArrowCircleDown />
                    </button>
                </div>
                {isDropdownCOpen && (
                    <div className="staff__details">
                        <p><strong>Name:</strong> {customer?.name}</p>
                        <p><strong>Phone:</strong> {customer?.phone}</p>
                        <p><strong>Email:</strong> {customer?.email}</p>
                    </div>
                )}

                <div className="staff__bar">
                    <span><strong>✨Staff Undertake</strong></span>
                    <button className="dropdown__icon" onClick={toggleDropdownS}>
                        <FaArrowCircleDown />
                    </button>
                </div>
                {isDropdownSOpen && (
                    <div className="staff__details">
                        <p><strong>Name:</strong> {staff?.name}</p>
                        <p><strong>Phone:</strong> {staff?.phone}</p>
                        <p><strong>Email:</strong> {staff?.email}</p>
                    </div>
                )}
                <br></br>
                
                <p><strong>✨Execution Time:</strong> {executionTime}</p>
            </div>
            <div className="furniture__main">
                {tasks.map((task, index) => (
                    <div key={index} className="furniture__step">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img 
                                            src={taskImages[task.TaskName] || Vacuuming} 
                                            alt={task.TaskName}
                                            className="furniture__img"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="furniture__step-title">{task.TaskName}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="furniture__step-description">{task.description}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className={`furniture__complete ${task.complete ? "complete" : "pending"}`}>
                                            {task.complete ? "Complete" : "Pending"}
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default FurnitureDetail_E;