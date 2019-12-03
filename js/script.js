let dropDownList = document.getElementById(`city`);

dropDownList.addEventListener(`change`, function(){
    const endPoint = `http://api.weatherstack.com/current?access_key=0c7fa0034dc76ffece837dde6bbe2196&query=${dropDownList.value}`;

    fetch(endPoint)
    .then(function(res){

    })


});