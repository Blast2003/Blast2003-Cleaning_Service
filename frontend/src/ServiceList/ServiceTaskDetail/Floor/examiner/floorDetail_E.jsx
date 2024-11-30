import React, { useEffect, useState } from 'react';
import './FloorDetail_E.css';
import { FaArrowCircleDown } from "react-icons/fa";
import sweeping from '../../../../assets/sweeping.png';
import mapping from '../../../../assets/mapping.png';
import rug from '../../../../assets/rug.png';
import scrubbing from '../../../../assets/scrubbing.png';
import polishing from '../../../../assets/polishing.png';

function FloorDetail_E({ serviceId, staff, customer, executionTime }) {
    const [tasks, setTasks] = useState([]);
    const [isDropdownCOpen, setIsDropdownCOpen] = useState(false);
    const [isDropdownSOpen, setIsDropdownSOpen] = useState(false);


    const taskImages = {
        "Sweeping or vacuuming": sweeping,
        "Mopping": mapping,
        "Rug cleaning": rug,
        "Scrubbing": scrubbing,
        "Polishing": polishing,
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
        <div className="floor__container">
            <h2>Floor Cleaning</h2>
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
            <div className="floor__main">
                {tasks.map((task, index) => (
                    <div key={index} className="floor__step">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img 
                                            src={taskImages[task.TaskName] || sweeping} 
                                            alt= {task.TaskName}
                                            className="floor__img" 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="floor__step-title">{task.TaskName}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="floor__step-description">{task.description}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className={`floor__complete ${task.complete ? "complete" : "pending"}`}>
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


export default FloorDetail_E;