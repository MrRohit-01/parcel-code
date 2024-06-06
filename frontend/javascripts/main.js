const data = [
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
const groupToColor={
  "Mumbai":"red",
  "Delhi":"yellow",
  "Kolkata":"skyblue"
}
async function displayData(){
  let html = document.querySelector(".parcel-data");
  let htmlData ='';
  for(let i = 0 ;i < data.length;i++ ){
htmlData += `<div class="name-parcel " id="parcel` + i + `"><p>${data[i].name}</p><p class="parcel-id" style=background-color:${groupToColor[data[i].group]}>${data[i].id}</p></div>`
  }
  html.innerHTML = htmlData;
}
displayData()
{/* <link id="foo" onclick="doWithThisElement(this.id)" /> */}
document.querySelector(".final").addEventListener("click",()=>{
  console.log(data)
});
document.querySelector(`parcel${id}`).addEventListener("click",()=>{
  const id = this.id;

 
});