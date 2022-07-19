
let pyramid
//Handle form of adding submit button
const handleSubmit = (event) => {
    event.preventDefault()
    let genderInput = document.getElementById("gender-input")
    let genderValue = genderInput.options[genderInput.selectedIndex].text;
    let ageInput = document.getElementById("age-input").value
    
    if (genderValue === 'Enter Gender') { alert("please enter gender"); return; }
    if (ageInput === '') { alert("Please enter age"); return; }
    if (ageInput <= 0) { alert("Age can't be less than 1"); return; }
    if (ageInput >= 120) { alert("Age can't be more than 120"); return; }

    let temp = {
        gender: genderValue,
        age: ageInput
    }

    addElement(temp)
    drawPyramid()
};

// building the pyramid sceleton:
const buildPyramid = () => {
    pyramid = {
        toTen: [],
        toTwenty: [],
        toForthy: [],
        toSixty: [],
        toEighty: [],
        toHundard20: []
    }
}
buildPyramid()

//Add an element to the pyramid
const addElement = (element) => {
    if (element.age <= 10) { pyramid.toTen = [...pyramid.toTen, element]; }
    else if (element.age <= 20) { pyramid.toTwenty = [...pyramid.toTwenty, element]; }
    else if (element.age <= 40) { pyramid.toForthy = [...pyramid.toForthy, element]; }
    else if (element.age <= 60) { pyramid.toSixty = [...pyramid.toSixty, element]; }
    else if (element.age <= 80) { pyramid.toEighty = [...pyramid.toEighty, element]; }
    else if (element.age <= 120) { pyramid.toHundard20 = [...pyramid.toHundard20, element]; }
}

//Add a single element to the table
const print = (count, gender, age) => {
    document.getElementById("table-body").innerHTML +=
        `<tr>
            <th scope="row">${count}</th>
            <td>${gender}</td>
            <td>${age}</td>
        </tr>`
}

// Draw the phisical shape of the pyramid
const drawPyramid = () => {
    document.getElementById("pyramid-draw").innerHTML = ""

    let size = Object.keys(pyramid).length;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {
            document.getElementById("pyramid-draw").innerText += "🔺"
        }
        document.getElementById("pyramid-draw").innerHTML += "<br>"
    }
}

const getByAge = () => {
    document.getElementById("table-body").innerHTML = ''

    let searchAgeInput = document.getElementById("age-search").value
    if (searchAgeInput === '') { alert('please enter age'); return; }

    let size = Object.keys(pyramid).length;
    let counter = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {

            let values = Object.values(pyramid)[i]
            let gender = values[j].gender
            let age = values[j].age
            console.log(gender)
            console.log(age)
            if (age === searchAgeInput) {
                print(++counter, gender, age)
            }
        }
    }
}

const getByGender = () => {
    document.getElementById("table-body").innerHTML = ''

    let temp = document.getElementById("gender-search")
    let searchGenderInput = temp.options[temp.selectedIndex].text

    if (searchGenderInput === "Choose Gender") {
        alert("please enter gender")
        return;
    }

    let size = Object.keys(pyramid).length;
    let counter = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {
            let values = Object.values(pyramid)[i]
            let gender = values[j].gender
            let age = values[j].age
            console.log(gender)
            console.log(age)
            if (gender === searchGenderInput) {
                print(++counter, gender, age)
            }
        }
    }
}

const getByAgeAndGender = () => {
    document.getElementById("table-body").innerHTML = ''
    let searchAgeInput = document.getElementById("age-search").value
    let temp = document.getElementById("gender-search")
    let searchGenderInput = temp.options[temp.selectedIndex].text

    if (searchGenderInput === "Choose Gender") { alert("please enter gender"); return; }
    if (searchAgeInput === '') { alert('please enter age'); return; }

    let size = Object.keys(pyramid).length;
    let counter = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {
            let values = Object.values(pyramid)[i]
            let gender = values[j].gender
            let age = values[j].age
            if (gender === searchGenderInput && age === searchAgeInput) {
                print(++counter, gender, age)
            }
        }
    }
}

const getAll = () => {
    document.getElementById("table-body").innerHTML = ''

    let size = Object.keys(pyramid).length;
    let counter = 0
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {
            let values = Object.values(pyramid)[i]
            let gender = values[j].gender
            let age = values[j].age
            console.log(gender)
            console.log(age)
            print(++counter, gender, age)
        }
    }
}

