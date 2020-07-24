
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

    // function autocomplete(inp, arr) {
    //   var currentFocus;
    //   inp.addEventListener("input", function(e) {
    //       var a, b, i, val = this.value;
    //       closeAllLists();
    //       if (!val) { return false;}
    //       currentFocus = -1;
    //       a = document.createElement("DIV");
    //       a.setAttribute("id", this.id + "autocomplete-list");
    //       a.setAttribute("class", "autocomplete-items");
    //       this.parentNode.appendChild(a);
    //       for (i = 0; i < arr.length; i++) {
    //         if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    //           b = document.createElement("DIV");
    //           b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    //           b.innerHTML += arr[i].substr(val.length);
    //           b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    //           b.addEventListener("click", function(e) {
    //               inp.value = this.getElementsByTagName("input")[0].value;
    //               closeAllLists();
    //           });
    //           a.appendChild(b);
    //         }
    //       }
    //   });
    //   inp.addEventListener("keydown", function(e) {
    //       var x = document.getElementById(this.id + "autocomplete-list");
    //       if (x) x = x.getElementsByTagName("div");
    //       if (e.keyCode == 40) {
    //         currentFocus++;
    //         addActive(x);
    //       } else if (e.keyCode == 38) {
    //         currentFocus--;
    //         addActive(x);
    //       } else if (e.keyCode == 13) {
    //         e.preventDefault();
    //         if (currentFocus > -1) {
    //           if (x) x[currentFocus].click();
    //         }
    //       }
    //   });
    //   function addActive(x) {
    //     if (!x) return false;
    //     removeActive(x);
    //     if (currentFocus >= x.length) currentFocus = 0;
    //     if (currentFocus < 0) currentFocus = (x.length - 1);
    //     x[currentFocus].classList.add("autocomplete-active");
    //   }
    //   function removeActive(x) {
    //     for (var i = 0; i < x.length; i++) {
    //       x[i].classList.remove("autocomplete-active");
    //     }
    //   }
    //   function closeAllLists(elmnt) {
    //     var x = document.getElementsByClassName("autocomplete-items");
    //     for (var i = 0; i < x.length; i++) {
    //       if (elmnt != x[i] && elmnt != inp) {
    //         x[i].parentNode.removeChild(x[i]);
    //       }
    //     }
    //   }
    //   document.addEventListener("click", function (e) {
    //       closeAllLists(e.target);
    //       });
    // }


    // /*An array containing all the country names in the world:*/
    // var songs = [
    //     '????????'
    // ];


    // /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
    // autocomplete(document.getElementById("myInput"), songs);

    
    
    function createSongList(songs) {
      var pannel = d3.select("#dropdown")
      var e = document.getElementById("exampleFormControlSelect2");

      var moodSelection = e.options[e.selectedIndex].text;
                                fetch(`https://spotifymoodml.herokuapp.com/${mood}/${inp}`).then(data=>data.json()).then(d=>{ d.results.forEach(r=>{
                        const row = songs.append();
                      });
                    })
  };
