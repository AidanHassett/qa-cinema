import { FiFacebook, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi';


const ConnectWithUsPage = () => {
    return (
        <>
            <div className="row-md">
                <hr />
                <div className="col-md-12" id="connect">
                    <h4>Follow Us...</h4>
                    <h6>Follow us on all the social medias below, to find out more on our special offers, new movies and any other important info!</h6>
                </div>
            </div>
            <div className="row-md">
                <div className="col-md-12 social padding">
                    <center>
                        <h3 id="icons"> <FiFacebook id="fb-icon" size={50} /> <FiInstagram id="i-icon" size={50} /> <FiTwitter id="t-icon" size={50} /> <FiMail id="gm-icon" size={50} /></h3>
                    </center>
                </div>
            </div>
        </>
    )

}
export default ConnectWithUsPage
