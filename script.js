// Crear un arreglo de banderas para cada sección
let fetched = [false, false, false, false, false, false];

function showContent(index) {
  const sections = document.querySelectorAll(".body__item");
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (i === index) {
      section.classList.add("body__item__active");
      // Solo hacer fetch si no se ha hecho antes
      if (!fetched[i]) {
        if (i == 0) {
        } else if (i == 1) {
          fetchSites();
        } else if (i == 2) {
          fetchCodeforces();
        } else if (i == 3) {
          fetchAtCoder();
        } else if (i == 4) {
          fetchCodeChef();
        } else if (i == 5) {
          fetchHackerRank();
        }
        // Marcar la sección como ya hecha fetch
        fetched[i] = true;
      }
    } else {
      section.classList.remove("body__item__active");
    }
  }
}

function fetchSites() {
  fetch("https://kontests.net/api/v1/sites")
    .then((response) => response.json())
    .then((data) => {
      const sites = []; // Creamos un array vacío para guardar los sitios
      for (var i = 0; i < data.length; i++) {
        var name = data[i][0]; // Obtenemos el nombre del sitio
        var name_s = data[i][1]; // Obtenemos el nombre corto del sitio
        var url = data[i][2]; // Obtenemos la url del sitio

        sites.push({
          // Añadimos un objeto al array sites con los datos del sitio
          name: name,
          name_s: name_s,
          url: url,
        });
      }
      // const result = { sites: sites }; // Creamos un objeto que contiene el array sites como una propiedad llamada sites
      // console.log(result); // Mostramos el objeto result en la consola
      console.log(sites);

      const cardContainer = document.getElementById("card-container");

      sites.forEach((site) => {
        const card = document.createElement("div");
        card.className = "card";

        const img = document.createElement("img");
        img.src = "code.jpeg";

        const content = document.createElement("div");
        content.className = "card-content";

        const name = document.createElement("p");
        name.textContent = site.name;

        const button = document.createElement("button");
        button.className = "card-button";
        button.textContent = "Ver más";
        button.onclick = () => window.open(site.url);

        content.appendChild(name);
        content.appendChild(button);
        card.appendChild(img);
        card.appendChild(content);
        cardContainer.appendChild(card);
      });
    });
}

function fetchCodeforces() {
  fetch("https://kontests.net/api/v1/codeforces")
    .then((response) => response.json())
    .then((data) => {
      const dataCodeforces = data;
      const cfTableBody = document.getElementById("cfTableBody");
      dataCodeforces.forEach((contest) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td><img src="cf.jpeg" alt="Image" /></td>
                <td>${contest.name}</td>
                <td>${contest.start_time}</td>
                <td>${contest.end_time}</td>
                <td><a href="${contest.url}">Link</td>
              `;
        cfTableBody.appendChild(tr);
      });
    });
}

function fetchAtCoder() {
  fetch("https://kontests.net/api/v1/at_coder")
    .then((response) => response.json())
    .then((data) => {
      const dataAtCoder = data;
      const acTableBody = document.getElementById("acTableBody");
      dataAtCoder.forEach((contest) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                  <td><img src="ac.jpeg" alt="Image" /></td>
                  <td>${contest.name}</td>
                  <td>${contest.start_time}</td>
                  <td>${contest.end_time}</td>
                  <td>${contest.rated_range}</td>
                  <td><a href="${contest.url}">Link</td>
                `;
        acTableBody.appendChild(tr);
      });
    });
}

function fetchCodeChef() {
  fetch("https://kontests.net/api/v1/code_chef")
    .then((response) => response.json())
    .then((data) => {
      const dataCodeChef = data;
      const ccTableBody = document.getElementById("ccTableBody");
      dataCodeChef.forEach((contest) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td><img src="cc.png" alt="Image" /></td>
                    <td>${contest.name}</td>
                    <td>${contest.start_time}</td>
                    <td>${contest.end_time}</td>
                    <td><a href="${contest.url}">Link</td>
                  `;
        ccTableBody.appendChild(tr);
      });
    });
}

function fetchHackerRank() {
  fetch("https://kontests.net/api/v1/hacker_rank")
    .then((response) => response.json())
    .then((data) => {
      const dataHackerRank = data;
      const hrTableBody = document.getElementById("hrTableBody");
      dataHackerRank.forEach((contest) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                      <td><img src="hr.jpeg" alt="Image" /></td>
                      <td>${contest.name}</td>
                      <td>${contest.start_time}</td>
                      <td>${contest.end_time}</td>
                      <td><a href="${contest.url}">Link</td>
                    `;
        hrTableBody.appendChild(tr);
      });
    });
}
