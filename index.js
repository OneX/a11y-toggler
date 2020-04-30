
'use strict';

function Toggler(el) {
  this.el = el;
  this.active = false;
  this.activeClass = 'active';
}

Toggler.prototype = {
  activate: function() {
    this.active = true
    this.el.setAttribute('aria-expanded', 'true')
    this.target.classList.add(this.activeClass)
  },

  decativate: function() {
    this.active = false
    this.el.setAttribute('aria-expanded', 'false')
    this.target.classList.remove(this.activeClass)
  },
  bindEvents: function() {
    var self = this;
    this.el.addEventListener('click', function(){
      if (self.active) {
        self.decativate()
      } else {
        self.activate()
      }
    })
  },
  setTarget: function(){
    var targetId = this.el.getAttribute('aria-controls')
    this.target = document.getElementById(targetId)
  },
  init: function(){
    this.setTarget()
    this.bindEvents()
  }
}

let buttons = document.querySelectorAll('[aria-controls]')

buttons.forEach( button => {
  var buttonToggler = new Toggler(button).init()
})