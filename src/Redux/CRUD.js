const messages = JSON.parse(localStorage.getItem("messages") || null);


export const reMessage = (state = messages, action) => {
  switch (action.type) {
    case "ADD_CRUD":
      return [...state, action.payload];

    case "DELETE_CRUD":
      return state.filter((item) => item.id !== action.payload);

    case "UPDATE_CRUD":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...action.payload };
        }
        return item;
      });

    default:
      return state;
  }
};

export const acAddMessage = (payload) => ({
  type: "ADD_CRUD",
  payload,
});

export const acDeleteMessage = (id) => ({
  type: "DELETE_CRUD",
  payload: id,
});

export const acUpdateMessage = (payload) => ({
  type: "UPDATE_CRUD",
  payload,
});