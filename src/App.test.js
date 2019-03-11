// test with npm test
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import JokeList from "./JokeList";

// smoke test
it("renders without crashing", function() {
  shallow(<JokeList />);
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<JokeList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});