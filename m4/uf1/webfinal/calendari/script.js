var colours = [
    "#FF5733", "#FFC300", "#FF0066", "#FF3333", "#FF99FF",
    "#FF0000", "#FF6600", "#9900CC", "#FF3399", "#CCFF66",
    "#FF9966", "#996666", "#00FF00", "#CC9933", "#FF6699",
    "#99FFCC", "#FFCC00", "#336600", "#FF9933", "#FF3300",
    "#FF3366", "#FFCC99", "#9966CC", "#00CCFF", "#FF9933",
    "#FF3300", "#FF3366", "#6666CC", "#FF9933", "#CC3300",
    "#FF0066", "#FFCC00", "#CCFFCC", "#CCFF66", "#9966FF",
    "#FF6633", "#CC99FF", "#00CCFF", "#FF6699", "#FF6600",
    "#3366CC", "#FF3366", "#009933", "#FF3333", "#FF9933",
    "#FFCC99", "#993366", "#FF3366", "#FFCC33", "#330033",
    "#FF9966", "#FF9966", "#CCCCFF", "#CCCC33"
], idx;

$(function() {
    var div = $('.autor'); 
    var chars = div.text().split('');
    div.html('');     
    for(var i=0; i<chars.length; i++) {
        idx = Math.floor(Math.random() * colours.length);
        var span = $('<span>' + chars[i] + '</span>').css("color", colours[idx]);
        div.append(span);
    }
});

function abrir(url) {
    window.open(url, '_blank');
}

function cambiar(url) {
    window.location.href = url;
}