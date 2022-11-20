const person1 = {
    name: "Ko Ko",
    age: 24,
    height: 160,
    DOB: 1999,
    walk: () => {
        alert("Mg Mg is walking now...")
    }
}
person1.hobby = "football"
person1.eat = () => {
    alert("KO KO is eating now...")
}
person1

const inputName = "SuSu"
const inputValue = 10000
const propertyName = "DonatedBy" + inputName
propertyName //DonatedBySuSu

// person1.propertyName = inputValue ---> propertyName: 10000 //so Don't use this

person1[propertyName] = inputValue // output---> DonatedBySuSu: 10000
//Don't use ""

const carInfo = {
    brand: "Toyota",
    price: 2000000,
    model: 2019
}

person1.car = carInfo
person1

