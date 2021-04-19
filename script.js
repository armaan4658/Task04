//creating xml request
var req = new XMLHttpRequest();
//initiate a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//loading the function
req.onload=function(){
    //converting the data to JSON
    var data = JSON.parse(this.response);
    //Getting all the countries from Asia continent /region using Filter function
    let region = data.filter((element)=>{
        return element.region=="Asia";
    })
    console.log("------------------Countries in Asia------------------");
    console.log(region);
    //Getting all the countries with population of less than 2 lacs using Filter function
    let population = data.filter((element)=>{
        return element.population < 200000;
    })
    console.log("----------population lesser than 2 lacs--------------");
    console.log(population);
    //population
    let popul = [];
    //Printing the following details name, capital, flag using forEach function
    console.log("--------------------name,capital,flag----------------");
    for(let i in data){
        console.log(`name: ${data[i].name} capital: ${data[i].capital} flag: ${data[i].flag}`);
        popul.push(data[i].population);
    }
    //Printing the total population of countries using reduce function
    let totalPopulation = popul.reduce((cv,elements)=>{
        return cv+elements;
    })
    console.log("-----------Total population-------------------------------");
    console.log(`Total population = ${totalPopulation}`);
    //Printing the country which use US Dollars as currency.
    let usdCurrency = data.filter((element)=>{
        return element.currencies[0].code=="USD";
    })
    console.log("------------Countries which use USD as currency------------");
    console.log(usdCurrency);
}
