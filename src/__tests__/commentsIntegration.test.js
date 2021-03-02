import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../App';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: "Fetched 1"}, { name: "Fetched 2"}]
    })
})

afterEach(() => {
    moxios.uninstall();
})

it("fetch a list of comments and display them", () => {
    const component = mount(<Root>
        <App />
    </Root>);

    component.find(".fetch-comments").simulate('click');

    // instead of setTimeout also we can use moxios.wait()
    
    setTimeout(() => {
        component.update();
        expect(component.find('li').length).toEqual(2);
        component.unmount();
    }, 1000);
})