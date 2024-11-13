import React from "react";
import './ServiceList.css';
import carpet from "../../assets/carpet.png";
import furniture from "../../assets/furniture.png";
import wall from "../../assets/wall.png";
import floor from "../../assets/floor.png";

function ExaminerServicesList() {
    return (
        <div className="serviceList">
            <h3 className="serviceList__title">✨TASK UNDERTAKE</h3>
            <h1 className="serviceList__name">Current Task</h1>
            <div className="serviceList__content">
                {[
                    { img: carpet, name: "Carpet Cleaning", description: "Remove dirt and stains from carpets using steam, dry cleaning to refresh and sanitize.", link: "/examinercarpet" },
                    { img: furniture, name: "Furniture Cleaning", description: "Cleans and removes stains from upholstered furniture keeping it fresh and hygienic", link: "/examinerfurniture" },
                    { img: wall, name: "Wall washing", description: "Clean walls to remove dirt and grime without damaging paint or wallpaper.", link: "/examinerwall" },
                    { img: floor, name: "Floor Cleaning", description: "Sweeps, mops and polishes various floor types to restore original appearance.", link: "/examinerfloor" }
                ].map((task, index) => (
                    <div key={index} className="serviceList__task">
                        <img src={task.img} className="serviceList__img" alt={task.name} />
                        <h2>{task.name}</h2>
                        <p className="serviceList__description">{task.description}</p>
                        <button className="serviceList__button">
                            <a href={task.link}>See details</a>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ExaminerServicesList;