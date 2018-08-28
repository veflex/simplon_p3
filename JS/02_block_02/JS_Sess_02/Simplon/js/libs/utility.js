function log(data) {
  console.log(data);
}

function byId(data) {
  return document.getElementById(data);
}

function select(query) {
  return document.querySelector(query);
}

function selectAll(query) {
  return document.querySelectorAll(query);
}

function makeArray(list) {
  return Array.prototype.slice.call(list);
}

function getTargetOrSrcElement(e) {
  var ele;
  if (e.target) {
    ele = e.target;
  } else if (e.srcElement) {
    ele = e.srcElement;
  }
  return ele;
}


