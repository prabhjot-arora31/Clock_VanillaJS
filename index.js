setInterval(() => {
    // console.log('hey');
    const d = new Date()
    const hr = d.getHours()
    const min = d.getMinutes()
    const sec = d.getSeconds()
    const hrRotate = 30*hr+min/2
    const minRotate = 6*min
    const secRotate = 6*sec;
    console.log(hour);
    hour.style.transform = `rotate(${hrRotate}deg)`
    minute.style.transform = `rotate(${minRotate}deg)`
    second.style.transform = `rotate(${secRotate}deg)`
    time.innerText = `${hr}:${min}:${sec}`
}, 1000);