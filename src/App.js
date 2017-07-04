import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MessageList from './components/MessageList';

import { getChatLog, getUsers }from './service';

import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.getChatLog();
    this.props.getUsers();
  }
  
  render() {
    return (
      <div>
        <h3>Solution by Pablo Griscti</h3>
        <MessageList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators(
  { 
    getChatLog,
    getUsers 
  }, 
  dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
