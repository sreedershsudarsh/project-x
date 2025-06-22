import React, { useState } from "react";
import "./index.css";

export const FormBuilderPage = ({ open, handleAdd, perSetData, fields }) => {
  const getInitialState = () =>
    fields.reduce((acc, f) => {
      acc[f.name] = f.type === "checkbox" || f.type === "switch" ? false : "";
      return acc;
    }, {});
  const [data, setData] = useState(getInitialState);

  const handleChange = (value, key) => {
    setData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    perSetData(data); // send data to parent
    handleAdd(); // signal to parent to close the form
  };

  const handleClose = () => {
    handleAdd(); // just close form without submitting
  };

  const renderField = ({ name, placeholder, type }) => {
    const value = data[name];

    switch (type) {
      case "checkbox":
      case "switch":
        return (
          <div className="inputBox" key={name}>
            <label>
              <input
                type="checkbox"
                checked={value}
                onChange={(e) => handleChange(e.target.checked, name)}
              />
              {placeholder}
            </label>
          </div>
        );
      default:
        return (
          <div className="inputBox" key={name}>
            <input
              type={type}
              placeholder={placeholder}
              value={value}
              onChange={(e) =>
                handleChange(
                  type === "number" ? Number(e.target.value) : e.target.value,
                  name
                )
              }
            />
          </div>
        );
    }
  };

  return (
    <>
      {open && (
        <div className="form">
          <div className="form1">
            <div className="heading">
              <div className="title">Add New Special Event</div>
              <div
                onClick={handleClose}
                style={{ color: "grey", cursor: "pointer" }}
              >
                X
              </div>
            </div>
            <div className="main1">
              {fields.map(renderField)}
              <div className="save-close">
                <div className="save-btn">
                  <button onClick={handleClose} className="close-clr">
                    Close
                  </button>
                  <button onClick={handleSave} className="save-clr">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
