let dropDownList = document.getElementById(`city`);

dropDownList.addEventListener(`change`, function(){
    const endPoint = `http://api.weatherstack.com/current?access_key=0c7fa0034dc76ffece837dde6bbe2196&query=${dropDownList.value}`;

    fetch(endPoint)
    .then(function(res){
        //This plucks the json out of the response
        res.json()
        .then(function(data){
            let div = document.getElementById(`container`);
            div.innerHTML = `The current temperature in ${dropDownList.value} is ${data.current.temperature}`;
        })
    })


});