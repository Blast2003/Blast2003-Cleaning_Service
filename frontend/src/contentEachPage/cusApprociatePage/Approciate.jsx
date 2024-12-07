import React from "react";
import './Approciate.css';
import approciateImage from '../../assets/approciateimage.png';
import cus1 from '../../assets/cus1.png'
import cus2 from '../../assets/cus2.png'
import cus3 from '../../assets/cus3.png'

function Approciate() {
    return (
        <div className="approciate-container">
            <div className="approciate-heading-content">
                <h2>Hear What Our Clients Say </h2>
                <p>Discover why clients trust us! Their testimonials highlight our quality, reliability, and the difference we make in their spaces.</p>
            </div>
            <div className="approciate-body-content">
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>I love how easy it is to book a cleaning session! The online platform is user-friendly, and I can schedule an appointment that fits perfectly into my hectic schedule.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src={cus1} alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Mobile Developer</p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>The ability to customize the cleaning service according to my preferences is amazing. Whether I need a deep clean or just a quick tidy-up, it’s always just what I need.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src={cus2} alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Office Manager </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p> I feel so comfortable with the cleaners. They are professional, experienced, and always leave my home sparkling clean. I trust them every time!</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src={cus3} alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Car Saler </p>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="approciate-footer">
                <img src={approciateImage} alt="" className="approciate-image"/>
            </div>
        </div>
    );
}
export default Approciate;