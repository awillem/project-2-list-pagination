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
const studentList = [];
for ( let i = 0; i < studentLi.length; i +=1 ) {
  studentList.push(studentUl.children[i])
}


//call the createPag function to set up the pagination for the first time
createPag(count());
const pagDiv = document.querySelector('.pagination');
const pagUl = pagDiv.children;
const pagLi = pagUl[0].children;

//create Search field and button
searchDiv.className = 'student-search';
searchInput.type = 'text';
searchInput.placeholder = "Search for students..."
searchButton.textContent = 'Search';

headerDiv.appendChild(searchDiv);
searchDiv.appendChild(searchInput);
searchDiv.appendChild(searchButton);

function event (e,typeInCaps) {
  if (e.target.tagName === typeInCaps) {
    const searchValue = searchInput.value;
    console.log(searchValue);
    for (let i = 0; i < studentList.length; i +=1) {
      studentList[i].style.display = 'none';
    }
    studentList.length = 0;
    for (let i = 0; i < pagLi.length; i += 1) {
        pagLi[i].style.display = 'inline';
        pagLi[i].firstChild.className = "";
      }
      pagLi[0].firstChild.className = "active";

    if (searchValue !== '') {
      for (let j = 0; j < studentLi.length; j +=1 ) {
        const studentName = studentLi[j].querySelector('h3').textContent;
        if (studentName.includes(searchValue)) {
          studentList.push(studentLi[j]);
        }
      }
      let counter = count();
      counter = Math.ceil(count()/10);
      for (let i = 0; i < pagLi.length; i += 1) {
        if (i > (counter - 1)){
        pagLi[i].style.display = 'none';
        }
      }
    } else {
       for (let i = 0; i < studentLi.length; i += 1) {
         studentList.push(studentLi[i]);

       }
    } //closes else
  } // closes if button
  setPag();
}

searchDiv.addEventListener('click', (e) => {
  event(e, 'BUTTON');
});//closes event listener

searchDiv.addEventListener('keyup', (e) => {
  event(e, 'INPUT');
});

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
  for (let i = 0; i < studentList.length; i += 1){
    count += 1;
  }
  return count;
}

function createPag (count) {
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
      for (let j = 0; j < studentList.length; j += 1) {
        if (j >= activeLower && j <= activeUpper) {
          studentList[j].style.display = 'list-item';
        } else {
           studentList[j].style.display = "none";
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



for (let i = 0; i < studentLi.length; i += 1) {
  console.log(studentLi[i].querySelector('h3').textContent);
}
