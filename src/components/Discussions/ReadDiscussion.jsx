import { useState, useEffect } from "react";
import axios from 'axios';
import { Spinner } from 'reactstrap';
import EachPost from './EachPost';

import { DISCUSSION_URL } from './CONST.json';


const ReadDiscussion = ({comment, trigger}) => {

    const[discussionList, setDL] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get(`${DISCUSSION_URL}/getAll`)
            .then((response) => {
                setIsLoaded(true);
                setDL(response.data);
            }).catch((error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [comment]);

    if (error) {
        return <p>{error}</p>
    }
    else if (!isLoaded) {
        return <Spinner animation="border" role="status" />
    }
    else {
        return (
            <div className="row">
                {discussionList.map((item) => (
                    <div className="col-md-6">
                        <EachPost key={item._id} trigger={trigger} item={item} />
                    </div>
                ))}
            </div>
        )
    }
}

export default ReadDiscussion;