import React, {useState} from "react";
import Popup from "./Popup";

//define page token component


const PageToken = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const togglePopup = () => {
        setIsOpen(!isOpen);
      }
    const  { book }  = props
    console.log(book);
    const contents = book.pages.slice().map((data) => {
        let {content, pageIndex, tokens} = data
        pageIndex = pageIndex ? String(pageIndex): "0"

        return content.length ? <div key={pageIndex} className="row">
            
            {
                tokens.map((token) => {
                    let [a, b] = token.position;
                    return( 
                    <span key={[a, b]} onClick={togglePopup}>
                        {content.slice(a, b + 1)}
                        <>
                            {isOpen && <Popup 
                                            value={token.value}
                                        handleClose={togglePopup}
                                        />
                            }
                        </>
                    </span>)
                })
            }
        </div>: <div className="row">""</div>
    })
    console.log(contents)
    return(
        <div className="page">
            {contents}
        </div>
    )
};

export default PageToken