import React, { useState } from "react";
import "./UpdateProfileCard.css";
import ErrorLabel from "../../Components/HandleError/ErrorLabel.jsx";
import SuccessLabel from "../../Components/HandleSuccess/SuccessLabel.jsx";
import { useRecoilState } from "recoil";
import examinerAtom from "../../atom/examinerAtom.js";

function UpdateProfileCard_E() {
    const [examiner, setExaminer] = useRecoilState(examinerAtom);

    // Local state for form data
    const [formData, setFormData] = useState({
        name: examiner.name || "",
        email: examiner.email || "",
        password: "",
        phone: examiner.phone || "",
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
            console.log(examiner._id)
            const res = await fetch(`/api/examiner/update/${examiner._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", // Include cookies for authentication
                body: JSON.stringify(formData),
            });

            const updatedExaminer = await res.json();

            if (res.status === 200) {
                // Update Recoil state and show success message
                setExaminer({
                    ...updatedExaminer,
                    password: null, // Exclude password from state
                });
                setSuccessMessage("Update Profile Successfully");
                clearMessages();
            } else {
                setErrorMessage(updatedExaminer.error || "Failed to update profile.");
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

export default UpdateProfileCard_E;