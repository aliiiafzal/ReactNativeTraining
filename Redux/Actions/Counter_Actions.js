const increment_counter = () => {
  return {
    type: 'increment',
  };
};
const decrement_counter = () => {
  return {
    type: 'decrement',
  };
};
const add_to_list = number => {
  return {
    type: 'addtolist',
    payload: number,
  };
};
const login = (email, password) => {
  return {
    type: 'login',
    payload: {
      useremail: email,
      userpassword: password,
    },
  };
};
const fetchmovies = movies => {
  return {
    type: 'fetchmovies',
    payload: movies,
  };
};

const getMovies = async (dispatch, setLoading) => {
  try {
    setLoading(true);
    const response = await fetch('https://reactnative.dev/movies.json');
    const json = await response.json();
    dispatch(fetchmovies(json.movies));
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

export {increment_counter, decrement_counter, add_to_list, login, getMovies};
