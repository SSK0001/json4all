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
    7.  Generating the Routes for the json
  */


  /*!
   * json4all
   * Copyright(c) 2017 Santhosh Kumar
   * Copyright(c) 2017 Rashwan Evans
   * MIT Licensed
   */

   // ---------------------------------------------------------------------------------------------------------
   // ------------------------------------------ Base Functions -----------------------------------------------
   // ---------------------------------------------------------------------------------------------------------


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

  function changeSchema(object_1,schema){
    if(typeof object_1 == 'object' && object_1 != null && Object.keys(object_1).length >= 1){

      // Checking if the passed in object_1 has duplicate keys
      var object1Keys = Object.keys(object_1)
      var remove_duplicates_object = object1Keys.filter(function(item,index,inputArray){
        return inputArray.indexOf(item) == index
      })

      // Checkin if passed in schema has duplicate keys
      var remove_duplicates_schema = schema.filter(function(item,index,inputArray){
        return inputArray.indexOf(item) == index
      })

      // Check to see if the schema has all the keys that are specified in the object
      schema.forEach(function(value){
        if( value in object_1){
          // If present do nothing
        }else{
          throw new Error("The keys dosent match with the content")
        }
      })

      // Throwing error if the Schema or the object passed is not valid
      if(remove_duplicates_object.length === object1Keys.length && remove_duplicates_schema.length === schema.length){
        // 1. Check the object to find the keys
        // Declaring a new result_json object
        // Return the object when it is done
        var result_json = {}
        schema.forEach(function(value){
          result_json[value] = object_1[value]
        })
        return result_json

      }else{
        try{
            throw new Error("Object cannot have duplicates")
        }catch (e){
          return (e.name + ': ' + e.message);
        }
        return
      }
    }else{
      try {
        throw new Error('The objects cannot be null or undefined');
      } catch (e) {
        return (e.name + ': ' + e.message);
      }
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
      throw new Error('The objects cannot be null or undefined');
    }


  }

  // ---------------------------------------------------------------------------------------------------------
  // ------------------------------------------ Exports functions --------------------------------------------
  // ---------------------------------------------------------------------------------------------------------


  exports.changeSchema = function(object_1,schema){
    return changeSchema(object_1,schema)
  }


  exports.compareAndCount = function(object_1,object_2){
    return compareAndCount(object_1,object_2)
  }

  exports.compare = function(object_1,object_2){
    return compare(object_1,object_2)
  }
