import React, { useState } from "react";
import { getData } from "./services/api";
import Header from "./header";

const App = () => {
  const [user, getUser] = useState([]);

  const showMe = async () => {
    const req = await getData();
    console.log(req.data);
    getUser(req.data.data);
  };

  return (
    <>
      <Header />
      <h2 className="title">Members</h2>
      <p className="center">
        <button className="button" onClick={() => showMe(
          document.getElementById("loader").style.display="none"
        )}>
          {" "}
          Show Members
        </button>
      </p>
      <div className="loader" id="loader">
        <img src="https://upload.wikimedia.org/wikipedia/commons/5/54/Ajux_loader.gif" alt="loader"></img>
      </div>
      <div className="members">
        {user.map((indx) => (
          <div className="member-card">
            <div className="card">
              <div className="img-container">
                <img className="avatar" src={indx.avatar} alt="avatar" />
              </div>
              <h2> {indx.first_name} {indx.last_name} </h2>
              <p> {indx.email} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
