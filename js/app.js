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

var seattle = {
    minCustomers: 23,
    maxCustomers: 65,
    aveCookie: 6.3,
    
    seattleSalesPerHour: function(){
        var result = 0;
        for (var i = 0; i < hoursArray.length; i++) {
            var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
            cookieHourly = Math.ceil(cookieHourly);
// result.push(cookieHourly); WILL NOT WORK
            result += cookieHourly;            
// identify the correponding id in sales.html
            var parent = document.getElementById('seattle');
// create li element in DOM           
            var listItem = document.createElement('li');
// content for cookieHourly            
            listItem.textContent = hoursArray[i] + ': ' + 
            cookieHourly;
// append to DOM
            parent.appendChild(listItem);
        }
        var parent = document.getElementById('seattle');
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + result;
        parent.appendChild(listItem);
    }
}

seattle.seattleSalesPerHour()


var tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    aveCookie: 1.2,
    
    tokyoSalesPerHour: function(){
        var result = 0;
        for (var i = 0; i < hoursArray.length; i++) {
            var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
            cookieHourly = Math.ceil(cookieHourly);
            result += cookieHourly;            
            var parent = document.getElementById('tokyo');       
            var listItem = document.createElement('li');        
            listItem.textContent = hoursArray[i] + ': ' + 
            cookieHourly;
            parent.appendChild(listItem);
        }
        var parent = document.getElementById('tokyo');
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + result;
        parent.appendChild(listItem);
    }
}

tokyo.tokyoSalesPerHour()


var dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    aveCookie: 3.7,
    
    dubaiSalesPerHour: function(){
        var result = 0;
        for (var i = 0; i < hoursArray.length; i++) {
            var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
            cookieHourly = Math.ceil(cookieHourly);
            result += cookieHourly;            
            var parent = document.getElementById('dubai');       
            var listItem = document.createElement('li');        
            listItem.textContent = hoursArray[i] + ': ' + 
            cookieHourly;
            parent.appendChild(listItem);
        }
        var parent = document.getElementById('dubai');
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + result;
        parent.appendChild(listItem);
    }
}

dubai.dubaiSalesPerHour()


var paris = {
    minCustomers: 20,
    maxCustomers: 38,
    aveCookie: 2.3,
    
    parisSalesPerHour: function(){
        var result = 0;
        for (var i = 0; i < hoursArray.length; i++) {
            var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
            cookieHourly = Math.ceil(cookieHourly);
            result += cookieHourly;            
            var parent = document.getElementById('paris');       
            var listItem = document.createElement('li');        
            listItem.textContent = hoursArray[i] + ': ' + 
            cookieHourly;
            parent.appendChild(listItem);
        }
        var parent = document.getElementById('paris');
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + result;
        parent.appendChild(listItem);
    }
}

paris.parisSalesPerHour()


var lima = {
    minCustomers: 2,
    maxCustomers: 16,
    aveCookie: 4.6,
    
    limaSalesPerHour: function(){
        var result = 0;
        for (var i = 0; i < hoursArray.length; i++) {
            var cookieHourly = getRandomIntInclusive(this.minCustomers, this.maxCustomers) * this.aveCookie;
            cookieHourly = Math.ceil(cookieHourly);
            result += cookieHourly;            
            var parent = document.getElementById('lima');       
            var listItem = document.createElement('li');        
            listItem.textContent = hoursArray[i] + ': ' + 
            cookieHourly;
            parent.appendChild(listItem);
        }
        var parent = document.getElementById('lima');
        var listItem = document.createElement('li');
        listItem.textContent = 'Total: ' + result;
        parent.appendChild(listItem);
    }
}

lima.limaSalesPerHour()

