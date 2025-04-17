import { useState } from "react";
import "./index.css";
import SearchIcon from "@mui/icons-material/Search";

export const AddNew = ({handleAdd}) => {
  return (
    <div onClick={handleAdd} className="new">
      <div style={{color:"white",fontSize:"24px",fontWeight:"650",marginTop:"-3px"}}> +</div>
    </div>
  );
};
export const Details = ({actiondropdown}) => {
    const [open, setOpen] = useState(false);

    return (
        <td className="menu-cell">
        <div className="dropdown" onMouseLeave={() => setOpen(false)}>
          <div className="dots" onClick={() => setOpen(!open)}>⋮</div>
          {open && (
            <div className="dropdown-content">
              {actiondropdown.map((item) => (
                <p
                  key={item.id}
                  style={{ color: item.id === '2' ? 'red' : 'black' }}
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
  
  export const Search=()=>{
    return(
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
    )
  }