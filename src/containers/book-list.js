import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectBook } from "../actions/index";

// Do not expose component, expose container!
// export default
class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item" onClick={() => this.props.selectBook(book)}>
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

// Whatever is returned from this method will bind to props of component.
function mapStateToProps(state) {

  return {
    // state is global application state, so our store which comes from rootReducer!
    books: state.books
  }
}


// Whatever is returned from this method will bind to props of component.
function mapDispatchToProps(dispatch) {
  // Whenever selectBook fired dispatch it to all reducers.
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Where component becomes a container!
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
