const person = {
    name: "Mg Mg",
    age: 24,
    height: 160,
    DOB: 1999,
    walk: () => {
        alert("Mg Mg is walking now...")
    }
}

person // call the whole obj

// There are two way to call obj//

// the first way is dot(.) method
person.DOB
person.age
person.name
person.walk()


// the second way is [" "] method
person["DOB"]
person["age"]
person["name"]
person["walk"]()

person.edu = "UCST"; // insert new property to this obj