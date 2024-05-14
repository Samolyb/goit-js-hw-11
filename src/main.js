import { searchPhotos } from './js/pixabay-api.js';
import { markupInterface } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { listImg } from './js/render-functions.js';



document.getElementById('search-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search-input').value.trim();

    if (searchTerm === '') {
        iziToast.error({
            title: 'Error',
            message: 'Please enter a search term',
            position: 'topCenter'
        });
        return;
    }

    const apiKey = '43864009-cebb341532060e679edcf3c4c';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true`;

    const loader = document.getElementById('loader');
    loader.style.display = 'block';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            loader.style.display = 'none';
            markupInterface(data);
            if (!listImg.childElementCount) {
                iziToast.error({
                    title: 'Error',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(error => {
            loader.style.display = 'none';
            console.error('Error:', error);
            iziToast.error({
                title: 'Error',
                message: 'An error occurred while fetching data. Please try again later.',
                position: 'topCenter'
            });
        });

    clearInput();
});

function clearInput() {
    const input = document.getElementById('search-input');
    input.value = '';
}


