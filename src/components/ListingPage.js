import React, { useState, useEffect } from "react";
import Records from "./ClientList";

function ListingPage({ setPage, setClient }) {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const getListing = async () => {
      const prom = await fetch("http://localhost:5000/clientlist");
      const resData = await prom.json();
      setListing(resData.data);
    };
    getListing();
  }, []);

  const handleSelectClient = (client) => {
    setPage("FORM");
    setClient(client);
  };

  return (
    <div className="listPage">
      {listing.map((list, index ) => {
        return (
          <button className="buttons" key={list.name} onClick={() => handleSelectClient(list.name)}>
            {list.name}
          </button>
        );
      })}
    </div>
  );
}

export default ListingPage;
