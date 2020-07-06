class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
    this.menus = {
      breakfast: [],
      lunch: [],
      dinner: [],
    };
  };
  greetCustomer(name1, morning = false){
    if(morning === true){
      return `Good morning, ${name1}!`
    }
    return `Hello, ${name1}!`
  };


  checkForFood(foodItem){
    var itemCheck = false;
    if (this.restaurant.menus[foodItem.type].length <= 0){
      return `Sorry, we aren\'t serving ${foodItem.name} today.`
    }
    for (var i = 0; i < this.restaurant.menus[foodItem.type].length; i++){
      if (this.restaurant.menus[foodItem.type][i].name === foodItem.name){
        itemCheck = true;
      }
      if (itemCheck !== true){
        return `Sorry, we aren\'t serving ${foodItem.name} today.`
      } else{
        return `Yes, we\'re serving ${foodItem.name} today!`
      }
    }
  }
}
// made an if statment to check if th evalue is an empty array if the array is empty
// will return the string sorry... then I run through a for loop
// that will check to see if the value of breakfast.name, lunch or dinner
// is equal to foodItem.name if it is it will toogle the varible to true
// then in th elast if statment if the var itemCheck is not true the log
// sorry else log yes we're...


//   checkForFood(foodItem) {
//   //  if (this.restaurant.menus[foodItem.type].includes(foodItem.name)){
//    if (this.restaurant.menus[foodItem.type].includes(foodItem.name)){
//       return `Yes, we\'re serving ${foodItem.name} today!`
//     };
//     console.log(this.restaurant.menus[foodItem.type])
//   };



//want add check to see if we have anything in
//array
module.exports = Chef;
