import React, { Component } from 'react';
class Search extends Component {
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Search Nearby Places</legend>
                    <div className="form-group">
                        <label htmlFor="inputsearchtext">Search Location</label>
                        <input type="text" className="form-control" id="inputsearchtext" aria-describedby="inputsearchtext" placeholder="Search Here"/>
                        <small id="inputsearchtext" className="form-text text-muted">Search by place name waht you want</small>
                        <button type="button" className="btn btn-primary">Search</button>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default Search;
