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
    document.getElementById("status").innerHTML = "<p style='color: white;'><i>A next generation song downloader.</i></p><p id='hourly'></p>";
    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";
            var hour = new Date().getHours();
            if (hour == "1" || hour == "6" || hour == "12" || hour == "18" || hour == "24") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "2" || hour == "7" || hour == "13" || hour == "19") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/wanga-kaaliyan/OzIYCARjQGA'><img src='https://c.saavncdn.com/775/Wanga-Kaaliyan-Hindi-2020-20200525000142-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "3" || hour == "8" || hour == "14" || hour == "20") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/koi-fariyaad-unplugged/FjpSXDVUdnE'><img src='https://c.saavncdn.com/485/Koi-Fariyaad-Unplugged-Hindi-2020-20200607084001-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "4" || hour == "9" || hour == "15" || hour == "21") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh/JV8HCDpVRHs'><img src='https://c.saavncdn.com/258/Tu-Hi-Yaar-Mera-From-Pati-Patni-Aur-Woh--Hindi-2019-20191202231535-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "5" || hour == "10" || hour == "16" || hour == "22") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/senorita/I1sPdgJoZFE'><img src='https://c.saavncdn.com/artists/Camila_Cabello_20171208142451_500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/love-me-like-you-do-from-fifty-shades-of-grey/AiskdBdfR1w'><img src='https://c.saavncdn.com/566/Love-Me-Like-You-Do-From-Fifty-Shades-Of-Grey-English-2015-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
} else if (surl.startsWith("http://www.jiosaavn.com/song/") || surl.startsWith("https://www.jiosaavn.com/song/") || surl.startsWith("http://jiosaavn.com/song/") || surl.startsWith("https://jiosaavn.com/song/") || surl.startsWith("http://saavn.com/song/") || surl.startsWith("https://saavn.com/song/") || surl.startsWith("http://www.saavn.com/song/") || surl.startsWith("https://www.saavn.com/song/")) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var t = JSON.parse(this.responseText);
            var e = t.media_url;
            var oldurl = e.substring(e.indexOf("jio.com") + 7);
            var newurl = oldurl.replace("/", "https://");
            if (e == null) {
                document.getElementById("status").innerHTML = "<h5>Please Enter JioSaavn Song Link</h5>";
                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";
                if (surl != null) {
                    document.title = "Failed - Musically";
                    document.getElementById("download").innerHTML = "Unable to Download from this Link";
                    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";
                } else {
    document.getElementById("status").innerHTML = "<p style='color: white;'><i>A next generation song downloader.</i></p><p id='hourly'></p>";
    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";
            var hour = new Date().getHours();
            if (hour == "1" || hour == "6" || hour == "12" || hour == "18" || hour == "24") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "2" || hour == "7" || hour == "13" || hour == "19") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/wanga-kaaliyan/OzIYCARjQGA'><img src='https://c.saavncdn.com/775/Wanga-Kaaliyan-Hindi-2020-20200525000142-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "3" || hour == "8" || hour == "14" || hour == "20") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/koi-fariyaad-unplugged/FjpSXDVUdnE'><img src='https://c.saavncdn.com/485/Koi-Fariyaad-Unplugged-Hindi-2020-20200607084001-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "4" || hour == "9" || hour == "15" || hour == "21") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/tu-hi-yaar-mera-from-pati-patni-aur-woh/JV8HCDpVRHs'><img src='https://c.saavncdn.com/258/Tu-Hi-Yaar-Mera-From-Pati-Patni-Aur-Woh--Hindi-2019-20191202231535-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else if (hour == "5" || hour == "10" || hour == "16" || hour == "22") {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/senorita/I1sPdgJoZFE'><img src='https://c.saavncdn.com/artists/Camila_Cabello_20171208142451_500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
            else {
            document.getElementById("hourly").innerHTML = "<a href='/?url=https://www.jiosaavn.com/song/love-me-like-you-do-from-fifty-shades-of-grey/AiskdBdfR1w'><img src='https://c.saavncdn.com/566/Love-Me-Like-You-Do-From-Fifty-Shades-Of-Grey-English-2015-500x500.jpg' width='250px' height='250px' style='border-radius: 10px;'>";
            }
                }
            } else if (e.endsWith(".mp3") === true || e.endsWith(".mp4") === true) {
                var m = newurl;
                var dl = newurl.replace("https://", "/cdn.jiosaavn.ga/"); 
                document.title = t.song + " - Musically";
                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' onfocus='this.value=\"\"' value='" + t.song + "' autocomplete='off' required><input type='submit' value='&#128269;'>";
                document.getElementById("download").innerHTML = "<table class='table table-striped'> <thead> <tr> <th scope='col' style='color: white;'>Name</th> <td style='color: white;'>" + t.song + "</td> </tr> </thead> <tbody> <tr> <th scope='row' style='color: white;'>Singer</th> <td style='color: white;'>" + t.singers + "</td> </tr> <tr> <th scope='row' style='color: white;'>Album</th> <td style='color: white;'><a href='/album/?url=" + t.album_url + "'>" + t.album + "</a></td> </tr> <tr> <th scope='row' style='color: white;'>Language</th> <td style='color: white;'>" + t.language + "</td> </tr> <tr> <th scope='row' style='color: white;'>Label</th> <td style='color: white;'>" + t.label + "</td> </tr> </tbody> </table>"
                document.getElementById("status").innerHTML = "<img src='" + t.image + "' width='250px' height='250px' style='border-radius: 15px;'><br><h3 style='color:white;'>" + t.song + "</h3><center><audio controls style='width: 100%; max-width:600px;' loop> <source src='" + m + "' type='audio/mp3'> <source src='" + dl + "' type='audio/mp4'> Your browser does not support the audio element. </audio></center>";
                var status1 = "";
                var request1 = new XMLHttpRequest();
                request1.open("GET", dl, true);
                request1.send();
                request1.onreadystatechange = function() {
                  if(this.readyState == this.HEADERS_RECEIVED) {
                    // Get the raw header string
                    var headers1 = request1.getAllResponseHeaders();
                    // Convert the header string into an array
                    // of individual headers
                    var arr1 = headers1.trim().split(/[\r\n]+/);
                    // Create a map of header names to values
                    var headerMap1 = {};
                    arr1.forEach(function (line1) {
                      var parts1 = line1.split(': ');
                      var header1 = parts1.shift();
                      var value1 = parts1.join(': ');
                      headerMap1[header1] = value1;
                      var status1 = headerMap1["status"];
                      if (status1 != "403") {
                      document.getElementById("links").innerHTML = "<a href='" + dl + "' class='button7' style='background-color:#2979FF' target='_self' download='" + t.song + ".mp3'>Download Song</a>";
                      }  
                      }
                    );
                  }
                }

            }
        } else if (this.readyState == 4 && this.status !== 200) {
            document.title = "Server Offline - Musically";
            document.getElementById("status").innerHTML = "<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>";
        } else {
            document.title = "Processing - Musically";
            document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
        }

    };
    xmlhttp.open("GET", "/api/?query=" + surl, true);
    xmlhttp.send();
} else if (surl.startsWith("http://www.jiosaavn.com/album/") || surl.startsWith("https://www.jiosaavn.com/album/") || surl.startsWith("http://jiosaavn.com/album/") || surl.startsWith("https://jiosaavn.com/album/") || surl.startsWith("http://saavn.com/album/") || surl.startsWith("https://saavn.com/album/") || surl.startsWith("http://www.saavn.com/album/") || surl.startsWith("https://www.saavn.com/album/")) {
    location.href = "/album/?url=" + surl;
} else {
    var obj, xmlhttp, myObj, x, txt = "";
    var fsurl = surl.replace(/\+/g, " ");
    obj = {
        table: "customers",
        limit: 20
    };
    dbParam = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            myObj = JSON.parse(this.responseText);
            txt += "<table class='table table-striped table-bordered'><caption style='caption-side:top;word-break:break-all;'>Results for : " + fsurl + "</caption><thead><tr><th scope='col' style='color: white;'>Name</th><th scope='col' style='color: white;'>Album</th></tr></thead><tbody>"
            for (x in myObj) {
                txt += "<tr><td><a href='/?url=" + myObj[x].perma_url + "'>" + myObj[x].song + " By " + myObj[x].singers + "</a></td><td><a href='/?url=" + myObj[x].album_url + "'>" + myObj[x].album + "</td></tr>";
            }
            txt += "</tbody></table>"
            document.title = "Albums - Musically";
            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' onfocus='this.value=\"\"' value='" + fsurl + "' autocomplete='off' required><input type='submit' value='&#128269;'>";
            document.getElementById("download").innerHTML = txt;
            document.getElementById("status").innerHTML = "";
        } else if (this.readyState == 4 && this.status !== 200) {
            document.title = "Server Offline - Musically";
            document.getElementById("status").innerHTML = "<button type='button' class='btn btn-danger' disabled>Web Server Offline</button>";
        } else {
            document.title = "Processing - Musically";
            document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
        }
    };
    xmlhttp.open("GET", "/api/?query=" + surl, true);
    xmlhttp.send();
}

function switchfunc() {
    var x = document.getElementById("footer");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
