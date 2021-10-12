import React from "react";
import { v4 as uuidv4 } from "uuid";
import s from "./ContactForm.module.css";

import PropTypes from "prop-types";

export default class ContacsForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
    id: uuidv4(),
  };

  handleInputChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "", id: uuidv4() });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          name:
          <input
            className={s.inputName}
            placeholder="Jane Wayeet"
            name="name"
            onChange={this.handleInputChange}
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            type="text"
            required
          />
        </label>
        <label className={s.label}>
          number:
          <input
            className={s.inputNum}
            placeholder="+ 00-000-00"
            name="number"
            onChange={this.handleInputChange}
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            type="tel"
            required
          />
        </label>
        <button className={s.btn} type="submit">
          add contact
        </button>
      </form>
    );
  }
}
