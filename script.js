
document.getElementById('searchButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBox').value;
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    fetchImages(searchTerm);

    document.getElementById('showMoreButton').style.display = 'block';
});

document.getElementById('showMoreButton').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchBox').value;
    fetchImages(searchTerm);
});

function fetchImages(searchTerm) {
    const imageContainer = document.getElementById('imageContainer');

    fetch(`https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=cyUPmPsSlAIS2CxLvaKJVlzjvEKroWAtIzTYeWh7mKc`)
        .then(response => response.json())
        .then(data => {
            data.results.forEach(result => {
                const imageElement = document.createElement('img');
                imageElement.classList.add('image');
                imageElement.src = result.urls.regular;
                imageContainer.appendChild(imageElement);
            });
        })
        .catch(error => console.error('Error:', error));
}
