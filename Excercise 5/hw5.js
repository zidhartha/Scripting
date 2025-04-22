//Task 1
const a = document.getElementById('1');
console.log(a.textContent);
const all = document.getElementsByTagName("p");
for (const item of all) {
    console.log(item.textContent);
}
const fourthP = document.getElementById('4');
fourthP.textContent = "Fourth Content";
console.log(fourthP);
fourthP.setAttribute("id","idfk");
console.log(fourthP.id);

//Task 2
const container = document.getElementById("container")
for(i = 0;i<=101;i++){
    const newDiv = document.createElement("div");
    newDiv.textContent = i;
    if(i % 11 == 0){
        newDiv.style.backgroundColor = 'Red'
    }
    else if(i%2 == 0){
        newDiv.style.backgroundColor = 'Blue'
    }else if(i%2 == 1){
        newDiv.style.backgroundColor = 'Green'
    }
    newDiv.classList.add('container')
    container.appendChild(newDiv)
}