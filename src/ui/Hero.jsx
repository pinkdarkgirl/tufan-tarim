import video from "../assets/video.mp4";
import logoText from "../assets/logotext.png";

function Hero() {
  return (
    <div className="hero">
      <video src={video} autoPlay muted loop>
        <source src="../assets/video.mp4" type="video/mp4" />
        <source src="../assets/video.webm" type="video/webm" />
      </video>
      <div className="hero-text-container">
        <img src={logoText} className="hero-text-title" />
      </div>
    </div>
  );
}

export default Hero;
