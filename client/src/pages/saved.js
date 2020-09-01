import React,{ useEffect } from "react";
import { useBookContext } from "../utils/GlobalState";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import { GET_ALL_BOOKS, DELETE_BOOK } from "../utils/actions";

const Styles = {
    // nav: {
    //     fontWeight: 900,
    //     fontSize: "26px"
    // }


}

function Saved() {
    const [state, dispatch] = useBookContext();
    useEffect(() => {
        // Get all the books from our Mongo DB

        API.getBooks().then((response) => {
            console.log("Back from DB: " + JSON.stringify(response.data ));

          dispatch( { type: GET_ALL_BOOKS, savedBooks: response.data } );
        });
      }, []);

      function removeBook(id) {


          API.deleteBook(id).then( dispatch({ type: DELETE_BOOK, id})).catch( err =>  console.log(err) );
      }
      function nodeMail() {
          API.nodeMail().then( (result) => {
              console.log("sent node mail");
          }).catch(err=>console.log(err));
      }
      function sendMail() {
          API.sendMail().then( (result) => {
              console.log("sentmail");
          }).catch(err=>console.log(err));
      }

    return (
        <div className="container" style={{backgroundColor:"#ffffff", padding:"10px"}}>
            {
                state.savedBooks ?
                state.savedBooks.map(book => {
                return (
                    <div className="collection-item" key={book._id}>
                 
                    <p>{book.title}</p>
                    <p>{book.description}</p>

                    { (book.image!="") && (book.image != undefined) ? 
                    <img src={book.image} /> : <p>No image stored.</p> }

               

                        <button onClick={()=>removeBook( book._id )}>
                        Remove Book</button>
                        <button onClick={()=>sendMail()}>Send mail</button>
                        <button onClick={nodeMail}>Send Node Mail</button>
                   
                </div>)
            })
            :
            <div></div>
            }
       
        </div>
    );

}

export default Saved;