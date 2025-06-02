import React from "react";
import { Details, Search } from "../../../commonComponent/common-icon";
import MenuIcon from "@mui/icons-material/Menu";
import "../../dashboard/index.css";

export const Header = () => {
  const handleLogin = () => {};
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
    </>
  );
};
