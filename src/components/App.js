import React from "react";
import Page from "./Page"
import { gql, useQuery } from "@apollo/client";

const BOOK_QUERY = gql`
  query BookQuery{
    book{
      pages{
        content
        pageIndex
        tokens{
          position
          value
        }
      }
      title
    }
  }
`;


const App = () => {
    const { data }  = useQuery(BOOK_QUERY);
      return (
      <div>
        {data && (
          <>
          <Page data={data} />
          </>
        )}
      </div>
      );
  }


export default App