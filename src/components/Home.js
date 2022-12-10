import './Home.css';
import Profile from "../assets/my-profile.jpeg";

function Home() {
  return (
    <div id="home" className="home">
      <img src={Profile}/>
      <div className="qoutes">
        <h1>Hello</h1>
        <h2>I'm Marry Jane Magallanes</h2>
        <p> 
       "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away".
        </p>
      </div>
    </div>
  );
}

export default Home;