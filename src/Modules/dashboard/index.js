import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Card } from "../../commonComponent/common-Card";
import { Form } from "../../commonComponent/common-Form";
import { AddNew, Search } from "../../commonComponent/common-icon";
import { Footer } from "../../commonComponent/Footer";
import { useState } from "react";
export const Dashboard = () => {
  const[formOpen,setFormOpen]=useState(false)
  const handleAdd=()=>{
    setFormOpen(prev=>!prev)
  }
  const data = [
    {
      head: "🍃 Archana",
      price: "15",
      lord: "Shiva",
      days: "Thursday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      head: "🥥 Neeranjanam",
      price: "30",
      lord: "Shiva",
      days: "Friday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      head: "🔥 Ganapathi homam",
      price: "500",
      lord: "Ganapathi",
      days: "Monday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      head: "🌸 Pushpabishekam",
      price: "350",
      lord: "Shiva",
      days: "Wednesday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      head: "🍌 Nivedhyam",
      price: "50",
      lord: "Krishna",
      days: "Monday,Saturday",
      time: "5:30 pm to 7:30 pm",
    },
    {
      head: "🪔  Neyvilak",
      price: "30",
      lord: "Krishna",
      days: "Monday - Sunday",
      time: "5:30 am to 10:30 am",
    },
  ];
  const width = window.innerWidth;

  return (
    <>
      {width < 700 ? undefined : <h1>Poyi mobileil nokku... sry </h1>}

      <div className={`${width > 700 ? "display" : undefined}`}>
        <div className="header">
          <div>
            <img src={require('/Users/sreedershsudarsh/Desktop/college-management-project-x/src/assets/image.png')}style={{width:"48px",marginTop:"8px"}}/>
          </div>{" "}
        <Search/>
          <div>
            <MenuIcon />
          </div>
        </div>
        <div className="main">
        {data.map((detail) => (
          <Card
            head={detail.head}
            price={detail.price}
            lord={detail.lord}
            days={detail.days}
            time={detail.time}
            actiondropdown={[
              { title: "Edit", id: "1" },
              { title: "Delete", id: "2" },
            ]}
          />
        ))}
        <Form open={formOpen} handleAdd={handleAdd}/>
        <AddNew handleAdd={handleAdd}/>
      </div>
    <Footer/>
      </div>
    </>
  );
};
