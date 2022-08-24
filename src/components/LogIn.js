import React, { useState, useEffect } from "react";

function LogIn({ setPage }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // using local api's to avoid cors
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const promise = await fetch("http://localhost:5000/signin");
      const data = await promise.json();
      console.log(data);
      localStorage.setItem("access_token", data.message.access_token);
      setPage("LISTING");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label forhtml="exampleInputEmail1" className="form-label labels">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label labels">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogIn;
