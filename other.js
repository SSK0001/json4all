

var val = require('./index.js')

// console.log(val.compareAndCount({"yes":"hello","yes":"hello","no":"nothing in here","no":"nothing in here"},
//                                 {"yes":"hello","no":"nothing in here"}))

console.log(val.changeSchema(
  {
    'x': 1,
    'y': {
      'x': 1,
      'z': 2
    }
  },
  ['y','x']
))
