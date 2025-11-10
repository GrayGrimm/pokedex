const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export { index };
