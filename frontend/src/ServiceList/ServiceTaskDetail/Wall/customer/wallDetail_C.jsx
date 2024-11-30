import React, { useEffect, useState } from 'react';
import './wallDetail_C.css';
import { FaArrowCircleDown } from "react-icons/fa";

import dust from '../../../../assets/dust.png';
import washing from '../../../../assets/washing.png';
import rinsing from '../../../../assets/rinsing.png';
import dry from '../../../../assets/drying.png';

function WallDetail_C({serviceId, examiner, staff, executionTime}){
    const [tasks, setTasks] = useState([]);
    const [isDropdownSOpen, setIsDropdownSOpen] = useState(false);
    const [isDropdownEOpen, setIsDropdownEOpen] = useState(false);

    const taskImages = {
        "Dusting": dust,
        "Washing": washing,
        "Rinsing": rinsing,
        "Drying": dry,
    };

    const toggleDropdownS = () => {
        setIsDropdownSOpen((prev) => !prev);
    };

    const toggleDropdownE = () => {
        setIsDropdownEOpen((prev) => !prev);
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
        <div className="wall__container">
            <h2>Wall Washing</h2>
            <div>
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

                <div className="staff__bar">
                    <span><strong>✨Examiner Undertake</strong></span>
                    <button className="dropdown__icon" onClick={toggleDropdownE}>
                        <FaArrowCircleDown />
                    </button>
                </div>
                {isDropdownEOpen && (
                    <div className="staff__details">
                        <p><strong>Name:</strong> {examiner?.name}</p>
                        <p><strong>Phone:</strong> {examiner?.phone}</p>
                        <p><strong>Email:</strong> {examiner?.email}</p>
                    </div>
                )}
                <br></br>
                
                <p><strong>✨Execution Time:</strong> {executionTime}</p>
            </div>
            <div className="wall__main">
                {tasks.map((task, index) => (
                    <div key={index} className="wall__step">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img 
                                            src={taskImages[task.TaskName] || dust} 
                                            alt= {task.TaskName} 
                                            className="wall__img" 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="wall__step-title">{task.TaskName}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="wall__step-description">{task.description}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className={`wall__complete ${task.complete ? "complete" : "pending"}`}>
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
};

export default WallDetail_C;