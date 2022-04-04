import { AiFillStar } from "react-icons/ai";

const WelcomePage = () => {
  return (
    <>
      <div id="welcomepage1">
        <hr />
      </div>
      <div className="row" id="welcomepage2">
        <div className="col-md-6" id="welcome-div">
          <p>
            QA Cinemas is one of the greatest cinemas in the whole of the UK, with an average of 5 stars all accross the board on all reviwing websites, we aim to please and provide a customer experience they will never forget!
          </p>
          <p>
            We have everything you need! From multiple screens, to an arcade section, restaurants, bars and all the information you need to find them! We also have the best value for money and the <strong>COMFIEST</strong> seats!
          </p>
        </div>
        <div className="col-md-6">
          <center>
            <br />
            <p>'...the best cinema in the whole of the UK, no doubt about it!'</p>
            <p id="name1">- Joseph</p>
            <br />
            <p>'...the best popcorn going!'</p>
            <p id="name2">- Varis</p>
            <br />
            <p>'...the best value for money and the best seats in the house!'</p>
            <p id="name3">- Tasnima</p>
            <br />
            <p>'...so easy to find and such a cool arcade section!'</p>
            <p id="name4">- Aidan</p>
          </center>
          <center>
            <br />
            <h3 id="star">
              <AiFillStar size={50} /> <AiFillStar size={50} />{" "}
              <AiFillStar size={50} /> <AiFillStar size={50} />{" "}
            </h3>
          </center>
        </div>
      </div>
    </>
  );
};
export default WelcomePage;