import React from "react";
import CommentBox from "../CommentBox";
import { mount, unmount } from "enzyme";
import Root from '../../Root';

describe("text area", () => {
  let component;

  beforeEach(() => {
    component = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    component.unmount();
  });
  it("has a text area and a button", () => {
    expect(component.find("textarea").length).toEqual(1);
    expect(component.find("button").length).toEqual(2);
  });

  it("has a textarea that users can write text in", () => {
    component.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });

    component.update();

    expect(component.find("textarea").prop("value")).toEqual("new comment");
  });

  it("when form is submitted textarea is empty", () => {
    component.find("textarea").simulate("change", {
      target: { value: "new comment" },
    });

    component.update();

    expect(component.find("textarea").prop("value")).toEqual("new comment");

    component.find("form").simulate("submit");

    component.update();

    expect(component.find("textarea").prop("value")).toEqual("");
  });
});
