import React from 'react';
import './staff.css';
import icon from '../../assets/iconExaminer.png';
import DatePickerTime from '../../Components/datePicker';

const Furniture = () => {
  return (
    <div className="staff__container">
      <div className='staff__heading'>
        <p>✨Staff Undertake</p>
        <h2>Furniture Cleaning</h2>
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
                        <div className="staff__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Vacuum upholstered furniture to remove dirt and debris.</div>
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
                        <div className="staff__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Treat stains on firniture with appropriate cleaning solutions.</div>
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
                        <div className="staff__step-title">Upholstery cleaning</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">For deep cleaning, hire a pro or use a steam cleaner.</div>
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
                        <div className="staff__step-title">Leather conditioning</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Condition leather to keep it soft and supple.</div>
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

export default Furniture;