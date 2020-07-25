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


//find similar songs ( update table)

document.getElementById("myInput").oninput= 
  function() {updateTable(this.value)};

// populate table function
function updateTable(song) {
// get table
var pannel = d3.select("#table1");
// empty it out
pannel.selectAll("*").remove();
// replace the header row
const headerRow = pannel.append("tr");
let songHeader = headerRow.append("th");
songHeader.text("Song Name");
let linkHeader = headerRow.append("th");
linkHeader.text("Link");
// get the songs for the mood
fetch(`https://spotifymoods.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
    // loop through the songs
    console.log(d)
    d.results.forEach((r,i)=>{
    // create a row for the song
    const row = pannel.append("tr");
    // create a cell for the name
    let songCell = row.append("td");
    // fill in the name
    songCell.text(r);

    // create a cell for the link
    let linkCell = row.append("td");
    // fill in the mood
    linkCell.html(`<a href="${d.urls[i]}">${d.urls[i]}</a>`);
  });
})
}