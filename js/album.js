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
    document.getElementById("status").innerHTML = "<h5>Welcome to<br>JioSaavn Downloader</h5><a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>";
    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>";
}
else if (surl.startsWith("https://www.jiosaavn.com/album/")) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            var t = JSON.parse(this.responseText);
            var e = t.perma_url;
                        if (e == null) {
                        document.getElementById("status").innerHTML = "<h5>Please Enter JioSaavn Album Link</h5>" ;
                        document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>";
                                            if (surl != null){
                                            document.getElementById("download").innerHTML = "Unable to Download from this Link" ;
                                            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>";
                                            }
                                            else {
                                            document.getElementById("status").innerHTML = "<h5>Welcome to<br>JioSaavn Downloader</h5><a href='/?url=https://www.jiosaavn.com/song/meri-aashiqui/RV4pdS5obh4'><img src='https://c.saavncdn.com/952/Meri-Aashiqui-Hindi-2020-20200602234001-500x500.jpg' width='250px' height='250px'>";
                                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='Search'>";
                                            }
                        }
                        else {
                        var obj, xmlhttp, myObj, x, txt = "";
                        var fsurl = surl.replace(/\+/g, " ");
                        obj = { table: "customers", limit: 20 };
                        dbParam = JSON.stringify(obj);
                        xmlhttp = new XMLHttpRequest();
                        xmlhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                myObj = JSON.parse(this.responseText);
                                txt += "<table class='table table-striped table-bordered'><caption>Results for : " + fsurl + "</caption><thead><tr><th scope='col'>Name</th><th scope='col'>Link</th></tr></thead><tbody>";
                                for (x in myObj) {
                                  txt += "<tr><td>" + myObj[x].songs.song + " By " + myObj[x].songs.singers + "</td><td><a href='/?url=" + myObj[x].songs.perma_url + "' target='_blank'>Open</a></td></tr>";
                                }
                                txt += "</tbody></table>";
                                document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='" + fsurl + "' autocomplete='off' required><input type='submit' value='Search'>";
                                document.getElementById("download").innerHTML = txt;
                                document.getElementById("status").innerHTML = "" ; 
                                }
                        };
                        }
