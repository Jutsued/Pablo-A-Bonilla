const toggleBtn = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');


const myProjects = [
    {
        name: 'Tracker',
        link: 'https://jutsued.github.io/ip-address-tracker/',
        img: './resources/ipImg.jpeg',
        sourceCode: 'https://github.com/Jutsued/ip-address-tracker'
    },
    {
        name: 'Restaurant-gadge',
        link: 'https://jutsued.github.io/tip-calculator-app/',
        img: './resources/tipImg.jpeg',
        sourceCode: 'https://github.com/Jutsued/tip-calculator-app'
    },
    {
        name: 'Template-Page',
        link: 'https://jutsued.github.io/sunnyside-agency-landing-page/',
        img: './resources/pageTemp.jpeg',
        sourceCode: 'https://github.com/Jutsued/sunnyside-agency-landing-page'
    },
    {
        name: 'Countdown',
        link: 'https://jutsued.github.io/Launch-countdown-timer/',
        img: './resources/CountImg.jpeg',
        sourceCode: 'https://github.com/Jutsued/Launch-countdown-timer'
    },
    {
        name: 'Bouncing-Ball',
        link: 'https://jutsued.github.io/BounceBall/',
        img: './resources/game.jpeg',
        sourceCode: 'https://github.com/Jutsued/BounceBall'
    },
    {
        name: 'Movie-API',
        link: 'https://jutsued.github.io/movie-app/',
        img: './resources/movie.jpeg',
        sourceCode: 'https://github.com/Jutsued/movie-app'
    }
];

const app = document.getElementById('app');

myProjects.forEach(project => {
    const title = `${project.name}`;
    const imgURL = project.img;
    
    const code = `${project.sourceCode}`;

    const projectEl = document.createElement('div');
    projectEl.classList.add('project');
    // projectEl.href = project.link;
    // projectEl.target = '_blank';

    projectEl.innerHTML = `
    <img src="${imgURL}" alt="${title}"/>
    <p>
        ${title}
    </p>
    <div class="overtop">
        <a href="${project.link}" target="_blank">
             <span>Live Site</span>
        </a>
        <a href="${code}" target= "_blank">
            <span>Sourcecode</span>
        </a> 
    </div>
    
    `;

    app.appendChild(projectEl);
})

toggleBtn.addEventListener('click', function(){
    navbarLinks.classList.toggle('active')
});


const colorChanger = document.querySelector('.me');
setInterval(
    function () {
      var randomColor = Math.floor(Math.random()*16777215).toString(16);
      colorChanger.style.borderColor = "#"+randomColor;
    },4000);

window.onscroll = function() {myFunction()};

var header = document.getElementById('test');
var stick = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > stick) {
        header.classList.add('stick'); 
    } else {
        header.classList.remove('stick')
    }
}

  