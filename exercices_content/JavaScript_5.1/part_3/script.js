const emergency = document.querySelector('.emergency-tasks');
const noEmergency = document.querySelector('.no-emergency-tasks');
const emerTitle = emergency.querySelectorAll('h3');
const noEmerTitle = noEmergency.querySelectorAll('h3');

emergency.style.backgroundColor = '#f3a6a6';
noEmergency.style.backgroundColor = '#ecea68';

for (let i = 0; i < emerTitle.length; i += 1) {
  emerTitle[i].style.backgroundColor = '#9c0fc7'
  noEmerTitle[i].style.backgroundColor = 'black'
}