import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      bookTitle : this.title,
      bookAuthor : this.bookAuthor,
      bookTextSnippet : this.bookTextSnippet,
      bookThumbnail : this.bookThumbnail
      
       }
  }
  
  let apiUrl : "https://www.googleapis.com/books/v1/volumes?q="

   const url = `${this.state.apiUrl}?=${book}`;

   const settings = {
     method: 'GET',
     headers : { 
       'Content-Type' : 'application/json'
     },
     body :JSON.stringify(data)
   };
   fetch(url,settings)
    .then(response =>{
      if(response.ok){
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJSON =>{
      let bookData = {
        bookTitle : responseJSON.volumeInfo.title,
        bookAuthor : responseJSON.volumeInfo.authors[0].name,
        bookTextSnippet : responseJSON.imageLinks.thumnnail,
        bookThumbnail : responseJSON.buyLink
      }
    })
 
 

  render(){
    return(
      <div>
 
            {bookData};
    
       
      </div>
    )
  }

export default App;
