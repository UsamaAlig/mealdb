const url = "latestMeal.json";
const url1 = "popularMeal.json";
const url2 = "randomMeal.json";
const url3 = "randomIngredients.json";
const url4 = "flags.json";

function getEndPointData(endPointUrl,callBackFunc){
  const api = new XMLHttpRequest();
  api.open("GET",endPointUrl);
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    callBackFunc(data);
    
  }
  api.send();
}

function generateCell(img,title,rowId){

    $.get("new.html", (data) => {
    let newData = data.replace("##IMG##", img);
    
    // let newData = document.getElementsByTagName("Img").setAttribute('src', img);
    newData = newData.replace("##TITLE##", title);
    document.getElementById(rowId).innerHTML+=newData;
    console.log(newData);

});

//   return `<div class="col-lg-3 px-4 py-2">
//   <img src="${img}" height="90%" width="100%"/>
//   <div class="d-flex justify-content-center">
//   <p style="color:#d57d1f;">${title}</p>
//   </div>     
// </div>`
}
function generateCellFlag(img){
  return `<div class="col-lg-1 px-4 py-2">
  <img src="${img}" height="90%" width="100%"/>     
</div>`
}

getEndPointData(url,bindingData);
function bindingData(data){
  data.meal.map(obj=>{
    var img = obj.strMealThumb;
    var title = obj.strMeal;
    generateCell(img,title);
  });
}



getEndPointData(url1,bindingData2);
function bindingData2(data){
  data.categories.map(obj=>{
    var img = obj.strCategoryThumb;
    var title = obj.strCategory;
    document.getElementById("ingrediants").innerHTML+=generateCell(img,title);
  });
}

getEndPointData(url2,bindingData3);
function bindingData3(data){
  data.meals.map(obj=>{
    var img = obj.strMealThumb;
    var title = obj.strMeal;
    document.getElementById("random").innerHTML+=generateCell(img,title);
  });
}

getEndPointData(url3,bindingData4);
function bindingData4(data){
  data.categories.map(obj=>{
    var img = obj.strCategoryThumb;
    var title = obj.strCategory;
    document.getElementById("randomIng").innerHTML+=generateCell(img,title);
  });
}

getEndPointData(url4,bindingData5);
function bindingData5(data){
  data.country.map(obj=>{
    var img = obj.cunFlagThumb;
    document.getElementById("flags").innerHTML+=generateCellFlag(img);
  });
}
