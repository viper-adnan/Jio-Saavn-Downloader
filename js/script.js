var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var t = JSON.parse(this.responseText);
    var e = t.url;
    if (e == null) {
    document.getElementById("status").innerHTML = "<h5>Please Enter JioSaavn Song Link</h5>" ;
    if (surl != null){
    document.getElementById("download").innerHTML = "Unable to Download from this Link" ;
    }
    else {
        document.getElementById("download").innerHTML = "Welcome to JioSaavn Downloader" ;
    }
}
else if (e.endsWith(".mp3") === true){
    document.getElementById("download").innerHTML = "<table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>" + t.title + "</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>" + t.singers + "</td> </tr> <tr> <th scope='row'>Album</th> <td>" + t.album + "</td> </tr> <tr> <th scope='row'>Language</th> <td>" + t.language + "</td> </tr> <tr> <th scope='row'>Label</th> <td>" + t.label + "</td> </tr> </tbody> </table><a href='" + t.url + "' class='button7' style='background-color:#2979FF'>Download MP3 320kbps</a>"
    document.getElementById("status").innerHTML = "<img src='" + t.image_url + "' width='250px' height='250px'>" ;
}
  }
else {
    document.getElementById("status").innerHTML = "<img src='https://jiosaavn.netlify.app/images/processing.gif' width='250px' height='250px'>" ;
}
    
};
xmlhttp.open("GET", "https://jiosaavnapi.bhadoo.uk/result/?query=" + surl, true);
xmlhttp.send();
