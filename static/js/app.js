
    d3.select("#exampleFormControlSelect2").addEventListener("change", populateTable(this.value))
    
    function populateTable(song) {
    var pannel = d3.select("#table")
    // song_name = []
    // url = []
    // mood = []
    // cluster_name = []
  ​
    fetch(`https://spotifymoods.herokuapp.com/similar/${song}`).then(data=>data.json()).then(d=>{
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

    function DropDown(mood) {
        var pannel = d3.select("#dropdown")

        fetch(`https://spotifymoods.herokuapp.com/mood/${mood}`).then(data=>data.json()).then(d=>{
            d.results.forEach(r=>{
            o = document.createElement("option")
            o.text = r
            pannel.add(o)
  })
        })}