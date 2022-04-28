import React, {useState} from "react";
import PageToken from "./PageToken";


const Page = (props) => {
      const { book }  = props.data;
      // set state to use in pagination
      const [stateData, setStateData] = useState({
        ...book,
        data: book.pages.slice(0, 2),
        maximumItems: book.pages.length,
        currentPage: 1,
        start: 0,
        stop: 2
      });
      
      // pagination logic
      const changePage = (direction) => {
        if (direction === 'back') {
          setStateData({ ...stateData,
            currentPage: stateData.currentPage - 1,
            start: stateData.start - 2,
            stop: stateData.stop  - 2,
            data: book.pages.slice(stateData.start - 2, stateData.stop - 2 )
          });
        } else if (direction === 'next') {
          setStateData({ ...stateData,
            currentPage: stateData.currentPage + 1,
            start: stateData.start + 2,
            stop: stateData.stop +2,
            data: book.pages.slice(stateData.start + 2, stateData.stop + 2 )
        
          });
        }
      }
      return(
        <div>
            <h2 className="header"> {stateData.title}</h2>
            <PageToken book={stateData} />
            <div className="page">
              {stateData.currentPage > 1 ?
                <button className="back button" onClick={() => changePage('back')}>Back</button>
              : null}
              {stateData.pages.length -1 > stateData.currentPage * 2 ?
                <button className="next button" onClick={() => changePage('next')}>Next</button>
              : null}
            </div>
        </div>
      )
    
}

export default Page