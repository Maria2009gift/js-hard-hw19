
import cardTemplate from '../templates/card.hbs' with { type: "text/x-handlebars-template" }
"use strict"
const element1 = document.querySelector("#element1")
const element2 = document.querySelector("#element2")
const element3 = document.querySelector("#element3")
const element4 = document.querySelector("#element4")
const btnLoadMore = document.querySelector("#btnLoadMore")
const inputCategory = document.querySelector("#inputCategory")
const inputColor = document.querySelector("#inputColor")


const BASE_URL = "https://pixabay.com/api/?key=44002611-c1194520823d769ac47082ab5&per_page=12"

let number = 0
const getInfo = async () => {

    number+=1
    await fetch(`${BASE_URL}&page=${number}&category=${inputCategory.value}&colors=${inputColor.value}`).then(res => res.json()).then(image => {
        console.log(image["hits"][0]);
        element1.insertAdjacentHTML("beforeend", 
        `${cardTemplate(image["hits"][0])}
        ${cardTemplate(image["hits"][1])}
        ${cardTemplate(image["hits"][2])}`)
        element2.insertAdjacentHTML("beforeend", `
        ${cardTemplate(image["hits"][3])}
        ${cardTemplate(image["hits"][4])}
        ${cardTemplate(image["hits"][5])}`)
        element3.insertAdjacentHTML("beforeend", `
        ${cardTemplate(image["hits"][6])}
        ${cardTemplate(image["hits"][7])}
        ${cardTemplate(image["hits"][8])}`)
        element4.insertAdjacentHTML("beforeend", `
        ${cardTemplate(image["hits"][9])}
        ${cardTemplate(image["hits"][10])}
        ${cardTemplate(image["hits"][11])}`)
    })

}

btnLoadMore.addEventListener("click", getInfo)
