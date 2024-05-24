const container = document.querySelector('.container');

const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseYear = document.querySelector('.userInputReleaseDate');

const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseYearInStorage = localStorage.getItem('releaseYear');

if (releaseYearInStorage && titleInStorage && imageUrlInStorage) {
    movieTitleToDisplay.textContent = titleInStorage + ' <' + releaseYearInStorage + '>';
    container.style.backgroundImage = `linear-gradient(rgba(76, 130, 192, 0.484), rgba(199, 44, 5, 0.56)), 
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = movieReleaseYear.value;

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('releaseYear', releaseYearInput);

    movieTitleToDisplay.textContent = movieTitleInput + ' <' + releaseYearInput + '>';
    container.style.backgroundImage = `linear-gradient(rgba(76, 130, 192, 0.484), rgba(199, 44, 5, 0.56)), 
    url('${posterUrlInput}')`;

    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseYear.value = '';
});