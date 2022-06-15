import React, {useState} from "react";
import Popup from "./Popup";

//define page token component


const PageToken = (props) => {
    // setup state for toggling
    const [isOpen, setIsOpen] = useState(false)
    // set up state for pop value
    const [selectedData, setSelectedData] = useState({});

    const replaceJSX = (str, find, replace) =>{
        let parts = str.replace(find, replace);
        return parts;
    }

    const togglePopup = (e) => {
        setIsOpen(!isOpen);
        setSelectedData(e.target.getAttribute("value"))
      }
    const  { book }  = props
    const contents = book.data.slice().map((data) => {
        let {content, pageIndex, tokens} = data
        pageIndex = String(pageIndex + 1)

        return content.length ? <div key={pageIndex} className="row">
            {
                tokens.map((token, index, array) => {
                    let prev_index = index > 0 ? index-1 : 0;
                    let [c,d] = tokens[prev_index].position;
                    let [a,b] = token.position;
                    if (a !== c){
                        a = d+1
                    }
                    if (index + 1 === array.length && index +1 !== content.length){
                        b = b+1
                    }
                    let value = <span  value={token.value} onClick={togglePopup}>
                        {content.slice(a, b+1 )}
                        <>
                            {isOpen && <Popup 
                                            value={selectedData}
                                        handleClose={togglePopup}
                                        />
                            }
                        </>
                    </span>
                    return( 
                    <span  value={token.value} onClick={togglePopup}>
                        {content.slice(a, b+1 )}
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
        <div className="footer">{pageIndex}</div>
        </div>: <div className="row"><div className="footer">{pageIndex}</div></div>
    })
    return(
        <div className="page">
            {contents}
        </div>
    )
};

export default PageToken