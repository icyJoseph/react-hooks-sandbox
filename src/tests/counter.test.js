import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import Counter from "../Hooks/Counter";

describe("Counter wit React test utils", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const buttons = container.querySelectorAll("button");
  const spans = container.querySelectorAll("span");
  const [increaseButton, decreaseButton] = buttons;
  const [label, count] = spans;

  it("renders and has initial count", () => {
    expect(label.textContent).toEqual("Count");
    expect(count.textContent).toEqual("0");
  });

  it("increases the count", () => {
    act(() => {
      increaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(count.textContent).toEqual("1");
  });

  it("decreases the count", () => {
    act(() => {
      decreaseButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    expect(count.textContent).toEqual("0");
  });
});
