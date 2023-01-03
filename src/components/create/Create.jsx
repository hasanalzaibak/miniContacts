import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import back from "../icons/back.png"

const Create = () => {
  let history = useNavigate();

  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");

  const sendDataToApi = async (e) => {
    e.preventDefault();

    await axios
      .post(`https://6390acc765ff4183111b53e9.mockapi.io/CRUD`, {
        fullName,
        number
      })
      .then(() => {
        history("/");
      });
  };

  return (
    <div className="wrapper">
      <div className="container create">
        <h1>New Contact</h1>
        <form className="form">
          <input
            onChange={(e) => setFullName(e.target.value)}
            name="fullName"
            type="text"
            placeholder="Name"
            className="box"
          />
          <input
            onChange={(e) => setNumber(e.target.value)}
            name="number"
            type="tel"
            placeholder="Number"
            className="box"
          />
          <button className="main-button" type="submit" onClick={sendDataToApi}>
            Create
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

export default Create;
