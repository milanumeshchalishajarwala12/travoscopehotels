import { GET_MENU, GET_CUST_MENU, FETCH_ERROR } from '../actions/types';

const initialState = {
  name: null,
  Item1: null,
  Item2: null,
  Item3: null,
  Item4: null,
  Item5: null,
  Item6: null,
  cuisine: null
};

export default function(state = initialState, action) {
  const {
    name,
    Item1,
    Item2,
    Item3,
    Item4,
    Item5,
    Item6,
    cuisine,
    dish1,
    dish2,
    dish3,
    dish4,
    dish5,
    p1,
    p2,
    p3,
    p4,
    p5,
    payload,
    type
  } = action;
  switch (type) {
    case GET_MENU:
      return {
        ...state,
        name: name,
        Item1: Item1,
        Item2: Item2,
        Item3: Item3,
        Item4: Item4,
        Item5: Item5,
        Item6: Item6
      };

    case GET_CUST_MENU:
      return {
        ...state,
        cuisine: cuisine,
        dish1: dish1,
        dish2: dish2,
        dish3: dish3,
        dish4: dish4,
        dish5: dish5,
        p1: p1,
        p2: p2,
        p3: p3,
        p4: p4,
        p5: p5
      };
    default:
      return state;
  }
}
