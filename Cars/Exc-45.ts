

// Question # 45


//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Solve Q:45



  function create_car(manufacturer: string, model: string, ...options: Array<{ [key: string]: string }>): Record<string, string> {
    const carInfo: Record<string, string> = { manufacturer, model, ...Object.assign({}, ...options) };
    return carInfo;
  }
  
  // Call the function with required information and additional details
  const myCar = create_car('Toyota', 'Camry', { color: 'Blue', feature: 'Navigation' });
  
  // Print the object to verify the information was stored correctly
  console.log(myCar);





















