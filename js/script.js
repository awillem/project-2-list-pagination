/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const pageDiv = document.querySelector('.page');
const headerDiv = document.querySelector('.page-header');
const searchDiv = createElement('div');
const searchInput = createElement('input');
const searchButton = createElement('button');
const studentUl = document.querySelector('ul');
const studentLi = studentUl.children;


//create Search field and button
searchDiv.className = 'student-search';
searchInput.type = 'text';
searchInput.placeholder = "Search for students..."
searchButton.textContent = 'Search';

headerDiv.appendChild(searchDiv);
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);


searchDiv.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
      const search = searchInput.value;
      for ( let i = 0; i < studentLi.length; i +=1) {
        const studentName = studentLi[i].querySelector('h3').textContent;
        const holder = []
        if (studentName.includes(search)) {
          studentLi[i].style.display = 'list-item';
        } else {
          studentLi[i].style.display = 'none';
        }
      }

    // function countFilter () {
      let count = 0;
      for ( let i = 0; i < studentLi.length; i +=1) {
        if (studentLi[i].style.display === 'list-item') {
          count += 1;
        }
        console.log(count);

      //}
      count = Math.ceil(count / 10);

      for (let i = 0; i < pagLi.length; i += 1) {
        pagLi[i].style.display = 'none';
        if (i < count) {
          pagLi[i].style.display = 'list-item';
        } else {
          pagLi[i].style.display = 'none';
        }
      }
      pagLi[0].className = "active";

    }

  }
});

// searchDiv.addEventListener('keypress', (e) => {
//    if (e.target.tagName === 'BUTTON') {
//     const search = searchInput.value;
//     for ( let i = 0; i < studentLi.length; i +=1) {
//       const studentName = studentLi[i].querySelector('h3');
//       console.log(studentName);
//     }
//   }
// });

// searchDiv.addEventListener('keyup', () => {
//   const search = searchInput.value;
//   console.log(search);
// });




//function to create elementes
function createElement(element) {
  return document.createElement(element);
}

/*
This function creates the pagination links on the page.
It loops through the list of student names, adding 1 to the count each time.
Divides that count by 10, and rounds up for total links needed
Uses a loops, starting at 1 not 0, based on that count to create a LI and an A, setting class to active for the first A only.
appends them together, then calls the setPag function, which hides list items so only 10 show.
*/
function count () {
  let count = 0;
  for (let i = 0; i < studentLi.length; i += 1){
    count += 1;
  }
  return count;
}

function createPag (count) {
  // let count = 0;
  // for (let i = 0; i < studentLi.length; i +=1){
  //   //if (studentLi[i].style.display === "") {
  //   count += 1;
  //   //}
  // }
  //let count = count();
  count = Math.ceil(count / 10);
  if (count > 1) {
    const div = createElement('div');
    const ul = createElement('ul');
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
//call the createPag function to set up the pagination for the first time

createPag(count());
//declared here, because these elements don't exist until after createPag is called.
const pagDiv = document.querySelector('.pagination');
const pagUl = pagDiv.children;
const pagLi = pagUl[0].children;

/*
This function determines what student list items will show based on the active pagination link.
uses a loop to see if the class of the link is active.
if it is, it stores the text in that link as a number in active.
creates a range of li to return.  example: if 2 is active, x 10 - 1 gives us 19 and -9 would give us 10, which is the range we need.
for loop shows studentLi if it's index is between those 2 number, and hides all other items.
*/

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

/*
Listens for click on pagination links.
loops through all pagination links and sets class to an empty string
Then adds the active class to the clicked button
*/
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
