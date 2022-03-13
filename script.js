const movies = '[{"title" : "The Avengers", "available" : "5", "price" : "2€"}, {"title" : "Matrix", "available" : "7", "price" : "2€"}, {"title" : "Enter The Void", "available" : "3", "price" : "2€"}]'
const movieData = JSON.parse(movies)
const searchInput = document.getElementById("navSearch")
const suggestionsPanel = document.getElementById("suggestions")
/* const mydata = JSON.parse(data) */
const customerInput = document.getElementById("customerInput")
const customerSuggestions = document.getElementById("customerSuggestions")
const json = '[{"forename" : "Peter", "surname" : "Parker", "cNumber" : "12345"}, {"forename" : "Jeffrey", "surname" : "Lebowski", "cNumber" : "54321"}, {"forename" : "Jeff", "surname" : "Bridges", "cNumber" : "13254"}, {"forename" : "Uwe", "surname" : "Boll", "cNumber" : "36253"}, {"forename" : "Hermine", "surname" : "Granger", "cNumber" : "56342"}, {"forename" : "Sarah", "surname" : "Connor", "cNumber" : "36243"}, {"forename" : "Dana", "surname" : "Scully", "cNumber" : "46253"}, {"forename" : "Lisa", "surname" : "Simpson", "cNumber" : "53412"}, {"forename" : "Elisabeth", "surname" : "Swann", "cNumber" : "32756"}, {"forename" : "Clarice", "surname" : "Starling", "cNumber" : "52436"}, {"forename" : "James", "surname" : "Bond", "cNumber" : "46354"}, {"forename" : "Jack", "surname" : "Sparrow", "cNumber" : "56274"}, {"forename" : "James", "surname" : "Kirk", "cNumber" : "14432"}, {"forename" : "Marty", "surname" : "McFly", "cNumber" : "64525"}]';
const mydata = JSON.parse(json);
var divID = 0
var movieID = 0

searchInput.addEventListener('keyup', function(){
    console.log(searchInput.value)
    const input = searchInput.value.toLowerCase()
    suggestionsPanel.innerHTML = ''
    const suggestions = movieData.filter(function(suchInput) {
      if(suchInput.title.toLowerCase().startsWith(input)){       
        return suchInput.title.toLowerCase().startsWith(input)}
  
  });

  suggestions.forEach(function(suggested){
        divID++
        movieID++
        t = suggested.title+' '+suggested.price
        const p = document.createElement('p')
        p.innerHTML = suggested.title

        p.addEventListener('click', function(){
          showWindow()
          undim()
          console.log('KLICK')
          suggestionsPanel.textContent=''
          let i = document.getElementById("inputMovies")
          let wrapper = document.createElement("div")
          wrapper.setAttribute("id", 'div'+divID)
          let div = document.getElementById("div"+divID)
            let m = document.createElement("p")
            m.innerHTML = suggested.title+' '+suggested.available+' '+suggested.price
            var b = document.createElement("button")           
            b.innerHTML = '+'

            b.addEventListener('click', function(){
              console.log('addKart')
              let t = suggested.title
              console.log(t)
              let k = document.getElementById("setMovies")
              let b = document.createElement("button")
              b.innerHTML = '-'
              let movie = document.createElement('p')
              movie.setAttribute("id", 'movie'+movieID)
              movie.innerHTML = t
              k.appendChild(movie)
              k.appendChild(b)
              b.addEventListener('click', function(){
                  let r = document.getElementById('movie'+movieID)
                  r.remove()
              })
            })

          console.log(suggested.title)
          i.appendChild(wrapper)  
          wrapper.appendChild(m)
          wrapper.appendChild(b)
          
        })

        suggestionsPanel.appendChild(p)
    });
    if (input === ''){
        suggestionsPanel.innerHTML = ''
    }
}) 

customerInput.addEventListener('keyup', function(){
    console.log(customerInput.value)
    const input = customerInput.value.toLowerCase()
    customerSuggestions.innerHTML = ''
    const suggestions = mydata.filter(function(suchInput) {

          if(suchInput.surname.toLowerCase().startsWith(input)){       
            return suchInput.surname.toLowerCase().startsWith(input)}
          else if(suchInput.forename.toLowerCase().startsWith(input)){ 
            return suchInput.forename.toLowerCase().startsWith(input)}
          else if(suchInput.cNumber.toLowerCase().startsWith(input)){ 
            return suchInput.cNumber.toLowerCase().startsWith(input)}
        
    });

  suggestions.forEach(function(suggested){
        const p = document.createElement('p')
        p.innerHTML = suggested.forename + ' ' + suggested.surname

        p.addEventListener('click', function(){
          let c = document.getElementById("setCustomer")
          let s = document.getElementById("customerSuggestions")
          s.textContent=''
          c.innerHTML = 'Kunde: '+suggested.surname+' '+suggested.cNumber


        })

        customerSuggestions.appendChild(p)
    });
    if (input === ''){
      customerSuggestions.innerHTML = ''
    }
})



    function myFunction() {
      var y = document.getElementById("output")
      if (y.style.display === "none") {
        y.style.display = "block"
      } else {
        y.style.display = "none"
      }        
      var x = document.getElementById("input")
      if (x.style.display === "none") {
        x.style.display = "flex"
      } else {
        x.style.display = "none"
      }     
    }

    function uncheckBox() {
      if (document.getElementById("anzahlVerleih").checked === true) {
        document.getElementById("anzahlVerleih").checked = false
      }
    }

    function filmA() {
      var z = document.getElementById("ausgeliehen")
      if (z.style.display === "none") {
        z.style.display = "block"
      } else {
        z.style.display = "none"
      }
      setTimeout(function() {
        $('#ausgeliehen').fadeOut('fast')
    }, 800);
    }

    window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed')
   });


   function kartView(){
     let k = document.getElementById("shoppingKart")
     if (k.style.marginRight === "0px"){
       k.style.marginRight = "-200px"
     } else {
      k.style.marginRight = "-0px"
     }
   }

   function showWindow(){
     let movieWindow = document.getElementById("input")
     if(movieWindow.style.display === "none"){
      movieWindow.style.display = "flex"
     }
   }

   function dim(){
     let dim = document.getElementById("dim")
     let dimNav = document.getElementById("dimNav")
     let search = document.getElementById("navSearch")
     search.addEventListener('focus', function(){
      if (search === document.activeElement){
      dim.style.display = "block"
      dimNav.style.display = "block"
      } 
     })
   }

   dim()

   function undim(){
    let dim = document.getElementById("dim")
    let dimNav = document.getElementById("dimNav")
    dim.style.display = "none"
    dimNav.style.display= "none"
   }