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
    }else {
    return `Hello, ${name1}!`
    };
  };

  checkForFood(foodItem) {
  //  if (this.restaurant.menus[foodItem.type].includes(foodItem.name)){
   if (this.restaurant.menus[foodItem.type].includes(foodItem.name)){
      return `Yes, we\'re serving ${foodItem.name} today!`
    };
  };
};
//want add check to see if we have anything in
//array
module.exports = Chef;
