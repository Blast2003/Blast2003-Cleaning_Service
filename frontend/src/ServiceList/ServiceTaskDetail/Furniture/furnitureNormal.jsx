import React from 'react';
import './furnitureNormal.css';
import dust from '../../../assets/dust.png';
import vacumm from '../../../assets/vacuum.png';
import spot from '../../../assets/spot.png';
import upholstery from '../../../assets/upholstery.png';
import leather from '../../../assets/leather.png'

function FurnitureNormal(){
  return (
    <div className="furniture__normal__container">
      <div className='furniture__normal__heading'>
        <p>✨Task Undertake</p>
        <h2>Furniture Cleaning</h2>
      </div>
      <div className="furniture__normal__main">
            <div className="furniture__normal__step">
                <table>
                    <tr>
                        <img src={dust} alt='' className='furniture__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-title">Dusting</div>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-description"> The process of removing dust from surfaces.</div>
                    </tr>
                </table>
            </div>
            <div className="furniture__normal__step">
                <table>
                    <tr>
                        <td><img src={vacumm} alt='' className='furniture__normal__img'></img></td>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-description">Vacuum upholstered furniture to remove dirt and debris.</div>
                    </tr>
                </table>
            </div>
            <div className="furniture__normal__step">
                <table>
                    <tr>
                        <img src={spot} alt='' className='furniture__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-description">Treat stains on firniture with appropriate cleaning solutions.</div>
                    </tr>
                </table>
            </div>
            <div className="furniture__normal__step">
                <table>
                    <tr>
                        <img src={upholstery} alt='' className='furniture__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-title">Upholstery cleaning</div>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-description">For deep cleaning, hire a pro or use a steam cleaner.</div>
                    </tr>
                </table>
            </div>
            <div className="furniture__normal__step">
                <table>
                    <tr>
                        <img src={leather} alt='' className='furniture__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-title">Leather conditioning</div>
                    </tr>
                    <tr>
                        <div className="furniture__normal__step-description">Condition leather to keep it soft and supple.</div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
};

export default FurnitureNormal;