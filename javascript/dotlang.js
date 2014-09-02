/*
 * Pure JavaScript implementation of DOTLANG (https://github.com/bullgit/DOTLANG)
 *
 *
 * many dot, such fucked-up-language, very difficult 
 */
 String.prototype.dotlang = function() {
  //
  // Regular Expressions to check what we've got here!
  // match will math all dots, e.g. " ... .. ."
  // 
  // isPlus, isMinus, isMultiple and isDivided match 
  // the math signs (+ - * /) and return true if any
  // of them is matched
  var match = this.match(/([.])+/g),
  isPlus = this.match(/\+/),
  isMinus = this.match(/\-/),
  isMultiple = this.match(/\*/),
  isDivided = this.match(/\//),
  openBracket = this.match(/\(/),
    closeBracket = this.match(/\)/);
  // 
  // One function to calc them all!
  // 
  // @param {type} - type of calculation (isPlus, isMinus, etc.) 
  function calcDotlang(type) {
    // fancy getting a math sign, eh?
    var currType = type[0].toString().replace(/"/g, ''),
    result = 0;
    
    // 
    // Finding out what type we have to deal with. 
    // The first value of the type array (type[0]) 
    // is always the math sign that was matched.
    // Then we just do the math!
    if(currType === '*') {
      result++; // increasing results to 1 so we can use it with match[i] * result
      for(var i = 0; i <= type.index; i++) {
        if(!match[i]) {
          continue;
        }
        result = match[i].length * result;
      }
    }
    
    if(currType === '+') {
      for(var i = 0; i <= type.index; i++) {
        if(!match[i]) {
          continue;
        }
        result += match[i].length;
      }
    }
    
    if(currType === '-') {
       result = match[0].length; // starting with the first match, so ... - .. is 3-2
       for(var i = 1; i <= type.index; i++) {
        if(!match[i]) {
          continue;
        }
        result -= match[i].length;
      }
    }
    
    
    if(currType === '/') {
      result++; // again, making result 1 so it can be used to devide.
      for(var i = 1; i <= type.index; i++) {
        if(!match[i]) {
          continue;
        }
        result = match[i].length / result;
      }
      result = result - 1;
    }
    return result;
  }
  
  
  //
  // After all this functions setup stuff we 
  // use the new function to get things dotty (that's not even a word, right?)
  //
  if(isPlus) {
    return calcDotlang(isPlus);
  }
  if(isMinus) {
    return calcDotlang(isMinus);
  }
  if(isMultiple) {
    return calcDotlang(isMultiple);
  }
  if(isDivided) {
    return calcDotlang(isDivided);
  }
}


// query all the dotlang-thingys
var dl = document.querySelectorAll('#dotlang');

// make all the dotlang math things become real math results \o/
for(var i = 0; i <= dl.length - 1; i++) {
  var ds = dl[i].innerText;
  dl[i].innerText = ds.dotlang();
}

Array.prototype.last = function() {
  return this[this.length - 1];
}

// Fancy getting the brackets right :D
var string = '... + ( ... + .. )',
first = string.match(/(\.+)^\(/)
  fancy = string.match(/(\(+\s+.+\))/);
  console.log(
    fancy.last().match(/(\.+)/g)
    )

  console.log(
    first
    )