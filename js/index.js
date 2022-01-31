function requestEndPoint(endPointURL,loopController,imageKey,titleKey,insertId,htmlChef) {
  const xhr = new XMLHttpRequest();
  xhr.open("Get", endPointURL);
  xhr.onload = function () {
    const dataX = JSON.parse(xhr.responseText);
    var key = Object.keys(dataX)[0];
    var objectList = dataX[key];
    getListData(objectList,loopController,imageKey,titleKey,insertId,htmlChef);
  };
  xhr.send();
}

function getListData(data,loopController,imageKey,titleKey,insertId,htmlChef) {
  console.log(imageKey, titleKey);
  for (let i = 0; i < loopController; i++) {
    var title = data[i][titleKey];
    var img = data[i][imageKey];
    document.getElementById(insertId).innerHTML += htmlChef(title, img);
  }
}
requestEndPoint("latestMeal.json",8,"strMealThumb","strMeal","latest-row",generateHtml);
requestEndPoint("popularMeal.json",4,"strCategoryThumb","strCategory","popular-row",generateHtml);
requestEndPoint("randomMeal.json",8,"strMealThumb","strMeal","random-row",generateHtml);
requestEndPoint("randomingredients.json",4,"strCategoryThumb","strCategory","ingredient-row",generateHtml);

function generateHtml(title, img) {
  return `<div style="margin:0 0 10px 0;" class="col-lg-3">
    <a href=""><img class="img-style" src="${img}"></a>
    <a href="" style="color:#d57d1f; font-size:25px">${title}</a>
     </div>`;
}

