import React from 'react';
import App from '../../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// test('renders Hello Ciprian', () => {
//   render(<App />);
//   const element = screen.getByText(/Hello, Ciprian!/i);
//   expect(element).toBeInTheDocument();
// });

let component;

beforeEach(() => {
   component = shallow(<App />);
})

it("shows a comment box", () => {
  expect(component.find(CommentBox).length).toEqual(1)
})

it("shows a comment list", () => {
  expect(component.find(CommentList).length).toEqual(1);
})