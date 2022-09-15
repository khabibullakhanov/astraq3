const users = JSON.parse(localStorage.getItem("users") || "[]");

export const reCrud = (state = users, action) => {
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



export const acAddCrud = (payload) => ({
  type: "ADD_CRUD",
  payload,
});

export const acDeleteCrud = (id) => ({
  type: "DELETE_CRUD",
  payload: id,
});

export const acUpdateCrud = (payload) => ({
  type: "UPDATE_CRUD",
  payload,
});