import React from 'react';
import './wallDetail.css';
import dust from '../../../assets/dust.png';
import washing from '../../../assets/washing.png';
import rinsing from '../../../assets/rinsing.png';
import dry from '../../../assets/drying.png';
import DatePickerTime from '../../../Components/DateTimePicker/datePicker';

function WallDetail(){
  return (
    <div className="wall__container">
      <div className='wall__heading'>
        <p>✨Task Undertake</p>
        <h2>Wall Washing</h2>
      </div>
      <div className="wall__main">
            <div className="wall__step">
                <table>
                    <tr>
                        <img src={dust} alt='' className='wall__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__step-title">Dusting</div>
                    </tr>
                    <tr>
                        <div className="wall__step-description"> The process of removing dust from surfaces</div>
                    </tr>
                    <tr>
                        <button className="wall__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="wall__step">
                <table>
                    <tr>
                        <td><img src={washing} alt='' className='wall__img'></img></td>
                    </tr>
                    <tr>
                        <div className="wall__step-title">Washing</div>
                    </tr>
                    <tr>
                        <div className="wall__step-description">Apply a cleaning solution to stains or heavily soiled areas.</div>
                    </tr>
                    <tr>
                        <button className="wall__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="wall__step">
                <table>
                    <tr>
                        <img src={rinsing} alt='' className='wall__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__step-title">Rinsing</div>
                    </tr>
                    <tr>
                        <div className="wall__step-description">Treat specific strains with appropriate cleaning products.</div>
                    </tr>
                    <tr>
                        <button className="wall__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="wall__step">
                <table>
                    <tr>
                        <img src={dry} alt='' className='wall__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__step-title">Drying</div>
                    </tr>
                    <tr>
                        <div className="wall__step-description">Use steam cleaner, hot water remove embedded dirt grime.</div>
                    </tr>
                    <tr>
                        <button className="wall__complete">Complete</button>
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

export default WallDetail;