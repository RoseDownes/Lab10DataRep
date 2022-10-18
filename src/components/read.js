import React from "react";
import { Books } from "./books";
import axios from "axios";
//extends the React.Component 
export class Read extends React.Component {

    componentDidMount() {
        axios.get("https://jsonblob.com/api/jsonblob/1027219693823606784")
            .then((response)=>{
                this.setState({
                    books: response.data
                })
            })
            .catch(function(error){
                console.log(error);
            });
    }
    //allows you to read in from the json file
    state = {
        //array of books
        books: []

    }
    //render method
    render() {
        return (
            //<h3> displays the message
            //calls array of books 
            <div>
                <h3> Hello from read component </h3>
                <Books books={this.state.books}></Books>
            </div>
        );
    }
}