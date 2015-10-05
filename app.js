
var pikeplace ={
  location: 'Pike Place Market',
  minCustHour:17 ,
  maxCustHour:88 ,
  avgCookiesCust:5.2 ,
  randCustHour: function(min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  },
  totalCookiesHour:function (){
    return Math.floor(pikeplace.randCustHour(pikeplace.maxCustHour,pikeplace.minCustHour) * pikeplace.avgCookiesCust)
  }
};

function makeUL(array){
  for(var i=0;i<array.length;i++){
      var myList = document.getElementById('list1')
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(array[i]))
      myList.appendChild(item);
  }
  return myList;
}
var times1 = ['10am: ' + pikeplace.totalCookiesHour() + ' cookies','11am: ' + pikeplace.totalCookiesHour() + ' cookies','12pm: ' + pikeplace.totalCookiesHour() + ' cookies','1pm: ' + pikeplace.totalCookiesHour() + ' cookies','2pm: ' + pikeplace.totalCookiesHour() + ' cookies','3pm: ' + pikeplace.totalCookiesHour() + ' cookies','4pm: ' + pikeplace.totalCookiesHour() + ' cookies','5pm: ' + pikeplace.totalCookiesHour() + ' cookies'];
makeUL(times1);







var seatac ={
  location: 'Seatac Airport',
  minCustHour:6 ,
  maxCustHour:44 ,
  avgCookiesCust:1.2 ,
  randCustHour: function(min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  },
  totalCookiesHour:function (){
    return Math.floor(seatac.randCustHour(seatac.maxCustHour,seatac.minCustHour) * seatac.avgCookiesCust)
  }
};

function makeUL2(array){
  for(var i=0;i<array.length;i++){
      var myList2 = document.getElementById('seatac')
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(array[i]))
      myList2.appendChild(item);
  }
  return myList2;
}
var times2 = ['10am: ' + seatac.totalCookiesHour() + ' cookies','11am: ' + seatac.totalCookiesHour() + ' cookies','12pm: ' + seatac.totalCookiesHour() + ' cookies','1pm: ' + seatac.totalCookiesHour() + ' cookies','2pm: ' + seatac.totalCookiesHour() + ' cookies','3pm: ' + seatac.totalCookiesHour() + ' cookies','4pm: ' + seatac.totalCookiesHour() + ' cookies','5pm: ' + seatac.totalCookiesHour() + ' cookies'];
makeUL2(times2);








var southcenter ={
  location: 'South Center Mall',
  minCustHour:11 ,
  maxCustHour:38 ,
  avgCookiesCust:1.9 ,
  randCustHour: function(min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  },
  totalCookiesHour:function (){
    return Math.floor(southcenter.randCustHour(southcenter.maxCustHour,southcenter.minCustHour) * southcenter.avgCookiesCust)
  }
};

function makeUL3(array){
  for(var i=0;i<array.length;i++){
      var myList3 = document.getElementById('southcenter')
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(array[i]))
      myList3.appendChild(item);
  }
  return myList3;
}
var times3 = ['10am: ' + southcenter.totalCookiesHour() + ' cookies','11am: ' + southcenter.totalCookiesHour() + ' cookies','12pm: ' + southcenter.totalCookiesHour() + ' cookies','1pm: ' + southcenter.totalCookiesHour() + ' cookies','2pm: ' + southcenter.totalCookiesHour() + ' cookies','3pm: ' + southcenter.totalCookiesHour() + ' cookies','4pm: ' + southcenter.totalCookiesHour() + ' cookies','5pm: ' + southcenter.totalCookiesHour() + ' cookies'];
makeUL3(times3);









var bellevue ={
  location: 'Bellevue Square',
  minCustHour:20 ,
  maxCustHour:48 ,
  avgCookiesCust:3.3 ,
  randCustHour: function(min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  },
  totalCookiesHour:function (){
    return Math.floor(bellevue.randCustHour(bellevue.maxCustHour,bellevue.minCustHour) * bellevue.avgCookiesCust)
  }
};

function makeUL4(array){
  for(var i=0;i<array.length;i++){
      var myList4 = document.getElementById('bellevue')
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(array[i]))
      myList4.appendChild(item);
  }
  return myList4;
}
var times4 = ['10am: ' + bellevue.totalCookiesHour() + ' cookies','11am: ' + bellevue.totalCookiesHour() + ' cookies','12pm: ' + bellevue.totalCookiesHour() + ' cookies','1pm: ' + bellevue.totalCookiesHour() + ' cookies','2pm: ' + bellevue.totalCookiesHour() + ' cookies','3pm: ' + bellevue.totalCookiesHour() + ' cookies','4pm: ' + bellevue.totalCookiesHour() + ' cookies','5pm: ' + bellevue.totalCookiesHour() + ' cookies'];
makeUL4(times4);






var alki ={
  location: 'Alki',
  minCustHour:3 ,
  maxCustHour:24 ,
  avgCookiesCust:2.6 ,
  randCustHour: function(min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  },
  totalCookiesHour:function (){
    return Math.floor(alki.randCustHour(alki.maxCustHour,alki.minCustHour) * alki.avgCookiesCust)
  }
};

function makeUL5(array){
  for(var i=0;i<array.length;i++){
      var myList5 = document.getElementById('alki')
      var item = document.createElement('li')
      item.appendChild(document.createTextNode(array[i]))
      myList5.appendChild(item);
  }
  return myList5;
}
var times5 = ['10am: ' + alki.totalCookiesHour() + ' cookies','11am: ' + alki.totalCookiesHour() + ' cookies','12pm: ' + alki.totalCookiesHour() + ' cookies','1pm: ' + alki.totalCookiesHour() + ' cookies','2pm: ' + alki.totalCookiesHour() + ' cookies','3pm: ' + alki.totalCookiesHour() + ' cookies','4pm: ' + alki.totalCookiesHour() + ' cookies','5pm: ' + alki.totalCookiesHour() + ' cookies'];
makeUL5(times5);
