// test with npm test
import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import PokemonList from "./PokemonList";

// smoke test
it("renders without crashing", function() {
  shallow(<PokemonList />);
});

// snapshot test
it("matches snapshot", function() {
  let wrapper = shallow(<PokemonList />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});