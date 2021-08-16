const currentTime = new Date();

const hours = currentTime.getHours()
const minutes = currentTime.getMinutes() + hours * 60

const allMinutes = 24 * 60;


console.log(allMinutes - minutes)

