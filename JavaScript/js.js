var data = {
  info: {
    name: "Jakov",
    surname: "Disic",
    adress: {
      country: "Serbia",
      city: "Belgrade",
      street: "Bata Lakina",
      number: 1,
    },
    phone: "0692858301",
    img: "Img/Jakov.jpg",
    textIntro: `Hi,My name is Jakov Disic and I am Front-End Developer.`,
    aboutMeText: "",
    CV: {
      link: ``,
      img: `Img/social/curriculum-vitae.png`,
    },
  },
  education: [
    {
      title: "Union Nikola Tesla-poslovni i pravni fakultet",
      desc: "Bachelor's degree",
      time: {
        from: {
          year: 2015,
        },
        to: {
          year: 2019,
        },
      },
    },
    {
      title: " Code by Comtrade",
      desc: "Front-End Developer",
      time: {
        from: {
          year: 2021,
        },
      },
    },
  ],
  projects: [
    {
      title: "DnD map Creator",
      desc: "App for using and creating map for DnD game",
      time: {
        year: 2023,
      },
    },
    {
      title: "DnD combat table",
      desc: "App for creating DnD table used in combat",
      time: {
        year: 2023,
      },
    },
  ],
  skills: [
    {
      title: "Html",
      perc: 100,
      img: `Img/skill/icons8-html-5-50.png`,
    },
    {
      title: "CSS",
      perc: 100,
      img: `Img/skill/icons8-css3-30.png`,
    },
    {
      title: "JavaScript",
      perc: 80,
      img: `Img/skill/icons8-javascript-logo-50.png`,
    },
    {
      title: "React",
      perc: 70,
      img: `Img/skill/icons8-react-30.png`,
    },
  ],
  hobbies: [
    { title: "Sport/Gym" },
    { title: "PC Games" },
    { title: "Table top games/DnD" },
    { title: "Fantasy books and movies/tv shows" },
  ],
  social: [
    { title: "Facebook", link: ``, icon: "Img/social/facebook.png" },
    { title: "GitHub", link: ``, icon: "Img/social/github-sign.png" },
    {
      title: "GMail",
      link: `mailto:jakovdisic8@gmail.com`,
      icon: "Img/social/gmail.png",
    },
    { title: "LinkedIn", link: ``, icon: `Img/social/linkedin (2).png` },
  ],
};

render(data);
function render(data) {
  renderInfo(data.info);
}

function renderInfo({
  name,
  surname,
  adress,
  phone,
  img,
  textIntro,
  aboutMeText,
}) {
  let headDiv = document.getElementById(`header`);
  headDiv.innerHTML = `  <div class="myImg" id="profileImgClk">
  <img src="${img}" alt="${name}_${surname}Img" class="profileImg">
</div>
<div class="head1">
  <h1>${textIntro}</h1>
</div>`;
  let aboutMeDiv = document.getElementById(`info`);
  aboutMeDiv.innerHTML = `<a href=""><img src="" alt="">My CV</a>
<div class="myInfo">
    
</div>
<button id="EduBtn" class="aboutMeBtn">Education</button>
<div class="education" id="myEd">
    <div class="ed1">
        <h2 class="edTitle">School Name</h2>
        <p class="edTime">From:____ to:______</p>
    </div>
</div>
<button id="hobbBtn" class="aboutMeBtn">Hobbie</button>
<div class="myHobbies" id="myHob">
    <h2>My Hobbies:</h2>
    <p class="hobP">Hobbie</p>
</div>`;
}

// var aboutMeBtn = document.getElementById(`aboutMe`);
// var myEdBtn = document.getElementById(`myEd`);
// var myHobBtn = document.getElementById(`myHob`);
// var mySkillsBtn = document.getElementById(`mySkills`);
// var myProjectsBtn = document.getElementById(`myProjects`);

// aboutMeBtn.addEventListener(`click`, function () {
//   let infoDiv = document.getElementById(`info`);
//   infoDiv.classList.toggle(`hide`);
// });
