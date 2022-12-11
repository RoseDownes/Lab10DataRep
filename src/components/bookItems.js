import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import axios from "axios";

//extends the react component 
export class BookItems extends React.Component {
    //constructor
    constructor() {
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }
    DeleteBook(e) {
        console.log("Clicked")
        e.preventDefault();
        axios.delete("http://localhost:4000/api/book/" + this.props.books._id)
            .then((res) => {
                this.props.ReloadData();
            })
            .catch();
    }

    //render method
    render() {
        return (
            //displays the message
            //puts a card around the title
            //displays the image of the book
            <div>

                <Card>
                    <Card.Header>{this.props.books.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.books.cover}></img>
                            <footer >
                                {this.props.books.author}
                            </footer>
                        </blockquote>
                        <Link to={"/edit/" + this.props.books._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteBook}> Delete</Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}