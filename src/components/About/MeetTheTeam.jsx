import "../../css/AboutStyle.css";
import Joseph from "./TeamMembers/Joseph";
import Tasnima from "./TeamMembers/Tasnima";
import Aidan from "./TeamMembers/Aidan";
import Varis from "./TeamMembers/Varis";

const MeetTheTeam = () => {
    return (
      <div className="container" maxWidth="md" >
        <div className="beauty">
  
  
          <>
            <h1 > Meet The Team</h1>
            <hr />
  
            <br></br>
  
            <Joseph />
            <hr />
            <Tasnima />
            <hr />
            <Aidan />
            <hr />
            <Varis />
            <hr />
  
  
          </>
        </div>
      </div >
    );
  };
  
  export default MeetTheTeam;

