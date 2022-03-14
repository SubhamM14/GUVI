//Question 5: Print the country which uses US Dollars as currency.
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
        data.filter(reg => {
            if(reg.region === "Asia") {
               console.log(reg.name); 
            }
        });
}
}