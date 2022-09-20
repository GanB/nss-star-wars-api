import {
  fetchLuke,
  getStarships,
  getPlanetHothDetails,
  getFilmDetails,
  getPlanets,
  getSpecies,
  getStartshipDetails,
} from "./starWarsData.js";

const displayLuke = async () => {
  const data = await fetchLuke();
  renderLukeToDOM(data);
};

const renderLukeToDOM = (data) => {
  let html = `
    <article>
      <section class="card">
        <p>Name: ${data.name}</p>
        <p>height: ${data.height}</p>
      </section>
    </article>
  `;
  document.getElementById("app").innerHTML = html;
};

const displayStarships = async () => {
  const data = await getStarships();
  if (data.has(4)) {
    renderNumberOfStarships(data.get(4));
  }
};

const renderNumberOfStarships = (data) => {
  document.getElementById("app-number-of-starships").innerHTML = `
  <article>
      <section class="card">
        <p>The number of starships on page # 4 is ${data.results.length}</p>
      </section>
    </article>
  `;
};

const displayPlanetHothData = async () => {
  const data = await getPlanetHothDetails();
  if (data) renderPlanetHothData(data);
};

const renderPlanetHothData = (data) => {
  document.getElementById("app-hoth-data").innerHTML = `
  <article>
      <section class="card">
        <ul>
        <li>Planet Name: ${data.name}</li>
        <li>Rotation Period  : ${data.rotation_period}</li>
        <li>Orbital Period   : ${data.orbital_period}</li>
        <li>Gravity          : ${data.gravity}</li>
        <li>Climate          : ${data.climate}</li>
        <li>Terrain          : ${data.terrain}</li>
        </ul>
      </section>
    </article>
  `;
};

const displayFilmDetails = async () => {
  const data = await getFilmDetails();
  if (data) renderFilmDetails(data);
};

const renderFilmDetails = (data) => {
  let html = `<article>
      <section class="card">
        <table>
          <tr>
            <th>Film</th>
            <th>Release Date</th>
          </tr>`;

  for (const film of data.results) {
    html += `<tr>
                <td>${film.title}</td>
                <td>${film.release_date}</td>
            </tr>`;
  }

  html += `</table>
      </section>
    </article>
  `;
  document.getElementById("app-films-release-date").innerHTML = html;
};

const displayPlanetDetails = async () => {
  const data = await getPlanets();
  if (data) {
    data.sort((a, b) => parseInt(a.diameter) - parseInt(b.diameter));
    renderPlanetDetails(data);
  }
};

const renderPlanetDetails = (data) => {
  let html = `<article>
      <section class="card">
        <table>
          <tr>
            <th>Planet</th>
            <th>Details</th>
          </tr>`;

  for (const planet of data) {
    html += `<tr>
                <td>${planet.name}</td>
                <td>        
                  <ul>
                    <li>Diameter  : ${planet.diameter}</li>
                    <li>Rotation Period  : ${planet.rotation_period}</li>
                    <li>Orbital Period   : ${planet.orbital_period}</li>
                    <li>Gravity          : ${planet.gravity}</li>
                    <li>Climate          : ${planet.climate}</li>
                    <li>Terrain          : ${planet.terrain}</li>
                  </ul>
                </td>
              </tr>`;
  }

  html += `</table>
      </section>
    </article>
  `;
  document.getElementById("app-planets-data").innerHTML = html;
};

const displaySpeciesDetails = async () => {
  const data = await getSpecies();
  if (data) {
    renderSpeciesDetails(data);
  }
};

const renderSpeciesDetails = (data) => {
  let html = `<article>
      <section class="card">
        <table>
          <tr>
            <th>Species</th>
            <th>Details</th>
          </tr>`;

  for (const species of data) {
    html += `<tr>
                <td>${species.name}</td>
                <td>        
                  <ul>
                    <li>Language  : ${species.language}</li>
                    <li>Designation  : ${species.designation}</li>
                    <li>Classification  : ${species.classification}</li>
                  </ul>
                </td>
              </tr>`;
  }

  html += `</table>
      </section>
    </article>
  `;
  document.getElementById("app-species-data").innerHTML = html;
};

const displayStarshipDetails = async () => {
  const data = await getStartshipDetails();
  if (data) {
    renderStarshipDetails(data);
  }
};

const renderStarshipDetails = (data) => {
  let html = `<article>
      <section class="card">
        <table>
          <tr>
            <th>StarShip</th>
            <th>Details</th>
          </tr>`;

  for (const starship of data) {
    html += `<tr>
                <td>${starship.name}</td>
                <td>        
                  <ul>
                    <li>Capacity  : ${starship.passengers}</li>
                    <li>Cargo Capacity  : ${starship.cargo_capacity}</li>
                    <li>Class  : ${starship.starship_class}</li>
                  </ul>
                </td>
              </tr>`;
  }

  html += `</table>
      </section>
    </article>
  `;
  document.getElementById("app-starship-data").innerHTML = html;
};

displayLuke();
displayStarships();
displayPlanetHothData();
displayFilmDetails();
displayPlanetDetails();
displaySpeciesDetails();
displayStarshipDetails();
