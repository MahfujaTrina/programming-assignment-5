
function getInnerTextValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = parseInt(element.innerText)
    return elementValue
}


function getInnerTextFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementText = element.innerText
    return elementText
}

function setInnerTextWithIdAndValue(elementId, value) {
    const element = document.getElementById(elementId)
    element.innerText = value
}
function setValueWithIdAndValue(elementId, valueNew) {
    const element = document.getElementById(elementId)
    element.value = valueNew
}

function getInputValueFromId(elementId) {
    const element = document.getElementById(elementId)
    const elementValue = element.value
    return elementValue
}