let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let seconds = document.querySelector('#seconds');
let ampm = document.querySelector('#ampm');


function displayTime(){
  let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    const amPm  = h > 12 ? 'PM' : 'AM';
    ampm.innerHTML = amPm;
     h = h%12 || 12;
     
    h < 10 ? h= '0' + h : h;
    m < 10 ? m= '0' + m : m;
    s < 10 ? s= '0' + s : s;
  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  setInterval(displayTime,1000);
}

function day(){
  let time = new Date();
  let day = time.getDay();
  let days = ['sun','mon','tue','wed','thu','fri','sat'];
  document.getElementById(days[day]).style.opacity = 1;

}

displayTime();
day();