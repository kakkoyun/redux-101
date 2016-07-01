export function selectBook(book) {
  console.log('A book has been selected: ', book.title);
  // It needs to return and object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}