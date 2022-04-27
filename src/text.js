import React from "react";
import ReactDOM  from "react-dom";z
import './index.css';

class Book extends React.Component{
    constructor(prop){
        super(prop);
        this.state = {}
    }
    render(){
        return(
            <div className="page">  
                <div className="row">
                    <span>With</span> CSS, you have full control over the margins. There are properties for 
                    setting the margin for each side of an element (top, right, bottom, and left).
                </div>
                <div className="row">
                    With CSS, you have full control over the margins. There are properties for 
                    setting the margin for each side of an element (top, right, bottom, and left).
                </div> 
            </div>
        )
    }
}

ReactDOM.render(
    <Book />,
    document.getElementById('root')
);