let data1 = [
  {
    id: 10,
    name: "PARCEL1",
    sequence: 1,
    group: "Mumbai",
  },
  {
    id: 11,
    name: "PARCEL2",
    sequence: 2,
    group: "Mumbai",
  },
  {
    id: 13,
    name: "PARCEL3",
    sequence: 3,
    group: "Mumbai",
  },
  {
    id: 19,
    name: "PARCEL4",
    sequence: 4,
    group: "Delhi",
  },
  {
    id: 18,
    name: "PARCEL5",
    sequence: 5,
    group: "Delhi",
  },
  {
    id: 21,
    name: "PARCEL6",
    sequence: 6,
    group: "Kolkata",
  },
  {
    id: 12,
    name: "PARCEL7",
    sequence: 7,
    group: "Kolkata",
  },
  {
    id: 22,
    name: "PARCEL8",
    sequence: 8,
    group: "Kolkata",
  },
  {
    id: 23,
    name: "PARCEL9",
    sequence: 9,
    group: "Kolkata",
  },
  {
    id: 24,
    name: "PARCEL10",
    sequence: 10,
    group: "Mumbai",
  },
  {
    id: 25,
    name: "PARCEL11",
    sequence: 11,
    group: "Mumbai",
  },
  {
    id: 31,
    name: "PARCEL12",
    sequence: 12,
    group: "Mumbai",
  },
  {
    id: 34,
    name: "PARCEL13",
    sequence: 13,
    group: "Mumbai",
  },
  {
    id: 35,
    name: "PARCEL14",
    sequence: 14,
    group: "Delhi",
  },
  {
    id: 41,
    name: "PARCEL15",
    sequence: 15,
    group: "Delhi",
  },
  {
    id: 42,
    name: "PARCEL16",
    sequence: 16,
    group: "Delhi",
  },
  {
    id: 43,
    name: "PARCEL17",
    sequence: 17,
    group: "Delhi",
  },
  {
    id: 44,
    name: "PARCEL18",
    sequence: 18,
    group: "Kolkata",
  },
  {
    id: 53,
    name: "PARCEL19",
    sequence: 19,
    group: "Kolkata",
  },
  {
    id: 57,
    name: "PARCEL20",
    sequence: 20,
    group: "Kolkata",
  },
];

const groupToColor = {
  Mumbai: "red",
  Delhi: "yellow",
  Kolkata: "skyblue",
};
let indexData;
let nextId = Math.max(...data.map((item) => item.id)) + 1;

function displayData() {
  const html = document.querySelector(".parcel-data");
  let htmlData = "";
let data = axois.get("http://localhost:3000")
  for (const element of data.data) {
    htmlData += `
      <div class="name-parcel" id="parcel${element.id}">
        <p>${element.name}</p>
        <p class="parcel-id" style="background-color:${
          groupToColor[element.group]
        }">${element.id}</p>
      </div>
    `;
  }

  html.innerHTML = htmlData;

  data.forEach((item) => {
    document.getElementById(`parcel${item.id}`).addEventListener("click", function () {

        const currentlySelected = document.querySelector(".selected-parcel");

        if (currentlySelected) {
          currentlySelected.classList.remove("selected-parcel");
          indexData = null;
        }

        if (currentlySelected == this) {
          document.querySelector(".display-name").innerHTML = ``;
        }

        if (currentlySelected !== this) {
          this.classList.add("selected-parcel");
          const id = parseInt(this.id.replace("parcel", " "));
          indexData = data.find((r) => r.id == id);
          document.querySelector(
            ".display-name"
          ).innerHTML = `${indexData.name}`;
        }
      });
  });
}

displayData();

function newParcel() {
  const name = document.querySelector(".input-name").value.toUpperCase();
  const group = document.querySelector("#city").value;

  if (!name || !group) {
    alert("Please provide both name and group");
    return;
  }

  if (!indexData) {
    alert("select any parcel first");
    return;
  }

  const index = data.findIndex((item) => item === indexData);
  indexData = '';
  const newParcel = {
    id: nextId++,
    name: name,
    sequence: index,
    group: group,
  };

  return { newParcel, index };
}

document.querySelector(".add-after").addEventListener("click", () => {
  const newParcelData = newParcel();

  if (newParcelData) {
    const { newParcel, index } = newParcelData;
    data.splice(index + 1, 0, { ...newParcel, sequence: index + 1 });
    for (let i = index + 1; i < data.length; i++) {
      data[i].sequence = i + 1;
    }

    document.querySelector(".input-name").value = ``;
    document.querySelector("#city").value = ``;

    displayData();
  }
});

document.querySelector(".add-before").addEventListener("click", () => {
  const newParcelData = newParcel();

  if (newParcelData) {
    const { newParcel, index } = newParcelData;
    data.splice(index, 0, { ...newParcel, sequence: index });

    for (let i = index; i < data.length; i++) {
      data[i].sequence = i + 1;
    }

    document.querySelector(".input-name").value = ``;
    document.querySelector("#city").value = ``;

    displayData();
  }
});

document.querySelector(".replace").addEventListener("click", () => {
  const newParcelData = newParcel();

  if (newParcelData) {
    const { newParcel, index } = newParcelData;
    data[index] = newParcel;
    data.splice(index + 1, 0);

    document.querySelector(".input-name").value = ``;
    document.querySelector("#city").value = ``;

    displayData();
  }
});

document.querySelector(".delete").addEventListener("click", () => {
  if (!indexData) {
    alert("select a Parcel");
  }

  const index = data.findIndex((item) => item === indexData);

  data.splice(index, 1);
  displayData();
});

document.querySelector(".final").addEventListener("click", () => {
  console.log(data);
});
