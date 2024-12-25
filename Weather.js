function getfunc() {
    const city = Search.value;
    const apiKey = 'ccfd6fa99c21da1d2631bc0af235d447';  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`City not found (${response.status})`);
            }
            return response.json();
        })
        .then(res => {
            console.log(res);
            const temp = res.main.temp;
            const humidity = res.main.humidity;
            const windSpeed = res.wind.speed;
            const feelsLike = res.main.feels_like;
            const cloudPct = res.clouds.all;

            document.getElementById('temp').innerHTML = temp;
            document.getElementById('hmdt').innerHTML = humidity;
            document.getElementById('ws').innerHTML = windSpeed;
            document.getElementById('feellike').innerHTML = feelsLike;

            if (cloudPct > 70) {
                document.body.style.backgroundImage = "url('Images/Rainy.gif')";
                document.getElementById('chances').innerHTML = "Rain Possible";
            } else {
                if (temp > 33) {
                    document.body.style.backgroundImage = "url('Images/summer.gif')";
                    document.getElementById('chances').innerHTML = "It's Hot Outside";
                } else if (temp > 15) {
                    document.body.style.backgroundImage = "url('Images/normal.gif')";
                    document.getElementById('chances').innerHTML = "It's Nice Outside";
                } else {
                    document.body.style.backgroundImage = "url('Images/winter.gif')";
                    document.getElementById('chances').innerHTML = "Cool Outside";
                }
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error: Unable to fetch weather data. Please check the city name.');
        });
}
function THEME(seson){
    if (seson =="Rainy") {
        document.body.style.backgroundImage = "url('Images/Rainy.gif')";
        
    }
    if (seson =="Winter") {
       
        document.body.style.backgroundImage = "url('Images/winter.gif')";
        
    }  
    if (seson =="Aerial") {
        document.body.style.backgroundImage = "url('Images/normal.gif')";
        
    }    
    if (seson =="Summer") {
        document.body.style.backgroundImage = "url('Images/summer.gif')";
        
    }
}
