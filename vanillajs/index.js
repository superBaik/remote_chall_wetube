// import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
//   console.log(xmasDay);
  return xmasDay
}


function init() {
    // getTime();
    var now = new Date();

    var currentMonth = (now.getMonth() + 1);
    var currentDay = now.getDate();
    var christmasDay = new Date(getTime());
    console.log(christmasDay);
    
    var diffSeconds = Math.floor((christmasDay.getTime() - now.getTime()) / 1000);
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
 
    
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        
        days = Math.floor(diffSeconds / (3600*24));

        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);

        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);

        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }
 
    
    document.getElementById('days').innerText = days + ' Days';
    document.getElementById('hours').innerHTML = hours + ' Hours';
    document.getElementById('minutes').innerHTML = minutes + ' Minutes';
    document.getElementById('seconds').innerHTML = seconds + ' Seconds';
 
    
    setTimeout(init, 1000);

}
init();
