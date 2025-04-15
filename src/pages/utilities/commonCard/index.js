import React from "react";
import './commonCard.css'
export const Card = ({head,price,lord,days,time}) => {    
  return (
    <div className="card">
      <div className="card-box">
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "5px",
          }}
        >
          <h3>{head} </h3>
          <span class="price">₹{price}</span>
        </div>
        <div
          style={{ width: "100%", height: "1px", backgroundColor: "grey" }}
        ></div>

        <div className="name">Lord {lord} </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop:"-5px"
          }}
        >
          <div>
            <p className="day-time">Days</p>
            <p className="dat-time-sub">{days}</p>

          </div>
          {/* <div style={{display:"flex",alignItems:"center",marginTop:"28px"}}>🙏</div> */}
          <div>
            <p className="day-time">Time</p>
            <p className="dat-time-sub">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
};