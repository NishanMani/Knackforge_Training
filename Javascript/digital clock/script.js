
function displayTime(){
    let dateTime = new Date()
    let hr = dateTime.getHours()
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    document.getElementById('hours').innerHTML = hr
    document.getElementById('mins').innerHTML = min
    document.getElementById('sec').innerHTML = sec



}
function padZero(num){
    return num<10?"0"+num:num
}
setInterval(displayTime,1000)