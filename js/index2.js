function requestEndPoint(endPointURL,loopController,imageKey,titleKey,insertId,htmlChef) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", endPointURL);
  xhr.onload = function () {
    const dataX = JSON.parse(xhr.responseText);
    let key = Object.keys(dataX)[0];
    let objectList = dataX[key];
    
    getListData(objectList,loopController,imageKey,titleKey,insertId,htmlChef);
  };
  xhr.send();
}

function getListData(data,loopController,imageKey,titleKey,insertId,htmlChef) {
  for (let i = 0; i < loopController; i++) {
    let title = data[i][titleKey];
    let img = data[i][imageKey];
    document.getElementById(insertId).append(htmlChef(title,img));
  }
}
requestEndPoint("json_data/latest_meals.json",8,"imgPath","mealName","latest-meal-item",generateHtml);
requestEndPoint("json_data/popular_ingredients.json",4,"imgPath","mealName","popular-ingredients-item",generateHtml);
requestEndPoint("json_data/latest_meals.json",8,"imgPath","mealName","random-meals-item",generateHtml);
requestEndPoint("json_data/latest_meals.json",4,"imgPath","mealName","random-ingredients-item",generateHtml);

function generateHtml(title, img) {
  let template=document.querySelector("#title_image").content.cloneNode(true);
  template.querySelector(".var-img").setAttribute("src",img);
  template.querySelector("h3").textContent=title;  
  return template;
}






