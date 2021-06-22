import Api from "./api";
import Api2 from "./api2";
import Api3 from "./api3";
import Api4 from "./api4";
import Api5 from "./api5";

const INITIAL_STATE = {
  products: Api,
  product2: Api2,
  product3: Api3,
  product4: Api4,
  product5: Api5,
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "ADD_TO_CART") {
    const item = state.products.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === "ADD_TWO") {
    const item = state.product2.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === "ADD_THREE") {
    const item = state.product3.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === "ADD_FOUR") {
    const item = state.product4.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === "ADD_FIVE") {
    const item = state.product5.find(
      (product) => product.id === action.payload.id
    );
    const inCart = state.cart.find((item) =>
      item.id === action.payload.id ? true : false
    );

    return {
      ...state,
      cart: inCart
        ? state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        : [...state.cart, { ...item, qty: 1 }],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  }
  if (action.type === "ADJUST_ITEM_QTY") {
    return {
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: +action.payload.qty }
          : item
      ),
    };
  }
  if (action.type === "LOAD_CURRENT_ITEM") {
    return {
      ...state,
      currentItem: action.payload,
    };
  } else {
    return state;
  }
};

export default shopReducer;
