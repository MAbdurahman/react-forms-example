import React, { Component } from 'react';
import UserForm from './components/forms/UserForm';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className='center'>
        <UserForm />
      </div>
    );
  };
};
