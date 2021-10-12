import React from "react";

import ContacsForm from "./components/ContacsForm/ContacsForm";
import ContasctsList from "./components/ContactList/ContactsList";
import Filter from "./components/Filter/Filter";

import s from "./App.module.css";

class App extends React.Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    console.log("mount");
    this.setState({
      contacts: JSON.parse(localStorage.getItem("contacts")) || [],
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  onSubmit = (formState) => {
    if (!this.state.contacts.some((el) => el.name === formState.name)) {
      this.setState({
        contacts: [...this.state.contacts, formState],
      });
    } else {
      alert("There is already contact with the same name");
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  updateFilter = (value) => {
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    return this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div className={s.root}>
        <h2>Phonebook</h2>
        <ContacsForm onSubmit={this.onSubmit} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.updateFilter} />
        <ContasctsList
          contacts={visibleContacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
