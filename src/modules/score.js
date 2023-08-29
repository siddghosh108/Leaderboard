const listScore = document.querySelector('.listNameAndScore');

const recentScore = [
  {
    name: 'Siddhartha',
    number: 100,
  },
  {
    name: 'Gopal',
    number: 80,

  },
  {
    name: 'Dipankar',
    number: 90,
  },
  {
    name: 'Subham',
    number: 70,

  },
  {
    name: 'Suparna',
    number: 70,

  },
  {
    name: 'Aparna',
    number: 70,

  }];
const displayContent = () => {
  recentScore.forEach((value) => {
    const listToDisplay = document.createElement('li');
    listToDisplay.className = 'listScore';
    listToDisplay.id = value.id;
    listToDisplay.innerHTML = `
         <span class="name-list">${value.name}: </span>
         <span class="name-number">${value.number}</span>
         
         `;
    listScore.appendChild(listToDisplay);
  });
};

export default displayContent;
