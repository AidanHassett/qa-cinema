import { Form, FormControl } from 'react-bootstrap';
import searchicon from '../../res/searchicon.jpg';

const SearchBar = ({ updateQuery, stateQuery }) => {
    return (
        <>
            <div className="col-3">
                <br />
                <Form inline>
                    <FormControl type="text"
                        placeholder="Search"
                        className="mr-sm-2"
                        onChange={updateQuery}
                        value={stateQuery}
                    />
                </Form>
                <br />
            </div>
            <div className="col-md-9">
                <img src={searchicon} alt="search-icon" id="searchicon" />
            </div>
        </>
    )
}
export default SearchBar;