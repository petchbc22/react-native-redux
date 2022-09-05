import { FINDALL_USER,CREATE_USER,DELETE_USER,UPDATE_USER } from "./types";
import UserDataService from "../../services/users.service";
export const createUser = (name, email) => async (dispatch) => {
    try {
      const res = await UserDataService.createUser({
        name,
        email
      });

      dispatch({
        type: CREATE_USER,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await UserDataService.getUser();
      dispatch({
        type: FINDALL_USER,
        payload: res.data,
      });
    } catch (err) {
      console.log('err--->',err)
     
    } 
  };

  export const updateUser = (id, data) => async (dispatch) => {
    try {
      console.log('action----',id,data)
      const res = await UserDataService.updateUser(id, data);
      console.log('res------>',res)
      dispatch({
        type: UPDATE_USER,
        payload: { users: res.data },
        
      });

      return Promise.resolve(res.data);
    } catch (err) {
      console.log('err-update---',err)
      return Promise.reject(err);
    }
  };

export const deleteUser= (id) => async (dispatch) => {
  try {
    await UserDataService.deleteUser(id);

    dispatch({
      type: DELETE_USER,
      payload: { id },
    });
  } catch (err) {
    console.log('sss----',err.response);
  }
};

//   export const findOneMovie = (MovieId) => (dispatch) => {
//     return MovieDataService.findMovieByid(MovieId).then(
//       (data) => {
//         dispatch({
//           type: FIND_MOVIE_BY_ID,
//           payload:{ movie: data },
//         });
  
//         return Promise.resolve();
//       },
//       (err) => {
//         dispatch({
//           type: SET_MESSAGE,
//           payload: err.response.status,
//         });
//       }
//     )
//   };

//   export const findMoviesName = (movieName) => async (dispatch) => {
//     try {
//       const res = await MovieDataService.searchMovie(movieName);
  
//       dispatch({
//         type: RETRIEVE_MOVIE,
//         payload: res.data,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };
  
 
  