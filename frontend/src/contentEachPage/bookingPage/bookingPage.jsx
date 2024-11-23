import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdOutlineCleaningServices } from "react-icons/md";
import "./BookingPage.css";
import { useRecoilState, useRecoilValue } from "recoil";
import customerAtom from "../../atom/customerAtom";
import contractAtom from "../../atom/contractAtom";
import ErrorLabel from '../../Components/HandleError/ErrorLabel';
import { useNavigate } from "react-router-dom";

function BookingPage() {
  const [serviceCreated, setServiceCreated] = useState(null); 
  const [selectedService, setSelectedService] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [serviceDescription, setServiceDescription] = useState("");
  const [examinerId, setExaminerId] = useState("");
  const [examinerName, setExaminerName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [staffList, setStaffList] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const customer = useRecoilValue(customerAtom);
  const [staff, setStaff] = useState(null);
  const [examiner, setExaminer] = useState(null);
  const [contract, setContract] = useRecoilState(contractAtom);
  const navigate = useNavigate();

  const services = ["Carpet Cleaning", "Furniture Cleaning", "Wall Washing", "Floor Cleaning"];
  const serviceTypes = ["basic", "pro", "deluxe"];

  // Fetch staff list
  useEffect(() => {
    const fetchStaffList = async () => {
      try {
        const res = await fetch("/api/staff/GetAllStaff");
        const data = await res.json();
        
        console.log(data)
        if (data.error) {
          console.log("Error detected:", data.error)
          setErrorMessage(data.error)
          
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
          
          return
        }
        setStaffList(data.map((staff) => ({ id: staff._id, name: staff.name })));
      } catch (error) {
        setErrorMessage(`Error fetching staff list: ${error.message}`);

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
      }
    };
    
    fetchStaffList();

    if (selectedStaff?.id) {
      fetchStaffDetails(selectedStaff.id);
    }
    if (serviceCreated?.examinerId) {
      fetchExaminerDetails(serviceCreated.examinerId);
    }


  }, [selectedStaff, serviceCreated, contract]);

  // Fetch specific staff details
  const fetchStaffDetails = async (staffId) => {
    try {
      const res = await fetch(`/api/staff/getSpecificStaff/${staffId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch staff details");
      }
      const data = await res.json();
      console.log(data);
      setStaff(data);
    } catch (error) {
      console.error("Error fetching staff details:", error.message);
    }
  };

  // Fetch specific examiner details
  const fetchExaminerDetails = async (examinerId) => {
    try {
      const res = await fetch(`/api/examiner/getSpecificExaminer/${examinerId}`);
      if (!res.ok) {
        throw new Error("Failed to fetch examiner details");
      }
      const data = await res.json();
      console.log(data);
      setExaminer(data);
    } catch (error) {
      console.error("Error fetching examiner details:", error.message);
    }
  };

  // Fetch service details and examiner name
  const fetchServiceDetails = async (serviceName) => {
    try {
      const [serviceRes, examinerRes] = await Promise.all([
        fetch(`/api/service/getServiceByServiceName/${serviceName}`),
        fetch(`/api/examiner/getExaminerThroughServiceName/${serviceName}`),
      ]);

      const serviceData = await serviceRes.json();
      const examinerData = await examinerRes.json();

    //   console.log(serviceData)
    //   console.log(examinerData)
      if (serviceData.error){
        setErrorMessage(serviceData.error)

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);

        return
      }
      if (examinerData.error) {
        setErrorMessage(examinerData.error)

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);

        return
      }

      setServiceDescription(serviceData.description);
      setExaminerId(serviceData.examinerId);
      setExaminerName(examinerData.name);
    } catch (error) {
      setErrorMessage(`Error fetching service details: ${error.message}`);

      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleServiceChange = (service) => {
    setSelectedService(service);
    fetchServiceDetails(service);
  };

  // Fetch specific staff details
  const handleStaffChange = async (e) => {
    const staffId = e.target.value;
    try {
      const res = await fetch(`/api/staff/getSpecificStaff/${staffId}`);
      const data = await res.json();
      if (data.error){
        setErrorMessage(data.error)

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);

        return
      }
      setSelectedStaff({ id: data._id, name: data.name });
      
      // console.log(selectedStaff)

    } catch (error) {
      setErrorMessage(`Error fetching staff details: ${error.message}`);

      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  // Create service
  const handleCreateService = async () => {
    try {
      const res = await fetch("/api/service/createService", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ServiceName: selectedService,
          description: serviceDescription,
          examinerId,
          ServiceType: serviceType,
        }),
      });

      const data = await res.json();

      console.log(data)
      if (data.error){
        setErrorMessage(data.error)

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        
        return
      }
      setServiceCreated(data);
    } catch (error) {
      setErrorMessage(`Error creating service: ${error.message}`);

      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  // Create contract
  const handleCreateContract = async () => {
    if (!staff || !examiner) {
      setErrorMessage("Please select a staff member.");
      return;
    }

    try {
      const taskRes = await fetch(`/api/task/getTaskByService/${serviceCreated._id}`);
      const taskList = await taskRes.json();

      if (taskList.error) throw new Error(taskList.error);

      const participants = [customer._id, selectedStaff.id, serviceCreated.examinerId];

      const res = await fetch("/api/contract/createContract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          executionDate: selectedDate?.toLocaleDateString("en-GB"),
          ServiceId: serviceCreated._id,
          Staff: staff, 
          User: customer, 
          Examiner: examiner, 
          taskList: taskList.map((task) => task._id),
          participants,
          totalPrice: serviceCreated.price,
        }),
      });

      const contractData = await res.json();

      console.log(contractData)

      if (contractData.error){
        setErrorMessage(contractData.error)
        setServiceCreated(null)

        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);

        return
      }

      localStorage.setItem("contract-cleanings", JSON.stringify(contractData)); // local storage inside frontend server
      setContract(contractData);
      alert("Contract created successfully!");
      navigate("/customer/userAgreement")
    } catch (error) {
      setErrorMessage(`Error creating contract: ${error.message}`);

      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  return (
    <div>
        {errorMessage && <ErrorLabel errorMessage={errorMessage} />}

        <div className="booking-page">
            <div className="left-section">
                <label>Service</label>
                <select
                    value={selectedService}
                    onChange={(e) => handleServiceChange(e.target.value)}
                    className="custom-select"
                >
                    <option value="">Select a Service</option>
                    {services.map((service) => (
                        <option key={service} value={service}>
                        {service}
                        </option>
                    ))}
                </select>

                {selectedService && (
                <>
                    <label>Service Type</label>
                    <div className="radio-group">
                    {serviceTypes.map((type) => (
                        <label key={type}>
                        <input
                            type="radio"
                            value={type}
                            checked={serviceType === type}
                            onChange={(e) => setServiceType(e.target.value)}
                        />
                        {type}
                        </label>
                    ))}
                    </div>
                </>
                )}
                <hr></hr>

                <label>Staff</label>
                <select
                value={selectedStaff?.id || ""}
                onChange={handleStaffChange}
                className="custom-select"
                >
                <option value="">Select Staff</option>
                {staffList.map((staff) => (
                    <option key={staff.id} value={staff.id}>
                    {staff.name}
                    </option>
                ))}
                </select>

                <hr></hr>

                <label>Execution Date</label>
                <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Click to select a Date"
                />

                <button className="contract-button" onClick={handleCreateService} disabled={serviceCreated} >Create Service</button>
            </div>

            <div className="right-section">
                {serviceCreated && (
                <>
                    <div className="service-summary">
                        <h1>Service Summary</h1>
                        <MdOutlineCleaningServices className="icon" />
                    </div>
                    
                    <b className="service-name">{selectedService}</b>
                    
                    <div className="service-supervisor">
                        <p>Supervisor</p>
                        <p>{examinerName}</p>
                    </div>

                    <div className="description-section">
                        <p>Description</p>
                        <p>{serviceDescription}</p>
                    </div>
                    
                    <div className="service-type-section">
                        <p>Service Type</p>
                        <p>{serviceType}</p>
                    </div>

                    <div className="price-section">
                        <div className="left">
                            <p>Total</p>
                            <p>Execution Day</p>
                        </div>

                        <div className="right">
                            <p>${serviceCreated.price}</p>
                            <p>{selectedDate?.toLocaleDateString("en-GB")}</p>
                        </div>
                    </div>

                    <button className="contract-button" onClick={handleCreateContract}>Make Contract</button>
                </>
                )}
            </div>
        </div>
    </div>
  );
}

export default BookingPage;
