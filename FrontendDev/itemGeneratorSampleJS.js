//----------Item Generator Sample----------

let users = [
    {
        name: "Mg Mg",
        age: 23,
        Member_Type: "Gold",
        Education: "Graduate",
        isMarried: false,
        image: "images/img1.jpg"
    },
    {
        name: "Su Su",
        age: 20,
        Member_Type: "Platinum",
        Education: "Under Graduate",
        isMarried: false,
        image: "images/img3.jpg"
    },
    {
        name: "Hla Hla",
        age: 30,
        Member_Type: "Diamond",
        Education: "Graduate",
        isMarried: true,
        image: "images/c1.jpg"
    },
    {
        name: "Nu Nu",
        age: 20,
        Member_Type: "Silver",
        Education: "Second year",
        isMarried: true,
        image: "images/g1.png"
    },
    {
        name: "Mya Mya",
        age: 25,
        Member_Type: "Platinum",
        Education: "Graduate",
        isMarried: true,
        image: "images/c9.jpg"
    }
];

function personIterator(userArr) {
    let userIndex = 0;

    return {
        next: () => {
            return userIndex < userArr.length ? {value: userArr[userIndex++], done: false} : {done: true};
        }
    }
}

let persons = personIterator(users);

let btn = document.querySelector("#btnNext");
let imageDisplay = document.querySelector(".imageDisplay");
let infoDisplay = document.querySelector(".infoDisplay");

btn.addEventListener("click", changePerson);

function changePerson() {
    let person = persons.next();
    if(!person.done){
        imageDisplay.innerHTML = `<img src="${person.value.image}" alt="" class="d-block mx-auto w-50">`;

        infoDisplay.innerHTML = `<ul class="list-group">
                                    <li class="list-group-item">Name: ${person.value.name}</li>
                                    <li class="list-group-item">Age: ${person.value.age}</li>
                                    <li class="list-group-item">Member_Type: ${person.value.Member_Type}</li>
                                    <li class="list-group-item">Education: ${person.value.Education}</li>
                                    <li class="list-group-item">isMarried: ${person.value.isMarried}</li>
                                </ul>`;
    }else{
        window.location.reload();
    }
}

changePerson(); // if you don't firstly call fun:, UI doesn't show
