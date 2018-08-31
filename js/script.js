/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate
const pageDiv = document.querySelector('.page');
const studentUl = document.querySelector('ul');




//Create a function to hide all of the items in the list excpet for the ten you want to show
//Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
function createPag () {
  const studentLi = studentUl.children;
  let count = 0;
  for (let i = 0; i < studentLi.length; i +=1){
    if (studentLi[i].style.display === "") {
    count += 1;
    }
  }
  count = Math.ceil(count / 10);
  if (count > 1) {
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    div.className = 'pagination';
    for (i = 1; i <= count; i += 1) {
      const li = document.createElement('li');
      const a = document.createElement('a');
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
  }
}

createPag();



// Create and append the pagination links - Creating a function that can do this is a good approach




// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here
