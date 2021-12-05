import { Component } from 'react';
import Contacts from './components/Contacts/Contacts';
import Form from './components/Form/Form';
import { nanoid } from 'nanoid';
import 'modern-normalize/modern-normalize.css';
import './index.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };
  deleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  formSubmitHandler = data => {
    console.log(data);
  };
  addContact = (name, number) => {
    console.log(name, number);
    const contactId = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contactId, ...prevState.contacts],
    }));
  };
  render() {
    const { contacts } = this.state;
    return (
      <div>
        <Form onSubmit={this.addContact} />
        <Contacts contacts={contacts} onDeleteContact={this.deleteContacts} />
      </div>
    );
  }
}

export default App;
