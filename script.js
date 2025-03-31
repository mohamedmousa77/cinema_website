document.addEventListener("DOMContentLoaded", function() {
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
        document.getElementById("clock").textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
});

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the 'film' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const filmName = urlParams.get('film');

    // Define the film details for each film
    const films = {
        the_live_list: {
            title: "The Live List",
            description: "A gripping tale of a live streaming platform that goes dark.",
            actors: "John Doe, Jane Smith, Bob Brown",
            director: "Alice Cooper",
            releaseDate: "2024-07-12",
            image: "images/the_live_list.jpg"
        },
        beverly_hills_cop_axel_f: {
            title: "Beverly Hills Cop Axel F",
            description: "Axel F returns for more action-packed adventures in Beverly Hills.",
            actors: "Eddie Murphy, Judge Reinhold, John Ashton",
            director: "Mark Brown",
            releaseDate: "2024-05-22",
            image: "images/beverly_hills_cop_axel_f.jpg"
        },
        not_hard_feelings: {
            title: "Not Hard Feelings",
            description: "A comedy that explores the ups and downs of modern relationships.",
            actors: "Jennifer Lawrence, Chris Pratt, Adam Driver",
            director: "Emma Thompson",
            releaseDate: "2024-06-15",
            image: "images/not_hard_feelings.jpg"
        }
    };

    // Check if the film name exists in our films object
    if (filmName && films[filmName]) {
        const film = films[filmName];

        // Display film details on the page
        document.getElementById('film-title').innerText = film.title;
        document.getElementById('film-description').innerText = film.description;
        document.getElementById('film-actors').innerText = "Actors: " + film.actors;
        document.getElementById('film-director').innerText = "Director: " + film.director;
        document.getElementById('film-release-date').innerText = "Release Date: " + film.releaseDate;
        document.getElementById('film-image').src = film.image;
    } else {
        // If the film parameter is invalid, show an error message
        document.getElementById('film-details').innerText = "Sorry, no details available for this film.";
    }
});
