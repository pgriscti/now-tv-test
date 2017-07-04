import React from 'react';
import { shallow } from 'enzyme';
import MessageListItem from './';
import moment from 'moment';

describe('Component: MessageListItem', () => {

  const user = {
    id: "1234",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  };

  const message = {
    id: "7ee2784d-526f-4d08-af6d-4624b33811c2",
    userId: "1234",
    message: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor.",
    timestamp: "2016-03-19T04:36:05Z"
  };

  test('should render without crashing', () => {
    expect(shallow(<MessageListItem message={message} user={user} />).length).toEqual(1);
  });

  test('passes the correct values to the user component', () => {
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('User').prop('user')).toBe(user);
  });

  test('puts the user email as a tool tip of the message', () => {
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('p').prop('data-tip')).toBe(user.email);
  });

  test('displays the message a p tag', () => {
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('p').text()).toBe(message.message);
  });

  test('first column has the right props', () => {
    const formattedTimestamp = moment(message.timestamp).format('DD/MM/YYYY');
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('Col').at(0).prop('md')).toBe(2);
  });

  test('second column has the right props', () => {
    const formattedTimestamp = moment(message.timestamp).format('DD/MM/YYYY');
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('Col').at(1).prop('md')).toBe(10);
  });

  test('displays the formatted timestamp', () => {
    const formattedTimestamp = moment(message.timestamp).format('DD/MM/YYYY');
    const component = shallow(<MessageListItem message={message} user={user} />);
    expect(component.find('Col').at(1).getNodes()[0].props.children[2]).toBe(formattedTimestamp);
  });

});