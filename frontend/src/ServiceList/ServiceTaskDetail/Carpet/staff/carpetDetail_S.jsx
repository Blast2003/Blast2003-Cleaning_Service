import React, { useEffect, useState } from 'react';
import './carpetDetail_S.css';
import { FaArrowCircleDown } from "react-icons/fa";
import vacuum from "../../../../assets/vacuum.png";
import Pre_treatment from "../../../../assets/pre-treatment.png";
import Spot_cleaning from "../../../../assets/spot.png";
import Deep_cleaning from "../../../../assets/steam.png";
import Drying from "../../../../assets/drying.png";

function CarpetDetail_S({ serviceId, examiner, customer, executionTime }) {
    const [tasks, setTasks] = useState([]);
    const [isDropdownCOpen, setIsDropdownCOpen] = useState(false);
    const [isDropdownEOpen, setIsDropdownEOpen] = useState(false);

    const taskImages = {
        "Vacuuming": vacuum,
        "Pre-treatment": Pre_treatment,
        "Spot cleaning": Spot_cleaning,
        "Deep cleaning": Deep_cleaning,
        "Drying": Drying,
    };

    const toggleDropdownC = () => {
        setIsDropdownCOpen((prev) => !prev);
    };

    const toggleDropdownE = () => {
        setIsDropdownEOpen((prev) => !prev);
    };
    
    // Fetch tasks for the specific service
    const fetchTasks = async () => {
        try {
            // console.log(serviceId)
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

    // Handle Click Complete Button
    const handleTaskToggle = async (taskId) => {
        try {
            console.log(taskId)
            const response = await fetch(`/api/task/completeTask/${taskId}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
    
            if (!response.ok) throw new Error("Failed to toggle task");
    
            const updatedTask = await response.json();
    
            // Update the specific task in state
            setTasks((prevTasks) =>
                prevTasks.map((task) =>
                    task._id === updatedTask._id ? updatedTask : task
                )
            );
        } catch (error) {
            console.error("Error toggling task:", error);
        }
    };
    

    return (
        <div className="carpet__container">
            <h2>Carpet Cleaning</h2>
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
            <div className="carpet__main">
                {tasks.map((task, index) => (
                    <div key={index} className="carpet__step">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <img 
                                            src={taskImages[task.TaskName] || vacuum} 
                                            alt={task.TaskName}
                                            className="carpet__img" 
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="carpet__step-title">{task.TaskName}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="carpet__step-description">{task.description}</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <button className={`carpet__complete ${task.complete ? "complete" : "pending"}`}
                                        onClick={() => handleTaskToggle(task._id)}
                                        disabled={task.complete}
                                        >
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


export default CarpetDetail_S;