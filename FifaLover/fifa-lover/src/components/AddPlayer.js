import React, { useEffect, useState } from "react";
import "./AddPlayer.css";

const AddPlayer = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    age: 0,
    country: "",
    club: "",
    league: "",
    description: "",
  });

  const [names, setNames] = useState([]);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    fetch("http://localhost:8080/player/add",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form)
    }).then(()=>{
        console.log("New Playe has been added")
    })
    onClose();
  };

  useEffect(() => {
    fetch("http://localhost:8080/playerNames/getAll")
      .then((res) => res.json())
      .then((result) => {
        setNames(result);
      });
  }, []);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className="close-button-container">
            <button onClick={onClose} className="close-btn">
              X
            </button>
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <select id="name" onChange={handleChange}>
              {names.map((name) => (
                <option key={name.id} value={name.name}>
                  {name.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              className="input-field"
              placeholder="Enter age"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              className="input-field"
              placeholder="Enter country"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="club">Club:</label>
            <input
              type="text"
              id="club"
              className="input-field"
              placeholder="Enter club"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="league">League:</label>
            <input
              type="text"
              id="league"
              className="input-field"
              placeholder="Enter league"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              className="input-field"
              placeholder="Enter description"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Add Player</button>
        </form>
      </div>
    </div>
  );
};

export default AddPlayer;
