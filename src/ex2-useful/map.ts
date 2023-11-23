
export const data = [
    { uid: 123, name: "John Smith" },
    { uid: 321, name: "Terry Crews" },
    { uid: 22, name: "John Travolta" },
    { uid: 1, name: "Tom Cruise" },
    { uid: 5, name: "Otto Weininger" },
    { uid: 98, name: "Harry Hill" },
    { uid: 100, name: "Ben Dover" },
];

export const expected = [246,642,44,2,10,196,200];

const myRubbishFunction = (myData: Array<any>): Array<number> => {
    let rv: Array<number> = [];
    for(let i = 0; i < myData.length; i++){
        rv.push(myData[i].uid * 2);
    }
    return rv;
};

// TODO get all id's and double them in an array
const myGoodFunction = (myData: Array<any>): Array<number> => {
    return [];
};

export const getIDs = (myData: Array<any>): Array<number> => {
    return myRubbishFunction(myData);
    // TODO
    // return myGoodFunction(myData);
};