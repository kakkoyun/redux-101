import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return (
        <div>Select a book to see details!</div>
      )
    }
    return (
      <div>
        <h3>Details for :</h3>
        <div>{this.props.book.title}</div>
        <br/>
        <h5>Pages :</h5>
        <div>{this.props.book.pages}</div>
      </div>
    );
  }
}

// Application State
function mapStateToProps(state) {

  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);