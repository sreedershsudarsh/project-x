import "./index.css"
export const Form = ({open,handleAdd}) => {
    return (
        <>
         {open?
           <div className="form">
        <div className="form1">
          <div className="heading">
            <div className="title">Add new special events</div>
            <div onClick={handleAdd} style={{ color: "grey" }}>X</div>
          </div>
          <div className="main1">
            <div className="inputBox">
              <input type="text" placeholder="Enter heading name" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Enter price" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Enter lord name" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Enter days" />
            </div>
            <div className="inputBox">
              <input type="text" placeholder="Enter time" />
            </div>
            <div className="save-close">
                  <div className="save-btn">
                    <button onClick={handleAdd} className="close-clr">Close</button>
                    <button className="save-clr">Save</button>
  
                  </div>
            </div>
          </div>
        </div>
      </div> :undefined
        }
        </>
       
      
    );
}