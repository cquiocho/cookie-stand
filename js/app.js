'use strict';

// establish array of hours for loop
var hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// this function will generate the random number
// borrowed from MDN random page
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

var parentElement = document.getElementById('table');

function generateHeader() {
    var tableRow = document.createElement('tr');
    var timeRow = document.createElement('td');
    tableRow.appendChild(timeRow);
    for (var i = 0; i < hoursArray.length; i++) {
      var timeHeader = document.createElement('th');
      timeHeader.textContent = hoursArray[i];
      tableRow.appendChild(timeHeader);
    }
    var storeTotal = document.createElement('th');
    storeTotal.textContent = 'Location Total';
    tableRow.appendChild(storeTotal);
    parentElement.appendChild(tableRow);
  }
  

// constructor array to store results for all locations
var allLocations = [];

// object constructor
function Locations(storeLocation, minCustomers, maxCustomers, aveCookie){
    this.location = storeLocation;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.aveCookie = aveCookie;
    this.cookieSalesPerHour = [];
    this.result = 0;
    allLocations.push(this);
}
    
Locations.prototype.generateSalesPerHour = function() {
    this.result = 0;
    for (var i = 0; i < hoursArray.length; i++) {
        var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
        cookieHourly = Math.ceil(cookieHourly);
        this.result += cookieHourly;  
        this.cookieSalesPerHour.push(cookieHourly);          
    }
    console.log('result ', this.result);
}
generateHeader();

// all information will be pushed in allLocations array
Locations.prototype.renderTableList = function(){
    // identify table element in DOM
    var parentElement = document.getElementById('table');
    // create table row - <tr>
    var tableRow = document.createElement('tr');
    // this will append the <tr> to the table parent element
    var storeName = document.createElement('th');
    storeName.textContent = this.location;
    tableRow.appendChild(storeName);    
    
    for (var i = 0; i < hoursArray.length; i++) {
        // create the table data - <td>
        var tableData = document.createElement('td');
        tableData.textContent = this.cookieSalesPerHour[i];
        // append <td> to the <tr>
        tableRow.appendChild(tableData);
    }

        var totalDailySales = document.createElement('td');
        totalDailySales.textContent = this.result;
        tableRow.appendChild(totalDailySales);
   
    parentElement.appendChild(tableRow);
}

var seattle = new Locations('Seattle', 23, 65, 6.3);
seattle.generateSalesPerHour();
seattle.renderTableList();

var tokyo = new Locations('Tokyo', 3, 24, 1.2);
tokyo.generateSalesPerHour();
tokyo.renderTableList();

var dubai = new Locations('Dubai', 11, 38, 3.7);
dubai.generateSalesPerHour();
dubai.renderTableList();

var paris = new Locations('Paris', 20, 38, 2.3);
paris.generateSalesPerHour();
paris.renderTableList();

var lima = new Locations('Lima', 2, 16, 4.6);
tokyo.generateSalesPerHour();
tokyo.renderTableList();

// introduce global variables
var newStoreForm = document.getElementById('addStore');

function newStoreSubmit(event) {
    event.preventDefault();

    var storeLocation = event.target.storeLocation.value;
    var minCustomers = event.target.minCustomers.value;
    var maxCustomers = event.target.maxCustomers.value;
    var aveCookie = event.target.aveCookie.value;
 
    var storeLocation = new Locations(storeLocation, minCustomers, maxCustomers, aveCookie);
    storeLocation.generateSalesPerHour();
    storeLocation.renderTableList();

}

newStoreForm.addEventListener('submit', newStoreSubmit);

// var seattle = {
//     location: 'Seattle',
//     minCustomers: 23,
//     maxCustomers: 65,
//     aveCookie: 6.3,
    
//     SalesPerHour: function(){
//         var result = 0;
//         for (var i = 0; i < hoursArray.length; i++) {
//             var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
//             cookieHourly = Math.ceil(cookieHourly);
// // result.push(cookieHourly); WILL NOT WORK
//             result += cookieHourly;            
// // identify the correponding id in sales.html
//             var parent = document.getElementById('seattle');
// // create li element in DOM           
//             var listItem = document.createElement('li');
// // content for cookieHourly            
//             listItem.textContent = hoursArray[i] + ': ' + 
//             cookieHourly;
// // append to DOM
//             parent.appendChild(listItem);
//         }
//         var parent = document.getElementById('seattle');
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + result;
//         parent.appendChild(listItem);
//     }
// }

// seattle.seattleSalesPerHour()

// var tokyo = {
//     location: 'Tokyo',
//     minCustomers: 3,
//     maxCustomers: 24,
//     aveCookie: 1.2,
    
//     SalesPerHour: function(){
//         var result = 0;
//         for (var i = 0; i < hoursArray.length; i++) {
//             var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
//             cookieHourly = Math.ceil(cookieHourly);
//             result += cookieHourly;            
//             var parent = document.getElementById('tokyo');       
//             var listItem = document.createElement('li');        
//             listItem.textContent = hoursArray[i] + ': ' + 
//             cookieHourly;
//             parent.appendChild(listItem);
//         }
//         var parent = document.getElementById('tokyo');
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + result;
//         parent.appendChild(listItem);
//     }
// }

// tokyo.tokyoSalesPerHour()

// var dubai = {
//     location: 'Dubai',
//     minCustomers: 11,
//     maxCustomers: 38,
//     aveCookie: 3.7,
    
//     SalesPerHour: function(){
//         var result = 0;
//         for (var i = 0; i < hoursArray.length; i++) {
//             var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
//             cookieHourly = Math.ceil(cookieHourly);
//             result += cookieHourly;            
//             var parent = document.getElementById('dubai');       
//             var listItem = document.createElement('li');        
//             listItem.textContent = hoursArray[i] + ': ' + 
//             cookieHourly;
//             parent.appendChild(listItem);
//         }
//         var parent = document.getElementById('dubai');
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + result;
//         parent.appendChild(listItem);
//     }
// }

// dubai.dubaiSalesPerHour()

// var paris = {
//     location: 'Paris',
//     minCustomers: 20,
//     maxCustomers: 38,
//     aveCookie: 2.3,
    
//     SalesPerHour: function(){
//         var result = 0;
//         for (var i = 0; i < hoursArray.length; i++) {
//             var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
//             cookieHourly = Math.ceil(cookieHourly);
//             result += cookieHourly;            
//             var parent = document.getElementById('paris');       
//             var listItem = document.createElement('li');        
//             listItem.textContent = hoursArray[i] + ': ' + 
//             cookieHourly;
//             parent.appendChild(listItem);
//         }
//         var parent = document.getElementById('paris');
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + result;
//         parent.appendChild(listItem);
//     }
// }

// paris.parisSalesPerHour()

// var lima = {
//     location: 'Lima',
//     minCustomers: 2,
//     maxCustomers: 16,
//     aveCookie: 4.6,
    
//     SalesPerHour: function(){
//         var result = 0;
//         for (var i = 0; i < hoursArray.length; i++) {
//             var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
//             cookieHourly = Math.ceil(cookieHourly);
//             result += cookieHourly;            
//             var parent = document.getElementById('lima');       
//             var listItem = document.createElement('li');        
//             listItem.textContent = hoursArray[i] + ': ' + 
//             cookieHourly;
//             parent.appendChild(listItem);
//         }
//         var parent = document.getElementById('lima');
//         var listItem = document.createElement('li');
//         listItem.textContent = 'Total: ' + result;
//         parent.appendChild(listItem);
//     }
// }

// lima.limaSalesPerHour()
