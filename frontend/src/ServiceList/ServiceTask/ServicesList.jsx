import React from "react";
import './ServiceList.css';
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";
import { Link } from "react-router-dom";

function ServiceList(){
    return(
        <div className="currentTask">
            <h4>✨TASK UNDERTAKE</h4>
            <h1 className="name">Current Task</h1>
            <div className="currentTask__content">
                <table className="task__table">
                    <tr>
                        <td><img src={carpet} className="currentTask__img"/></td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Carpet Cleaning</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="taskDescription">
                            <p>Remove dirt and stains from carpets using steam, dry cleaning to refresh and sanitize.</p>
                        </td>
                    </tr>
                    <tr>
                        <button className="taskDetail">
                            <a href="/carpet">See details</a>
                        </button>
                    </tr>
                </table>
                <table className="task__table">
                    <tr>
                        <td><img src={furniture} className="currentTask__img"/></td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Furniture Cleaning</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="taskDescription">
                            <p>Cleans and removes stains from upholstered furniture keeping it fresh and hygienic</p>
                        </td>
                    </tr>
                    <tr>
                        <button className="taskDetail">
                        <a href="/furniture">See details</a>
                        </button>
                    </tr>
                </table>
                <table className="task__table">
                    <tr>
                        <td><img src={wall} className="currentTask__img"/></td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Wall washing</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="taskDescription">
                            <p>Clean walls to remove dirt and grime without damaging paint or wallpaper.</p>
                        </td>
                    </tr>
                    <tr>
                        <button className="taskDetail">
                        <a href="/wall">See details</a>
                        </button>
                    </tr>
                </table>
                <table className="task__table">
                    <tr>
                        <td><img src={floor} className="currentTask__img"/></td>
                    </tr>
                    <tr>
                        <td>
                            <h2>Floor Cleaning</h2>
                        </td>
                    </tr>
                    <tr>
                        <td className="taskDescription">
                            <p>Sweeps, mops and polishes various floor types to restore original appearence.</p>
                        </td>
                    </tr>
                    <tr>
                        <button className="taskDetail">
                        <a href="/floor">See details</a>
                        </button>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default ServiceList;