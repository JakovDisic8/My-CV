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
    img: "Img/Jakov.jpg",
    CV: {
      job: `Junio Front-End Developer`,
      link: `Img / CV.pdf`,
      img: `Img/social/curriculum-vitae.png`,
    },
    hobbies: [
      { title: "Sport/Gym" },
      { title: "PC Games" },
      { title: "Table top games/DnD" },
      { title: "Fantasy books and movies/tv shows" },
    ],
  },
  education: [
    {
      title: "Union Nikola Tesla-poslovni i pravni fakultet",
      desc: "Bachelor's degree",
      pdf: ``,
    },
    {
      title: " Code by Comtrade",
      desc: "Front End Developer",
      pdf: ``,
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
  social: [
    { title: "Facebook", link: ``, icon: "Img/social/facebook.png" },
    { title: "GitHub", link: ``, icon: "Img/social/github-sign.png" },
    {
      title: "GMail",
      link: `mailto:jakovdisic8@gmail.com`,
      icon: "Img/social/gmail.png",
    },
    { title: "LinkedIn", link: ``, icon: `Img/social/linkedin (2).png` },
    {
      title: "phone",
      link: "tel:555-555-5555",
      icon: "Img/social/telephone-call.png",
    },
  ],
};

render(data);
function render(data) {
  renderInfo(data.info);
  renderEducation(data.education);
}

function renderInfo({ name, surname, adress, img, CV, hobbies }) {
  let headDiv = document.getElementById(`header`);
  headDiv.innerHTML = `  <div class="myImg" id="profileImgClk">
  <img src="${img}" alt="${name}_${surname}Img" class="profileImg">
</div>`;

  let aboutMeDiv = document.getElementById(`info`);
  let ispis;
  ispis += `<a href="${CV.link}" download><img src="${CV.img}" class="socialImg" alt="">My CV</a>
<div class="myInfo">Hi am am ${name} ${surname} and I am from ${adress.city},${adress.country}.I am a ${CV.job}.George is a versatile web designer due to his extensive history in graphic and web design. His dedication to 
continuously learning about new web design 
trends and concepts has made him a valuable member of the team. With eight years of experience and a master's in web design, his expertise can help customers modernize with websites and appeal to expanding customer populations.</div>
<div class="hobbyes">My hobbies are:`;
  for (let i = 0; i < hobbies.length; i++) {
    let hobby = data.info.hobbies[i];
    ispis += `<div class="hobby">${hobby.title}</div>`;
  }
  ispis += `</div><button id="EduBtn" class="aboutMeBtn">Education</button>
<div class="education" id="myEd">
</div>
</div>`;
  aboutMeDiv.innerHTML = ispis;
}
function renderEducation() {
  for (let i = 0; i < data.education.length; i++) {
    let education = data.education[i];
    let educationDiv = document.getElementById("myEd");
    educationDiv.innerHTML += renderArticle(education);
    function renderArticle({ title, desc, pdf }) {
      return `<div class="ed1">
      <h2 class="edTitle">${title}-${desc}</h2>
      <a href="${pdf}">${title} Diploma.pdf<a>
  </div>`;
    }
  }
}

var aboutMeBtn = document.getElementById(`aboutMe`);
var myEdBtn = document.getElementById(`EduBtn`);
// var mySkillsBtn = document.getElementById(`mySkills`);
// var myProjectsBtn = document.getElementById(`myProjects`);

aboutMeBtn.addEventListener(`click`, function () {
  let infoDiv = document.getElementById(`info`);
  infoDiv.classList.toggle(`hide`);
});
myEdBtn.addEventListener(`click`, function () {
  let infoDiv = document.getElementById(`myEd`);
  infoDiv.classList.toggle(`hide`);
});
