
const images = [
    { src: "image 29.png", alt: "Image 1" },
    { src: "image 9.png", alt: "Image 2" },
    { src: "image 29.png", alt: "Image 3" },
    { src: "image 29.png", alt: "Image 4" },
    { src: "image 28.png", alt: "Image 5" },
    { src: "card-img.png", alt: "Image 12" },
    { src: "image 27.png", alt: "Image 6" },
    { src: "image 27.png", alt: "Image 7" },
    { src: "image 4.png", alt: "Image 8" },
    { src: "image 4.png", alt: "Image 9" },
    { src: "Group 18321.png", alt: "Image 10" },
    { src: "fYQCgVRsQTEfUrP7cW5iAFVYOlh 1.png", alt: "Image 11" },
    { src: "card-img.png", alt: "Image 12" },
    { src: "Group 18321.png", alt: "Image 10" },
    { src: "fYQCgVRsQTEfUrP7cW5iAFVYOlh 1.png", alt: "Image 11" }
];
const sliderContainer = document.querySelector('.slick-slider');

for (let i = 0; i < images.length; i++) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'items';
    
    const img = document.createElement('img');
    img.src = images[i].src;
    img.alt = images[i].alt;
    
    itemDiv.appendChild(img);
    sliderContainer.appendChild(itemDiv);
}


document.addEventListener('DOMContentLoaded', function() {
    const cardData = [
        {
            title: 'Game of Thrones',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'Group 135 (3).png',
        },
        {
            title: 'Bliss',
            date: '20 April',
            ageRating: '16+',
            languages: ['Ru'],
            imgSrc: 'Group 135 (4).png',
        },
        {
            title: 'After the Rain',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'overlay (1).png',
        },
        {
            title: 'Howl’s Moving Castle',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'Group 135 (2).png',
        },
        {
            title: 'Tom & Jerry',
            date: '24 April',
            ageRating: '6+',
            languages: ['Ru', 'En'],
            imgSrc: 'image 14.png',
        },
        {
            title: 'Bliss',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'Group 135 (1).png',
        },
        {
            title: 'After the Rain',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'Group 135.png',
        },
        {
            title: 'Up from Slavery',
            date: '20 April',
            ageRating: '18+',
            languages: ['Ru', 'En'],
            imgSrc: 'overlay.png',
        },
        {
            title: 'Attack on Titan',
            date: '20 April',
            ageRating: '16+',
            languages: ['Ru', 'En'],
            imgSrc: 'image 14 (3).png',
        },
        {
            title: 'News of the World',
            date: '20 April',
            ageRating: '16+',
            languages: ['Ru', 'En'],
            imgSrc: 'image 14 (2).png',
        },
        {
            title: 'Oğlan Evi: 2',
            date: '20 April',
            ageRating: '16+',
            languages: ['Ru', 'En'],
            imgSrc: 'image 14 (1).png',
        }
    ];
    const shuffledCards = cardData.sort(() => 0.5 - Math.random());

    const cardsToDisplay = shuffledCards.slice(0, 11);

    const cardContainer = document.getElementById('card-container');

    cardsToDisplay.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-3 mb-4';

        cardElement.innerHTML = `
            <div class="card bg-dark text-white">
                <img src="${card.imgSrc}" class="card-img" alt="${card.title}">
                <div class="card-img-overlay d-flex flex-column justify-content-end" style="background-color: rgba(0, 0, 0, 0.096);">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.date}<br>${card.ageRating}</p>
                    <div>
                        ${card.languages.map(lang => `<span class="badge bg-secondary">${lang}</span>`).join(' ')}
                    </div>
                </div>
            </div>
        `;

        cardContainer.appendChild(cardElement);
    });
});
