const API = "https://swapi.dev/api"

// Get Luke Skywalker
export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/people/1`)
  const jsonData = await dataFetch.json()
  return jsonData
};


