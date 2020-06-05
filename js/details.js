source = document.getElementById("srcid");
var getUrlParameter = function(t) {
        var e, n, r = window.location.search.substring(1).split("&");
        for (n = 0; n < r.length; n++)
            if ((e = r[n].split("="))[0] === t) return void 0 === e[1] || decodeURIComponent(e[1])
    },
    surl = getUrlParameter("url"),
    xmlhttp = new XMLHttpRequest;
xmlhttp.onreadystatechange = function() {
    if (4 == this.readyState && 200 == this.status) {
        var t = JSON.parse(this.responseText),
            e = t.url;
        null == e ? (
                document.getElementById("download").innerHTML = "Incorrect Jio Song URL, the link should look like https://www.saavn.com/s/song/hindi/Wajah-Tum-Ho/Maahi-Ve/AQMxcA1XVVo and it should have keyword /song/ in it.",
                document.getElementById("status").innerHTML = "<h4>Enter JioSaavn Song Link</h4>") : e.endsWith(".mp3") && (
                document.getElementById("download").innerHTML = "<img src='" + t.image_url + "' width='250px' height='250px'><table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>" + t.title + "</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>" + t.singers + "</td> </tr> <tr> <th scope='row'>Album</th> <td>" + t.album + "</td> </tr> <tr> <th scope='row'>Language</th> <td>" + t.language + "</td> </tr> <tr> <th scope='row'>Label</th> <td>" + t.label + "</td> </tr> </tbody> </table><a href='" + t.url + "' class='button7' style='background-color:#2979FF'>Download MP3 320kbps</a>",
                document.getElementById("status").innerHTML = "<h4>Download Link Generated</h4>")
    } else document.getElementById("status").innerHTML = "<h4>Processing...</h4>"
}, xmlhttp.open("GET", "/api/?query=" + surl, !0), xmlhttp.send();
