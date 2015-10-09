var CookieStand = function(place,minCustHour,maxCustHour,avgCookiesCust,id){
  this.place = place;
  this.minCustHour = minCustHour;id
  this.maxCustHour = maxCustHour;
  this.avgCookiesCust = avgCookiesCust;
  this.thymes = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm' ];
  this.string = [];
  this.id = id;
  this.randCustHour = function (min,max){
    return Math.floor(Math.random()*(max - min +1)) + min;
  };
  this.totalCookiesHour = function (){
    return Math.floor(this.randCustHour(this.maxCustHour,this.minCustHour) * this.avgCookiesCust)
  };
  this.getString = function(){
    this.string = []
    var totals = []
    var total = 0
    for(var i=0; i<this.thymes.length;i++){
      totals.push(this.totalCookiesHour())
      total += totals[i]
      this.string.push(totals[i])
    }
    this.string.push(total)
  };
  this.makeTable = function(){
    this.getString()
    var table = document.getElementById("the-table");
    var row = table.insertRow(-1);
    var cell = row.insertCell(-1);
    cell.innerHTML = this.place
    for(var i = 0; i <this.string.length-1; i++){
      var cell = row.insertCell(-1);
      cell.innerHTML = this.string[i]
    }
    var cell = row.insertCell(-1);
    cell.innerHTML = this.string[8]
  }
}
var pikeplace = new CookieStand('Pike Place Market',17,88,5.2,'pikeplace');
var seatac = new CookieStand('Seatac Airport',6,44,1.2,'seatac');
var southcenter = new CookieStand('Southcenter Mall',11,38,1.9,'southcenter');
var bellevue = new CookieStand('Bellevue Square',20,48,3.3,'bellevue');
var alki = new CookieStand('Alki',3,24,2.6,'alki');

pikeplace.makeTable();
seatac.makeTable();
southcenter.makeTable();
bellevue.makeTable();
alki.makeTable();
//
var form = document.getElementById("form");
console.log(form);
