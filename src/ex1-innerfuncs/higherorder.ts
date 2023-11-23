const greaterThan = (num : number) => {
    return (m: number) => m > num; 
}

// Ex 1) Use the greater than function to create 
// greater than five and greater thanten functions
export const greaterThanFive = greaterThan(5);
export const greaterThanTen = greaterThan(10);


// -----------------------


// Ex 2) 
// Write a new flow control function 'unless' that 
// executes some code only if some condition is NOT true

export const unless = ( condition: boolean, then: any) => {
    // TODO
}


