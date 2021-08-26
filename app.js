fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=%3CREQUIRED%3E", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
		"x-rapidapi-key": "13b944be69msh3ccf134bb2c7004p186b71jsn4eed552201d9"
	}
})
.then(response => {
	response.json();
}).then(dataResponse=> {console.log(dataResponse)})
.catch(err => {
	console.error(err);
});
alert("hello")