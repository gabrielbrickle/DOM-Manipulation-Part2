// GO!

// TASK 1 -- Show/Hide Nav
var thingToToggle = document.querySelector('button')

function toggleMe() {
    var newButton = document.querySelector('button').innerHTML
    var menu = document.querySelector('.nav-menu')
    if (menu.style.display != 'none') {
        menu.style.display = 'none';
        document.querySelector('button').innerHTML = "show nav"
    } else {
        menu.style.display = '';
        document.querySelector('button').innerHTML = "hide nav"
    }
}

thingToToggle.addEventListener('click', toggleMe)


// TASK 2 -- Select an Icon

var thingClicked = document.querySelector('.wish-list')

function clickIt(elClicked) {
    var allSquares = document.querySelectorAll('.option')
    if (elClicked.target.className === 'option selected') {
        elClicked.target.className = "option"
    } else if (elClicked.target.className === 'option') {
        elClicked.target.className = "option selected"
    }
}

thingClicked.addEventListener('click', clickIt)


// TASK 3 -- Move Item From List to List

var listItemDiv = document.querySelector('.good-standing-section');
var removeItem = document.querySelector('probation-list')

function moveListItem(elClicked) {
    var listItem = document.querySelectorAll('.good-standing-list li');
    var newLi = elClicked.target.innerHTML
    console.log(newLi);
    var clickedLi = elClicked.target
    console.log("this is li",clickedLi);
    document.querySelector(".probation-list").innerHTML += "<li>" + newLi + "</li>"
    elClicked.target.remove()

}

listItemDiv.addEventListener("click", moveListItem)


// TASK 4 -- Add Guest to List

var input = document.querySelector('input')

function inputValue(event) {
    var something = document.querySelector('.guest-list')
        // var inputText = document.querySelector('input').innerHTML
    if (event.keyCode === 13) {
        something.innerHTML += "<li>" + input.value + "</li>"
        document.querySelector('input').value = ''
    }
}
input.addEventListener('keydown', inputValue)

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
