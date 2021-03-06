import axios from 'axios';
import { CardLink, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react';
import data from '../../res/Movies.json';

import { DISCUSSION_URL } from './CONST.json';

const EditPost = ({item, trigger}) => {

    const { name, movie, topic, discussion, rating } = item;
    const [updateMovie, setUMovie] = useState(movie);
    const [updateTopic, setUTopic] = useState(topic);
    const [updateDiscussion, setUDiscussion] = useState(discussion);
    const [updateRating, setURating] = useState(rating);

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const Filter = require('bad-words')
    const filter = new Filter();

    const updatePost = (e) => {
        e.preventDefault();
        axios.patch(`${DISCUSSION_URL}/updateById/${item._id}`,
            { name, movie: updateMovie, topic: filter.clean(updateTopic), discussion: filter.clean(updateDiscussion), rating: updateRating })
            .then((response) => {
                toggle();
                trigger(`${response.data} about ${updateMovie} by ${name}`);
            })
            .catch((error) => {
                trigger(error.data);
            })
        }

    return (

        <>
        <CardLink className="btn btn-outline-dark" onClick={toggle}>Edit</CardLink>
        <Modal isOpen={modal}>
            <ModalHeader id="edit-header">Post By: {item.name}</ModalHeader>
            <form id="edit-form" onSubmit={updatePost}>
                <ModalBody id="edit-modal-body">
                    <br />
                    <label>Film:</label>
                    <select name="film" class="form-control" placeholder="Select film"
                        onChange={({ target }) => setUMovie(target.value)}
                        value={updateMovie}>
                        <option value="reset" disabled selected hidden>Please Choose...</option>
                        {
                            data.map((film) => (
                                <option
                                    value={film.title}
                                >
                                    {film.title}
                                </option>
                            ))
                        }
                    </select>
                    <br />
                    <label>Topic:</label>
                    <input type="text"
                        value={updateTopic}
                        className="form-control"
                        placeholder="topic"
                        required
                        onChange={({ target }) => setUTopic(target.value)} />
                    <br />
                    <label>Discussion point:</label>
                    <input type="text"
                        value={updateDiscussion}
                        className="form-control"
                        placeholder="discussion point"
                        required
                        onChange={({ target }) => setUDiscussion(target.value)} />
                    <br />
                    <label>Rating:</label>
                    <input type="number"
                        max="10"
                        min="1"
                        value={updateRating}
                        className="form-control"
                        placeholder="rating"
                        onChange={({ target }) => setURating(target.value)} />
                </ModalBody>
                <ModalFooter id="edit-footer">
                    <button onClick={() => toggle} className="btn btn-outline-danger">Cancel</button>
                    <button onSubmit={updatePost} type="submit" className="btn btn-outline-success">Update</button>
                </ModalFooter>
            </form>
        </Modal>
    </>
     );
}
 
export default EditPost;