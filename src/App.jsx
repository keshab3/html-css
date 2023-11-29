import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src="logo.svg" alt="" width="400px" />
          </div>
          <div className="left_text">
            <h5 className="leftTXT">
              Connect with friends and the world
              <br />
              around you on Facebook.
            </h5>
          </div>
        </div>
        <div className="right">
          <div className="right_container">
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <button className="btn1">Login</button>
            <a href="#">Forgot Password</a>
            <hr className="hrTag" />
            <button className="btn2">Create New Account</button>
          </div>
          <h5 className="right-create_page">
            <a href="">Create a Page</a> for a celebrity, brand or business.
          </h5>
        </div>
      </div>
    </>
  );
}

export default App;
