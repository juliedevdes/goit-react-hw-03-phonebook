import React from "react";
import ContasctsListItem from "../ContactsListItem/ContactsListItem";
import s from "./ContactsList.module.css";
import PropTypes from "prop-types";

export default class ContasctsList extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
    removeContact: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ul className={s.list}>
        {this.props.contacts.map((contact) => {
          return (
            <li className={s.item} key={contact.id}>
              <ContasctsListItem
                name={contact.name}
                number={contact.number}
                removeContact={this.props.removeContact}
                id={contact.id}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}
