const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');


const getTime = () => {
  const currentTime = new Date()
  const seconds = currentTime.getSeconds()
  const minutes = currentTime.getMinutes()
  const hours = currentTime.getHours()
  
  secondHand.style.transform = 'rotate(' + (seconds * 6 ) + 'deg)'
  minuteHand.style.transform = 'rotate(' + (minutes * 6 + seconds /10 ) + 'deg)'
  hourHand.style.transform = 'rotate(' + (hours * 30 + minutes /2 ) + 'deg)'
  
}
setInterval(getTime, 1000)