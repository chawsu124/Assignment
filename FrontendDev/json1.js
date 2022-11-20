// JSon (Javascript Object Notation) //

// json values cannot be the one of following data types:
    // undefined
    // function
    // date

// json values must be the one of following data types:
    // String
    // Number
    // Object
    // Array
    // Boolean
    // null

    const JSobject = {
        name: "MSquare",
        subscriber: 4000,
        isProgramming: true,
        position: undefined,
        totalView: () => {
            return 1000;
        },
    };

    const JSonObject = {
        "name": "MSquare", // property name and value must have DoubleCode "" // not SingleCode ''
        "subscriber": 4000, // property name and value must have ""
        "isProgramming": true // don't have comma(,) at the end of property's value that has no next
    } // don't have comma(,) at the end of variable 

    const JSonArray = [1,2,3]