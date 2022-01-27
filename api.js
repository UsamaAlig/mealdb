const url = "https://www.themealdb.com/api/json/v1/1/categories.php";

function mealData(){
  const api = new XMLHttpRequest();
  api.open("GET","latestMeal.json");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log("Data",data.meals)
    document.querySelector("#meals").innerHTML=data.meals.map(meal=>`
    <div class="col-3 px-4 py-2">
      <img src="${meal.strMealThumb}" height="90%" width="100%"/>
      <div class="d-flex justify-content-center">
      <p style="color:#d57d1f;">${meal.strMeal}</p>
      </div>     
    </div>        
    `).join("")
  }
  api.send()
}

function ingrediantsData(){
  const api = new XMLHttpRequest();
  api.open("GET","popularMeal.json");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log("Data",data.categories)
    document.getElementById("ingrediants").innerHTML=data.categories.map(meal=>`
    <div class="col-3 px-4 py-2">
      <img  src="${meal.strCategoryThumb}" height="90%" width="100%"/>
      <div class="d-flex justify-content-center">
      <p style="color:#d57d1f;">${meal.strCategory}</p>
      </div>     
    </div>        
    `).join("")
  }
  api.send()
}

function randomMealData(){
  const api = new XMLHttpRequest();
  api.open("GET","randomMeal.json");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log("Data",data.meals)
    document.querySelector("#random").innerHTML=data.meals.map(meal=>`
    <div class="col-3 px-4 py-2">
      <img src="${meal.strMealThumb}" height="90%" width="100%"/>
      <div class="d-flex justify-content-center">
      <p style="color:#d57d1f;">${meal.strMeal}</p>
      </div>     
    </div>        
    `).join("")
  }
  api.send()
}

function randomIngredientData(){
  const api = new XMLHttpRequest();
  api.open("GET","randomIngredients.json");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log("Data",data.categories)
    document.querySelector("#randomIng").innerHTML=data.categories.map(meal=>`
    <div class="col-3 px-4 py-2">
      <img src="${meal.strCategoryThumb}" height="90%" width="100%"/>
      <div class="d-flex justify-content-center">
      <p style="color:#d57d1f;">${meal.strCategory}</p>
      </div>     
    </div>        
    `).join("")
  }
  api.send()
}


function flagsData(){
  const api = new XMLHttpRequest();
  api.open("GET","flags.json");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log("Data",data.country)
    document.querySelector("#flags").innerHTML=data.country.map(meal=>`
    <div class="col-1 px-2 py-2">
      <a href="#"><img src="${meal.cunFlagThumb}" height="90%" width="100%"/> </a>    
    </div>        
    `).join("")
  }
  api.send()
}


mealData();
ingrediantsData();
randomMealData();
randomIngredientData();
flagsData();