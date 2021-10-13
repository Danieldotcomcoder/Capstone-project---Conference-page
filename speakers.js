const speakersinfo = document.querySelector('.speakers');

const speakersinformation = [
    {
        name: "Tom Taylor",
        image: "img/speakers/Tom-Talyor.jpeg",
        position: "SVP of Alexa at Amazon",
        description: "Tom oversees the more than 10,000 engineers, scientists and other functions working to bring customers to Alexa",
    },
    {
        name: "Amy Poehler",
        image: "img/speakers/Amy-Poehler.png",
        position: "Founder at Amy Poehler's Smart Girls",
        description: "Amy is one of Hollywood’s most versatile talents, credited as an actress, writer, and bestselling author",
    },
    {
        name: "Biz Stone",
        image: "img/speakers/Biz-Stone.png",
        position: "Co-founder at Future Positive",
        description: "Biz is a co-founder of Twitter, Medium and Jelly, and develops systems that serve the global conversation.",
    },
    {
        name: "Jen Wong",
        image: "img/speakers/Jen-Wong.png",
        position: "COO at Reddit",
        description: "Jen is Reddit’s chief operating officer, overseeing business strategy from Reddit’s New York office",
    },
    {
        name: "Tim Berners Lee",
        image: "img/speakers/Sir-Tim-Berners-Lee.png",
        position: "CTO & co-founder at Inrupt",
        description: "Sir Tim is the inventor of the world wide web, he has ensure that it remains open to everyone",
    },
    {
        name: "Opal Tometi",
        image: "img/speakers/Opal-Tometi.png",
        position: "Co-founder at Black Lives Matter",
        description: "Opal is one of the most influential human rights leaders of the century, according to Time magazine",
    },
]

window.addEventListener('DOMContentLoaded', () => {
    speakersinfo.innerHTML = ` <h2 class="speakers-title">Featured Speakers</h2>
    <ul>
        <li>
            <img src=${speakersinformation[0].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[0].name}</h2>
                <h3 class="speaker-post">${speakersinformation[0].position}</h3>
                <h3 class="speaker-description">${speakersinformation[0].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakersinformation[1].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[1].name}</h2>
                <h3 class="speaker-post">${speakersinformation[1].position}</h3>
                <h3 class="speaker-description">${speakersinformation[1].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakersinformation[2].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[2].name}</h2>
                <h3 class="speaker-post">${speakersinformation[2].position}</h3>
                <h3 class="speaker-description">${speakersinformation[2].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakersinformation[3].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[3].name}</h2>
                <h3 class="speaker-post">${speakersinformation[3].position}</h3>
                <h3 class="speaker-description">${speakersinformation[3].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakersinformation[4].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[4].name}</h2>
                <h3 class="speaker-post">${speakersinformation[4].position}</h3>
                <h3 class="speaker-description">${speakersinformation[4].description}</h3>
            </div>
        </li>
        <li>
            <img src=${speakersinformation[5].image} alt="speakerimg1">
            <div class="speaker-info">
                <h2 class="speaker-name">${speakersinformation[5].name}</h2>
                <h3 class="speaker-post">${speakersinformation[5].position}</h3>
                <h3 class="speaker-description">${speakersinformation[5].description}</h3>
            </div>
        </li>
     </ul>`;
});