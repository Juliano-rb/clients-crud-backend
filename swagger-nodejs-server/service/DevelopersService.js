'use strict';


/**
 * searches inventory
 * By passing in the appropriate options, you can search for available inventory in the system 
 *
 * searchString String pass an optional search string for looking up inventory (optional)
 * skip Integer number of records to skip for pagination (optional)
 * limit Integer maximum number of records to return (optional)
 * returns List
 **/
exports.searchInventory = function(searchString,skip,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "Jhon da Silva",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "2016-08-29T09:12:33.001Z",
  "tags" : {
    "name" : "Prata",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }
}, {
  "name" : "Jhon da Silva",
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "email" : "2016-08-29T09:12:33.001Z",
  "tags" : {
    "name" : "Prata",
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

