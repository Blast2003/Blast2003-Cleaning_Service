import React from "react";
import "./bookedServices.css"

function bookedService() {
    return (
        <div className="booked-services-main">
            <p className="booked-services-header">⭐ YOUR BOOKED SERVICES</p>
            <p className="booked-services-title">SERVICES YOU BOOKED</p>
            <p className="booked-services-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita
                in est
            </p>

            <div className="booked-services-tasks-container">
                <div className="booked-services-task">
                    <img src="http://surl.li/kloccy" alt="task-picture" className="booked-services-task-image" />
                    <p className="book-services-task-title">Carpet Cleaning</p>
                    <table className="book-services-task-employees">
                        <tr>
                            <td className="book-services-task-employees-rows">Staff A</td>
                            <td className="book-services-task-employees-rows">Execution Date</td>
                        </tr>
                        <tr>
                            <td className="book-services-task-employees-rows">Examiner A</td>
                            <td className="book-services-task-employees-rows">Execution Date</td>
                        </tr>
                    </table>
                    <br />
                    <a href="#to_see_task_detail" className="task-detail-forward-button">View details</a>
                </div>

                
            </div>
        </div>
    );
}

export default bookedService;
