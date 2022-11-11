function getData() {
  // Get Some large data from wherever you can get it from
}
var dataStore = getData();
setInterval(
  function () {
    var node = document.getElementById("Node");
    if (node) {
      // Do stuff with node and dataStore.
      node.innerHTML = JSON.stringify(dataStore);
    }
  },

  1000
);

// - Explained --------------------------------
/**
 * dataStore is never garabage collected becuase a reference
 * to it is held on it the timer function call defined. If dataStore
 * contains very large data, this can cause a memory leak and the best way to
 * go about this is to always have explicit calls that removes timers when they are
 * not needed anymore because, active timers and their resources cannot be garbage collected!
 *
 */
