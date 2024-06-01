function getfunc() {

    const city=Search.value;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'ee3254b947msh057d092ac9c5c00p172ff1jsnc5bf0202f02c',
            'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(res=>{
            console.log(res);
            temp.innerHTML = res.temp;
            hmdt.innerHTML = res.humidity;
            ws.innerHTML = res.wind_speed;
            feellike.innerHTML = res.feels_like;
            if(res.cloud_pct>70){
                document.body.style.backgroundImage = "url('Images/Rainy.gif')";
                chances.innerHTML="Rain Possible";
                
            }
            else{
            if (res.temp>33) {
                document.body.style.backgroundImage = "url('Images/summer.gif')";   
                chances.innerHTML="It's Hot Outside"; 
            
                        
            }
            else if(res.temp>15){
                document.body.style.backgroundImage = "url('Images/normal.gif')";
                chances.innerHTML="It's Nice Outside";

            }
            else{
                document.body.style.backgroundImage = "url('Images/winter.gif')";
                chances.innerHTML="Cool Outside";

            }
            }

        })
        .catch(err => console.error(err));
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