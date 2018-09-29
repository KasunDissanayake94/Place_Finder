import React, { Component } from 'react';
import axios from 'axios';
class Search extends Component {

    getKey(e){
        e.preventDefault();
        const keyTyped = this.refs.inputword.value;
        // AIzaSyANN1m-FPVZycT8QpcGWEMryYFIeWWf2_U
        axios.post('http://localhost:3001/getLocations',{
            city:keyTyped,
        })
        .then(function (response) {
            console.log(response);
        })
            .catch(function (error) {
                console.log(error);
            });


    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Search Nearby Places</legend>
                    <div className="form-group">
                        <label htmlFor="inputsearchtext">Search Location</label>
                        <input type="text" className="form-control" id="inputsearchtext" aria-describedby="inputsearchtext" placeholder="Search Here" ref="inputword"/>
                        <small id="inputsearchtext" className="form-text text-muted">Search by place name waht you want</small>
                        <button type="button" className="btn btn-primary" onClick={this.getKey.bind(this)}>Search</button>
                    </div>

                </fieldset>
            </form>
        );
    }
}

export default Search;
