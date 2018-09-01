/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const pageDiv = document.querySelector('.page');
const headerDiv = document.querySelector('.page-header');
const searchDiv = createElement('div');
const searchInput = createElement('input');
const searchButton = createElement('button');
const studentUl = document.querySelector('ul');
const studentLi = studentUl.children;




searchDiv.className = 'student-search';
searchInput.type = 'text';
searchInput.placeholder = "search for students..."
searchButton.textContent = 'search';

headerDiv.appendChild(searchDiv);
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);



//Create a function to hide all of the items in the list excpet for the ten you want to show
//Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function createElement(element) {
  return document.createElement(element);
}

function createPag () {
  let count = 0;
  for (let i = 0; i < studentLi.length; i +=1){
    if (studentLi[i].style.display === "") {
    count += 1;
    }
  }
  count = Math.ceil(count / 10);
  if (count > 1) {
    const div = createElement('div');
    const ul = createElement('ul');
    const li = createElement('li');
    div.className = 'pagination';
    for (i = 1; i <= count; i += 1) {
      const li = createElement('li');
      const a = createElement('a');
      a.href = "#";
      a.textContent = i;
      if (i === 1) {
        a.className = "active";
      }
      li.appendChild(a);
      ul.appendChild(li);
      div.appendChild(ul);
    }
    pageDiv.appendChild(div);
    setPag();
  }
}

createPag();
const pagDiv = document.querySelector('.pagination');
const pagUl = pagDiv.children;
const pagLi = pagUl[0].children;




function setPag () {
  const pagDiv = document.querySelector('.pagination');
  const pagUl = pagDiv.children;
  const pagLi = pagUl[0].children;
  for (let i = 0; i < pagLi.length; i+=1) {
    const link = pagLi[i].firstChild;
    if(link.className === 'active') {
      const active = parseInt(pagLi[i].firstChild.textContent);
      const activeUpper = (active * 10) - 1;
      const activeLower = activeUpper - 9;
      console.log(studentLi.length);
      for (let j = 0; j < studentLi.length; j += 1) {
        if (j >= activeLower && j <= activeUpper) {
          studentLi[j].style.display = 'list-item';
        } else {
           studentLi[j].style.display = "none";
        }
      }
    }
  }
}

pagUl[0].addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    for (let i = 0; i < pagLi.length; i += 1) {
      const link = pagLi[i].firstChild;
      link.className = "";
    }
    e.target.className = "active";
    setPag();
  }
});


// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
