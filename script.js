/**
 * * Welcome to the final test
 * * Each section is worth 10 points
 * * There are 4 sections
 * * Answer 1 question from each section
 */

/**
 * *Section 1: Objects and Data
 * * Answer 1 of the following questions from section 1
 */

/**
 * * Section 1a. Create an object about an animal that contains:
 *      * a variable for number of limbs
 *      * a variable for the animals name
 *      * a variable saying whether the animal can fly
 *      * a variable that holds a function
 *          * the function should return a template literal that says
 *              * "I am an ANIMAL NAME with NUMBER OF LIMBS limbs"
 *      * call the the function in your object, and console log the result
 */

/**
 *  * Section 1b.  Create an object about a candy shop that contains
 *      * a variable that holds an array of items being sold
 *          * each product is an object tht has a name and a price
*       * a function for purchasing a random product
*           * the function should return a template literal in the following format
*               * "The NAME OF PRODUCT costs PRODUCT PRICE!"
 */

/**
 * * Section 2 - Arrays and Objects
 * * Answer 1 question from section 2
 */

let pets = [
    {name: "MyNewt", petType: "Bird"},
    {name: "Albert", petType: "Dog"},
    {name: "Toby", petType: "Snake"},
    {name: "Miles", petType: "Camel"},
    {name: "Atonic", petType: "Cat"},
    {name: "Leggy", petType: "Snake"},
    {name: "Zlebert", petType: "Dog"},
    {name: "Toby", petType: "Dog"},
    {name: "Joney", petType: "Pony"},
    {name: "Toby", petType: "Goby"},
    {name: "Tiddles", petType: "Tortoise"}
]

/**
 * * Section 2a. 1 Dimensional Array Manipulation
 *  * Create a function that takes in pets as a parameter then: 
 *      * find all the dogs in the pet list using the apropriate array function 
 *      * display their names in alphabetical order using the most efficent array function
 *      * Console log the results. 
 *      * Please use fat arrow functions for the array functions
 */

/**
 * * Section 2b.
 * * Create a function to find a dog named Toby that takes in pets as a parameter. 
 *      * Find the array position using the apropriate array function and console log it
 *      * remove the entry for a dog named Toby using the apropriate array function
 *      * Console log the array after removing the dog named Toby
 *      * Please use fat arrow functions for the array functions
 */

/**
 * * Section 3: DOM Manipulation and Events
 * * Answer 1 question from section 3
 */

/**
  * * Section 3a.
  * * select & change the text of the h1 of your favourite song with DOM manipulation
  * * Add a click event to the title.  
  *     * On click change the h1 text colour
  * * On rollover 
  *     * make the h1 font size bigger
  * * On rollout 
  *     * make the h1 font size smaller
*/

/**
 * * Section 3b.
 * * Use DOM manipulation to append a ul tag to the body tag
 * * Using a for loop(not a forEach) add an li tag for each array element with
 *      * the text being the title of the element from the array
 *      * a click action on each li that console logs the html element the user click on
 */

let cheeses = [
    "Cheddar",
    "Gouda",
    "Swiss",
    "Havarti",
    "Brie",
    "Grey Owl",
    "Compte",
    "Rose De Tomate",
    "Parmaesan",
    "Raclette",
    "Red Lester",
    "Gorgonzola",
    "Blue",
    "Paneer",
    "Kalari",
    "Manchego",
    "Lighvan",
    "Sakura",
    "Kesong Puti",
    "Chimay",
    "Limberger",
    "Livno",
    "Sirene",
    "Halloumi",
    "Fynbo",
    "Stilton",
    "Lappi",
    "Feta",
    "Manouri",
    "Brunost",
    "Pultost"
]

/**
 * * Section 4: Nested Loops and While Loops
 * * Answer 1 question from section 4
 */

/**
 * * Section 4a.
 * * Create a function that takes in clothing as a parameter
 * * make your function run a nested for loop(not forEach)
 * * Create a variable in your function to hold an array of summer clothing
 * * Use the nested for loop and if statments to find summer clothing and push it to the summer clothing array
 * * Console log the array of only summer clothing
 */

let clothing = [
    [{ season:"winter", article:"touque"}, {season:"summer", article:"shorts"},{season:"summer", article:"speedo"}],
    [{ season:"fall", article:"scarf"}, {season:"winter", article:"snow pants"},{season:"summer", article:"sandals"}],
    [{ season:"spring", article:"windbreaker"}, {season:"summer", article:"sun lotion"},{season:"fall", article:"wool socks"}]
]

/**
 * * Section 4b.
 * * Add a cost value to every element of the clothing array
 * * Create a function to add the cost of all items in the clothin array
 * * Make the function take in the clothing array as a parameter
 * * Create a nested for loop(not forEach) to add up the cost of all the clothing
 * * Console log the final cost of all the clothing together
 */