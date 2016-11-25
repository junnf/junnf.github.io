console.log('This would be the main JS file.');

var myObject = {
  value: 1
}

myObject.double = function () {
  var that = this;
  var helper = function () {
      that.value = add(that.value, that.value);    
  };
  helper();
  alert(that.value);
};

myObject.double();
