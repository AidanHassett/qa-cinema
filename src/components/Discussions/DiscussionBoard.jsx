import { useState } from "react";
import logo from '../../res/QA-cinema.png';
import PostDiscussion from "./PostDiscussion";
import ReadDiscussion from "./ReadDiscussion";

const DiscussionBoard = () => {

    const [comment, setComment] = useState('');

    const trigger = (data) => {
        setComment(data);
    }
    return ( 
        <>
        <h3>Reviews</h3>
        <div className="container">
            <div className="row">
                <div className="col-md-auto">
                    <br></br>
                    <img src={logo} alt="logo" id="logo"/>
                </div>
                <div className="col-md-8">
                    <hr />
                    <h2 id="title-discussionboard">Discussion Board</h2>
                    <hr />
                    <h3 id="text-discussionboard">Enter your comments below to discuss and review the films</h3>
                    <br />

                </div>
            </div>
            <div className="row">
                <div className="col-md-auto">
                    <PostDiscussion trigger={trigger}/>
                </div>
                <div className="col-md-8">
                    <div className="container">
                        <div id="alert" className="alert alert-success">{comment}</div>
                        <ReadDiscussion comment={comment} trigger={trigger}/>
                    </div>

                </div>
            </div>
        </div>
        </>
     );
}
 
export default DiscussionBoard;