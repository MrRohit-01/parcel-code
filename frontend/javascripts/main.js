async function fetchData(){

    let myObject = await fetch("http://localhost:3000");
    let myJson = await myObject.json();
    return myJson
  }
async function displayData(){
  let data =await fetchData()
  let html = document.querySelector(".parcel-data");
  html.innerHTML = `${data.data}`
}
displayData()


