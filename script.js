// import { pyramidModel } from "./models/pyramidModel";
// import { elementModel } from "./models/elementModel";
const handleSubmit = (event) => {
    event.preventDefault()
    let genderInput = document.getElementById("gender-input")
    // @ts-ignore
    let genderValue = genderInput.options[genderInput.selectedIndex].text;
    // @ts-ignore
    let ageInput = document.getElementById("age-input").value
    if (genderValue === 'Enter Gender') { alert("please enter gender"); return; }
    if (ageInput === '') { alert("please enter age"); return; }
    if (ageInput <= 0) { alert("age cant be less than 1"); return; }
    if (ageInput >= 100) { alert("age can't be more than 100"); return; }
    console.log("gender is :" + genderValue)
    console.log("age is: " + ageInput)
    // let temp:elementModel = {
    let temp = {
        gender: genderValue,
        age: ageInput
    }
    console.log("temp is: ")
    console.log(temp)
    addElement(temp)
    drawPyramid()
    // genderInput.options[genderInput.selectedIndex].text = ''
    // genderValue = ''
    // ageInput = 0
};

// building the pyramid sceleton:
let pyramid
const buildPyramid = () => {
    pyramid = {
        toTen: [],
        toTwenty: [],
        toForthy: [],
        toSixty: [],
        toEighty: [],
        toHundard: []
    }
}
buildPyramid()

// const addElement = (element:elementModel) => {
const addElement = (element) => {
    // if (!element.gender) { alert("please enter gender"); return; }
    // if (!element.age) { alert("please enter age"); return; }
    // if (element.age <= 1) { alert("age cant be less than 1") }
    if (element.age <= 10) { pyramid.toTen = [...pyramid.toTen, element]; }
    else if (element.age <= 20) { pyramid.toTwenty = [...pyramid.toTwenty, element]; }
    else if (element.age <= 40) { pyramid.toForthy = [...pyramid.toForthy, element]; }
    else if (element.age <= 60) { pyramid.toSixty = [...pyramid.toSixty, element]; }
    else if (element.age <= 80) { pyramid.toEighty = [...pyramid.toEighty, element]; }
    else if (element.age <= 100) { pyramid.toHundard = [...pyramid.toHundard, element]; }
    // else if (element.age > 100) { alert("age can't be more than 100"); return }
    // console.log("pyramid is: ")
    // console.table(pyramid)
}

const drawPyramid = () => {
    document.getElementById("pyramid-draw").innerHTML = ""

    var size = Object.keys(pyramid).length;
    console.log(size)
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < Object.values(pyramid)[i].length; j++) {
            document.getElementById("pyramid-draw").innerText += "🔺"
        }
        document.getElementById("pyramid-draw").innerHTML += "<br>"
    }
}
