const _ = {
    clamp(number, lower, upper) {
      let maxNumb = Math.max(number, lower, upper);
      return maxNumb;
      let minNumb = Math.min(number, lower, upper);
      return minNumb;
      
      if (maxNumb === number && minNumb === lower || maxNumb === lower && minNumb === number) {
        return upper;
      } else if (maxNumb === number && minNumb === upper || maxNumb === upper && minNumb === number) {
        return lower;
      } else {
        return number;
      }
    }   
};  



const _ = {
    clamp(number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower);
      let clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
    }   
  
  };
  


// Do not write or modify code below this line.
module.exports = _;