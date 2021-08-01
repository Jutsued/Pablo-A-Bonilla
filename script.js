const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');


const myProjects = [
    {
        name: 'Tracker',
        link: 'https://jutsued.github.io/ip-address-tracker/',
        img: './resources/ipImg.jpeg'
    },
    {
        name: 'Restaurant gadge',
        link: 'https://jutsued.github.io/tip-calculator-app/',
        img: './resources/tipImg.jpeg'
    },
    {
        name: 'Template Page',
        link: 'https://jutsued.github.io/sunnyside-agency-landing-page/',
        img: './resources/pageTemp.jpeg'
    },
    {
        name: 'Countdown',
        link: 'https://jutsued.github.io/Launch-countdown-timer/',
        img: './resources/CountImg.jpeg'
    },
    {
        name: 'Bouncing Ball',
        link: 'https://jutsued.github.io/BounceBall/',
        img: './resources/game.jpeg'
    },
    {
        name: 'Movie API',
        link: 'https://jutsued.github.io/movie-app/',
        img: './resources/movie.jpeg'
    },
];

const app = document.getElementById('app');

myProjects.forEach(project => {
    const title = `${project.name}`;
    const imgURL = project.img;

    const projectEl = document.createElement('a');
    projectEl.classList.add('project');
    projectEl.href = project.link;
    projectEl.target = '_blank';

    projectEl.innerHTML = `
    <img src="${imgURL}" alt="${title}" id="changer"/>
    <p>
        ${title}
    </p>
    
    `;

    app.appendChild(projectEl);
})

toggleBtn.addEventListener('click', function(){
    navbarLinks.classList.toggle('active')
});


  