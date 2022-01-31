const url = "json_data/latestMeal.json";
const url1 = "json_data/popularMeal.json";
const url2 = "json_data/randomMeal.json";
const url3 = "json_data/randomIngredients.json";
const url4 = "json_data/flags.json";

function getEndPointData(endPointUrl,callBackFunc,imgName,titleName,rowId){
  const api = new XMLHttpRequest();
  api.open("GET",endPointUrl);
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    const key = Object.keys(data)[0];
    const datakey = data[key]
    callBackFunc(datakey,imgName,titleName,rowId);
  }
  api.send();
}

function generateCell(img,title,rowId){
      $.get("new.html", (data) => {
        var stringToHTML = function (str) {
          var parser = new DOMParser();
          var doc = parser.parseFromString(str, 'text/html');
          var actualBody = doc.body.firstChild;
          actualBody.querySelector("img").setAttribute("src",img);
          actualBody.querySelector("p").textContent=title;
          document.getElementById(rowId).append(actualBody);
        };
        stringToHTML(data);

    })
}
function bindingData(data,imgName,titleName,rowId){
  data.map(obj=>{
    var img = obj[imgName];
    var title = obj[titleName];
    generateCell(img,title,rowId);
  });
}

getEndPointData(url,bindingData,"strMealThumb","strMeal","meals");
getEndPointData(url1,bindingData,"strCategoryThumb","strCategory","ingrediants");
getEndPointData(url2,bindingData,"strMealThumb","strMeal","random");
getEndPointData(url3,bindingData,"strCategoryThumb","strCategory","randomIng");

function generateCellFlag(img){
  return `<div class="col-lg-1 px-4 py-2">
  <img src="${img}" height="90%" width="100%"/>     
</div>`
}

getEndPointData(url4,bindingData5);
function bindingData5(dataKey){
  dataKey.map(obj=>{
    var img = obj.cunFlagThumb;
    document.getElementById("flags").innerHTML+=generateCellFlag(img);
  });
}
