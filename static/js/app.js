// Add listener to mood selector 
d3.select("#exampleFormControlSelect2").on("change", 
      function() {populateTable(this.value)});

// populate table function
function populateTable(mood) {
    // get table
    var pannel = d3.select("#table1");
    // empty it out
    pannel.selectAll("*").remove();
    // replace the header row
    const headerRow = pannel.append("tr");
    let songHeader = headerRow.append("th");
    songHeader.text("Song Name");
    let clusterHeader = headerRow.append("th");
    clusterHeader.text("Cluster");
// get the songs for the mood
fetch(`https://spotifymoods.herokuapp.com/mood/${mood}`).then(data=>data.json()).then(d=>{
        // loop through the songs
        d.results.forEach(r=>{
        // create a row for the song
        const row = pannel.append("tr");
        // create a cell for the name
        let songCell = row.append("td");
        // fill in the name
        songCell.text(r);
        // create a cell for the mood
        let clusterCell = row.append("td");
        // fill in the mood
        clusterCell.text(mood);
      });
    })
  }



  //  // making table from mood + song data 
  //   d3.select("#exampleFormControlSelect2").on("change", function() {populateTable(this.value)});
    
  //   function DropDown(mood) {
  //     var pannel = d3.select("#exampleFormControlSelect2");

  //     fetch(`https://spotifymoods.herokuapp.com/mood/${mood}`).then(data=>data.json()).then(d=>{
  //         console.log(d)
  //         d.results.forEach(r=>{
  //         o = document.createElement("option")
  //         o.text = r
  //         pannel.add(o)
  //   })

  //   function populateTable(song) {
  //   var pannel = d3.select("#table1");
  // ​
  //   fetch(`https://spotifymoods.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
  //       console.log(song)
  //       d.results.forEach(r=>{
  //       const row = pannel.append("tr");

  //       // Loop through each field in the dataRow and add
  //       // each value as a table cell (td)
  //       Object.values(r).forEach((val) => {
  //         let cell = row.append("td");
  //           cell.text(val);
  //         }
  //       );
  //     });
  //   })
  //   }

  //       })}

// trying to re-write code since first one isn't working 

// function populateTable(song) {
//   var pannel = d3.select("#myInput");

//   data.forEach(function(song) {
//     var row = pannel.append("tr");
//   Object.entries(song).forEach(value) {
//     var cell = row.append("td");
//     cell.text(value);
//   };
//  });
// };

// d3.json(`https://spotifymoods.herokuapp.com/similar/${song}`).then((data) => {
// console.log(data);
// populateTable(data)
// });

// var button = d3.select("#myInput")

// function PressSubmit () {

//   d3.select("#exampleFormControlSelect2").addEventListener("change", populateTable(this.val))

//   fetch(`https://spotifymoods.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
//         console.log(data);

// });  