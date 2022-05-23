document.getElementById('crazy').onclick = partyPurple
document.getElementById('baby').onclick = partyGreen
document.getElementById('naughty').onclick = partyBlue
document.getElementById('me').onclick = partyOrange

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgb(241, 72, 241)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}
function partyOrange() {
  document.querySelector('body').style.backgroundColor = 'rgb(241, 160, 7)'
  document.querySelector('body').style.color = 'white'
}