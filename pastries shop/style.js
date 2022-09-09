let navlink = document.querySelector('.navlinks');

document.querySelector('#menu-btn').onclick = () =>{
    navlink.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navlink.classList.remove('active');
}

window.onscroll = () =>{
    navlink.classList.remove('active');
    searchForm.classList.remove('active');
}