import React from "react";
import axios from "axios";

//extends the react.component 
export class Create extends React.Component {
    //render method

    constructor() {
        super();
        //bind the events or will not work
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        //3 entries
        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }
    //will take an event wheni t get invoked
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}, ${this.state.cover} , ${this.state.author}`);
         //create an object
        const book = {
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        //// Send data to the server, using axios.post
        axios.post('http://localhost:3000/api/books', book)
        .then()
        .catch();
        
        this.setState({
            title: '',
            cover: '',
            author: ''
        })
    }
     // Update the state
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value

        })
    }
     // Update the state
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })

    }
    //method to update the state
    onChangeAuthor(e) {
        this.setState({
            author: e.target.value
        })
    }
    render() {
        return (
            //displays the message 
            <div>
                <h3> Hello from create component </h3>
                {/*form with handlers that are going to handle the actions and update the server */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>
                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeAuthor}
                        />
                    </div>
                    {/*submit button take all the changes and update 
                    the state  */}
                    <input type="submit" value="Submit" />

                </form>
            </div>
        );
    }
}