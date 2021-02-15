const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  /**
   * 
   * @param {string[]} arr 
   */
  function makeList(arr) {
    // Only change code below this line
    const failureItems = arr.map(s=>`<li class="text-warning">${s}</li>`);
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);