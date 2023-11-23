export const orders = [
    { num: 0 , value: 10},
    { num: 1, value: 15},
    { num: 2, value: 5},
    { num: 3, value: 2},
    { num: 4, value: 8},
    { num: 5, value: 50}
];

export const expected = 90;


export const accumulator = (orders: Array<any>): number => {
    return myBadAccumulator(orders);
}

const myBadAccumulator = (orders: Array<any>): number => { 
    let returnVal = 0;
    orders.forEach( order => returnVal += order.value );
    return returnVal;
}

const myGoodAccumulator = (orders: Array<any>): number => {
    // TODO using reduce
  return 0;
};