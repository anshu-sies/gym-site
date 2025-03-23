import React from "react";
import { useState } from "react";
import "../../styles/host.css";
import uploadIcon from "../../images/image-upload.png";

export default function Community() {
  const [image, setImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="hostEvents">
      <form className="host" method="post">
        <div className="in name">
          <label>
            Event Name <br />
            <input type="text" id="name" />
          </label>
        </div>
        <div className="in description">
          <label>
            Description <br />
            <input type="text" id="desc" />
          </label>
        </div>
        <div className="input-field">
          <label>Cover Image</label>
          <div className="dropArea">
            <input
              type="file"
              id="input-img"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
            <label htmlFor="input-img" className="imageView">
              {image ? (
                <img
                  src={image}
                  alt="Cover Preview"
                  className="cover-preview"
                />
              ) : (
                <div className="upload-placeholder">
                  <img
                    src={uploadIcon}
                    className="uploadImage"
                    alt="Upload Icon"
                  />
                  <p>Drag & Drop your image here</p>
                </div>
              )}
            </label>
          </div>
          <div className="in datetime">
            <label>
              Date and Time <br />
              <input type="text" id="datetimeip" />
            </label>
          </div>

          <div className="in location">
            <label>
              Location <br />
              <input type="text" id="location" />
            </label>
          </div>

          <div className="in workouts">
            <label>
              Select Workout <br />
              <select name="selectedCateogory">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
              <select name="selectedPlans">
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>
            </label>
          </div>

          <div className="buttons">
                <button className="btnn details-btn">Cancel</button>
                <button className=" btnn join-btn">Create Event</button>
            </div>
        </div>
      </form>
    </div>
  );
}
