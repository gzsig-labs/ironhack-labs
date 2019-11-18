window.onload = () => {
  let link = document.querySelector('.links') 
  seedPage(link)
}

function seedPage(link) {
  const projects = {
  "./module_1/00-lab-css-recipes-clone/starter-code/apple-pie-starter-code/index.html": "Recipe",
  "./module_1/01-lab-javascript-clue/starter-code/src/clue.js": "Clue",
  "./module_1/02-lab-javascript-functions-and-arrays/starter-code/src/functions-and-arrays.js": "Functions And Arrays",
  "./module_1/03-lab-javascript-greatest-movies/starter_code/index.html": "Greatest Movies",
  "./module_1/04-lab-css-spotify-clone/starter-code/index.html": "Spotify Clone",
  "./module_1/05-lab-javascript-koans/spec/koans.js": "Koans",
  "./module_1/06-lab-javascript-vikings/starter-code/src/viking.js": "Vikings",
  "./module_1/07-lab-dom-ironhack-cart/starter-code/index.html": "Cart",
  "./module_1/08-lab-javascript-memory-game/starter-code/memory.html": "Memory Game",
  "./module_1/09-lab-javascript-pizza-builder/starter-code/index.html": "Pizza Builder",
  "./module_1/10-lab-javascript-chronometer/starter-code/index.html": "Chronometer",
  "./module_1/11-lab-javascript-advanced-algorithms/starter-code/DataStructures.html": "Advanced Algorithms",
  }
  let cont = 0
  for (let key in projects){
    createElement(link, 'div', "", 'class', "card")
    let links = document.querySelectorAll(".card")
    createElement(links[cont], 'a', projects[key], 'href', key)
    cont++;
  }
}

function createElement(parent, type, content, attrType, attr ) {
  let node = document.createElement( type );
  node.innerHTML = content;
  node.setAttribute( attrType, attr )
  parent.appendChild(node)
}