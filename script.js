document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('search-input');
    const resultsList = document.querySelector('#results ul');

    input.addEventListener('input', function () {
        const searchTerm = input.value.toLowerCase().trim();
        const items = resultsList.getElementsByTagName('li');

        if (searchTerm === '') {
            for (let i = 0; i < items.length; i++) {
                items[i].style.display = 'none';
            }
            resultsList.style.display = 'none';
        } else {
            for (let i = 0; i < items.length; i++) {
                const songName = items[i].getElementsByClassName('song-name')[0].textContent.toLowerCase();
                const artistName = items[i].getElementsByClassName('artist-name')[0].textContent.toLowerCase();
                if (songName.includes(searchTerm) || artistName.includes(searchTerm)) {
                    items[i].style.display = 'block';
                } else {
                    items[i].style.display = 'none';
                }
            }
            resultsList.style.display = 'block';
        }
    });
});
