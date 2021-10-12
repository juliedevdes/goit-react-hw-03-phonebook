import React from "react";
import s from "./Filter.module.css";
import PropTypes from "prop-types";

export default class Filter extends React.Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func,
  };

  state = {
    filterValue: "",
  };

  handleFilterChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    this.props.onChange(e.currentTarget.value);
  };

  render() {
    return (
      <label className={s.label}>
        search through your contacts
        <input
          placeholder="..."
          className={s.input}
          name="filterValue"
          onChange={this.handleFilterChange}
          value={this.state.filterValue}
        />
      </label>
    );
  }
}
