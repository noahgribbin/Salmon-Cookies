
var thymes = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm' ]

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

var totals1 = []
var string1 = []
var total1 = 0
for(var i=0; i<thymes.length;i++){
  totals1.push(pikeplace.totalCookiesHour())
  total1 += totals1[i]
  string1.push(thymes[i]+': '+ totals1[i] + ' cookies')
}
string1.push('Total: '+ total1 + ' cookies')
var times1 = string1

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

var totals2 = []
var string2 = []
var total2 = 0
for(var i=0; i<thymes.length;i++){
  totals2.push(seatac.totalCookiesHour())
  total2 += totals2[i]
  string2.push(thymes[i]+': '+ totals2[i] + ' cookies')
}
string2.push('Total: '+ total2 + ' cookies')
var times2 = string2

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

var totals3 = []
var string3 = []
var total3 = 0
for(var i=0; i<thymes.length;i++){
  totals3.push(southcenter.totalCookiesHour())
  total3 += totals3[i]
  string3.push(thymes[i]+': '+ totals3[i] + ' cookies')
}
string3.push('Total: '+ total3 + ' cookies')
var times3 = string3

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

var totals4 = []
var string4 = []
var total4 = 0
for(var i=0; i<thymes.length;i++){
  totals4.push(bellevue.totalCookiesHour())
  total4 += totals4[i]
  string4.push(thymes[i]+': '+ totals4[i] + ' cookies')
}
string4.push('Total: '+ total4 + ' cookies')
var times4 = string4

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

  var totals5 = []
  var string5 = []
  var total5 = 0
  for(var i=0; i<thymes.length;i++){
    totals5.push(alki.totalCookiesHour())
    total5 += totals5[i]
    string5.push(thymes[i]+': '+ totals5[i] + ' cookies')
  }
  string5.push('Total: '+ total5 + ' cookies')
  var times5 = string5
makeUL5(times5);
