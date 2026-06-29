import { useState, useEffect } from "react";
import "./User.css";

const User = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [userData, setUserData] = useState([]);
  const [showData, setShowData] = useState(null);
  const [loading, setloading] = useState(true);
  const fetchApi = async () => {
    try {
      setloading(true);
      const resposne = await fetch(url);
      const data = await resposne.json();
      setUserData(data);
    } catch (error) {
      console.log(error,'error by feching');
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchApi();
  }, []);
  const handleClick = (user) => {
    setShowData(user);
  };

  return (
    <>
      <h2>User Data Fetch</h2>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="main">
          {userData.map((ele) => {
            return (
              <div
                className="cards"
                key={ele.id}
                onClick={() => handleClick(ele)}
              >
                <h2>{ele.name}</h2>

                <p>
                  <strong>Email:</strong> {ele.email}
                </p>
                <p>
                  <strong>Phone:</strong>
                  {ele.phone}
                </p>
                <p>
                  <strong>User Name:</strong>
                  {ele.username}
                </p>
              </div>
            );
          })}
        </div>
      )}
      {showData && (
        <div className="modal-overlay" onClick={() => setShowData(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowData(null)}>
              ✖
            </button>

            <h2>{showData.name}</h2>
            <p>
              <strong>Username:</strong> {showData.username}
            </p>
            <p>
              <strong>Email:</strong> {showData.email}
            </p>
            <p>
              <strong>Phone:</strong> {showData.phone}
            </p>
            <p>
              <strong>Website:</strong> {showData.website}
            </p>
            <p>
              <strong>Company:</strong> {showData.company.name}
            </p>
            <p>
              <strong>City:</strong> {showData.address.city}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default User;
