
let form = document.getElementsByTagName('form')[0];

// Task 1: Use DOM Manipulation to add another input element inside form, before the button.
// This input element will take the description of the fruit.
// Create an input element, give it id="description", type="text", and placeholder text like "Enter fruit description".
// Then insert it before the button inside the form.
const descriptionInput = document.createElement('input');

descriptionInput.setAttribute('id', 'description');
descriptionInput.setAttribute('type', 'text');
descriptionInput.setAttribute('placeholder', 'Enter fruit description');

const button = form.querySelector('button');
form.insertBefore(descriptionInput, button);


// add fruit to the cart
let fruititems = document.querySelector('.fruits');
let descriptionitems = document.querySelector('#description');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Ensure that a description is provided
    let fruitDescription = document.getElementById('description').value;
    if (fruitDescription === '') {
        alert('Please enter a description.');
        return;
    }

    // Task 2: Add code to show fruit name and description.
    // Create a new <li> element and add fruit name + description (in a <p> tag).
    // Show the description in italics.
    // Add a delete button at the end.
    // Append the new li element to the fruit list.

    const fruitName = document.getElementById('fruit-to-add').value;

    const newLi = document.createElement('li');
    newLi.className = 'fruit';
    newLi.innerHTML = fruitName + '<p style="font-style:italic; margin:0;">' + fruitDescription + '</p>';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'x';
    deleteBtn.className = 'delete-btn';
    newLi.appendChild(deleteBtn);
    fruititems.appendChild(newLi);

    // Clear input fields
    document.getElementById('fruit-to-add').value = '';
    document.getElementById('description').value = '';
});


// delete functionality
fruititems.addEventListener('click', function (event) {
    if (event.target.classList.contains('delete-btn')) {
        let buttontodelete = event.target.parentElement;
        fruititems.removeChild(buttontodelete);
    }
});


// Task 3: Create a filter that shows only those fruits whose
// either name or description or both matches the entered text.

// HINT: Check both the fruit name and the description (<p> tag)
// If either includes the entered text, show it; otherwise, hide it.
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function (event) {

    const text = event.target.value.toLowerCase();
    const fruitList = document.querySelectorAll('.fruit');

   
    fruitList.forEach(function (fruit) {

        const allText = fruit.textContent.toLowerCase();

        if (allText.includes(text)) {
            fruit.style.display = 'flex';
        }
        else {
            fruit.style.display = 'none';
        }
    });
});