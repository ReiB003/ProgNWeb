document.addEventListener('DOMContentLoaded', () => {
    console.log('Dokumenti është ngarkuar plotësisht');
});

// Funksioni për të marrë kohën aktuale dhe për ta paraqitur atë në faqe
function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("clock").innerText = time;

    setTimeout(showTime, 1000); // Rifresko kohën çdo sekond
}

// Thirr funksionin për të filluar tregimin e kohës
showTime();


// Funksioni për të marrë datën aktuale dhe për ta paraqitur atë në faqe
function showDate() {
    let date = new Date();
    let days = ["E Diel", "E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte", "E Shtunë"];
    let months = ["Janar", "Shkurt", "Mars", "Prill", "Maj", "Qershor", "Korrik", "Gusht", "Shtator", "Tetor", "Nëntor", "Dhjetor"];
    
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    let dayOfMonth = date.getDate();
    let year = date.getFullYear();

    let fullDate = day + ", " + dayOfMonth + " " + month + " " + year;

    document.getElementById("date").innerText = fullDate;
}

// Thirr funksionin për të filluar tregimin e datës
showDate();

// Funksioni për të kërkuar artikujt
function searchArticles() {
    let searchInput = document.getElementById("search-input").value.toLowerCase();
    let articles = document.querySelectorAll(".articles article");

    articles.forEach(article => {
        let title = article.querySelector("h2").innerText.toLowerCase();
        if (title.includes(searchInput)) {
            article.style.display = "block";
        } else {
            article.style.display = "none";
        }
    });
}
