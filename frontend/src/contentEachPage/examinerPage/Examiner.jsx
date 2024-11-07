import React from "react";
import './Examiner.css';
import icon from '../../assets/iconExaminer.png';
import DatePickerTime from '../../Components/DateTimePicker/datePicker';

function Examiner(){
    return (
        <div className="examiner__container">
            <div className="examiner__heading">
                <h2>Current Task</h2>
            </div>
            <div className="examiner__main">
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                    Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <div className="date-time">
                        <p className="section__date">Date - time</p>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </div>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <div className="date-time">
                        <p className="section__date">Date - time</p>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </div>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <div className="date-time">
                        <p className="section__date">Date - time</p>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </div>
                </div>
                <div className="examiner__main__section">
                    <img src={icon} alt="" className="examiner__task__icon"/>
                    <h3 className="section__title"> Carpet cleaning</h3>
                    <p className="section__description">
                        Removes dirt and stains from carpets using steam or dry cleaning to refresher and sanitize.
                    </p>
                    <div className="date-time">
                        <p className="section__date">Date - time</p>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Examiner;