
    // making table from mood + song data 
    d3.select("#exampleFormControlSelect2").addEventListener("change", populateTable(this.val))
    
    function DropDown(mood) {
      var pannel = d3.select("#exampleFormControlSelect2")

      fetch(`https://spotifymoods.herokuapp.com/mood/${mood}`).then(data=>data.json()).then(d=>{
          console.log(data)
          d.results.forEach(r=>{
          o = document.createElement("option")
          o.text = r
          pannel.add(o)
})

    function populateTable(song) {
    var pannel = d3.select("#myInput")
  ​
    fetch(`https://spotifymoods.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
        console.log(data)
        d.results.forEach(r=>{
        const row = pannel.append("tr");

        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(r).forEach((val) => {
          let cell = row.append("td");
            cell.text(val);
          }
        );
      });
    })
    }

        })}

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