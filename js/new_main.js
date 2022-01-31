// function data get 
function fethc_data(url, bindfunc, row_Identifier, html) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var response_Inkey = Object.keys(response)[0];
        var calling_data = response[response_Inkey];
        bindfunc(calling_data, row_Identifier, html)
    }
    xhr.send();
}
// function binding
function bindfunc(calling_data, row_Identifier, html) {
    for (var i in calling_data) {
        var logo = calling_data[i].strMealThumb;
        var nameoflogo = calling_data[i].strMeal;
        document.getElementById(row_Identifier).append(html(nameoflogo, logo))

    }
}
// function for html with getting data & replacing
// function htmlbody(logo, nameoflogo, row_Identifier) {
//     $.get('temp.html', function (data) {
//         let nwData = data.replace('image', logo);
//         nwData = nwData.replace('data', nameoflogo);
//         document.getElementById(`${row_Identifier}`).innerHTML += nwData;
//         // document.getElementById(row_Identifier).innerHTML += nwData;
//     })
// }
fethc_data("Json_Files/latest_meals.json", bindfunc, "latest_meal", htmlbodydata)
fethc_data("Json_Files/Popular_Ingredients.json", bindfunc, "popular_ing", htmlbodydata)
fethc_data("Json_Files/random_meals.json", bindfunc, "random_meal", htmlbodydata)
fethc_data("Json_Files/random_ingredients.json", bindfunc, "Random_ing", htmlbodydata)

function htmlbodydata(nameoflogo, logo) {
    let template = document.querySelector("#DhtmlContent").content.cloneNode(true);
    template.querySelector("img").setAttribute("src", logo);
    template.querySelector("p").textContent = nameoflogo;
    return template;
}