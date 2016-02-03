# Hipster Module Patterns

A collection of module patterns that aren't typically seen in the day to day, but are used in abundance with some of the most bleeding edge teams that you've probably never heard of.

and by that I mean you've _certainly_ never heard of them.

This isn't an exhaustive list, this is just a list of patterns that have become big enough in the underground pattern scene such that they're on the verge of becoming mainstream.

Onto the patterns!

## Shuffled module pattern

_"A hero is somebody who voluntarily walks into the unknown."_ - __Tom Hanks__

The shuffled module pattern is a hipster pattern where the API you receive is shuffled. You're probably going to have to figure out which keywords map to each function. There's something of value to be found in a __hand-crafted, home-grown__ approach like this.

Each IIFE uses a `_shuffle()` and `_api()` method. The `_shuffle()` method is your arbitrated shuffling preference, and the `_api()` method will contain all of your logic and functions. return `_shuffle(_api())` at the end!

````js
(function(){

  // Shuffling function to mix it up!
  function _shuffle(api) {
    var keys = Object.keys(api),
        fns = keys.map(function(key) {
          return api[key];
        }),
        _api = {},
        tmp;

    for(var i = 0, len = keys.length; i < len; i++) {
      var random = Math.floor(Math.random() * len) + 1;

      tmp = keys[i];
      keys[i] = keys[random];
      keys[random] = tmp;
    }

    keys.forEach(function(key, idx) {
      _api[key] = fns[idx];
    })

    return _api;
  }

  // Logic goes here
  function _api() {

    function add(x. y) { return x + y };
    function subtract(x, y) { return x - y };
    function divide(x, y) { return x / y };

    return {
      add: add,
      subtract: subtract,
      divide: divide
    }
  }

  // Return a shuffled api!
  return _shuffle(_api())
})();
````

__Why would I want to do this?__

Gee, I don't know, maybe you'd like to break away from all the molds that every programmer thinks you should fit in. This is a lonely world. It's just you out here. You gotta be unique. You've got to focus on your craft. Don't let those corporate robots steal your code. You've got to mix it up, keep it unpredictable, otherwise you're just gonna be steamrolled by `megacorp.js` (psst that's a really cool sounding js library I hope it exists)

## Post-ironic module pattern

If you're feeling sick of that incredibly 'corporate' feel that the revealing module pattern or the definitive module pattern is giving you, feel free to use the post-ironic module pattern.

This is the _ZZ-Top_ of module patterns. You know how growing a beard out was at one point rebellious? No? Well it was. ZZ-Top took it too far. They're still growing their beards out despite that whole rebellious trend passing. Ridiculous, I know. Post-ironic, FOR SURE.

This pattern involves passing in a namespace, preferably `window` or `global`. Why? Because we're going back to our indie roots, while keeping the module pattern up and running.

__Wait, won't this just make globals?__
Yeah. Yeah it will. Crack open a PBR, set your mustache wax down next to you, pull up your suspenders, we've got a namespace to add stuff to.

````js
(function(namespace){

  // Define functions as normal
  function add(x, y) { return x + y; }
  function subtract(x, y) { return x - y; }
  function divide(x, y) { return x / y; }

  // Add them to your namespace.
  namespace.add: add;
  namespace.subtract: subtract;
  namespace.divide: divide;

})(window);
````

## Angsty Teenager module pattern

    _"No, mom. I'm in a band now. We're going to be like My Chemical Romance, but better"_
    - __Possibly you__

The angsty teenager pattern centers around three utility members before an export occurs: a variable, `_angst`, and two functions: `_wanna()` and `_respond()`.

Assuming at some point in your life you deal with incorrigible teenagers, they'll likely respond to your request with a real response, or, much like mid-sized human babies, they'll denounce you and everything you stand for.

This is that concept.

````js
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

  function add(x, y) { return x + y; }
  function subtract(x, y) { return x + y; }
  function divide(x, y) { return x + y; }

  // Wrap each method in a respond call!
  return {
    add: _respond(add),
    subtract: _respond(subtract),
    divide: _respond(divide)
  }

})();
````

## The legwork module pattern

The legwork pattern is perfect for those _minimalists_ out there. It's a whopping six lines of code (if you're not keen on linebreaks).

The legwork pattern really decreases that load impact of your page. Less code? Less time. Not only that, but this pattern gives you the joy of _hand-crafting_ your own functions. No more of that __manufactured__ feel that the other modules give you. You're doing the legwork here. Makin' these bad boys. Churning out nothing but QUALITY.

You're an artist, dammit. Your functions are made with love. Not defined before runtime and shipped out to the brainless masses. These people don't appreciate good code anymore. Time to write some functions with CARE.

This module will use closures to keep references to all of the functions you define on it. The return value is a `handcraft(name, fn)` function which will allow you to assign a name to a function. After that, use your micro-brewed code.

You're unique. And dammit, people just don't understand that handcrafted code _feels_ better than that stupid _manufactured_ garbage.

````js
(function(){

  var _handcrafted = {};

  function _craft(name, fn) {
    handcrafted[name] = fn;
  }

  return {
    craft: _craft,
    handcrafted: _handcrafted
  }
})()
````

The beauty is also in the syntax. Consider this:

````js
var brewery = /* legwork pattern */

brewery.craft('add', function(x, y){
  return x + y;
});

brewery.handcrafted.add(1, 2) // 3, a beautiful usage.
````

## The pilot light module pattern

The pilot light pattern is fun. It's probably because once the pilot light goes out, we all know everything goes south real quick. No hot water, no heating, no sick-as-hell gas-powered stove.

If you live in the mountains, complete with flannel, beard, and you pronounce _quinoa_ correctly, this module might feel close to home.

The idea centers around a flag, `_pilot`, and a higher-order function that serves as the gatekeeper for your functions. If your pilot light is out, then guess what?

Nothing is going to work.

Slowly but surely your functions will sit in their own grossness until they get a nice, earthy smell to them. It's all about flipping a switch and reconnecting with nature. If you want the pilot off, your module will return a reference to it so you can change it. If you want it on, set it to true.

Sometimes even modules need to get away and go for a good camp outing. This is a way to really connect with the early days of javascript: When things simply _didn't work at all_.

````js
(function(){

  // The pilot light
  _pilot  = true;

  function _access(fn) {
    var args = [].slice.call(arguments, 1);

    return function() {
      return _pilot ? fn.apply(fn, args) : console.error('Pilot light is off!')
    }
  }

  function add(x, y) { return x + y; }
  function subtract(x, y) { return x - y; }
  function divide(x, y) { return x / y; }

  return {
    pilot: _pilot,
    add: _access(add),
    subtract: _access(subtract),
    divide: _access(divide)
  }

})()
````

## To be continued...?

As I've said, this isn't an exhaustive list. I'm sure that somewhere in the forests of The pacific northwest there lies a cottage where some of indie-est of the indie program their stuff. And they're probably using module patterns that are far more next-level than anything you've seen in today's javascript.

Basically if you find more, be sure to let me know. Document it, give a template, submit a PR!


### Acknowledgements

This was inspired a little bit by [tfmontague's Definitive Module Pattern](https://github.com/tfmontague/definitive-module-pattern).
And a lot by hipsters and their strange affinity for things that are not well-known. 
