/*
  100% pure hand-crafted micro-brewed home-grown organic gluten-free functions.
*/
(function(){

  // Cache your handcrafted functions
  var _handcrafted = {};

  // Utility crafting function
  function _craft(name, fn) {
    handcrafted[name] = fn;
  }


  // Expose the handcrafted functions
  return {
    craft: _craft,
    handcrafted: _handcrafted
  }
})()
