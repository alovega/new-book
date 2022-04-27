import React, {useState} from "react";
import Popup from "./Popup";

//define page token component


const PageToken = (props) => {
    // setup state for toggling
    const [isOpen, setIsOpen] = useState(false)
    // set up state for pop value
    const [selectedData, setSelectedData] = useState({});

    const togglePopup = (e) => {
        setIsOpen(!isOpen);
        setSelectedData(e.target.getAttribute("value"))
      }
    const  { book }  = props
    const contents = book.pages.slice().map((data) => {
        let {content, pageIndex, tokens} = data
        pageIndex = String(pageIndex + 1)

        return content.length ? <div key={pageIndex} className="row">
            {
                tokens.map((token) => {
                    let [a, b] = token.position;
                    return( 
                    <span key={[a, b]} value={token.value} onClick={togglePopup}>
                        {content.slice(a, b + 1)}
                        <>
                            {isOpen && <Popup 
                                            value={selectedData}
                                        handleClose={togglePopup}
                                        />
                            }
                        </>
                    </span>)
                })

            }
        <footer>{pageIndex}</footer>
        </div>: <div className="row">"" <footer>{pageIndex}</footer></div>
    })
    return(
        <div className="page">
            {contents}
        </div>
    )
};

export default PageToken