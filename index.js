var numItems = document.getElementsByTagName('li');

function RNG(numItems) //random number generator function
        {
            let randNum = Math.floor((Math.random() * numItems.length));
            return randNum;
        }
        
function addQual()  //Function that is called when ADD A QUALITY is clicked
        {
            userChoice = prompt("Enter a quality");
            var list = document.getElementsByTagName('ul')[0];
            newItemLast = document.createElement('li');
            newTextLast = document.createTextNode(userChoice);
            newItemLast.appendChild(newTextLast);
            list.appendChild(newItemLast);
            document.getElementById("paragraph").textContent = userChoice + " has been added"
        }
        
function keyQual() { //Functions correctly, minor bug that occurs on the switch statement that only occurs when a number is repeated 
            var highlightName = { //This is used to identify the specific features that were highlighted
                    featureOne : null,
                    featureTwo : null,
                    featureThree : null,}
            var keyQualist = document.querySelectorAll('li'); //this creates the var keyQualist, which is used to count how many items are in the container
            var kQual = keyQualist.length //this is used for the loop counter to properly reset previously highlighted qualities
            if (kQual < 3) {  //this checks to see if 3 items are available to highlight. If not, this if statement will force the user out of the function via the RETURN statement.
              alert ("You need at least 3 qualities for this button to work. Please add a quality")
              return;}
          
          var k;
            for (k = 0; k < kQual; k++){ //this FOR loop resets all elements to className normal
          keyQualist[k].className = 'normal';}
            
          let i = 0;  
            while (i < 3) //this WHILE loop randomly makes 3 items highlighted
            {
               let randNum = RNG (numItems); //calls RNG function, the randNum that is returned is used for the index location of an element.
                if (keyQualist[randNum].className == 'normal') {//this checks if the selected element's class. If it's class 'cool' then the loop repeats 
                     keyQualist[randNum].className = 'cool';
                     i++;}
                
              var eLName = document.getElementsByTagName('li')[randNum].textContent; 
                switch (i) //this allocates the feature qualities highlighted to be written at the end. Minor bug if a repeat number gets called.
                    {
                        case 1:
                            highlightName.featureOne = eLName;
                            break;
                        case 2:
                            highlightName.featureTwo = eLName;
                            break;
                        case 3:
                            highlightName.featureThree = eLName;
                            break;
                        default:
                            break;
                    }
            }
            document.getElementById("paragraph").textContent = (highlightName.featureOne + ", " + highlightName.featureTwo + ", and " + highlightName.featureThree + " have been highlighted as important qualities.");
        }
        
function remQual() //Removes a quality randomly, while outputting which quality was removed
        {
            let randNum = RNG(numItems);
            var removeEl = document.getElementsByTagName('li')[randNum]; //this gets the element index value
            var eLName = document.getElementsByTagName('li')[randNum].textContent; //this line gets the actual string in the element
            var containerEl = removeEl.parentNode; //this gets the container (in this case UL) that the required element is in
            containerEl.removeChild(removeEl); //this actually removes the element from the container)
            document.getElementById("paragraph").textContent = (eLName + " has been removed"); //this tells you what was removed
        }