import React from "react";
import './Examiner.css';
import icon from '../../assets/iconExaminer.png'

function Examiner(){
    return (
        <div className="examiner__container">
            <div className="examiner__heading">
                <p>✨Examiner</p>
                <h2>Current Task</h2>
            </div>
            <div className="examiner__main">
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <p className="section__date">Date - time</p>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <p className="section__date">Date - time</p>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <p className="section__date">Date - time</p>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <p className="section__date">Date - time</p>
                </div>
            </div>
        </div>
    );
}
export default Examiner;