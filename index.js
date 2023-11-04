const countButton = document.getElementById("addButton")
let countDisplay = document.getElementById("number")
let count = 0

countButton.addEventListener("click", function(){
    count++
    // countDisplay.remove()
    countDisplay.textContent = count
})