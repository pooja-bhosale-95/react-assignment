import React, { useState } from "react";

function FormPage({ client }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    representCompany: "",
    fullName: "",
    emailId: "",
    address: "",
    mobileNumber: 0,
    bank: "",
    type: "",
    territory: "",
  });

  const FormTitles = ["Sign Up", "Client List", "Field List"];

  const handleSubmit = async () => {
    const resData = await fetch(`http://localhost:5000/${client}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    });
    const res = await resData.json();
    alert(res.data);
    
  };

  return (
    <div className="container3">
      <div className="rc-box">
        <label htmlFor="represents_company" className="labels">
          Represents Company
        </label>

        <select
          className="form-select m"
          aria-label="Default select example"
          value={formData.representCompany}
          onChange={(event) =>
            setFormData({ ...formData, representCompany: event.target.value })
          }
        >
          <option value>Select Menu</option>
          <option value="1">8848 Digital LLP</option>
          <option value="2">Wayne Enterprise</option>
          <option value="3">Showbiz Pizza Place </option>
          <option value="4">Pro Garden Management</option>
          <option value="5">The Lawn Guru </option>
        </select>
      </div>

      <div className="name">
        <label htmlFor="full name" className="labels">
          Full Name
        </label>
        <input
          type="text"
          className="form-control m"
          placeholder="Full Name"
          aria-label="Full name"
          value={formData.fullName}
          onChange={(event) =>
            setFormData({ ...formData, fullName: event.target.value })
          }
        />
      </div>

      <div className="email">
        <label htmlFor="exampleFormControlInput1" className="form-label labels">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          value={formData.emailId}
          onChange={(event) =>
            setFormData({ ...formData, emailId: event.target.value })
          }
        />
      </div>

      <fieldset className="row gender">
        <legend className="col-form-label col-sm-2 pt-0 labels">Gender</legend>
        <div className="col-sm-10">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios1"
              value="option1"
              defaultChecked
            />
            <label className="form-check-label" forhtml="gridRadios1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="gridRadios2"
              value="option2"
            />
            <label className="form-check-label" forhtml="gridRadios2">
              Female
            </label>
          </div>
        </div>
      </fieldset>

      <div className="address">
        <label htmlFor="exampleFormControlTextarea1" className="labels">
          Address
        </label>
        <textarea
          className="form-control m"
          id="exampleFormControlTextarea1"
          rows="3"
          value={formData.address}
          onChange={(event) =>
            setFormData({ ...formData, address: event.target.value })
          }
        ></textarea>
      </div>

      <div className="number">
        <label className="labels" htmlFor="mobile_no labels">
          Mobile Number :
        </label>
        <br />
        <input
          type="number"
          name="number"
          id="number"
          className="m"
          value={formData.number}
          onChange={(event) =>
            setFormData({ ...formData, number: event.target.value })
          }
        />
      </div>

      <div className="bank">
        <label className="labels" htmlFor="bank labels">
          Bank
        </label>
        <select
          className="form-select m"
          aria-label="Default select example"
          value={formData.bank}
          onChange={(event) =>
            setFormData({ ...formData, bank: event.target.value })
          }
        >
          <option value>Select Bank</option>
          <option value="1">Goldman Sachs</option>
          <option value="2">Citigroup Inc</option>
          <option value="3">Wells Fargo</option>
          <option value="4">Bank of America</option>
          <option value="5">HDFC</option>
        </select>
      </div>

      <div className="type">
        <label className="labels" htmlFor="customer_type labels">
          Type
        </label>
        <select
          className="form-select m "
          aria-label="Default select example"
          value={formData.type}
          onChange={(event) =>
            setFormData({ ...formData, type: event.target.value })
          }
        >
          <option value>Select Type</option>
          <option value="1">Company</option>
          <option value="2">Individual</option>
        </select>
      </div>

      <div className="t">
        <label htmlFor="territory" className="labels">
          Territory
        </label>
        <select
          className="form-select m"
          aria-label="Default select example"
          value={formData.territory}
          onChange={(event) =>
            setFormData({ ...formData, territory: event.target.value })
          }
        >
          <option value>Select Territory</option>
          <option value="1">East</option>
          <option value="2">West</option>
          <option value="3">North</option>
          <option value="4">South</option>
        </select>
      </div>
      <div>
        <button className="finalB" onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
}

export default FormPage;
