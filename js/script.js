source = document.getElementById('srcid');
var getUrlParameter = function getUrlParameter(sParam) {
var sPageURL = window.location.search.substring(1),
sURLVariables = sPageURL.split('&'),
sParameterName,
i;
for (i = 0; i < sURLVariables.length; i++) {
sParameterName = sURLVariables[i].split('=');
if (sParameterName[0] === sParam) {
return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
}
}
};
var surl = getUrlParameter('url');
if (surl == null) {
    document.getElementById("status").innerHTML = "<h5>Welcome to<br>JioSaavn Downloader</h5>";
    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value=''><input type='submit' value='Search'>";
}
else if (surl.startsWith("http://") || surl.startsWith("https://") || surl.startsWith("www.jiosaavn.com") || surl.startsWith("jiosaavn.com") || surl.startsWith("www.saavn.com") || surl.startsWith("saavn.com")) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var t = JSON.parse(this.responseText);
            var e = t.url;
            if (e == null) {
            document.getElementById("status").innerHTML = "<h5>Please Enter JioSaavn Song Link</h5>" ;
            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value=''><input type='submit' value='Search'>";
                if (surl != null){
                document.getElementById("download").innerHTML = "Unable to Download from this Link" ;
                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value=''><input type='submit' value='Search'>";
                }
            else {
                document.getElementById("download").innerHTML = "Welcome to JioSaavn Downloader";
                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value=''><input type='submit' value='Search'>";
            }
        }
        else if (e.endsWith(".mp3") === true){
            var m = e.replace("http://h.saavncdn.com", "/play");
            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value=''><input type='submit' value='Search'>";
            document.getElementById("download").innerHTML = "<table class='table table-striped'> <thead> <tr> <th scope='col'>Name</th> <td>" + t.title + "</td> </tr> </thead> <tbody> <tr> <th scope='row'>Singer</th> <td>" + t.singers + "</td> </tr> <tr> <th scope='row'>Album</th> <td>" + t.album + "</td> </tr> <tr> <th scope='row'>Language</th> <td>" + t.language + "</td> </tr> <tr> <th scope='row'>Label</th> <td>" + t.label + "</td> </tr> </tbody> </table><a href='" + t.url + "' class='button7' style='background-color:#2979FF'>Download MP3 320kbps</a>"
            document.getElementById("status").innerHTML = "<img src='" + t.image_url + "' width='250px' height='250px'><br><br><center><audio controls style='width: 100%; max-width:600px;'> <source src='" + m + "' type='audio/ogg'> <source src='" + m + "' type='audio/mpeg'> Your browser does not support the audio element. </audio></center>" ;
        }
          }
        else {
            document.getElementById("status").innerHTML = "<img src='/images/processing.gif' width='150px' height='150px'>" ;
        }
            
        };
        xmlhttp.open("GET", "/api/?query=" + surl, true);
        xmlhttp.send();
}

else {
        var obj, xmlhttp, myObj, x, txt = "";
        var fsurl = surl.replace("+", " ");
        obj = { table: "customers", limit: 20 };
        dbParam = JSON.stringify(obj);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table class='table table-striped table-bordered'><caption>Results for : " + fsurl + "</caption><thead><tr><th scope='col'>Name</th><th scope='col'>Link</th></tr></thead><tbody>"
            for (x in myObj) {
              txt += "<tr><td>" + myObj[x].title + " By " + myObj[x].singers + "</td><td><a href='/?url=" + myObj[x].perma_url + "' target='_blank'>Open</a></td></tr>";
            }
            txt += "</tbody></table>"  
            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='" + fsurl + "'><input type='submit' value='Search'>";
            document.getElementById("download").innerHTML = txt;
            document.getElementById("status").innerHTML = "" ;
          }
          else {
              document.getElementById("status").innerHTML = "<img src='/images/processing.gif' width='150px' height='150px'>" ;
          }
        };
        xmlhttp.open("GET", "/api/?query=" + surl, true);
        xmlhttp.send();
}
function myFunction() {
  var x = document.getElementById("footer");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
