import React from "react";
import s from "./ContactsListItem.module.css";
import PropTypes from "prop-types";

export default class ContasctsListItem extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <span className={s.name}> {this.props.name}</span>
        <span className={s.num}> {this.props.number}</span>
        <button
          className={s.btn}
          name={this.props.name}
          onClick={() => this.props.removeContact(this.props.id)}
        >
          delete
        </button>
      </div>
    );
  }
}
