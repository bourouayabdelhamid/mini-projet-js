var courses = [{
        image: './images/javascriptDef.png',
        title: 'what is javascript?',
        category: 'JS',
        price: 9.9
    },
    {
        image: './images/htmlBasics.PNG',
        title: 'basics of HTML',
        category: 'HTML',
        price: 5.9
    },
    {
        image: './images/htmlElements.png',
        title: 'HTML elements and tags',
        category: 'HTML',
        price: 9.9
    },
    {
        image: './images/cssSelectors.jpg',
        title: 'CSS selectors',
        category: 'CSS',
        price: 69.9
    },
    {
        image: './images/javascriptVariables.png',
        title: 'variables and data type of javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/javascriptOperators.png',
        title: 'Javascript operators and conditions',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/htmlAttrVal.jpg',
        title: 'HTML attributes and values',
        category: 'HTML',
        price: 19.9
    },
    {
        image: './images/cssProperties.png',
        title: 'CSS properties',
        category: 'CSS',
        price: 29.9
    },
    {
        image: './images/javascriptObjects.png',
        title: 'Javascript objects and arrays',
        category: 'JS',
        price: 39.9
    },
    {
        image: './images/cssMesures.png',
        title: 'mesures and unites of CSS',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/cssAnimation.png',
        title: 'CSS animations',
        category: 'CSS',
        price: 19.9
    },
    {
        image: './images/javascriptFunctions.png',
        title: 'The basics of javascript',
        category: 'JS',
        price: 29.9
    },
    {
        image: './images/javascriptEvents.png',
        title: 'javascript events',
        category: 'JS',
        price: 59.9
    },
    {
        image: './images/cssColors.png',
        title: 'css colors',
        category: 'css',
        price: 29.9
    },
    {
        image: './images/phpBasics.png',
        title: 'getting started with php',
        category: 'php',
        price: 15.9
    },
    {
        image: './images/javascriptFunctions2.png',
        title: 'functions and loops with javascript',
        category: 'JS',
        price: 19.9
    },
    {
        image: './images/phpDataBase.png',
        title: 'connecting to database using PHP',
        category: 'PHP',
        price: 29.9
    },
    {
        image: './images/phpCRUD.png',
        title: 'manipulating crud using php',
        category: 'php',
        price: 45.9
    },
    {
        image: './images/javascriptDOM.png',
        title: 'DOM the power of javascript',
        category: 'JS',
        price: 23.9
    }

]

var content2 = document.querySelector('.content2');


function creationCours(image, titre, prix) {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2 image ');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title d-flex justify-content-center mt-3 titre');
    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text d-flex justify-content-center mt-2 mb-4 prix');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}
var T = [];

function randomcourse() {
    T = [];
    var b = false;
    for (let i = 0; i < 3; i++) {
        // alert(T.length);
        var c = Math.floor((Math.random() * 15) + 1);
        T.push(c);


        // if (T.length == 0) {
        //     T.push(conteur);
        //     creationCours(courses[conteur].image, courses[conteur].title, courses[conteur].price);

        // } else {

        //     for (let j = 0; j < T.length; j++) {
        //         if (T[j] == conteur) {

        //             b = true;


        //         }
        //     }
        //     if (!b) {

        //         T.push(conteur);
        //         creationCours(courses[conteur].image, courses[conteur].title, courses[conteur].price);

        //     } else {
        //         i--;
        //     }
        // }


    }




}
// alert(T);

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}

function testduplicate() {
    if (!hasDuplicates(T)) {
        content2.innerHTML = "";
        for (let j = 0; j < T.length; j++) {


            creationCours(courses[T[j]].image, courses[T[j]].title, courses[T[j]].price);

        }
    } else {
        randomcourse();

    }
}


setInterval(function() {
    randomcourse();
    testduplicate();
}, 1000);