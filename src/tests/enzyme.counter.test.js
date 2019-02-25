import React from "react";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import Counter from "../Hooks/Counter";

describe("Counter with Enzyme", () => {
  const counter = shallow(<Counter />);
  const buttons = counter.find("button");
  const spans = counter.find("span");
  const [increaseButton, decreaseButton] = [
    buttons.slice(0, 1),
    buttons.slice(1)
  ];
  const [label, count] = [spans.slice(0, 1), spans.slice(1)];

  it("renders and has initial count", () => {
    expect(label.text()).toEqual("Count");
    expect(count.text()).toEqual("0");
  });

  it("increases the count", () => {
    act(() => {
      increaseButton.simulate("click");
    });
    expect(count.text()).toEqual("1");
  });

  it("decreases the count", () => {
    // make it zero
    act(() => {
      decreaseButton.simulate("click");
    });
    expect(count.text()).toEqual("0");
    act(() => {
      decreaseButton.simulate("click");
    });
    // make it negative
    expect(count.text()).toEqual("-1");
  });
});
