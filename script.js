let main

document.addEventListener("DOMContentLoaded", () => {
//There must be a div with the class name main in your index.html file. All components will be appended to this div
  main = document.querySelector(".main")
  
  //Replace the url in the fetch with the url your google docs csv url
fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vSUIIAdEagT5fGngCus1z7CzrjWo1nP0rjQ1McfWGK38eAo9gQHUdvQpCXGS1lpylww30GnxFl7-LcN/pub?gid=0&single=true&output=csv")
    .then(response => response.text())
    .then(csvData => {
      Papa.parse(csvData, {
        header: true, // Treat the first row as column headers
        skipEmptyLines: true, // Ignore empty rows
        complete: function(results) {
          results.data.forEach(row => {
            displayComponent(row);
          });
        }
      });
    });
});

function displayComponent(row){
  console.log(row)
  let component = document.createElement("div")
  component.classList.add("projects")

  let name = document.createElement("p")
  name.textContent = row.name
  name.classList.add("name")
  
  let image = document.createElement("img")
  image.src = "images/" + row.image
  image.classList.add("black-white")


  component.addEventListener("click",function(){
    window.open(row.page)
  })








  
  component.append(name)
  component.append(image)
  main.append(component)




}