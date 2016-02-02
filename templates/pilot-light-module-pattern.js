/*
  The Pilot Light Module Pattern
  Is it getting cold in here? oh. The pilot light is out.
*/
(function(){

  // The pilot light
  _pilot  = true;

  // Access method for wrapping your return api methods
  function _access(fn) {
    var args = [].slice.call(arguments, 1);

    return function() {
      return _pilot ? fn.apply(fn, args) : console.error('Pilot light is off!')
    }
  }

  // functions and/or logic here.
  function something() {

  }

  return {
    pilot: _pilot
    // add functions you want exposed
  }

})()
