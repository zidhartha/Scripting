//Task 1
i = 0;
while(i<=9){
    console.log(i);
    i++;
}

//Task 2
for(i = 0;i<5;i++){
    console.log("tiger");
    
}

//Task 3
for(i = 1;i<=5;i++){
    if(i%2 == 0){
        console.log("skip");
        continue;
    }else if(i === 5){
        console.log("stop");
        break;
    }else{
    console.log("iteration: " + i);
}
}


//Task 4


function myName(name){
    console.log('My name is ' + name);
}

myName("Kai bichi")


//Task 5

function sum3(a,b,c){
    return a + b + c;
}

a = sum3(1,2,3)
console.log(a);


//Task 6
const informationCard = {
    FirstName : "a",
    LastName : 'b',
    Age : 5,
    ContactDetails : {
        HomeAddress : 'c',
        PhoneNumber : 121345
    }
    }

console.log(informationCard.ContactDetails);

//Task 7
const car = {
    basePrice: 25000,
    options: {
      leatherSeats: 1200,
      sunroof: 1000,
      navigationSystem: 800
    },
    calculateTotalPrice() {
        console.log(this.basePrice + this.options.leatherSeats + this.options.sunroof + this.options.navigationSystem);
    }
  };
  
  x = car.calculateTotalPrice();
