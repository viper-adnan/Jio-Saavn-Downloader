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
    document.title = "Redirecting - Musically";
    location.href= "/";
} else if (surl.startsWith("https://www.jiosaavn.com/album/")) {
    var obj, xmlhttp, al, songs, x, txt = "";
    var fsurl = surl.replace(/\+/g, " ");
    albums = JSON.stringify(obj);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            al = JSON.parse(this.responseText);
            txt += "<h5 style='color: white;'>" + al.name + "</h5> (" + al.year + ")" + "</h5><table class='table table-striped table-bordered'><caption style='caption-side:top;word-break:break-all;'>Results for : " + fsurl + "</caption><thead><tr><th scope='col' style='color: white;'>Song Name</th><th scope='col' style='color: white;'>Singers</th></tr></thead><tbody>"
            for (x in al.songs) {
                txt += "<tr><td><a href='/?url=" + al.songs[x].perma_url + "'>" + al.songs[x].song + "</a></td><td style='color: white;'>" + al.songs[x].singers + "</td></tr>";
            }
            txt += "</tbody></table>"
            imagessl = al.songs[0].image.replace("http://", "https://");
            document.title = al.name + " - Musically";
            document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";
            document.getElementById("download").innerHTML = txt;
            document.getElementById("status").innerHTML = "<img src='" + imagessl + "' width='250px' height='250px'>";
        } else {
            document.getElementById("status").innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='margin:auto;display:block;' width='150px' height='150px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'> <g transform='translate(50,50)'><circle cx='0' cy='0' r='8.333333333333334' fill='none' stroke='#e15b64' stroke-width='3.9000000000000004' stroke-dasharray='26.179938779914945 26.179938779914945' transform='rotate(-217.309)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='0' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='16.666666666666668' fill='none' stroke='#f47e60' stroke-width='3.9000000000000004' stroke-dasharray='52.35987755982989 52.35987755982989' transform='rotate(302.078)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.273972602739726' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='25' fill='none' stroke='#f8b26a' stroke-width='3.9000000000000004' stroke-dasharray='78.53981633974483 78.53981633974483' transform='rotate(-359.247)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.547945205479452' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='33.333333333333336' fill='none' stroke='#abbd81' stroke-width='3.9000000000000004' stroke-dasharray='104.71975511965978 104.71975511965978' transform='rotate(45.1985)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-0.821917808219178' repeatCount='indefinite'></animateTransform> </circle><circle cx='0' cy='0' r='41.666666666666664' fill='none' stroke='#849b87' stroke-width='3.9000000000000004' stroke-dasharray='130.89969389957471 130.89969389957471' transform='rotate(-127.769)'> <animateTransform attributeName='transform' type='rotate' values='0 0 0;-360 0 0' times='0;1' dur='1.36986301369863s' calcMode='spline' keySplines='0.2 0 0.8 1' begin='-1.095890410958904' repeatCount='indefinite'></animateTransform> </circle></g> </svg>";
        }
    };
    xmlhttp.open("GET", "https://jiosaavn.netlify.app/api/?query=" + surl, true);
    xmlhttp.send();
} else {
    document.title = "Failed - Musically";
    document.getElementById("status").innerHTML = "Either Album Link is wrong or We're unable to fetch these details.";
    document.getElementById("input").innerHTML = "<input type='text' id='srcid' name='url' placeholder='Enter Song Name or JioSaavn Link' value='' autocomplete='off' required><input type='submit' value='&#128269;'>";

}
function switchfunc() {
    var x = document.getElementById("footer");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
