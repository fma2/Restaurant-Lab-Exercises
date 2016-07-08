/*
Objective:
Create a piece of code that redirects users to a specific page in the website based on selections they make in two dropdown menus. 

---

We start by assigning values to variables.
option1 is a variable name we created, and its assigned value relates to box1 (first dropdown box referring to meals in our HTML), we selected this box by entering its elementID.
option 2 is the same for box2.
*/

var option1 = document.getElementById('box1');
var option1Selected = option1.options[option1.selectedIndex].text;

var option2 = document.getElementById('box2');
var option2Selected = option2.options[option2.selectedIndex].text;

/*
These functions tell option1 and option2 to run the "redirect" function once its values are changed.
In our case, the values are changed when a dropdown item is selected.
Once dropdowns are selected from option1 and option2, the "redirect" function will be triggered.
Basically, it's a function calling another function! See the analogy example on Github if you're confused.
*/

option1.addEventListener('change', function(){ //this is the outer function
	option1Selected = option1.options[option1.selectedIndex].text;
	redirect(); //this calls the function known as redirect
});

option2.addEventListener('change', function(){ //this is the outer function
	option2Selected = option2.options[option2.selectedIndex].text;
	redirect(); //this calls the function known as redirect
});

/*
This is a function we made called "redirect". 
It specifies that if a specific text in option1 and specific text in option 2 are selected, 
the page will redirect to a new webpage.
This function would require an if statement. How would you write the statements?
HINT: you need to write several if statements for each possible text combination.
*/

function redirect() {
	if (//fill in your if statement here **ADD CODE HERE**
		) {
		location.href="www...";
	}
}

