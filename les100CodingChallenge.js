// Coding Challenge //

class Element{
    constructor(name,buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name,buildYear,area,numTree){
        super(name,buildYear);
        this.area = area;
        this.numTree = numTree;
    }

    treeDensity(){
        const density = this.numTree / this.area ;
        console.log(`${this.name} has a tree density of ${density} tree per square.`)
    }
}

class Street extends Element{
    constructor(name,buildYear,length,size){
        super(name,buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1,'tiny');
        classification.set(2,'small');
        classification.set(3,'normal');
        classification.set(4,'big');
        classification.set(5,'huge');

        console.log(`${this.name}, build in ${this.buildYear} year, have ${classification.get(this.size)} streets.`)
    }
}


const allParks = [new Park("Green Park",1985,0.2,215),
                    new Park("National Park", 1980,2.9,3125),
                    new Park("Oak Park",1954,0.4,949)];

const allStreets = [new Street("No.1",1999,1.1,4),
                    new Street("No.2",2008,2.7,2),
                    new Street("No.3",2015,0.8),
                    new Street("No.4",1982,2.5,5)];


function calc(arr){
    const sum = arr.reduce((pre,cur,inde) => pre + cur,0);
    return [sum, sum / arr.length];
}

function reportPark(p){
    console.log("----------------Park Report-----------------");
    // density
    p.forEach(el => el.treeDensity());
    // average age of park
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${p.length} park have an average age of ${avgAge} Years.`);
    // Which park has more than 1000 trees
    const i = p.map(el => el.numTree).findIndex(el => el >= 1000);
    console.log(`Our ${p[i].name} have more than 1000 trees.`);
}

function reportStreet(s){
    console.log("----------------Street Report-----------------");
    // Total and average length of the street
    const [totalLength,avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} street have total length of ${totalLength} km, with an average of ${avgLength} km.`)
    // classify size
    s.forEach(el => el.classifyStreet());
}


reportPark(allParks);
reportStreet(allStreets);

