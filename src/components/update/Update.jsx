import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../icons/back.png"


const Update = () => {
  let history = useNavigate();

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");
  const [ID, setID] = useState(null);

  const updateData = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://6390acc765ff4183111b53e9.mockapi.io/CRUD/${ID}`, {
        fullName,
        number
      })
      .then(() => {
        history("/");
      });
  };

  const getFromLocalStorage = async () => {
    setFullName(localStorage.getItem("Full Name"));
    setNumber(localStorage.getItem("Number"));
    setID(localStorage.getItem("ID"));
  }

  useEffect(() => {
    getFromLocalStorage()
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Update Contact</h1>
        <form className="form">
          <input
            onChange={(e) => setFullName(e.target.value)}
            name="fullName"
            type="text"
            placeholder="Update name..."
            value={fullName}
            className="box"
          />
          <input
            onChange={(e) => setNumber(e.target.value)}
            name="number"
            type="tel"
            placeholder="Update number..."
            value={number}
            className="box"
          />
          <button className="main-button" type="submit" onClick={updateData}>
            Update
          </button>
          <Link to="/">
            <button className="main-button-back" type="button">
              <img src={back} />
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
