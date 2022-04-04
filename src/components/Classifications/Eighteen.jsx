import { Toast, Image } from "react-bootstrap";
import eighteenimage from "./Images/18.jpg"

const Eighteen = () => {
    return (

        <>
            <>

                <div className="beauty">
                    <Toast.Header className="goldenHours">
                        <strong style={{ color: 'red' }}>15 Film Ratings</strong>
                    </Toast.Header>
                    <Toast.Body className="goldenHours">
                        <Image style={{ backgroundColor: 'lightgray', height: '30%', width: '30%' }} src={eighteenimage} rounded />
                        <hr />
                        <strong style={{ color: "red" }}>18: Suitable only for adults</strong>
                        <p style={{ color: "red" }}>No one younger than 18 may see an 18 film in a cinema. No one younger than 18 may rent or buy an 18 rated video work. Adults should be free to choose their own entertainment.</p>
                        <strong>Exceptions are most likely in the following areas:</strong>
                        <br></br>
                        <li>
                            where the material is in breach of the criminal law, or has been created through the commission of a criminal offence
                        </li>
                        <li>
                            where material or treatment appears to us to risk harm to individuals or, through their behaviour, to society. For example, the detailed portrayal of violent or dangerous acts, or of illegal drug use, which may cause harm to public health or morals. This may include portrayals of sadistic violence, rape or other non-consensual sexually violent behaviour which make this violence look appealing; reinforce the suggestion that victims enjoy rape or other non-consensual sexually violent behaviour; or which invite viewer complicity in rape, other non-consensual sexually violent behaviour or other harmful violent activities
                        </li>
                        <li>
                            where there are more explicit images of sexual activity in the context of a sex work (see right) In the case of video works, which may be more accessible to younger viewers, intervention may be more frequent than for cinema films.
                        </li>


                        <strong>Sex works at 18</strong>

                        <p>
                            Adults should be free to choose their own entertainment. Exceptions are most likely in the following areas:
                            <br></br>
                            Sex works are works whose primary purpose is sexual arousal or stimulation. Sex works containing only material which may be simulated are generally passed 18. Sex works containing clear images of real sex, strong fetish material, sexually explicit animated images, or other very strong sexual images will be confined to the R18 category. Material which is unacceptable in a sex work at R18 is also unacceptable in a sex work at 18.
                        </p>


                        <a style={{ color: 'red' }}
                            href="https://www.bbfc.co.uk/rating/18"
                            rel="noreferrer"
                            target="_blank"
                        >Addition Info from the BBFC website
                        </a>
                    </Toast.Body>
                </div>

            </>
        </>
    )
}

export default Eighteen