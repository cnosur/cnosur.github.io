function hidePreLoad() {
    var elem = document.querySelector('#loadPage');
    var elem2 = document.querySelector('#loadBar');

  setTimeout(function(){ elem.parentNode.removeChild(elem); }, 3650);
  setTimeout(function(){ elem2.parentNode.removeChild(elem2); }, 3650);
}

hidePreLoad();
