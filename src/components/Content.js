import React, {Component} from "react";
import {FilmsList} from "../lists/ListOfFilms"
import DisplayFilms from "../components/DisplayFilms";

export class Content extends Component {
    // use state
    constructor() {
        super();
        this.state = {
            filmsList: FilmsList
        };
    }
    render() {
        return <DisplayFilms films = {this.state.filmsList}/>;
    }
}
export default Content;