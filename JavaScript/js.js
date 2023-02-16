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
  },
  education: [
    {
      title: "Union Nikola Tesla-poslovni i pravni fakultet",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          year: 0,
        },
        to: {
          year: 0,
        },
      },
    },
    {
      title: " Code by Comtrade",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          day: 0,
          month: 0,
          year: 0,
        },
      },
    },
  ],
  projects: [
    {
      title: "DnD map Creator",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        year: 2009,
        month: 6,
      },
    },
    {
      title: "DnD combat table",
      desc: " Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur consectetur, excepturi veniam necessitatibus adtempora quas alias error, dolore iusto dicta! Quasi assumenda  ipsum mollitia cumque ut doloremque, repudiandae accusantium?",
      time: {
        from: {
          year: 0,
        },
        to: {
          year: 0,
        },
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
    { title: "GMail", link: ``, icon: "Img/social/gmail.png" },
    { title: "LinkedIn", link: ``, icon: `Img/social/linkedin (2).png` },
  ],
};

var aboutMeBtn = document.getElementById(`aboutMe`);
var myEdBtn = document.getElementById(`myEd`);
var myHobBtn = document.getElementById(`myHob`);
var mySkillsBtn = document.getElementById(`mySkills`);
var myProjectsBtn = document.getElementById(`myProjects`);

aboutMeBtn.addEventListener(`click`, function () {
  let infoDiv = document.getElementById(`info`);
  infoDiv.classList.toggle(`hide`);
});
