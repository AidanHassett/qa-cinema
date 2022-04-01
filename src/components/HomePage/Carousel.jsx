import Carousel from 'react-bootstrap/Carousel';

const CarouselPage = ({ image1, image2, image3}) => {

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image1"
      alt="Book Tickets Now!"
    />
    <Carousel.Caption>
      <h3>Click here to book tickets today!</h3>
      <p>We provide the best deals on tickets all accross the UK</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image2"
      alt="What's New?"
    />

    <Carousel.Caption>
      <h3>Take a look at our newest releases!</h3>
      <p>QA Cinema show the most in demand films, all the time!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="image3"
      alt="Sign Up!"
    />

    <Carousel.Caption>
      <h3>Sing up to become part of the QA Cinema family!</h3>
      <p>By signing up, you gain all access to the QA Cinema, including the latest deals on films and all important news</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
}

export default CarouselPage

