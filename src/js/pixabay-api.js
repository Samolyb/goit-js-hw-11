function showLoader() {
    const loader = document.querySelector('.loader');
    loader.style.display = 'block';
}

export function searchPhotos(input) {
    showLoader();

    const searchParams = new URLSearchParams({
        key: '43864009-cebb341532060e679edcf3c4c',
        q: input.value,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `https://pixabay.com/api/?${searchParams}`;

    return fetch(url);
}