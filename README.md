# engineerquals
A unique assignment that was trickier than expected. The CSS was precoded, but the HTML and JS were from scratch. 

The goal of the assignment was to create a page to learn how the DOM and how to use JS to manipulate it. 

Adding an entry was easy as I just needed the JS to assign a variable to grab all UL elements, add the user entered quality, and append it to the bottom with a notification that it has been added.  Removing a random entry was likewise easy, I just created a random number generator (RNG) function and then used that and removeChild to remove a random entry.  In the RNG function, the upper limit would be based on how many items existed in the entire document. 

The trickiest part was highlightiing the 3 random qualities. I reused the same RNG function and created a while loop to loop it 3 times. Within each loop, I had a class highlighted. A switch was added to output the name of what had been highlighted. 

If the user clicked on the button again, the highlighted values would reset via a loop created to set all qualities back to default color, then ran the loop to highlight 3 items. 

Originally, in line 39, the loop would check to see if the line item was already highlighted (class = 'cool') or not. If TRUE, then the loop would re-run until it encountered a FALSE, then run through the SWITCH statement. But for some reason, the IF statement would not work that way. In the original JS, there is a chance that the loop would run 3 times but only highlight 2 items. I could never figure out why, but I fixed it by changing the condition to see if the class of the randomly selected item was 'normal' and if so, then set the class to 'cool', increment the loop variable, and run the switch statement. 

There is a minor leftover bug that I couldn't figure out (although I imagine conceptually I would just need to add an IF/ELSE statement to check the condition before moving to the switch statement) regarding what the program tells you were highlighted.  Currently, If two of the same qualities were randomly selected, the program would keep looping until 3 were chosen. However, the results of what were highlighted (as shown at the bottom) would show the first 3 results, no matter what. Normally I would probably not have any of these statements appear, but it was required in the assignment to display this.

This assignment took me many hours to figure out, but after I was able to resolve the issue, I felt a tremendous sense of accomplishment because I figured it out on my own. 
