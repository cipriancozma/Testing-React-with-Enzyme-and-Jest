import React from 'react';
import { mount } from 'enzyme';

import CommentList from '../CommentList';
import Root from '../../Root';

let component;

beforeEach(() => {

    const initialState = {
        comments: ["Comment", "Comment1"]
    }

    component = mount(<Root initialState={initialState}>
        <CommentList />
    </Root>)
})

it("creates one li per comment", () => {
    expect(component.find('li').length).toEqual(2);
})

it("shows the text for each comment", () => {
    expect(component.render().text()).toContain("Comment");
    expect(component.render().text()).toContain("Comment1");

})