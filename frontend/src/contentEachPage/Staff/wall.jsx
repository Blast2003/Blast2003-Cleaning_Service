import React from 'react';
import './staff.css';
import icon from '../../assets/iconExaminer.png';
import DatePickerTime from '../../Components/DateTimePicker/datePicker';

const Wall = () => {
  return (
    <div className="staff__container">
      <div className='staff__heading'>
        <p>✨Staff Undertake</p>
        <h2>Wall Washing</h2>
      </div>
      <div className="staff__main">
            <div className="staff__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='staff__img'></img>
                    </tr>
                    <tr>
                        <div className="staff__step-title">Dusting</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description"> The process of removing dust from surfaces..</div>
                    </tr>
                    <tr>
                        <button className="staff__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="staff__step">
                <table>
                    <tr>
                        <td><img src={icon} alt='' className='staff__img'></img></td>
                    </tr>
                    <tr>
                        <div className="staff__step-title">Washing</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Apply a cleaning solution to stains or heavily soiled areas.</div>
                    </tr>
                    <tr>
                        <button className="staff__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="staff__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='staff__img'></img>
                    </tr>
                    <tr>
                        <div className="staff__step-title">Rinsing</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Treat specific strains with appropriate cleaning products.</div>
                    </tr>
                    <tr>
                        <button className="staff__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="staff__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='staff__img'></img>
                    </tr>
                    <tr>
                        <div className="staff__step-title">Drying</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Use a steam cleaner or hot water to remove embedded dirt and grime.</div>
                    </tr>
                    <tr>
                        <button className="staff__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
};

export default Wall;