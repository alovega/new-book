import React, {useState} from "react";
import PageToken from "./PageToken";


const Page = (props) => {
      const { book }  = props.data;
      const [stateData, setStateData] = useState({
        ...book,
        data: book.pages.slice(0, 2),
        maximumItems: book.pages.length,
        currentPage: 1,
        start: 0,
        stop: 2
      });
      
  
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
            <h2 className="header"> title</h2>
            <PageToken book={stateData} />
            {stateData.currentPage > 1 ?
              <button onClick={() => changePage('back')}>Back</button>
            : null}
            {stateData.pages.length -1 > stateData.currentPage * 2 ?
              <button onClick={() => changePage('next')}>Next</button>
            : null}
        </div>
      )
    
}

export default Page