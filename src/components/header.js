import React from "react";
/*
 * export allows you to export the class
 * extends extends react.component, header inherits from react.component
 * The only method you must define in a React.Component 
 * The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.
 */
export class Header extends React.Component{

    render() {
        return (
            <div>
                <h1> My Header in another component </h1> 
            </div>
        );
    }
}