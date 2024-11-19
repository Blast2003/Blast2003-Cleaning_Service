import React from 'react';
import './carpetDetail.css';
import vacumm from '../../../assets/vacuum.png';
import pretreatment from '../../../assets/pre-treatment.png';
import spot from '../../../assets/spot.png';
import steam from '../../../assets/steam.png';
import drying from '../../../assets/drying.png';
import DatePickerTime from '../../../Components/DateTimePicker/datePicker';

const CarpetDetail = () => {
  return (
    <div className="carpet__container">
      <div className='carpet__heading'>
        <p>✨Task Undertake</p>
        <h2>Carpet Cleaning</h2>
      </div>
      <div className="carpet__main">
            <div className="carpet__step">
                <table>
                    <tr>
                        <td><img src={vacumm} alt='' className='carpet__img'></img></td>
                    </tr>
                    <tr>
                        <div className="carpet__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="carpet__step-description">Remove loose dirt and debris from the staff.</div>
                    </tr>
                    <tr>
                        <button className="carpet__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="carpet__step">
                <table>
                    <tr>
                        <img src={pretreatment} alt='' className='carpet__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__step-title">Pre-treatment</div>
                    </tr>
                    <tr>
                        <div className="carpet__step-description">Apply a cleaning solution to stains or heavily soiled areas.</div>
                    </tr>
                    <tr>
                        <button className="carpet__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="carpet__step">
                <table>
                    <tr>
                        <img src={spot} alt='' className='carpet__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="carpet__step-description">Treat specific stains with appropriate cleaning products.</div>
                    </tr>
                    <tr>
                        <button className="carpet__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="carpet__step">
                <table>
                    <tr>
                        <img src={steam} alt='' className='carpet__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__step-title">Deep cleaning</div>
                    </tr>
                    <tr>
                        <div className="carpet__step-description">Clean deeply with steam or hot water to remove embedded dirt and grime.</div>
                    </tr>
                    <tr>
                        <button className="carpet__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="carpet__step">
                <table>
                    <tr>
                        <img src={drying} alt='' className='carpet__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__step-title">Drying</div>
                    </tr>
                    <tr>
                        <div className="carpet__step-description">Ensure the carpet is completely dry to prevent mold and mildew.</div>
                    </tr>
                    <tr>
                        <button className="carpet__complete">Complete</button>
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

export default CarpetDetail;