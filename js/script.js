
var loadPages = document.getElementById('load-pages')
var homepage = document.getElementById('homepage')
var aboutMe = document.getElementById('about-me')
var projects = document.getElementById('projects')
var knowledge = document.getElementById('knowledge')

function home() {
    homepage.style.display='none';
    aboutMe.style.display='none';
    knowledge.style.display='none';
    projects.style.display='none';

    
    loadPages.style.display='flex';

    setTimeout(function(){
        homepage.style.display='block'
        loadPages.style.display='none';
    },1000)
}

function about() {
    homepage.style.display='none';
    aboutMe.style.display='none';
    knowledge.style.display='none';
    projects.style.display='none';

    
    loadPages.style.display='flex';

    setTimeout(function(){
        aboutMe.style.display='block';
        loadPages.style.display='none';
    },1000)
}

function know() {
    homepage.style.display='none';
    aboutMe.style.display='none';
    knowledge.style.display='none';
    projects.style.display='none';

    
    loadPages.style.display='flex';

    setTimeout(function(){
        knowledge.style.display='block';
        loadPages.style.display='none';
    },1000)
}

function proj() {
    homepage.style.display='none';
    aboutMe.style.display='none';
    knowledge.style.display='none';
    projects.style.display='none';

    
    loadPages.style.display='flex';

    setTimeout(function(){
        projects.style.display='block';
        loadPages.style.display='none';
    },1000)
}