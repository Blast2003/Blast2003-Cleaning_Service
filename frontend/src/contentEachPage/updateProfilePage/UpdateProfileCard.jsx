import React, { useState } from "react";
import "./UpdateProfileCard.css";
import ErrorLabel from "../../Components/HandleError/ErrorLabel.jsx";
import SuccessLabel from "../../Components/HandleSuccess/SuccessLabel.jsx";
import customerAtom from "../../atom/customerAtom";
import { useRecoilState } from "recoil";

function UpdateProfileCard() {
    const [customer, setCustomer] = useRecoilState(customerAtom);

    // Local state for form data
    const [formData, setFormData] = useState({
        name: customer.name || "",
        email: customer.email || "",
        password: "",
        phone: customer.phone || "",
        address: customer.address || "",
    });

    // State for error and success messages
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Function to clear messages after 2 seconds
    const clearMessages = () => {
        setTimeout(() => {
            setErrorMessage("");
            setSuccessMessage("");
        }, 2000);
    };

    // Handle update button click
    const handleUpdate = async () => {
        try {
            const res = await fetch(`/api/user/update/${customer._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include cookies for authentication
                body: JSON.stringify(formData),
            });

            const updatedCustomer = await res.json();

            if (res.status === 200) {
                // Update Recoil state and show success message
                setCustomer({
                    ...updatedCustomer,
                    password: null, // Exclude password from state
                });
                setSuccessMessage("Update Profile Successfully");
                clearMessages();
            } else {
                setErrorMessage(updatedCustomer.error || "Failed to update profile.");
                clearMessages();
            }
        } catch (error) {
            console.error("Error updating profile:", error.message);

            setErrorMessage("An error occurred. Please try again.");
            clearMessages();
        }
    };

    return (
        <div className="signup-container">
            <h2>Update Your Profile</h2>
            <form
                className="signup-form"
                onSubmit={(e) => e.preventDefault()} // Prevent default form submission (refresh the page after submission)
            >
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label>Email address</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <label>New Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    value={formData.password}
                    onChange={handleInputChange}
                />

                <label>Phone</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                />

                <label>Address</label>
                <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    className="signup-button"
                    onClick={handleUpdate}
                >
                    Update
                </button>
            </form>

            {/* Conditionally render ErrorLabel and SuccessLabel */}
            {errorMessage && <ErrorLabel errorMessage={errorMessage} />}
            {successMessage && <SuccessLabel successMessage={successMessage} />}
        </div>
    );
}

export default UpdateProfileCard;
