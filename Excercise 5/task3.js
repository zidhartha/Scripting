function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

function createYear(){
    const p = document.createElement("h3");
    setInterval(()=> {
        p.textContent = GetTime(),
        p.style.backgroundColor = randomColor()
    } ,1000);
    p.style.backgroundColor = "red";
    document.body.prepend(p);
}


function GetTime(){
    const date = Date();
    return date;
}

const list = document.getElementsByTagName("li");
for(const item of list){
    item.style.margin = '5px'
    if (item.textContent.includes("Done")){
        item.style.backgroundColor = "green"
    }else if(item.textContent.includes("Coming")){
        item.style.backgroundColor = "red"
    }else if(item.textContent.includes("Ongoing")){
        item.style.backgroundColor = "yellow"
    }
}

const todo = document.getElementById('2');
todo.style.display = 'flex';
todo.style.justifyContent = 'center';
todo.style.color = 'pink'

const week = document.getElementById('1');
week.style.display = 'flex';
week.style.justifyContent = 'center';

createYear();
