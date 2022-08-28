const title = document.querySelector('h1');
const by = document.querySelector('h2')
const type = document.querySelector('h3')
const url = document.querySelector('a')


// This is the root url for the Rest API
const baseUrl = "https://hacker-news.firebaseio.com/v0";
// This url makes sure the result is returned in JSON
const newStoriesUrl = `${baseUrl}/topstories.json`;
// This url makes can be modified to get a particular new
const itemUrl = `${baseUrl}/item/`;

// This is a config object for the fetch function
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

//   This request get the first 500 request
fetch(newStoriesUrl, options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));


//   This fetch get the post with an ID of 32494485
fetch(itemUrl + "32511086" + ".json", options)
  .then((response) => response.json())
  .then((response) =>{
    title.innerHTML = response.title
    by.innerHTML = response.by
    type.innerHTML = response.type
    url.href = response.url
    url.innerHTML = response.url


  }) 
//    console.log(response)
  .catch((err) => console.error(err));



// Assignment
/*
Make an app that goes to 
https://catfact.ninja/fact
Let the fetch function go to the API every 5 seconds, get a fact and append it to h1 tag on the html
*/ 
const header = document.querySelector('h1');
const body = document.querySelector('.body');
setInterval(() => {
    //fetching the api
    fetch('https://catfact.ninja/fact')
    // turning it to json file
      .then(response => response.json())
      .then(data => {
        // loging the json data
          console.log(data)
        // display on the windows
          header.innerHTML = data.fact;
           const html = `
             <h1>${data.fact}</h1>
          `

      body.insertAdjacentHTML('afterend', html)
      })
      //handle an error if one is thrown
      .catch(err => console.error(err))
}, 5000);

// 2. Next create an API for a currency app
// https://api.coindesk.com/v1/bpi/currentprice.json
// Let the fetch function go to the API every 5 seconds, get the currency exchange and append the important details to the html
// Do this inside a new file called currency.html
// **********HINT********** 🤔
// setInterval(function () {});
// */


// setInterval(() => {
    //fetching the api
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    //turning it to json file
      .then(response => response.json())
      .then(data => {
        //loging the json data
            console.log(data)
            // tried using for loop but encounter error
            // for(let i = 0; i < data.length; i++) {
            //     console.log(data[i]);
            // }
            // let currencyRate;
            // data.map(el => console.log(el.code))
            //for of to loop throu the object in object
            for (const [key, value] of Object.entries(data.bpi)) {
                console.log(`${value.code} ${value.rate}`);
            // show it on the window
                const html = `<h1>Currency:${value.code} Rate: ${value.rate} symbol:${value.symbol} Description:${value.description} Rate-Float:${value.rate_float}</h1>`
                body.insertAdjacentHTML('afterend', html);


                // header.innerHTML = `${value.code} ${value.rate}`;
                // return
            }
            // console.log(currencyRate);
        //   header.innerHTML = JSON.stringify(data.bpi);
        //   const html = `
        //     <h1>${data.fact}</h1>
        //   `

        //   body.insertAdjacentHTML('afterend', html)
      })
      .catch(err => console.error(err))
// }, 5000);

// const getFacts = async function() {
//     setInterval(() => {
//         const catFacts = await(fetch('https://catfact.ninja/fact').json());
//         console.log(catFacts);  
//     }, 5000);
// }

// getFacts();
