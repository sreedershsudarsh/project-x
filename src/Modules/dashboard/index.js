import "./index.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Card } from "../../commonComponent/common-Card";
import { Form } from "../../commonComponent/common-Form";
import { AddNew, Search } from "../../commonComponent/common-icon";
import { Footer } from "../../commonComponent/Footer";
import { useState } from "react";

export const Dashboard = () => {
  const [formOpen, setFormOpen] = useState(false);
  const handleAdd = () => {
    setFormOpen((prev) => !prev);
  };
  const [perData, perSetData] = useState([
    {
      id: "1",
      head: "🍃 Archana",
      price: "15",
      lord: "Shiva",
      days: "Thursday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      id: "2",
      head: "🥥 Neeranjanam",
      price: "30",
      lord: "Shiva",
      days: "Friday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      id: "3",
      head: "🔥 Ganapathi homam",
      price: "500",
      lord: "Ganapathi",
      days: "Monday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      id: "4",
      head: "🌸 Pushpabishekam",
      price: "350",
      lord: "Shiva",
      days: "Wednesday,Saturday",
      time: "5:30 am to 10:30 am",
    },
    {
      id: "5",
      head: "🍌 Nivedhyam",
      price: "50",
      lord: "Krishna",
      days: "Monday,Saturday",
      time: "5:30 pm to 7:30 pm",
    },
    {
      id: "6",
      head: "🪔  Neyvilak",
      price: "30",
      lord: "Krishna",
      days: "Monday - Sunday",
      time: "5:30 am to 10:30 am",
    },
  ]);
  const width = window.innerWidth;
  const handleAction = (key, id) => {
    if (key === "Edit") {
    } else if (key === "Delete") {
      perSetData((prev) => prev.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      {width < 700 ? undefined : <h1>Poyi mobileil nokku... sry </h1>}

      <div className={`${width > 700 ? "display" : undefined}`}>
        <div className="header">
          <div>
            <img
              style={{ width: "50px", marginTop: "10px" }}
              src={require("../../commonComponent/images/dashboard.png")}
              alt="Dashboard"
            />
          </div>{" "}
          <Search />
          <div>
            <MenuIcon />
          </div>
        </div>
        <div className="main">
          {perData.map((detail) => (
            <Card
              id={detail.id}
              head={detail.head}
              price={detail.price}
              lord={detail.lord}
              days={detail.days}
              time={detail.time}
              actiondropdown={[
                { title: "Edit", id: "1" },
                { title: "Delete", id: "2" },
              ]}
              handleAction={handleAction}
            />
          ))}
          <Form
            open={formOpen}
            handleAdd={handleAdd}
            perSetData={perSetData}
            perData={perData}
          />
          <AddNew handleAdd={handleAdd} />
        </div>
        <Footer />
      </div>
    </>
  );
};
