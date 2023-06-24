import clear from "./clear";


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
  
const images = importAll(require.context('./Image/Menu', false, /\.(png|jpe?g|svg)$/));
  

const loadMenu = () => {
    const divContent = document.getElementById("content");
    clear()
    const gridContainer= document.createElement("div");
    gridContainer.classList.add("grid-container")
    const dish1 = createDish("Pepperoni Pizza", "pepperoni", "pizza dough, tomato sauce, mozzarella cheese, pepperoni slices, and olive oil.");
    const dish2 = createDish("Cholocate Chip Cookie", "cookie", "All-purpose flour, Butter, Granulated sugar, Brown sugar, Eggs, Vanilla extract, Baking soda, Salt, Chocolate chips, ")
    const dish3 = createDish("Donut", "donut", "All-purpose flour, Sugar, Baking powder, Salt, Milk, Eggs, Butter, Vanilla extract, Vegetable oil")
    const dish4 = createDish("Fried Chicken", "friedChicken", "Chicken pieces, All-purpose flour, Salt, Black pepper, Paprika, Garlic powder, Onion powder, Dried herbs, Buttermilk, Vegetable oil")
    gridContainer.append(dish1, dish2, dish3, dish4)
    divContent.append(gridContainer)

return divContent
}

const createDish = (name, image, ingredients) => {
    
    const div = document.createElement("div");
    div.classList.add("food-container")
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const dishContainer = document.createElement("div");
    dishContainer.setAttribute("id", "dish-container");
    const img = document.createElement("img");
    img.src = `${images[`${image}.jpg`]}`
    const p = document.createElement("p");
    p.textContent = ingredients;
console.log("img: ", img)
dishContainer.append(img)
    div.append(dishContainer,h2,p)
    return div

}

export default loadMenu