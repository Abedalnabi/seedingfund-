let token = localStorage.getItem("token") ? localStorage.getItem("token") : "";

const initialState = {
  token: token,
  user: {},
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TOKEN":
      return { token: payload.token, user: payload.user };
    default:
      return state;
  }
};

export default loginReducer;

//Action
export const setToken = (userLog) => {
  return { type: "SET_TOKEN", payload: userLog };
};
