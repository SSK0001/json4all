/*
  This code is
  Main Objective : Comparing 2 Objects(JSON) and find the similarity
  1. Returning the count of similar keys and Count of no similar key's
  2. Returning the JSON(Object) that has the similary keys -> Return the keys corresponding to the values


*/


/*
  Things to DO:
  0.  Compare and Count
  1.  Read   (fs)
  2.  Write  (fs)
  3.  Append
    3.a  Appending to the object with specified key and values (innner Object)
  4.  Search
  5.  Sorting (key/Value/Alphabetical)
  6.  Schema Changing
*/

function compareAndCount(object_1,object_2){
  if(object_1 === undefined || object_2 === undefined){
    try {
      throw new Error('The objects cannot be null or undefined');
    } catch (e) {
      return (e.name + ': ' + e.message);
    }
    return
  }
  if( (typeof object_1 === 'object' && object_1 != null) && (typeof object_2 === 'object' && object_2 != null) ){
    // Sorting the keys of elements to find the similarity in O(nlogn)
    // Returning the keys that are in common of both
    var objectOne         =   Object.keys(object_1).sort()
    var objectTwo         =   Object.keys(object_2).sort()
    // Returns the array of common keys in the json as an array
    var returnJson = {}
    returnJson.compare  = (objectOne.filter(function(element){
      return objectTwo.includes(element)
    }))
    returnJson.count    =  returnJson.compare.length
    return returnJson

  }else{
    try {
      throw new Error('The objects cannot be null or undefined');
    } catch (e) {
      return (e.name + ': ' + e.message);
    }
    return
  }

}

function compare(object_1,object_2){
  if(object_1 === undefined || object_2 === undefined){
    try {
      throw new Error('The objects cannot be null or undefined');
    } catch (e) {
      return (e.name + ': ' + e.message);
    }
    return
  }
  if( (typeof object_1 === 'object' && object_1 != null) && (typeof object_2 === 'object' && object_2 != null) ){
    // Do stuff here


  }else{
    try {
      throw new Error('The objects cannot be null or undefined');
    } catch (e) {
      console.log(e.name + ': ' + e.message);
    }
    return
  }


}


exports.compareAndCount = function(object_1,object_2){
  return compareAndCount(object_1,object_2)
}

exports.compare = function(object_1,object_2){
  return compare(object_1,object_2)
}
