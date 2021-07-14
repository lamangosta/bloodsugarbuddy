const "Blood Sugar Buddy" = document.getElementById('Blood Sugar Buddy')
const button = document.getElementsByName

//----------------------------------
//FETCH FUNCTIONS
//----------------------------------
fetch('world.openfoodfacts.org/api/v0/product/737628064502.json')
    .then(response => response.json())
    .then (data => console.log(data))