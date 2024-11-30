import React from 'react';
import './carpetNormal.css';
import vacuum from "../../../../assets/vacuum.png";
import Pre_treatment from "../../../../assets/pre-treatment.png";
import Spot_cleaning from "../../../../assets/spot.png";
import Deep_cleaning from "../../../../assets/steam.png";
import Drying from "../../../../assets/drying.png";


const CarpetNormal = () => {
  return (
    <div className="carpet__normal__container">
      <div className='carpet__normal__heading'>
        <p>✨Task Undertake</p>
        <h2>Carpet Cleaning</h2>
      </div>
      <div className="carpet__normal__main">
            <div className="carpet__normal__step">
                <table>
                    <tr>
                        <td><img src={vacuum} alt='' className='carpet__normal__img'></img></td>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-title">Vacuuming</div>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-description">Remove loose dirt and debris from the staff.</div>
                    </tr>
                </table>
            </div>
            <div className="carpet__normal__step">
                <table>
                    <tr>
                        <img src={Pre_treatment} alt='' className='carpet__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-title">Pre-treatment</div>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-description">Apply a cleaning solution to stains or heavily soiled areas.</div>
                    </tr>
                </table>
            </div>
            <div className="carpet__normal__step">
                <table>
                    <tr>
                        <img src={Spot_cleaning} alt='' className='carpet__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-title">Spot cleaning</div>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-description">Treat specific stains with appropriate cleaning products.</div>
                    </tr>
                </table>
            </div>
            <div className="carpet__normal__step">
                <table>
                    <tr>
                        <img src={Deep_cleaning} alt='' className='carpet__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-title">Deep cleaning</div>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-description">Clean deeply with steam or hot water to remove embedded dirt and grime.</div>
                    </tr>
                </table>
            </div>
            <div className="carpet__normal__step">
                <table>
                    <tr>
                        <img src={Drying} alt='' className='carpet__normal__img'></img>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-title">Drying</div>
                    </tr>
                    <tr>
                        <div className="carpet__normal__step-description">Ensure the staff is completely dry to prevent mold and mildew.</div>
                    </tr>
                </table>
            </div>
        </div>
    </div>
  );
};

export default CarpetNormal;