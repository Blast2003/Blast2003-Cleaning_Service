import React, { useEffect, useState } from "react";
import "./UserAgreement.css";
import { useRecoilState, useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";
import contractAtom from "../../atom/contractAtom";
import { useNavigate } from "react-router-dom";

function UserAgreement() {
  const customer = useRecoilValue(customerAtom); 
  const [contract, setContract] = useRecoilState(contractAtom); 

  const [tasks, setTasks] = useState([]); // Store task names
  const [examiner, setExaminer] = useState({ name: "", phone: "" }); // Store examiner info
  const [paymentMethod, setPaymentMethod] = useState(""); // For payment selection
  const navigate = useNavigate();

  // Fetch task names based on task IDs
  useEffect(() => {
    const fetchTasks = async () => {
      const taskNames = await Promise.all(
        contract.taskList.map(async (taskId) => {
          const response = await fetch(`/api/task/getTaskNameById/${taskId}`);
          const data = await response.json();
          return data;
        })
      );
      setTasks(taskNames);
    };
    fetchTasks();
  }, [contract.taskList]);


  // Fetch examiner info based on service name
  useEffect(() => {
    const fetchExaminer = async () => {
      const response = await fetch(
        `/api/examiner/getExaminerThroughServiceName/${contract.ServiceName}`
      );
      const data = await response.json();
      // console.log(data)
      setExaminer({ name: data.name, phone: data.phone });
    };
    fetchExaminer();
  }, [contract.ServiceName]);


  // click "Go Back"
  const handleGoBack = async () => {
    if (contract) {
      try {
        console.log(contract._id)
        // Call the delete contract API
        const response = await fetch(`/api/contract/deleteContract/${contract._id}`, {
          method: "DELETE",
        });

        const data = await response.json();
        if (response.ok) {
          console.log(data.message); 

          localStorage.removeItem("contract-cleanings")
          setContract(null); 
          navigate("/customer/booking"); 
        } else {
          console.error(data.error || "Failed to delete contract");
          alert("Error: " + (data.error || "Unable to delete the contract"));
        }
      } catch (error) {
        console.error("Error deleting contract:", error);
        alert(`Error: ${error.message}`);
      }
    } else {
      console.log("No contract to delete");
      navigate("/customer/booking");
    }
  };

  // Handle "Agree" button
  const handleAgree = async () => {
    if (!paymentMethod) {
      alert("Please select a payment method before proceeding.");
      return;
    }

    if (paymentMethod === "Cash") {
      navigate("/customer/booked/service");
    } else if (paymentMethod === "Paypal") {
      try {
        const response = await fetch("/api/purchase/pay", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ totalPrice: contract.totalPrice }),
        });
        const data = await response.json();

        if (data.url) {
          window.location.href = data.url; // Redirect to PayPal approval page
        } else {
          alert("Error starting PayPal payment: " + data.message);
        }
      } catch (error) {
        alert("Payment initiation failed: " + error.message);
      }
    }
  };

  return (
    <div className="page">
      <section className="agreement-content">
        <h1>Using Services Agreement</h1>
        <p className="agreement-info">
        Read each item carefully and select agree if you have no questions. Otherwise, contact us immediately to change inappropriate items in a timely manner.
        </p>

        <ol>
          {/* 1. User Details */}
          <li className="test-className">
            <p className="section-header">User Details</p>
            <ul className="agreement-unordered-list">
              <li className="ul-list-content">
                User Name : {customer.name}
              </li>
              <li className="ul-list-content">
                Address : {customer.address}
              </li>
              <li className="ul-list-content">
                Email : {customer.email}
              </li>
            </ul>
          </li>

          {/* 2. Service Selection */}
          <li className="test-className">
            <p className="section-header">Service Selection</p>
            <ul className="agreement-unordered-list">
              <li className="test-className">
                <p className="list-text">Selected Services:</p>
                <ol className="agreement-ordered-list">
                  <li className="ul-list-content">{contract.ServiceName}</li>
                </ol>
                <br />
                <p className="list-text">Included Tasks:</p>
                <ol className="agreement-ordered-list">
                  {tasks.map((task, index) => (
                    <li key={index} className="ul-list-content">
                      {task}
                    </li>
                  ))}
                </ol>
              </li>
            </ul>
          </li>

          {/* 3. Examiner Information */}
          <li className="test-className">
            <p className="section-header">Examiner Information</p>
            <ul className="agreement-unordered-list">
              <li className="ul-list-content">
                Examiner Name: {examiner.name}
              </li>
              <li className="ul-list-content">
                Phone: <span>{examiner.phone}</span>
              </li>
              <li className="ul-list-content">
                Examiner Visit Date: <span>{contract.executionDate}</span>
              </li>
            </ul>
          </li>

          {/* 4. Scheduling Options */}
          <li className="test-className">
            <p className="section-header">Scheduling Options</p>
            <ul className="agreement-unordered-list">
              <li className="ul-list-content">
                Select Execution Date: {contract.executionDate}
              </li>
              <li className="ul-list-content">Execution Time: {contract.executionTime}</li>
            </ul>
          </li>

          {/* 5. Contract Details */}
          <li className="test-className">
            <p className="section-header">Contract Details</p>
            <ul className="agreement-unordered-list">
              <li className="ul-list-content">
                Responsible Staff: {contract.StaffName}
              </li>
              <li className="ul-list-content">
                Total Estimated Price: ${contract.totalPrice}
              </li>
            </ul>
          </li>

          {/* 6. Payment Information */}
          <li className="test-className">
            <p className="section-header">Payment Information</p>
            <p className="list-text">Deposit Payment Method:</p>
            <ul className="agreement-unordered-list">
              <li className="ul-list-content">
                <input
                  type="checkbox"
                  checked={paymentMethod === "Cash"}
                  onChange={() => setPaymentMethod("Cash")}
                />{" "}
                Cash
              </li>
              <li className="ul-list-content">
                <input
                  type="checkbox"
                  checked={paymentMethod === "Paypal"}
                  onChange={() => setPaymentMethod("Paypal")}
                />{" "}
                PayPal
              </li>
            </ul>
            <p className="list-text">
              Final Payment Amount: ${contract.totalPrice}
            </p>
          </li>

          <li className="test-className">
            <p className="section-header">Terms</p>
            <p className="list-text">
              This Agreement will begin on the date of acceptance and will
              remain in effect until all services have been completed.
            </p>
          </li>
        </ol>
        <br />
        <section className="agreement-footer">
          <div className="payment">
            <h3>Total Payment</h3>
            <p className="text">{contract.totalPrice} $</p>
          </div>

          <div className="signature">
            <h3>[✔] I agree to the term & contract</h3>
            <br />
            <p>
              <button className="button" onClick={handleAgree}>
                Agree
              </button>
              <button className="button" onClick={handleGoBack}>
                Go Back
              </button>
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default UserAgreement;
