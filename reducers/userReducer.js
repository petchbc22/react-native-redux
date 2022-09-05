import {
  FINDALL_USER,
  CREATE_USER,
  DELETE_USER,
  UPDATE_USER
} from "../actions/todoAction/types";

const initialState = [];

const userReducer = (users = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_USER:
      return [...users, payload];

    case FINDALL_USER:
      return payload; 

    // case FIND_MOVIE_BY_ID:
    //   return {
    //     ...movies,
    //     movie: payload.movie,
    //   };

    case UPDATE_USER:
      return {
        ...users,
        ...payload,
      };

    case DELETE_USER:
      return users.filter(({ id }) => id !== payload.id);

    default:
      return users;
  }
};

export default userReducer;
