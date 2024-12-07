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
  const [examiner, setExaminer] = useState({ name: "", phone: "", email: "" }); // Store examiner info
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
      setExaminer({ name: data.name, phone: data.phone, email: data.email });
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

    // Select the checkboxes
    const cardCheckbox = document.querySelector(
      '.agreement-unordered-list input[type="checkbox"][value="Card"]'
    );
    const paypalCheckbox = document.querySelector(
      '.agreement-unordered-list input[type="checkbox"][value="Paypal"]'
    );

    if (cardCheckbox && paypalCheckbox) {
      // Modify the checkbox HTML based on checked state
      const cardLabel = cardCheckbox.closest('.ul-list-content');
      const paypalLabel = paypalCheckbox.closest('.ul-list-content');
    
      if (cardCheckbox.checked) {
        cardLabel.innerHTML = '<input type="checkbox" checked disabled /> Card';
      } else {
        cardLabel.innerHTML = '<input type="checkbox" disabled /> Card';
      }
    
      if (paypalCheckbox.checked) {
        paypalLabel.innerHTML = '<input type="checkbox" checked disabled /> PayPal';
      } else {
        paypalLabel.innerHTML = '<input type="checkbox" disabled /> PayPal';
      }
    }


    // remove button
    const buttonsParent = document.querySelector(".page .signature p");

    // DOM = programming interface for web documents
    // Remove the <p> tag with buttons from the DOM
    if (buttonsParent) {
      buttonsParent.remove();
    }

    // capture the entities UserAgreeMent in form of HTML
    let emailContent = document.querySelector(".page").outerHTML; 

    // add css to EmailContent
    const cssStyles = `
      .agreement-content {
        font-family: Arial, sans-serif;
        margin-top: 10%;
        margin-bottom: 10%;
        margin-left: 15%;
        margin-right: 15%;
        border-style: solid;
        border-width: 2px;
        padding: 40px;
      }

      .agreement-info {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1em;
        color: black;
      }

      .agreement-footer{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }

      h1 {
        text-align: center;
        font-size: 2em;
      }

      .section-header {
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.4em;
        color: black;
      }

      .agreement-ordered-list{
        display: flex;
        flex-direction: column;
        list-style-type:decimal;
        margin-left: 0%;
        text-align: left;
      }

      .agreement-unordered-list{
        display: flex;
        flex-direction: column;
        list-style-type:disc;
        margin:0;
        text-align: left;
      }

      .ul-list-content {
        font-family: 'Times New Roman', Times, serif;
        font-size: 0.8em;
        color: black;
        display: list-item;
      }

      .list-text {
        color: black;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1em;
      }

      .button {
        margin-left: 50px;
        padding: 10px 20px;
        background-color: #007bff;
        border-style: solid;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
      }

      .button:hover {
        background-color: #0056b3;
      }

      .test-class {
        margin-left:0px;
      }

      .test-className{
        margin-top: 20px;
      }

      .text{
        margin-top: 10px;
        text-align: center;
        font-size: 30px;
      }
    `;

    // Inject the CSS styles into the <head> of the email content
    emailContent = `
      <html>
        <head>
          <style>${cssStyles}</style>
        </head>
        <body>
          ${emailContent}
        </body>
      </html>
    `;


    if (paymentMethod === "Card") {
      try {
        // Step 1: Call the /api/purchase/card endpoint to create a payment session
        const paymentResponse = await fetch("/api/purchase/card", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contract: {
              ServiceName: contract.ServiceName,
              totalPrice: contract.totalPrice,
            },
          }),
        });
    
        const paymentData = await paymentResponse.json();
    
        if (!paymentResponse.ok) {
          console.log("Failed to create payment session");
          throw new Error(paymentData.message || "Payment session creation failed.");
        }
    
        console.log("Payment session created:", paymentData);
        
        if (paymentData.url) {
        // Redirect user to the Stripe checkout page
        window.location.href = paymentData.url;

        try {
          const emailResponse = await fetch("/api/mail/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              User: {
                email: customer.email,
              },
              Examiner: {
                email: examiner.email,
              },
              emailContent,
            }),
          });
      
          const emailData = await emailResponse.json();
      
          if (!emailResponse.ok) {
            console.log("Failed to send email");
            throw new Error(emailData.error || "Failed to send email.");
          }
      
          console.log("Email sent successfully!", emailData);
      
        } catch (error) {
          alert("Failed to send email: " + error.message);
        }
      } 
      else{
        alert("Error starting Stripe payment: " + paymentData.message);
      }

      } catch (error) {
        alert("Payment error: " + error.message);
        return;
      }

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

          try {
            const response = await fetch("/api/mail/create", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                User: {
                  email: customer.email,
                },
                Examiner: {
                  email: examiner.email,
                },
                emailContent,
              }),
            });
        
            const data = await response.json();
        
            if (!response.ok) {
              console.log("Failed to send email")
              throw new Error(data.error || "Failed to send email.");
            }
            console.log("Email sent successfully!", data);
            
          } catch (error) {
            alert("Failed to send email: " + error.message);
          }
        
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
                Responsible Staff: {contract.Staff?.name}
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
                  type="checkbox" name="paymentMethod" value="Card"
                  checked={paymentMethod === "Card"}
                  onChange={() => setPaymentMethod("Card")}
                />{" "}
                Card
              </li>
              <li className="ul-list-content">
                <input
                  type="checkbox" name="paymentMethod" value="Paypal"
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
