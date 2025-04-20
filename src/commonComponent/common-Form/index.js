import { useState } from "react";
import "./index.css";
export const Form = ({ open, handleAdd,perSetData ,perData}) => {
  const [data, setData] =
    useState({id:"", head: "", price: "", lord: "", days: "", time: "" });
  const handleChange = (value, key) => {
    let temp = {...data};
    temp[key] = value;
    setData(temp)
  };
  const handleSave=()=>{
    const newData = { ...data, id: String(perData.length + 1) };
    perSetData(prev => [...prev, newData]);    handleAdd()

  }
  return (
    <>
      {open ? (
        <div className="form">
          <div className="form1">
            <div className="heading">
              <div className="title">Add new special events</div>
              <div onClick={handleAdd} style={{ color: "grey" }}>
                X
              </div>
            </div>
            <div className="main1">
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter heading name"
                  onChange={(e) => handleChange(e.target.value, "head")}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter price"
                  onChange={(e) => handleChange(e.target.value, "price")}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter lord name"
                  onChange={(e) => handleChange(e.target.value, "lord")}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter days"
                  onChange={(e) => handleChange(e.target.value, "days")}
                />
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  placeholder="Enter time"
                  onChange={(e) => handleChange(e.target.value, "time")}
                />
              </div>
              <div className="save-close">
                <div className="save-btn">
                  <button onClick={handleAdd} className="close-clr">
                    Close
                  </button>
                  <button onClick={handleSave} className="save-clr">Save</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
};
