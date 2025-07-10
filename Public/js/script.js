let btn = document.getElementById('getAsync'); // getting button by id 

const dataUrl = "http://localhost:3000/cars";

async function receiveData() {

    // grab the json data

  let response = await fetch(dataUrl);

  console.log(response);

  data = await response.json(); // parsing json content only

  console.log(data); // the json data from cars


  // displaying json data 

  let result = "";
  data.forEach(car => {
    result += `<p>${car.brand} - ${car.model} (${car.year})</p>`;
  });

  document.getElementById("data").innerHTML = result;
}

btn.addEventListener("click", receiveData);
