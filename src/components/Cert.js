import "./Cert.css";
import Cert1 from "../assets/cert1.jpg";
import Cert2 from "../assets/cert2.png";
import Cert3 from "../assets/cert3.png";
import Cert4 from "../assets/cert4.png";
import Cert5 from "../assets/cert5.png";
import Cert6 from "../assets/cert6.png";
import Cert7 from "../assets/cert7.png";

function Cert() {

    return (
      <div id="cert" className="cert">
        <h1>Certificates</h1>
        <div className="certs">
            <div className="cert_con">
                <img src={Cert1}/>
                <h3>On-The-Job-Training</h3>
            </div>
            <div className="cert_con">
                <img src={Cert2}/>
                <h3>Transfer Learning for NLP with Tensorflow Hub</h3>
            </div>
            <div className="cert_con">
                <img src={Cert3}/>
                <h3>Tweet Emotion Recognition Tensorflow</h3>
            </div>
            <div className="cert_con">
                <img src={Cert4}/>
                <h3>Create a Superhero Name Generator with Tensorflow</h3>
            </div>
            <div className="cert_con">
                <img src={Cert5}/>
                <h3>Build a Mobile App with Google Sheets on Glide and No Coding</h3>
            </div>
            <div className="cert_con">
                <img src={Cert6}/>
                <h3>Build & Deploy AI Messenger Chatbot with IBM Watson</h3>
            </div>
            <div className="cert_con">
                <img src={Cert7}/>
                <h3>Introduction to Cloud: Agile and Flexible Computing Service</h3>
            </div>
        </div>
      </div>
    );
}
  
export default Cert;