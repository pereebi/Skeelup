const objectName = { 
    name: 'test', 
    age: 21, 
    country: 'Earth' };
    
    
    for (let ourKey in objectName) {
     console.log(`${ourKey}: ${objectName[ourKey]}`);
    }