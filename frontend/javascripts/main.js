let data = [
  { id: 10, name: "PARCEL1", date: "2024-07-12", sequence: 1, group: "Mumbai" },
  { id: 11, name: "PARCEL2", date: "2024-08-15", sequence: 2, group: "Mumbai" },
  { id: 13, name: "PARCEL3", date: "2024-09-12", sequence: 3, group: "Mumbai" },
  { id: 19, name: "PARCEL4", date: "2024-09-12", sequence: 4, group: "Delhi" },
  { id: 18, name: "PARCEL5", date: "2024-09-12", sequence: 5, group: "Delhi" },
  { id: 21, name: "PARCEL6", date: "2024-09-12", sequence: 6, group: "Kolkata" },
  { id: 12, name: "PARCEL7", date: "2024-09-12", sequence: 7, group: "Kolkata" },
  { id: 22, name: "PARCEL8", date: "2024-09-12", sequence: 8, group: "Kolkata" },
  { id: 23, name: "PARCEL9", date: "2024-09-12", sequence: 9, group: "Kolkata" },
  { id: 24, name: "PARCEL10", date: "2024-07-22", sequence: 10, group: "Mumbai" },
  { id: 25, name: "PARCEL11", date: "2024-07-22", sequence: 11, group: "Mumbai" },
  { id: 31, name: "PARCEL12", date: "2024-07-22", sequence: 12, group: "Mumbai" },
  { id: 34, name: "PARCEL13", date: "2024-07-22", sequence: 13, group: "Mumbai" },
  { id: 35, name: "PARCEL14", date: "2024-07-21", sequence: 14, group: "Delhi" },
  { id: 41, name: "PARCEL15", date: "2024-07-21", sequence: 15, group: "Delhi" },
  { id: 42, name: "PARCEL16", date: "2024-07-21", sequence: 16, group: "Delhi" },
  { id: 43, name: "PARCEL17", date: "2024-07-21", sequence: 17, group: "Delhi" },
  { id: 44, name: "PARCEL18", date: "2024-07-21", sequence: 18, group: "Kolkata" },
  { id: 53, name: "PARCEL19", date: "2024-07-21", sequence: 19, group: "Kolkata" },
  { id: 57, name: "PARCEL20", date: "2024-07-21", sequence: 20, group: "Kolkata" },
];

const groupToColor = {
  Mumbai: "rgb(255, 216, 190,0.7)",
  Delhi: "rgb(255, 238, 221,0.7)",
  Kolkata: "rgb(184, 184, 255,0.7)",
};

let nextId = Math.max(...data.map((item) => parseInt(item.id))) + 1;

function displayData(filteredData = data) {
  const html = document.querySelector(".parcel-data");
  let htmlData = "";
  filteredData.forEach((element) => {
    const backgroundColor = groupToColor[element.group];
  
    htmlData += `
      <div class="name-parcel grid-parcel" style="background-color:${backgroundColor};" id="parcel${element.id}">
        <p style="background-color:transparent">${element.sequence}</p>
        <p style="background-color:transparent">${element.name}</p>
        <p style="background-color:transparent">${element.date}</p>
        <p style="background-color:transparent">${element.group}</p>
        <p style="background-color:transparent">${element.id}</p>
        <button class="edit" id="edit-${element.id}"> 
        <img src="./edit.png" style="background-color:transparent" alt="edit btn" width="40"></button>
        <button class="delete" style="background-color:transparent;border:none" id="delete-${element.id}">
        <img src="./delete.png" style="background-color:transparent" alt="delete btn" width="25" height="30"></button>
      </div>
    `;
  });

  html.innerHTML = htmlData;

  document.querySelectorAll(".edit").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.id.split("-")[1];
      editParcel(id);
    });
  });

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.id.split("-")[1];
      deleteParcel(id);
    });
  });
}

function editParcel(id) {
  const parcel = data.find(item => item.id == id);

  // Display inputs instead of paragraphs
  const parcelElement = document.getElementById(`parcel${id}`);
  parcelElement.innerHTML = `
  <div class="edited">
    <input type="text" id="edit-name-${id}" value="${parcel.name}">
    <input type="date" id="edit-date-${id}" value="${parcel.date}">
    <input type="text" id="edit-group-${id}" value="${parcel.group}">
    <button class="save" style="border-radius:10px" id="save-${id}">
    <img src="./save.png" style="background-color:transparent" alt="save btn" width="25" height="30"></button>
    </div>
  `;

  // Add event listener to save button
  const saveButton = document.getElementById(`save-${id}`);
  saveButton.addEventListener("click", () => {
    saveParcel(id);
  });
}

function saveParcel(id) {
  const name = document.getElementById(`edit-name-${id}`).value;
  const date = document.getElementById(`edit-date-${id}`).value;
  const group = document.getElementById(`edit-group-${id}`).value;

  const index = data.findIndex(item => item.id == id);
  data[index].name = name;
  data[index].date = date;
  data[index].group = group;

  displayData(); 
}

function deleteParcel(id) {
  const index = data.findIndex(item => item.id == id);
  data.splice(index, 1);
  updateSequence();
  displayData(); 
}

document.querySelector(".add-after").addEventListener("click", () => {
  const newParcelData = newParcel();

  if (newParcelData) {
    const { newParcel, index } = newParcelData;
    data.splice(index + 1, 0, newParcel);
    updateSequence();
    displayData();
  }
});

document.querySelector(".add-before").addEventListener("click", () => {
  const newParcelData = newParcel();

  if (newParcelData) {
    const { newParcel, index } = newParcelData;
    data.splice(index, 0, newParcel);
    updateSequence();
    displayData();
  }
});

function newParcel() {
  const name = document.querySelector(".input-name").value.toUpperCase();
  const group = document.querySelector("#city").value;
  const date = document.querySelector(".date").value;
  const sequence = parseInt(document.querySelector(".sequence").value);

  if (!name || !group || !date || isNaN(sequence)) {
    alert("Please provide name, group, date, and sequence");
    return null;
  }

  const newParcel = {
    id: nextId++,
    name: name,
    date: date,
    sequence: sequence,
    group: group,
  };

  const index = data.findIndex(item => item.sequence >= sequence);
  return { newParcel, index: index === -1 ? data.length - 1 : index };
}


function updateSequence() {
  data.sort((a, b) => a.sequence - b.sequence);
  for (let i = 0; i < data.length; i++) {
    data[i].sequence = i + 1;
  }
}

document.querySelector(".input").addEventListener("input", () => {
  const searchTerm = document.querySelector(".input").value;
  const Title = searchTerm.charAt(0).toUpperCase() + searchTerm.substring(1).toLowerCase()
  const searchResults = data.filter(item => 
    item.name.includes(searchTerm.toUpperCase()) || 
    item.group.includes(Title) ||
    item.date.includes(searchTerm) ||
    item.id.toString().includes(searchTerm)
  );
  displayData(searchResults);
});

displayData();
