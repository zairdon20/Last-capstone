const speakerData = [
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2018/12/deepak_chopra.jpg',
    name: 'Deepak Chopra, MD',
    Profession: 'Founder, TheChopra Foundation Author, Total Meditation',
    Description: 'Chopra is a Clinical Professor of Family Medicine and Public Health at the University of California, San Diego and serves as a senior scientist with Gallup Organization.',
  },
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2020/05/RusselBrand.png',
    name: 'Russel Brand',
    Profession: 'Comedian, Actor & Mental Health Activist Above the Noise Podcast',
    Description: 'Russell Brand`s career spans stand-up comedy, acting, broadcasting and writing. He is the author of the Audible Original, "Revelation: Connecting with the Sacred in Everyday Life".',
  },
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2020/05/JEWEL.png',
    name: 'Jewel',
    Profession: 'Singer-songwriter, Mental Health Advocate Founder, Never Broken',
    Description: 'Jewel went from a homeless teenager in San Diego, to an award winning, Multi-Platinum Recording Artist who released one  of the best-selling debuts of all time.',
  },
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2021/05/yvonne_Yellow-copy.jpg',
    name: 'Dr. Yvonne Cagle',
    Profession: 'NASA Astronaut, Aerospace Surgeon',
    Description: 'Dr. Cagle is an Aerospace Surgeon, entrepreneur and consulting professor for Stanford University`s department of cardiovascular medicine and its department of electrical engineering.',
  },
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2021/05/headshots__india_Yellow.jpg',
    name: 'Sadhguru',
    Profession: 'Founder Isha Foundation, Yogi, Mystic, Visionary',
    Description: 'Ranked amongst the fifty most influential people in India, Sadhguru is a Yogi, mystic, visionary, and author.',
  },
  {
    img: 'https://neveralonesummit.live/wp-content/uploads/2021/05/Abhay_Yellow.jpg',
    name: 'Abhay Deol',
    Profession: 'Actor and Producer',
    Description: 'An actor who has never shied away from speaking his mind; a producer who doesn`t believe in the "formula", a film curator with a keen eye for detail and good stories',
  },
];

const container = document.getElementById('container');

function data() {
  speakerData.forEach((element) => {
    container.innerHTML += `<div class="speakersGrid">
            <div class="gridImage">
              <img src=${element.img} alt="Nolan's Portrait" />
            </div>
            <div class="speakerDetails">
              <h3>${element.name}</h3>
              <h4>${element.Profession}</h4>
              <p class="quotes">
                <i><a href="#">${element.Description}</a></i> </p>
            </div>
          </div>`;
  });
}

window.onload = data();

/* MENU */

const navElements = document.querySelector('.nav-element');

function openMenu() {
  navElements.style.display = 'block';
}

function closeMenu() {
  navElements.style.display = 'none';
}

openMenu();
closeMenu();