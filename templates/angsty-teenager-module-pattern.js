/*
  Let's call ourselves "The existentialists". That's a good band name.
*/
(function() {

  // Specify an angst message.
  var _angst = "No, I hate you!";

  // Determine the rate of response here.
  function _wanna() {
    return Math.floor(Math.random()*100 + 1) > 50;
  }

  // Partial application with this random because really, you don't know what
  // teenagers are thinking. Ever.
  function _respond(fn) {

    return function() {
      var args = [].slice.call(arguments);

      if(!_wanna) return _angst;
      else return fn.apply()
    }
  }

  // Put all of your function logic here.
  function something() {

  }

  // Wrap each method you want exposed in a respond call!
  return {
    something: _respond(something)
  }

})();
