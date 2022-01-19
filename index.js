setInterval(() => {
        d = new Date();
        htime = d.getHours();
        mtime = d.getMinutes();
        stime = d.getSeconds();
        hrotation = 30*htime +mtime/2; 
        mrotation = 6*mtime;
        srotation = 6*stime;

        hour.style.transform = `rotate(${hrotation}deg)`;
        minute.style.transform = `rotate(${mrotation}deg)`;
        secound.style.transform = `rotate(${srotation}deg)`;
}, 1000);


// 12hours --> 360deg
// 1hours --> 30deg
// 60Min --> 30deg
// 1Min --> (1/2)deg
// 60sec --> 360deg
// 1sec --> 6deg