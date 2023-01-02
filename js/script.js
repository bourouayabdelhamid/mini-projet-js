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
var content2 = document.querySelector('.content2'),
    listCat = document.querySelector('#listCat');
var searchitem = document.getElementById('searchitem');

function creationCours(image, titre, prix) {

    let div = document.createElement('div');
    div.setAttribute('class', 'card col-4 me-2 image imglist mb-2 test_search');
    let img = document.createElement('img');
    //img.setAttribute('src',image)
    img.src = image;

    let p = document.createElement('p');
    p.setAttribute('class', 'card-title justify-content-center mt-3 titre');

    let contenu = document.createTextNode(titre);
    p.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'card-text justify-content-center mt-2 mb-4 prix');
    span.appendChild(document.createTextNode(prix + '$'));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);
    content2.append(div)
}

function contains(text_one, text_two) {
    if (text_one.indexOf(text_two) != -1) {
        return true;
    }
}

function testsearch(search = "", price = 0, catg = "", multiple = 0) {
    content2.innerHTML = "";
    if (multiple > 0) {

        var k = true;
        courses.forEach((el) => {

            if (el.category.toLowerCase() == catg.toLowerCase() && el.price <= price) {
                k = false;
                creationCours(el.image, el.title, el.price);

            }

        });
        if (k) {
            content2.innerHTML = "<h2>Not data found</h2>";
        }

    } else {


        if (search) {

            var r = true;
            courses.forEach((el) => {

                if (contains(el.title.toLowerCase(), search.toLowerCase()) || contains(el.price.toString(), search.toString())) {
                    r = false;
                    creationCours(el.image, el.title, el.price);

                }

            });
            if (r) {
                content2.innerHTML = "<h2>Not data found</h2>";
            }
        } else if (price > 0) {
            let l = true;
            courses.forEach((el) => {

                if (el.price <= price) {
                    l = false;
                    creationCours(el.image, el.title, el.price);

                }

            });
            if (l) {
                content2.innerHTML = "<h2>Not data found</h2>";
            }
        } else if (catg) {

            courses.forEach((el) => {
                if (el.category.toLowerCase() == catg.toLowerCase()) {

                    creationCours(el.image, el.title, el.price);

                }
            });
        } else {
            courses.forEach((el) => {


                creationCours(el.image, el.title, el.price);


            })
        }
    }
}
testsearch();
searchitem.addEventListener('change', function() {
    var search = document.getElementById('searchitem').value;
    testsearch(search);
});

function creationCategories(cat) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    // a.setAttribute('value', "cat");
    a.setAttribute('class', 'categorie');
    a.setAttribute('data-categorie', cat);
    a.setAttribute('href', '#');
    a.appendChild(document.createTextNode(cat));
    // li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    li.append(a);
    listCat.append(li);
}

var categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]

categories.forEach((v) => {
    creationCategories(v);
})


var prix = document.getElementById('prix');
prix.addEventListener('change', function() {
    testsearch("", prix.value);

});
var ele = document.getElementsByClassName("categorie");
var categorie;
for (let i = 0; i < ele.length; i++) {
    ele[i].addEventListener("click", function(e) {
        categorie = e.target.getAttribute('data-categorie');

        if (categorie == "all") {
            testsearch("", prix.value);
        } else {
            if (prix.value > 0) {
                testsearch("", prix.value, categorie, 1);
            } else {
                testsearch("", 0, categorie);
            }

        }
    });
}