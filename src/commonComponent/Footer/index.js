import './index.css'
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
export const Footer = () => {
  return (
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
      <h6> Admin</h6>
    </div>
  </div>
  )
}
