import React from "react";
import { BookItems } from "./bookItems";
//extends the react component 
export class Books extends React.Component {
    //render method
    render() {
        //map method which allows you to display all the book items 
        return this.props.books.map(
            (books) => {

                //Displays books
                return <BookItems books={books} key={books.isbn}></BookItems>
            }

        );
    }
}