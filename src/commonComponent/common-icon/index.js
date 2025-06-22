import { useState, useEffect, useRef } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

export const AddNew = ({ handleAdd }) => {
  return (
    <div onClick={handleAdd} className="new">
      <div style={{ color: "white", fontSize: "24px", fontWeight: "650" }}>
        {" "}
        +
      </div>
    </div>
  );
};
export const Details = ({ actiondropdown, handleAction, id ,icon}) => {
  const [open, setOpen] = useState(false);
  const divRef = useRef(null);
const handleclose=()=>{
  setOpen(false)
}
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  return (
    <td className="menu-cell">
      <div className="dropdown" ref={divRef}>
        <div className="dots" onClick={() => setOpen(!open)}>
          {icon}
        </div>
        {open && (
          <div className="dropdown-content">
            {actiondropdown.map((item) => (
              <p
              onClick={() => {
                handleAction(item.title, id);
                handleclose();
              }}
                              key={item.id}
                style={{
                  color: item.id === "2" ? "red" : "black",
                  fontWeight: 600,
                }}
              >
                {item.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </td>
  );
};

export const Search = () => {
  return (
    <div className="search-head">
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
  );
};
