import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

//extends the react component 
export class BookItems extends React.Component {
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
                    </Card.Body>
                </Card>
            </div>
        );
    }
}