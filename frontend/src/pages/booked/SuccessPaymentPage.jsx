import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";

function SuccessPaymentPage() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {

        sessionStorage.setItem("hasSeenSuccessMessage", "true");
        navigate("/customer/booked/service", {
            state: { successMessage: "Contract email has been sent to your email." },
        }); 
    };

    return (
        <div>
            <Navbar />
            <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center", 
                height: "80vh", 
                textAlign: "center" 
            }}>
                <div style={{
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)", 
                    padding: "2rem", 
                    borderRadius: "10px", 
                    backgroundColor: "#fff",
                }}>
                    <div style={{
                        fontSize: "3rem", 
                        color: "green", 
                        marginBottom: "1rem",
                    }}>
                        💵
                    </div>
                    <h1 style={{ marginBottom: "0.5rem" }}>Payment Successful</h1>
                    <p style={{ marginBottom: "1rem", color: "gray" }}>
                        Thank you for your payment!
                    </p>
                    <button 
                        onClick={handleContinueShopping} 
                        style={{
                            padding: "0.5rem 2rem",
                            fontSize: "1rem",
                            color: "#fff",
                            backgroundColor: "green",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Go To Your Booked Service(s)
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default SuccessPaymentPage;
