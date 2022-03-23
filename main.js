 //const {default: axios} = require('axios');

// Select the button using querySelector and save it to a variable
const button = document.querySelector("button")

// Write a function that just console logs a string like ‘button clicked’

// Make an axios request that gets the information about the planet Alderaan

// Inside the callback passed to the .then, loop over the residents array returned on the results. It’s full of URLs.

// In the loop, make another get req. for each URL in the array.

// You’ll have another .then that has its own callback, inside which you should create an h2 element whose content is the name of the resident that you just requested.

// Append the h2 to your HTML document.
const buttonClicked = (e) => {
  console.log("button clicked")
  axios
    .get("https://swapi.co/api/planets/2/")
    
    .then((res) => {
      
      let residents = res.data.residents
      
      for (let i = 0; i < residents.length; i++) {
        axios.get(response.data.residents[i])
          
        .then((response) => {
          console.log(response.data)
          
          let header = document.createElement("header")
          
          header.name.innerHTML = response.data.name
          
          document.body.appendChild(header)
        })
      }
    })
    
    .catch((err) => {
      console.log(err)
    
    })
}

button.addEventListener("click", buttonClicked)

