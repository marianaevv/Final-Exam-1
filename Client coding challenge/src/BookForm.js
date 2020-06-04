import React from 'react';

function BookForm( props ){
    return(
        <div>
             <form onSubmit>
          <div>
            <label htmlFor="bookToSearch">Libro</label>
            <input type="text"name="book" id="bookId"/>
            <button type="submit">Buscar</button>
          </div>
        </form>
        <div class="results">

        </div>
        </div>
    );
}

export default BookForm;