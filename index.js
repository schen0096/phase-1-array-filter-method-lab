// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driveArr, name){
    const arr = driveArr.filter(drivers => {return drivers.toLowerCase() === name.toLowerCase()});
    return arr
}

const f = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby']

// function fuzzyMatch(fArr,letter){
//     const arr = fArr.filter(f => {return f[0,2] === letter});
//     return arr
// }

function fuzzyMatch(fArr,letter){
    return fArr.filter(driver => driver.substring(0,letter.length) === letter)
    // need to compare the first n letters of driver to name where n = length of name

}

// let filterArr = bookStore.inventory.filter(book => book.inventory === 0).map(book => { book.reorder = true return book})
// console.log(filterArr)

const peopleArr = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(pArr, name){
    const arr = pArr.filter(peopleArr => {return peopleArr.name === name});
    return arr 
}


// let filterBooksArray = bakery.orders.filter(cakeOrder => {
//     return cakeOrder.flavor === "Vanilla"
// })