var Placeholder = function() {
  this.init();
}

Placeholder.prototype = {
  init: function() {
    this.placeholder = $('.placeholder');
    this.addCrossButton();
    this.redoButtonListener();
    this.crossBtnListener();
  },

  addCrossButton: function() {
    var $crossImgElement = $('<span />', { 'class': 'crossImgElement' });
    $crossImgElement.insertBefore(this.placeholder.children());
  },

  addPlusBtn: function($parentElement) {
    var $plusImage = $('<img />', { 'src': 'images/plus2.ico', 'class': 'plusImage' });
    $parentElement.append($plusImage);
  },

  redoButtonListener: function() {
    
  },

  crossBtnListener: function() {
    var obj = this;
    this.placeholder.delegate('.crossImgElement', 'click', function() {
      var $parentElement = $(this).parent();
      $parentElement.empty();
      obj.addPlusBtn($parentElement);
    })
  }
}

$(function() {
  var placeHolderObj = new Placeholder();
})