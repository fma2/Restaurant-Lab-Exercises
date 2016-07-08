 /*
Objective: Add a piece of code so when the button for "Summer Specials" is pressed, the menu table will update with new text in specific boxes.

---

The function below will replace the values of a specific element id with new text when the function is triggered.
The element ids we have from the HTML so far are 'app1' and 'app2'.
The objective is to update the elements with id attributes 'app1' and 'app2' with new text.
For instance, 'app1' could be replaced with 'Gazpacho' when the function is triggered.
 */

 function changeText(idElement) { //idElement is the parameter in this function
    if(idElement==1){ // == is an operator for 'equal to'
       document.getElementById().innerHTML ='Gazpacho'; //getElementById returns the element with a specific ID attribute **FIX CODE HERE**
       //how would you add more code to replace all menu items with new text? **ADD CODE HERE**
       return false; //adding this stops the default behavior of following a link
    }
 } 