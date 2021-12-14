import React from 'react';

const AddBook = () => {
  return (
    <div>
      <form>
        <input placeholder="Book Name" type="text" />
        <select name="books" id="books">
          <option value="category">Category</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
