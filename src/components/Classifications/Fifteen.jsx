import { Toast, Image } from "react-bootstrap";
import fifteenimage from "./Images/15.jpg"

const Fifteen = () => {
    return (

        <>
            <>

                <div className="beauty">
                    <Toast.Header className="goldenHours">
                        <strong style={{ color: 'red' }}>15 Film Ratings</strong>
                    </Toast.Header>
                    <Toast.Body className="goldenHours">
                        <Image style={{ backgroundColor: 'lightgray', height: '30%', width: '30%' }} src={fifteenimage} rounded />
                        <hr />
                        <strong style={{ color: "red" }}>15: Suitable only for 15 years and over</strong>
                        <p style={{ color: "red" }}>No one younger than 15 may see a 15 film in a cinema. No one younger than 15 may rent or buy a 15 rated video work.</p>
                        <strong>Dangerous Behaviour</strong>
                        <p>Dangerous behaviour (for example, suicide, self-harming and asphyxiation) should not dwell on detail which could be copied. Whether the depiction of easily accessible weapons is acceptable will depend on factors such as realism, context and setting.</p>
                        <strong>Discrimination</strong>
                        <p>The work as a whole must not endorse discriminatory language or behaviour, although there may be racist, homophobic or other discriminatory themes and language.</p>
                        <strong>Drugs</strong>
                        <p>Drug taking may be shown but the work as a whole must not promote or encourage drug misuse (for example, through detailed instruction). The misuse of easily accessible and highly dangerous substances (for example, aerosols or solvents) is unlikely to be acceptable.</p>
                        <strong>Language</strong>
                        <p>There may be strong language. Very strong language may be permitted, depending on the manner in which it is used, who is using the language, its frequency within the work as a whole and any special contextual justification.</p>


                        <a style={{ color: 'red' }}
                            href="https://www.bbfc.co.uk/rating/15"
                            rel="noreferrer"
                            target="_blank"
                        >Additional Info from the BBFC website
                        </a>
                    </Toast.Body>
                </div>

            </>
        </>
    )
}

export default Fifteen