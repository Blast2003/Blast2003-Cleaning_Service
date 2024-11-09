import React from 'react';
import './furnitureDetail.css';
import icon from '../../../assets/iconExaminer.png';
import DatePickerTime from '../../../Components/DateTimePicker/datePicker';

function FurnitureDetail() {
  return (
    <div className="furniture__container">
      <div className='furniture__heading'>
        <p>✨Task Undertake</p>
        <h2>Furniture Cleaning</h2>
      </div>
      <div className="furniture__main">
            <div className="furniture__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='furniture__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__step-title">Dusting</div>
                    </tr>
                    <tr>
                        <div className="furniture__step-description"> The process of removing dust from surfaces..</div>
                    </tr>
                    <tr>
                        <button className="furniture__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="furniture__step">
                <table>
                    <tr>
                        <td><img src={icon} alt='' className='furniture__img'></img></td>
                    </tr>
                    <tr>
                        <div className="furniture__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="furniture__step-description">Vacuum upholstered furniture to remove dirt and debris.</div>
                    </tr>
                    <tr>
                        <button className="furniture__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="furniture__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='furniture__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="furniture__step-description">Treat stains on firniture with appropriate cleaning solutions.</div>
                    </tr>
                    <tr>
                        <button className="furniture__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="furniture__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='furniture__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__step-title">Upholstery cleaning</div>
                    </tr>
                    <tr>
                        <div className="furniture__step-description">For deep cleaning, hire a pro or use a steam cleaner.</div>
                    </tr>
                    <tr>
                        <button className="furniture__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="furniture__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='furniture__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__step-title">Leather conditioning</div>
                    </tr>
                    <tr>
                        <div className="furniture__step-description">Condition leather to keep it soft and supple.</div>
                    </tr>
                    <tr>
                        <button className="furniture__complete">Complete</button>
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

export default FurnitureDetail;