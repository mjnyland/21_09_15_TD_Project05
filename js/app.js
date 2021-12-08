baguetteBox.run('.gallery');

const search = document.querySelector('.search');

search.addEventListener('keyup', (e) => {
    //thumbnailContainer.innerHTML = '';
    var liveSearchText = e.target.value.toLowerCase();
    for (let i = 0; i < 12; i++) {
        var imgCaptions = document.getElementsByTagName('A')[i].getAttribute('data-caption');
        if (imgCaptions.includes(liveSearchText) === false) {
            document.getElementsByTagName('A')[i].style.display = "none";
        } else if (imgCaptions.includes(liveSearchText) === true) {
            document.getElementsByTagName('A')[i].style.display = "block";
        }
    }
});
