import React, { Component } from 'react';
import { connect } from 'react-redux';

// Do not expose component, expose container!
// export default
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">
          {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// Whatever is retured from this method will bind to props of component.
function mapStateToProps(state) {

  return {
    books: state.books // state is global application state, so our store which comes from rootReducer!
  }
}

// Where component becomes a container!
export default connect(mapStateToProps)(BookList);