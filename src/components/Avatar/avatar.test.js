import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './';

describe('Component: Avatar', () => {

  test('should render without crashing', () => {
    expect(shallow(<Avatar img={"url"} />).length).toEqual(1);
  });

  test('renders the image passed in', () => {
    const component = shallow(<Avatar img={"url"} />);
    expect(component.find('img').prop('src')).toBe("url");
  });

  test('renders a default image when no image is passed in', () => {
    const component = shallow(<Avatar img={null} />);
    expect(component.find('img').prop('src')).toBe("http://www.piblawg.co.uk/Content/images/blog/noavatar.jpg");
  });

});