import React from "react";
import './Approciate.css';
import approciateImage from '../../assets/approciateimage.png';

function Approciate() {
    return (
        <div className="approciate-container">
            <div className="approciate-heading-content">
                <p className="star-1">⭐ Testimonial</p>
                <h2>Hear What Our Clients Say </h2>
                <p>Faucibus commodo a aenean et sit quisque ipsum. <br/>
                Consequat eu id ut dolor felis quis. Sagittis a sepien pulvinar etiam</p>
            </div>
            <div className="approciate-body-content">
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Purus ipsum facilisis cursus nunc<br/>
                    egaste vel praesenbt auctor dolor. <br/>
                    Et proin dolor rhoncus sit.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src="http://surl.li/lpwzjh" alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Office Manager </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Purus ipsum facilisis cursus nunc<br/>
                    egaste vel praesenbt auctor dolor. <br/>
                    Et proin dolor rhoncus sit.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src="http://surl.li/yogszy" alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Office Manager </p>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="approciate-body-content-section">
                    <p>⭐⭐⭐⭐⭐</p>
                    <p>Purus ipsum facilisis cursus nunc<br/>
                    egaste vel praesenbt auctor dolor. <br/>
                    Et proin dolor rhoncus sit.</p>
                    <hr/>
                    <table>
                        <tr>
                            <td>
                            <img src="http://surl.li/xkattx" alt="" className="author-image"/>
                            </td>
                            <td>
                            <p className="author-name">James Smith <br/> Office Manager </p>
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