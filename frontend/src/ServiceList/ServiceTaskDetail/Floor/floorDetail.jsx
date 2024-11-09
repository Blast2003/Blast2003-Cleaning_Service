import React from 'react';
import './FloorDetail.css';
import icon from '../../../assets/iconExaminer.png';
import DatePickerTime from '../../../Components/DateTimePicker/datePicker';

function FloorDetail(){
  return (
    <div className="floor__container">
      <div className='floor__heading'>
        <p>✨Task Undertake</p>
        <h2>Floor Cleaning</h2>
      </div>
      <div className="floor__main">
            <div className="floor__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='floor__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__step-title">Sweeping or Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="floor__step-description">Using a broom to clear loose debris or a vacuum to remove hidden dust</div>
                    </tr>
                    <tr>
                        <button className="floor__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="floor__step">
                <table>
                    <tr>
                        <td><img src={icon} alt='' className='floor__img'></img></td>
                    </tr>
                    <tr>
                        <div className="floor__step-title">Mapping</div>
                    </tr>
                    <tr>
                        <div className="floor__step-description">Use a mop and cleaning solution to clean hard floors.</div>
                    </tr>
                    <tr>
                        <button className="floor__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="floor__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='floor__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__step-title">Scrubbing</div>
                    </tr>
                    <tr>
                        <div className="floor__step-description">For tougher or buildup, scrub the floor with a brush or scrubber.</div>
                    </tr>
                    <tr>
                        <button className="floor__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="floor__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='floor__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__step-title">Polishing or waxing</div>
                    </tr>
                    <tr>
                        <div className="floor__step-description">Polish, wax hardwood floors to maintain shine and protect them from damage.</div>
                    </tr>
                    <tr>
                        <button className="floor__complete">Complete</button>
                    </tr>
                    <tr>
                        <div>
                            <button><DatePickerTime/></button>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="floor__step">
                <table>
                    <tr>
                        <img src={icon} alt='' className='floor__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__step-title">Rug cleaning</div>
                    </tr>
                    <tr>
                        <div className="floor__step-description">Rugs on the floor, vacuum them regularly and spot clean any stains.</div>
                    </tr>
                    <tr>
                        <button className="floor__complete">Complete</button>
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

export default FloorDetail;