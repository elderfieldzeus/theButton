const countButton = document.getElementById("addButton")
let countDisplay = document.getElementById("number")
let count = 0

countButton.addEventListener("click", function(){
    count++
    countDisplay.textContent = count
    if(count % 100 === 0 && count !== 0){
        alert("OKAY YOU CAN STOP NOW!")
    }
})