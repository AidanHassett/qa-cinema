import React from "react";
import {Card} from "react-bootstrap";

const Listings = () => {

    const movieList = [
        {
            image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            title: "Joker",
            description: "A mentally troubled stand-up comedian embarks on a downward spiral that leads to the creation of an iconic villain."
        },
        {
            image: "https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg",
            title: "Spider-Man: No Way Home",
            description: "Picking up where Far From Home left off, Peter Parker's whole world is turned upside down when his old enemy Mysterio posthumously reveals his identity to the public. Wanting to make his identity a secret, Peter turns to Doctor Strange for help. But when Strange's spell goes haywire, Peter must go up against five deadly new enemies--the Green Goblin, Dr. Octopus, Electro, the Lizard and Sandman--all while discovering what it truly means to be Spider-Man."
        }
    ]

    const renderCard = (card, index) => {
        return (
          <Card style={{ width: "18rem" }} key={index} className="box">
            <Card.Img variant="top" src={card.image}/>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>{card.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      };
    
    return <div><h2> Listings of Movies</h2>
        {movieList.map(renderCard)}
    </div>
     
};
 
export default Listings;