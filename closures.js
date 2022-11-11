var havoc = null;

var createHavoc = function () {
  var tsunami = havoc;
  var loadingHiroshima = function () {
    if (tsunami)
      console.log("hi");
  };
  havoc = {
    someString: new Array(1000000).join('*'),
    someMethod: function () {
      console.log("This is just a regular log to the console...");
    }
  };
};
setInterval(createHavoc, 1000);

// - Explained --------------------------------
/**
 * This few lines of code does one thing and one thing only:
 * Anytime createHavoc() is called, our havoc variable on line 1 gets 
 * a new value which is an object that contains both a big string and a
 * closure
 * 
 * One interesting thing here is that, around the same time our havoc variable gets a new value, 
 * the loadingHiroshima variable on line 5 stores a closure that basically holds a reference 
 * to the tsunami variable. 
 * 
 * --------------------------------------------------
 * 
 * We need to note the following about the above snippet 
 * 1. the closure on line 5 shares the same scope as the closure defined for the havoc variable on line 11 
 * 2. the closure on line 5 holds a reference to the tsunami variable on line 4, which forces it  to stay 
 *    active (i.e it is never garbage collected. The main reason for this is that:
 *      - the loadingHiroshima closure holds a reference to tsunami which directly forces to stay active.
 * 
 * 
 * ----------CONCLUSION-----------------
 * When this snippet is run over and over again, it can cause a steady increase in memory usage.
 */