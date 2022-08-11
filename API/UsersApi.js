export const getUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
