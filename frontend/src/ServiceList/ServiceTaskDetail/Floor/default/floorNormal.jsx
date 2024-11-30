import React from 'react';
import './floorNormal.css';
import sweeping from '../../../../assets/sweeping.png';
import mapping from '../../../../assets/mapping.png';
import rug from '../../../../assets/rug.png';
import scrubbing from '../../../../assets/scrubbing.png';
import polishing from '../../../../assets/polishing.png';

const FloorNormal = () => {
  return (
    <div className="floor__normal__container">
      <div className='floor__normal__heading'>
        <p>✨Task Undertake</p>
        <h2>Floor Cleaning</h2>
      </div>
      <div className="floor__normal__main">
            <div className="floor__normal__step">
                <table>
                    <tr>
                        <img src={sweeping} alt='' className='floor__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-title">Sweeping or Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-description">Using a broom to clear loose debris or a vacuum to remove hidden dust</div>
                    </tr>
                </table>
            </div>
            <div className="floor__normal__step">
                <table>
                    <tr>
                        <td><img src={mapping} alt='' className='floor__normal__img'></img></td>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-title">Mapping</div>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-description">Use a mop and cleaning solution to clean hard floors.</div>
                    </tr>
                </table>
            </div>
            <div className="floor__normal__step">
                <table>
                    <tr>
                        <img src={scrubbing} alt='' className='floor__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-title">Scrubbing</div>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-description">For tougher or buildup, scrub the floor with a brush or scrubber.</div>
                    </tr>
                </table>
            </div>
            <div className="floor__normal__step">
                <table>
                    <tr>
                        <img src={polishing} alt='' className='floor__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-title">Polishing or waxing</div>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-description">Polish, wax hardwood floors to maintain shine and protect them from damage.</div>
                    </tr>
                </table>
            </div>
            <div className="floor__normal__step">
                <table>
                    <tr>
                        <img src={rug} alt='' className='floor__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-title">Rug cleaning</div>
                    </tr>
                    <tr>
                        <div className="floor__normal__step-description">Rugs on the floor, vacuum them regularly and spot clean any stains.</div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
};

export default FloorNormal;