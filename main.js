(function(){
  'use strict';

  var myClock;
  var isHovering = false;

  console.log(document);

  myClock = document.getElementById('clock');

  console.log(myClock);



  function startTime(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
        h + ":" + m + ":" + s;
        var t = setTimeout(startTime, 500);

  console.log(startTime);
  }

  function checkTime(i) {
      if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
      return i;

  console.log(checkTime);
  }

  var box = document.getElementById('clock');
  box.addEventListener("mouseover", func, false);
  box.addEventListener("mouseout", func1, false);

  function func()
  {
     box.setAttribute("style", "background-color:#e6e600;")
  }

  function func1()
  {
     box.setAttribute("style", "background-color:#6600cc;")
  }


  startTime();

  }());
