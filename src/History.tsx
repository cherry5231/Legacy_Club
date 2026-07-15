import "./History.css";
import { Link } from "react-router-dom";
import TypingText from "./TypingText";

function History() {
  return (
    <>
      <div className="navigation">
                <div className="buttonsnav">
                   
                   <Link to="/history">
    Our Legacy
</Link>
                 <Link to="/pricing">
                 View Pricing
</Link>
                </div>

                <div className="signupnav">
                    <p>Sign up</p>
                </div>
            </div>


      <div className="container">
  <div className="g">
    <img
      className="img1"
      src="https://tse1.mm.bing.net/th/id/OIP.-YD36OL5-cbis2Q1_3AfFgHaE7?r=0&pid=Api&P=0&h=180"
      alt="History"
    />

   

    
  </div>
</div>

   <div className="container2">
  <div className="box">

    <img
      className="img2"
      src="https://i.pinimg.com/originals/38/80/8a/38808a240b11117eface344980cc230a.jpg"
      alt="History"
    />

    <div className="tt">
      <TypingText text="Grind Now" />
 </div>

    <div className="tt2">
      <TypingText text="Your" />
      <TypingText text=" Story" />
      <TypingText text=" Begins" />
      <TypingText text=" Here" />
    </div>

  </div>
</div>
     <div className="container3">
  <div className="box3">
<p className = "ft"> Years from now, people won't remember how difficult the journey was. They'll remember the person you became because you chose not to give up. Build your body. Build your character. Build your legacy.

</p>
<p className = "ft2">And dont even think about skipping Leg day
  cant spell Legacy with your leg workout
</p>
     <div className="tt3">
      <TypingText text="Years from now, people won't remember how difficult the journey was. They'll remember the person you became because you chose not to give up. Build your body. Build your character. Build your legacy.
" />
    </div>

   

  </div>
</div>
<div className = "footer">
  < a href = "">
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

export default History;