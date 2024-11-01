import Etudiant from "./Etudiant.js";

const filterBySettings = {
  column: "id",
  desc: false,
};

// Display Students with Sorting
const displayEtudiants = async () => {
  const response = await Etudiant.allEtudiants();
  
  response.sort((a, b) => {
    const isNumber = typeof a[filterBySettings.column] === "number";
    if (isNumber) {
      return filterBySettings.desc
        ? b[filterBySettings.column] - a[filterBySettings.column]
        : a[filterBySettings.column] - b[filterBySettings.column];
    }
    return filterBySettings.desc
      ? b[filterBySettings.column].localeCompare(a[filterBySettings.column])
      : a[filterBySettings.column].localeCompare(b[filterBySettings.column]);
  });

  return response.map((data) => {
    const { id, name, date, note } = data;
    const etudiant = new Etudiant(name, date, note);

    return `<tr>
      <td>${id}</td>
      <td>${etudiant.name}</td>
      <td>${etudiant.getAge()} years old</td>
      <td>
        <span class="badge rounded-pill text-bg-${
          etudiant.isAdmitted() ? "success" : "danger"
        }">
          ${etudiant.note} / ${Etudiant.MAX_NOTE}
        </span>
      </td>
      <td><button class="delete btn btn-danger btn-sm" data-id="${id}">Supprimer</button></td>
    </tr>`;
  });
};

// Add Student
const addEtudiant = async (event) => {
  event.preventDefault();
  const [name, date, note] = document.querySelectorAll("#name,#date,#note");
  const etudiant = new Etudiant(name.value, date.value, parseFloat(note.value));
  await etudiant.addEtudiant();
  renderEtudiants();
};

// Render Students
const renderEtudiants = () => {
  const body = document.querySelector(".liste-etudiants");
  displayEtudiants().then((data) => {
    body.innerHTML = data.join(" ");
    init();
  });
};

// Delete Student
window.deleteEtudiant = async (id) => {
  await Etudiant.deleteEtudiant(id);
  renderEtudiants();
};

// Initialize Events
const init = () => {
  document.querySelector("#refresh").addEventListener("click", renderEtudiants);
  document.querySelector("#add").addEventListener("click", addEtudiant);

  document.querySelectorAll(".delete").forEach((button) =>
    button.addEventListener("click", () =>
      deleteEtudiant(button.dataset.id)
    )
  );
};

// Toggle Sorting
window.toggleSortDirection = (column) => {
  if (filterBySettings.column === column) {
    filterBySettings.desc = !filterBySettings.desc;
  } else {
    filterBySettings.column = column;
    filterBySettings.desc = false;
  }
  renderSortIcons();
  renderEtudiants();
};

// Render Sort Icons
const renderSortIcons = () => {
  document.querySelectorAll("th.sort-element").forEach((th) => {
    const column = th.dataset.column;
    const icon = column === filterBySettings.column 
      ? (filterBySettings.desc ? "↓" : "↑") 
      : "";
    th.querySelector("span").innerHTML = icon;
  });
};

renderSortIcons();
renderEtudiants();
