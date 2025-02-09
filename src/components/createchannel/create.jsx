import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import userContext from "../../utils/useContext";
import "./create.css";
import axios from "axios";
function Create() {
  const [preview, setPreview] = useState(null);
  const [name, setName] = useState("");
  const [handle, setHandle] = useState("");
  const navigate = useNavigate();
  const data = useContext(userContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      data.profile = file;
      setPreview(URL.createObjectURL(file));
    }
  };

  const createdChannel = async () => {
    const userData = {
      username: name,
      userhandle: handle,
    };
    try {
      await axios.post("http://localhost:4000/saveUserData", userData);
    } catch (error) {
      console.log("Error creating channel", error);
      alert("Failed to create channel");
    }
  };

  return (
    <div className="create-channel">
      <div className="create-channel-container">
        <h2>How you'll appear</h2>
        <div className="image-upload-section">
          <div className="image-preview">
            {preview ? (
              <img
                src={preview}
                alt="Selected"
                style={{ borderRadius: "50%", width: "120px", height: "120px" }}
              />
            ) : (
              <div className="placeholder-circle">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                  alt=""
                />
              </div>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="upload-btn"
          />
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          className="input-field"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Handle"
          value={handle}
          className="input-field"
          onChange={(e) => setHandle(e.target.value)}
        />
        <div className="button-section">
          <button className="create-btn" onClick={createdChannel}>
            Create Channel
          </button>
          <button className="cancel-btn" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
