# Web  Programming

## Assignment 3 Part 1: Develop the Sales Tax Calculator

In this assignment, you’ll develop an application that calculates the sales tax and invoice total after the user enters the subtotal and tax rate.

1.	In the JavaScript file, Create a $() function. It gets the object for the HTML element that’s specified by the CSS selector.

2.	Code an event handler function named processEntries() that gets the user entries, calculates the sales tax and total, and displays those results in the text boxes.

3.	Code a DOMContentLoaded event handler that attaches the processEntries() function to the click event of the Calculate button. Then, test what you have so far.

4.	Add data validation to the processEntries() function. The subtotal entry should be a valid, positive number that’s less than 10,000. The tax rate should be a valid, positive number that’s less than 12. The error messages should be displayed in alert dialog boxes, and the error messages should be:

	1. Subtotal must be > 0 and < 10000 
	2. Tax Rate must be > 0 and < 12

5.	Add JavaScript that moves the cursor to the Subtotal field when the application starts and when the user clicks on the Calculate button.

6.	Add the event handler for the click event of the Clear button. This event handler should clear all text boxes and move the cursor to the Subtotal field.

7.	Add event handlers for the click events of the Subtotal and Tax Rate text boxes. Each handler should clear the data from the text box. Update the event handler for the Clear button to call these functions as well (to reduce code duplication).
 
9.	In index.html, add a tag for  your name and student number.


## Assignment 3 Part 2: Develop the Change Calculator

In this assignment, you’ll develop an application that tells how many quarters, dimes, nickels, and pennies are needed to make change for any amount of change from 0 through 99 cents. One way to get the results is to use the divide and modulus operators along with the parseInt() method for truncating the results so they are whole numbers.

1.	In the JavaScript file, create the $() function.

2.	Code an event handler named processEntry() that gets the user’s entry and checks to make sure that it is a number between 0 and 99. If so, call a function named makeChange() and pass it the user’s entry. Otherwise, display an alert dialog box for the error.

3.	Code the makeChange() function, which should have one parameter that accepts the user’s entry. This function shouldn’t return anything, but it should display the results in the text boxes for Quarters, Dimes, Nickels, and Pennies.

4.	Code a DOMContentLoaded event handler that attaches the processEntry() event handler to the click event of the Make Change button. Then, test this application.

5.	In index.html, add a tag to your name and student number.


## Assignment 3 Part 3: Develop the Income Tax Calculator

In this assignment, you’ll use nested if statements and arithmetic expressions to calculate the federal income tax that is owed for a taxable income amount.

This is the 2020 table for the federal income tax on individuals that you should use for calculating the tax:

Taxable income Over…   But not over…		Income tax			      Of excess over…
$0                     $9,875	          $0 plus 10%	          $0
$9,875	               $40,125	        $987.50 plus 12%	    $9,875
$40,125	               $85,525	        $4,617.50 plus 22%	  $40,125
$85,525	               $163,300	        $14,605.50 plus 24%	  $85,525
$163,300	             $207,350	        $33,271.50 plus 32%	  $163,300
$207,350	             $518,400	        $47,367.50 plus 35%	  $207,350
$518,400		                            $156,235.00 plus 37%	$518,400
			
Create the $() function and a DOMContentLoaded event handler that attaches a function named processEntry() to the click event of the Calculate button and moves the focus to the first text box.

1.	Code the processEntry() function. It should get the user’s entry and make sure it’s a valid number greater than zero. If it isn’t valid, it should display an error message. If it is valid, it should pass the value to a function named calculateTax(), which should return the tax amount. That amount should then be displayed in the second text box. The focus should be moved to the first text box whether or not the entry is valid.

2.	Code the calculateTax() function. To start, just write the code for calculating the tax for any amount within the first two brackets in the table above. The user’s entry should be converted to an integer, and the tax should be rounded to two decimal places. To test this, use income values of 9875 and 40125, which should display taxable amounts of 987.50 and 4,617.50.

3.	Add the JavaScript code for the next tax bracket. Then, if you have the time, add the JavaScript code for the remaining tax brackets.

4.	In index.html, add your name and student number. 


## Assignment 3 Part 4: Use JavaScript to validate a form

In this assignment, you’ll use JavaScript to validate a reservation request form.

1.	In the JavaScript file, create the ready event handler contains the declaration for a constant named emailPattern that contains the pattern that will be used to validate the email address.

2.	Code a statement that moves the focus to the “Arrival date” text box.

3.	Code an event handler for the submit event of the form. This event handler should validate the user entries. If any of the entries are invalid, the code should cancel the submission of the form. The validation is as follows:

	1. A value must be entered into each text box. The number of nights must be numeric.

	2. The email address must match the pattern that’s provided.

	3. Be sure to trim the entries and put them back into the controls regardless of whether the entries are valid.

4.	In index.html, create a tag to your name and student number.
