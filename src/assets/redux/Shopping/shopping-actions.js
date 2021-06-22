export const addToCart = (itemID) => {
  return {
    type: "ADD_TO_CART",
    payload: {
      id: itemID,
    },
  };
};

export const addTwo = (itemID) => {
  return {
    type: "ADD_TWO",
    payload: {
      id: itemID,
    },
  };
};
export const addThree = (itemID) => {
  return {
    type: "ADD_THREE",
    payload: {
      id: itemID,
    },
  };
};
export const addFour = (itemID) => {
  return {
    type: "ADD_FOUR",
    payload: {
      id: itemID,
    },
  };
};
export const addFive = (itemID) => {
  return {
    type: "ADD_FIVE",
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: "ADJUST_ITEM_QTY",
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: "LOAD_CURRENT_ITEM",
    payload: item,
  };
};
