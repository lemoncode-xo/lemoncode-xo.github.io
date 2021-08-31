// Code By Webdevtrick ( https://webdevtrick.com )
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //var time = h + ":" + m + ":" + s + " " + session;
    //document.getElementById("DigitalCLOCK").innerText = time;
    //document.getElementById("DigitalCLOCK").textContent = time;


    document.getElementById("curhrmin").innerText = h + " : " + m + " ";
    document.getElementById("curhrmin").textContent = h + " : " + m + " ";

    //document.getElementById("curmin").innerText = m;
    //document.getElementById("curmin").textContent = m;

    document.getElementById("cursec").innerText = " ~" + s + " " + session;
    document.getElementById("cursec").textContent = " ~" + s + " " + session;

    //document.getElementById("cursession").innerText = session;
    //document.getElementById("cursession").textContent = session;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();
