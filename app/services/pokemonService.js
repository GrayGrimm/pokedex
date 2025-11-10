const BASE_URL = "https://pokeapi.co/api/v2/";

const index = async () => {
  try {
    const res = await fetch(BASE_URL + 'pokemon?offset=0&limit=151');
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export { index };
