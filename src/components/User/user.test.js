import React from 'react';
import { shallow } from 'enzyme';
import User from './';

describe('Component: User', () => {

  const user = {
    id: "cae5d3af-9ac7-471e-9061-e2e9d75f00e4",
    firstName: "Helen",
    lastName: "Hawkins",
    email: "hhawkins1@posterous.com",
    avatar: "http://dummyimage.com/100x100.jpg/dddddd/000000",
    ip: "179.239.189.173"
  }

  test('should render without crashing', () => {
    expect(shallow(<User user={user} />).length).toEqual(1);
  });

  test('sets the avatar img url', () => {
    const component = shallow(<User user={user} />);
    expect(component.find('Avatar').prop('img')).toBe("http://dummyimage.com/100x100.jpg/dddddd/000000");
  });

  test('displays the fullName in the h4 tag', () => {
    const fullName = `${user.firstName} ${user.lastName}`;
    const component = shallow(<User user={user} />);
    expect(component.find('h4').text()).toBe(fullName);
  });

});