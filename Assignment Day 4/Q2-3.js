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
            // console.log(data);
        for(var i=0; i<data.length; i++){
            console.log(
            `
                Name: ${data[i].name},
                Region: ${data[i].region},
                Sub-region: ${data[i].subregion},
                Population: ${data[i].population}
            `
            )
            }
    }else{
        //you should print the error 
        console.log("Data is not available");
    }
}
