
const categories = document.querySelector("ul#categories").children 
console.log("Number of categories: " + categories.length)

for(let i = 0; i < categories.length; i++){
    const element = categories[i]
    console.log("\n")
    console.log("Category: " + element.querySelector("h2").textContent)
    console.log("Elements: " + element.querySelector("ul").children.length)
}
