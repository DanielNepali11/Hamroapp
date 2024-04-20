import React, { useState } from "react";
import IMAGES from "../Images/image.js";
import "./IndividualPlayer.css";

const IndividualPlayer = ({ onClose, playerProp }) => {
  const [isEditMode, setIsEditMode] = useState(true);
  const [editablePlayer, setEditablePlayer] = useState(playerProp);

  const handleChange = (e) => {
    setEditablePlayer({
      ...editablePlayer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const updatedPlayer = JSON.stringify({
      id: editablePlayer.id,
      name: editablePlayer.name,
      age: editablePlayer.age,
      country: editablePlayer.country,
      league: editablePlayer.league,
      club: editablePlayer.club,
      description: editablePlayer.description,
    });
    fetch("http://localhost:8080/player/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: updatedPlayer,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Updated Successfully.");
          onClose();
        }
      })
  };
  const handleClickOutside = (event) => {
    const modal = document.getElementById("individual-player-modal");
    if (modal && !modal.contains(event.target)) {
      onClose();
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  const handleDelete = () => {
    fetch(`http://localhost:8080/player/deletePlayer/${playerProp.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        // Add any additional headers if needed
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete resource");
        }
        onClose();
      })
      .catch((error) => {
        console.error("Error deleting resource:", error);
      });
  };

  return (
    <div className="individual-player-wrapper">
      <div className="individual-player-overlay"></div>
      <div id="individual-player-modal" className="individual-player-modal">
        <div className="button-container">
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="button-two-container">
          <button
            className="edit-button"
            onClick={() => setIsEditMode(!isEditMode)}
          >
            Edit
          </button>
          <button className="remove-button" onClick={handleDelete}>
            Remove
          </button>
          <button
            className="save-btn"
            disabled={isEditMode}
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div className="image-container">
          <img src={IMAGES[playerProp.name]} alt="" />
        </div>
        <div className="content-container">
          <h1>Player Info</h1>
          <p>
            <strong>Name : </strong>
            <input
              name="name"
              type="text"
              defaultValue={editablePlayer.name}
              disabled
            />
          </p>
          <p>
            <strong>Age : </strong>
            <input
              name="age"
              type="number"
              defaultValue={editablePlayer.age}
              disabled={isEditMode}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Country : </strong>
            <input
              name="country"
              type="text"
              defaultValue={editablePlayer.country}
              disabled={isEditMode}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>League : </strong>
            <input
              name="league"
              type="text"
              defaultValue={editablePlayer.league}
              disabled={isEditMode}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Club : </strong>
            <input
              name="club"
              type="text"
              defaultValue={editablePlayer.club}
              disabled={isEditMode}
              onChange={handleChange}
            />
          </p>
          <p>
            <strong>Description : </strong>
            <textarea
              name="description"
              defaultValue={editablePlayer.description}
              disabled={isEditMode}
              onChange={handleChange}
            />
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default IndividualPlayer;
