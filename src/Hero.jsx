

import Button from "./Button";
import MyPhoto from "./assets/for-react.jpg"
import Navbar from "./Navbar";

const Hero = () => {
  return (
    
      <div  className="flex flex-col items-center justify-center gap-4"  >
        
     <img src={MyPhoto} alt="my pp" height="0px" width ="200px" />
  
      <h1>Hi, I'm Alpay</h1>
     <h2>Fullstack Developer</h2>
      <p>I'm Alpay, a fullstack developer with the goal af advancing my career and participating in inspiting project. Where I present my work and my passion for web develoopmwnt. Let's shape sigital solutions togerher and shape the future!</p>

      <div className ="flex gap-4">
        <Button title="Contact Me" type="orange" icon="contact" />

        <Button title="My Projects" type="blue" icon="github" />
      </div>
    </div>
    
  );
};
export default Hero