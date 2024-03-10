// Question # 03

//Name Cases: Store a person’s name in a variable,
// and then print that person’s name in lowercase, uppercase, and titlecase.



//Solve Q:03

//Store person's name in Variable:
let personName :string = 'Bushra Khan';

//print the name in Lower Case:
console.log('Lowercase:', personName.toLowerCase());

//print the name in Upper Case:
console.log('Uppercase:', personName.toUpperCase());

//print the name in Title Case:
console.log('Titlecase:', toTitleCase(personName));


// Function that convert Name into Title Case:
function toTitleCase(str: string): string {

    // Split the string into an array of words
     const words = str.split(/\\s+/); 

     const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
     
      // Join the title case words back into a string
        return titleCaseWords.join(' '); 
  };

 //                                           --x-xx-x--
    

