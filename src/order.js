function takeOrder(obj, deliveryOrders){
 if (deliveryOrders.length < 3){
  deliveryOrders.push(obj);
}
}
/* declared a function takeOrder and added 2 paramitors
added if statment that takes deliveryOrders.length
and if it is less than 3 then it pushs obj to the
deliveryOrders
*/


function refundOrder(removeItem, deliveryOrders){
  var orderNumberArray = removeItem -1

  deliveryOrders.splice(orderNumberArray, 1);

}
/* decleared refundOrder with 2 paramitors
decleared var and set it to the order number minus 1
then placed that var orderNumberArray to index what spot
to splice
  the splice method has to spot in the paramitors
  like this .splice(0,1) the 1st which is 0 tells
  which index the second 1 tell how many to remove
  so splice.(0,1) is saying remove the 1st item indexed in the
  array  
*/

function listItems(orderObt){
  var itemArray = []
  for (i = 0; i < orderObt.length; i++){
  itemArray.push(orderObt[i].item)
  }
  return itemArray.join(', ');

}
//pseudocode for the problem above
//need to return the objects item value
//need to be returned as a string
//is accessing the array elements with for loop
//access the item value and push to new var itemArray
// turn item value into string with , using join() method

function searchOrder(items, checkItem){
  var itemArray2 = []
  var ifRight = false;

  for (i = 0; i < items.length; i++){
    itemArray2.push(items[i].item)
  }
  for (m = 0; m < itemArray2.length; m++){
    if (itemArray2[m] === checkItem){
      ifRight = true;
    }
  }
  return ifRight;
}

//pseudocode for the problem above
//should be able to return item in odject array
// var deliveryOrders passes orders
//should return true if the string in any obj === order item
//the code need to take 2 paramitor the object and item checked
// need to extract the item from any object in the array
//need to compaire item.item to checkItem
// IF they are === then return true ELSE false
//Persoanl note pseudocode is the BEST!



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
