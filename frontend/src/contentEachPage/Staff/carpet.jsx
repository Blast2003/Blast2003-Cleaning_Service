import React from 'react';
import './staff.css';
import icon from '../../assets/iconExaminer.png';
import DatePickerTime from '../../Components/datePicker';

const Carpet = () => {
  return (
    <div className="staff__container">
      <div className='staff__heading'>
        <p>✨Staff Undertake</p>
        <h2>Carpet Cleaning</h2>
      </div>
      <div className="staff__main">
            <div className="staff__step">
                <table>
                    <tr>
                        <td><img src={icon} alt='' className='staff__img'></img></td>
                    </tr>
                    <tr>
                        <div className="staff__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Remove loose dirt and debris from the staff.</div>
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
                        <div className="staff__step-title">Pre-treatment</div>
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
                        <div className="staff__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Treat specific stains with appropriate cleaning products.</div>
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
                        <div className="staff__step-title">Deep cleaning</div>
                    </tr>
                    <tr>
                        <div className="staff__step-description">Clean deeply with steam or hot water to remove embedded dirt and grime.</div>
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
                        <div className="staff__step-description">Ensure the staff is completely dry to prevent mold and mildew.</div>
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

export default Carpet;