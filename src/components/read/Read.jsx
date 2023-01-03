import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import editIcon from "../icons/edit.png"
import deleteIcon from "../icons/delete.png"

const Read = () => {

    const [apiData, setApiData] = useState([]);

    const getNames = useCallback(async () => {
        const getData = await axios
            .get(`https://6390acc765ff4183111b53e9.mockapi.io/CRUD`);
        setApiData(getData.data);
    }, []);

    useEffect(() => {
        getNames()
    }, [getNames]);

    const setData = (data) => {
        localStorage.setItem("ID", data.id);
        localStorage.setItem("Full Name", data.fullName);
        localStorage.setItem("Number", data.number);
    };

    const onDelete = async (id) => {
        await axios
            .delete(`https://6390acc765ff4183111b53e9.mockapi.io/CRUD/${id}`);
        getNames();
    };


    return (
        <div className="wrapper">
            <div className="container">
                <h1>miniContacts</h1>
                <div className="contacts">
                    {apiData.map((data) => {
                        return (
                            <div key={data.id} className="contact">
                                <div className="contact-name">
                                    <h3>{data.fullName}</h3>
                                    <p>{data.number}</p>
                                </div>
                                <div className="contact-buttons">
                                    <Link to="/update">
                                        <button className="contact-buttons-update" onClick={() => setData(data)}><img src={editIcon} /></button>
                                    </Link>
                                    <Link to="/">
                                        <button className="contact-buttons-delete" onClick={() => onDelete(data.id)}><img src={deleteIcon} /></button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <Link to="/create">
                    <button className="main-button">Add</button>
                </Link>
            </div>
        </div>
    );
};

export default Read;

