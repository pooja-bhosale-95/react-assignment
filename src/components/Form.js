import React, { useState, useEffect } from "react";
import LogIn from "./LogIn";
import ListingPage from "./ListingPage";
import FormPage from "./FormPage";

function Form() {
  const [page, setPage] = useState("LOGIN");
  const [client, setClient] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
      setPage("LISTING");
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      setIsLoggedIn(true);
    }
  }, [page]);

  const handleLogOut = () => {
    localStorage.removeItem("access_token");
    setPage("LOGIN");
    setIsLoggedIn(false);
  };

  return (
    <div className="form">
      <div className="progressBar"></div>
      <div className="form-container">
        <div className="nav">
          <h3>React Assignment</h3>
          {isLoggedIn ? <button className="logOut" onClick={handleLogOut}>Log out</button> : null}
        </div>

        {/* <div className="header">
          <h1 className="text-center pt-7 mb-2 mt-5">{FormTitles[page]}</h1>
        </div> */}
        <div className="body">
          {page === "LOGIN" && !isLoggedIn && <LogIn setPage={setPage} />}

          {isLoggedIn && page === "LISTING" && (
            <ListingPage setPage={setPage} setClient={setClient} />
          )}
          {page === "FORM" && <FormPage client={client} />}
        </div>
      </div>
    </div>
  );
}

export default Form;
