import React from 'react';
import './wallNormal.css';
import dust from '../../../../assets/dust.png';
import washing from '../../../../assets/washing.png';
import rinsing from '../../../../assets/rinsing.png';
import dry from '../../../../assets/drying.png';

function WallNormal(){
  return (
    <div className="wall__normal__container">
      <div className='wall__normal__heading'>
        <p>✨Task Undertake</p>
        <h2>Wall Washing</h2>
      </div>
      <div className="wall__normal__main">
            <div className="wall__normal__step">
                <table>
                    <tr>
                        <img src={dust} alt='' className='wall__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-title">Dusting</div>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-description"> The process of removing dust from surfaces</div>
                    </tr>
                </table>
            </div>
            <div className="wall__normal__step">
                <table>
                    <tr>
                        <td><img src={washing} alt='' className='wall__normal__img'></img></td>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-title">Washing</div>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-description">Apply a cleaning solution to stains or heavily soiled areas.</div>
                    </tr>
                </table>
            </div>
            <div className="wall__normal__step">
                <table>
                    <tr>
                        <img src={rinsing} alt='' className='wall__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-title">Rinsing</div>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-description">Treat specific strains with appropriate cleaning products.</div>
                    </tr>
                </table>
            </div>
            <div className="wall__normal__step">
                <table>
                    <tr>
                        <img src={dry} alt='' className='wall__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-title">Drying</div>
                    </tr>
                    <tr>
                        <div className="wall__normal__step-description">Use steam cleaner, hot water remove embedded dirt grime.</div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
};

export default WallNormal;