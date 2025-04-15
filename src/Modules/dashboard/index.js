import "./index.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import { Card } from "../../pages/utilities/commonCard";
export const Dashboard=()=> {
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
  ];

  return (
    <>
      <div className="header">
      <div >
        {/* <img src={require('./assets/ChatGPT Image Apr 15, 2025, 05_13_35 PM.png')}style={{width:"30px",}}/> */}
      
</div>        <div className="search-head">
          <SearchIcon style={{ color: "grey", marginLeft: "10px" }} />
          <input
            style={{
              marginLeft: "10px",
              width: "75%",
              border: "none",
              outline: "none",
            }}
            placeholder="Search"
          />
        </div>
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
          />
        ))}
      </div>
      <div className="footer">
        <div className="footer-align">
          <SelfImprovementIcon />
         <h6>Home</h6> 
        </div>

        <div className="footer-align">
          <AccountCircleIcon />
         <h6> Priest</h6>
        </div>
        <div className="footer-align">
          <AccountBalanceIcon />
          <h6>Account</h6>
        </div>
        <div className="footer-align">
          <AdminPanelSettingsIcon />
       <h6>   Admin</h6>
        </div>
      </div>
    </>
  );
}

