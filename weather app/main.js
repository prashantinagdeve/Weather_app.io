

const serachBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");


async function checkWeather(){
	
	const url = 'https://open-weather13.p.rapidapi.com/city/${city}';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f29667d9c9mshc874286a054c367p133711jsn64ceca2a2e0d',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

	document.querySelector(".city").innerHTML = result.name;
	document.querySelector(".temp").innerHTML = Math.round(main.temp);
	document.querySelector(".humidity").innerHTML = result.main.humidity;
	document.querySelector(".wind").innerHTML = result.wind.speed;



} catch (error) {
	console.error(error);
}
}

serachBtn.addEventListener("click", ()=>{
	checkWeather(serachBox.value);
})

