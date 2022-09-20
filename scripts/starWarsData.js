const API = "https://swapi.dev/api";

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`);
  const jsonData = await dataFetch.json();
  return jsonData;
};

export const getStarships = async () => {
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
    // console.log(result);
  }

  // console.log(starshipPages);
  return starshipPages;
};

export const getPlanetHothDetails = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = `${API}/planets/4`;
  const data = await fetch(url, requestOptions);
  return await data.json();
};

export const getFilmDetails = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const url = `${API}/films`;
  const data = await fetch(url, requestOptions);
  return await data.json();
};

export const getPlanets = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = `${API}/planets/`;
  let planets = [];
  while (url) {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    url = data.next;
    planets = [...planets, ...data.results];
  }

  // console.log(planets);
  return planets;
};

export const getSpecies = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = `${API}/species/`;
  let species = [];
  while (url) {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    url = data.next;
    species = [...species, ...data.results];
  }

  // console.log(species);
  return species;
};

export const getStartshipDetails = async () => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  let url = `${API}/starships/`;
  let starships = [];
  while (url) {
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    url = data.next;
    starships = [...starships, ...data.results];
  }

  // console.log(species);
  return starships;
};
