import React from "react";
import "./index.css";
export const Login = () => {
  const width = window.innerWidth;

  return (
    <>
      <div className="login-main">
        <div className="pop">
          {width > 1000 ? undefined : <h1>Sorry only view in laptop</h1>}

          <div className={`pad ${width > 1000 ? "display" : "display-non"}`}>
            <div className="left-pop">
              <div className="log">
                <div className="align col">
                  <p
                    style={{
                      fontFamily: "serif",
                      fontSize: "20px",
                      height: "0px",
                    }}
                  >
                    Login to your account
                  </p>
                  <p
                    style={{
                      fontFamily: "unset",
                      fontSize: "10px",
                      height: "0px",
                      marginTop: "5px",
                      color: "#828280",
                    }}
                  >
                    login with your account
                  </p>
                </div>
                <div className="inp-box">
                  <div className="inp">
                    <p
                      style={{
                        fontSize: "10px",
                        marginLeft: "20px",
                        color: "grey",
                        height: "7px",
                        marginTop: "0px",
                      }}
                    >
                      Username
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: "25px",
                        height: "70%",
                      }}
                    >
                      <input
                        placeholder="Enter your username"
                        style={{
                          marginLeft: "10%",
                          width: "80%",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="inp">
                    <p
                      style={{
                        fontSize: "10px",
                        marginLeft: "20px",
                        color: "grey",
                        height: "7px",
                        marginTop: "0px",
                      }}
                    >
                      Password
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: "white",
                        borderRadius: "25px",
                        height: "70%",
                      }}
                    >
                      <input
                        placeholder="Enter your password"
                        style={{
                          marginLeft: "10%",
                          width: "80%",
                          border: "none",
                          outline: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="inp">
                    <button
                      style={{
                        borderRadius: "25px",
                        height: "60%",
                        marginTop: "15px",
                        backgroundColor: "rgb(255 216 95)",
                        border: "none",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                  <div className="inp">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        height: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        style={{
                          borderRadius: "25px",
                          height: "60%",
                          width: "48%",
                          marginTop: "-5px",
                          // marginTop: "auto",
                          border: "1px solid black",
                        }}
                      >
                        Gmail
                      </button>

                      <button
                        style={{
                          borderRadius: "25px",
                          width: "48%",
                          height: "60%",
                          marginTop: "-5px",

                          // marginTop: "auto",
                          border: "1px solid black",
                        }}
                      >
                        Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-pop"></div>
          </div>
        </div>
      </div>
    </>
  );
};
