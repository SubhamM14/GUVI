//Q4: Print the total population of countries using reduce function

//set up http request
var xhr=new XMLHttpRequest();
xhr.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.send();

//Set up a listner where server listen to our request 
xhr.onload=function(){
    //process the request and server will return the data in response
    if(xhr.status>=200 && xhr.status<300){
       //convert raw into js notation format 
         var data=JSON.parse(xhr.response);
        //printing the elements in JSON 
        for(var i=0; i<data.length; i++){
            var TotalPopulation =  data.reduce((acc, curr) => {
                return acc + curr.population;
            },0);
            }
            console.log("Total Population of the countries using Reduce Funtion: " + TotalPopulation);
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}

