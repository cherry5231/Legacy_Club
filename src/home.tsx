
import './App.css'
import { Link } from "react-router-dom";
import TypingText from "./TypingText";
import { useState, useEffect } from "react";

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);

useEffect(() => {
  const loggedIn = localStorage.getItem("isLoggedIn") === "true";
  setIsLoggedIn(loggedIn);
}, []);

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("userName");
  setIsLoggedIn(false);
};
   return (
        <>
            <div className="navigation">
                <div className="buttonsnav">
                   
                   <Link to="/History">
    Our Legacy
</Link>
                 <Link to="/pricing">
                 View Pricing
</Link>
                </div>
<div className="signupnav">
    {isLoggedIn ? (
        <button onClick={handleLogout} className="signupnav-link">
            Log out
        </button>
    ) : (
        <Link to="/signup" className="signupnav-link">
            Sign up
        </Link>
    )}
</div>
            </div>


            <div className="container">

                <div className="g">
                    <img className= "img1"
  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI0RKkG8AUsG0M1RYv2GHxct-ShR14E49g8VQ7113zi0kdTfNM7zX79Wg&s=10"
  alt="Legacy"
/> <h1>LEGACY</h1>
 <h2>If You Want To Leave Something Behind , Make Sure Its Worth Picked On By Someone Who Needs Hope</h2>
                </div>
            </div>
            <div className = "container2">
                <div className = "box">
                <img className = "img2"
                src = "https://i.pinimg.com/originals/c7/85/e3/c785e30e9c346c022082b06967b9ad57.jpg"
                alt = "legacy2"/>
              <div className="tt">
    <TypingText text="You only work hard when you don't know the taste of discipline" />
  </div>

  <div className="tt2">
    <TypingText text="First" />
    <TypingText text=" Ask" />
    <TypingText text=" Yourself" />
    <TypingText text=" Why?" />
  </div>
</div></div>
<br></br><br></br><br></br><br></br>
<p className = "ay"> Ask Yourself Where Are You Right Now</p>

<div className = "container3">
    <div className = "box3">
    
    <img className = "img3"
    src = "https://wallpapers.com/images/hd/modern-gym-interior-aesthetic-zv5v1hd78ii90ca8.jpg"
    alt = "legacy3" />
 <div className = "tt3">
    <TypingText text = "How Far Are You Behind Or How Far Did You Come" />
    </div><p className = "fp">Which <br></br>Question<br></br> Makes<br></br> You Feel <br></br> The Neccesity <br></br>For <br></br> Improvement</p>
</div></div><br></br><br></br><br></br><br></br>
<div className= "tw">
<div className = "Transform">
  
                 <Link to="/pricing" className="pricing-btn">
                 View Pricing
</Link>
</div></div>
<div className = "footer">
  < a href = "https://maps.apple.com/place?place-id=IE7FD6FFB57D1D428">
  <img className = "maps"src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUVBZR7_AEb4x89k7l4tArtvhrfYSJOWkTveTj03dNomQdYpPng_m3DcZW&s=10" />
  </a>
  <div className = "socials">
 <p className = "jn"> Join Us Now</p>

  <a 
    href="https://www.instagram.com/itscherryishhxx/" 
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src = "https://tse4.mm.bing.net/th/id/OIP.LcuiUJjETtDExFBQFnxeXwHaHa?r=0&pid=Api&P=0&h=180" />
    
  </a>

  <a 
    href="https://github.com/cherry5231" 
    target="_blank"
    rel="noopener noreferrer"
  > <img src = "https://s.yimg.com/fz/api/res/1.2/s09LNRWDibJGxXnCe33DlA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/66/71/3a/66713a96b9b21dffd3a85a5d748a3171.jpg"/>
  
  </a>
</div>
</div>
        </>
    );
}


export default App
