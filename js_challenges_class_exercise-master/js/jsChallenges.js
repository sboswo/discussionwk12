//Challenge 1 Part 1

document.querySelector("#subscribe").addEventListener("click", function(){
    if (this.checked) {
        document.querySelector("#emailDiv").computedStyleMap.display="block";
    }
    else {
        document.querySelector("#emailDiv").computedStyleMap.display="none";
    }
})

//Challenge 1 Part 2

document.addEventListener("click", function(){
    let currentTime=new Date();
    alert("Current time: " + currentTime);
})