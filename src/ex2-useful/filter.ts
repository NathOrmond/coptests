export const data = [
  { uid: 123, name: "John Smith" },
  { uid: 321, name: "Terry Crews" },
  { uid: 22, name: "John Travolta" },
  { uid: 1, name: "Tom Cruise" },
  { uid: 5, name: "Otto Weininger" },
  { uid: 98, name: "Harry Hill" },
  { uid: 100, name: "Ben Dover" },
];

export const expected = [
    "Terry Crews",
    "Tom Cruise"
];

export const namesBeginningWithT = ( customers: Array<any> ): Array<string> => {
    return badImpl(customers);
}

const badImpl = ( customers: Array<any> ): Array<string> => {
    let rv: Array<string> = [];
    customers.forEach(customer => {
        if(customer.name.split('')[0].toLowerCase() === 't'){
            rv.push(customer.name)
        }
    });
    return rv;
}

const goodImpl = ( customers: Array<any> ): Array<string> => { 
    // TODO 
    return []; 
}