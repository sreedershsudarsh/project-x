import React, { useState } from "react";
import { Details, Search } from "../../../commonComponent/common-icon";
import MenuIcon from "@mui/icons-material/Menu";
import "../../dashboard/index.css";
import { Login } from "../../login";

export const Header = () => {
    const [login,setLogin]=useState(false);
  const handleLogin = () => {
    setLogin(true)
  };
  const handleClose = () => {
    setLogin(false)
  };
  return (
    <>
      <div className="header">
        <div>
          <img
            style={{ width: "50px", marginTop: "10px" }}
            src={require("../../../commonComponent/images/dashboard.png")}
            alt="Dashboard"
          />
        </div>{" "}
        <Search />
        <div>
          <Details
            actiondropdown={[{ title: "LogIn", id: "1" }]}
            handleAction={handleLogin}
            icon={<MenuIcon />}
          />
        </div>
      </div>
      <Login
      open={login}
      close={handleClose}
      />
    </>
  );
};
