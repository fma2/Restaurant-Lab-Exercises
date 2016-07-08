#Analogy Example

In the JavascriptLab1_userselection.js file, you will see the following code:

```javascript
//Function 1
  option1.addEventListener('change', function(){ 
  option1Selected = option1.options[option1.selectedIndex].text;
  redirect(); 
  });

//Function 2
  function redirect() {
  if (
	  ) {
	  location.href="www...";
    }
  }
```
  Function 1 calls Function 2 within its function. Function 2 is the part of the code you will be editing. 

###An analogy to help visualize the relationship of these functions
<p>
Function 1: If there is a fire, trigger Function 2, the county's fire department.<Br/>

Function 2: Based on the size of fire and where it's located, one of the five firefighter teams will be sent to the scene. 
</p>

###Bringing it all back
<p>
Function 1 in the Restaurant exercise says: If the dropdown menu items are selected, bring user to a new page.<Br/>

Function 2 in the Restaurant exercise says: Bring the user to a specific page based on what they chose in the dropdown menus.
</p>
