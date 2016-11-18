
function moveHands() {
    	var date = new Date();
        h = 30 * (date.getHours() % 12 + date.getMinutes() / 60); // 30 degrees hour
        m = 6 * date.getMinutes(); // 6 degrees every minute
        s = 6 * date.getSeconds(); // 6 degrees every second
        document.getElementById('seconds').style.cssText = "-webkit-transform:rotate(" + s + "deg);"; // setting the rotate CSS attribute to those degree values
        document.getElementById('minutes').style.cssText = "-webkit-transform:rotate(" + m + "deg);";
        document.getElementById('hours').style.cssText = "-webkit-transform:rotate(" + h + "deg);";

        setTimeout(moveHands, 1000); // calling the function every second
    
}

window.onload = moveHands; // making sure the function starts on load of webpage