const API = "https://swapi.dev/api";

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`);
  const jsonData = await dataFetch.json();
  return jsonData;
};

export const geStarships = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = `${API}/starships/`;
  const starshipPages = new Map();
  let page = 0;
  while (url) {
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    url = result.next;
    starshipPages.set(++page, result);
    console.log(result);
  }
  console.log(starshipPages);
};
