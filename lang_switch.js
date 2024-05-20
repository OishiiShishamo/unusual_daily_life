if ( location.href.match(new RegExp('/ja/')) ){
    document.getElementById("lang_switch").innerHTML = "en"
    document.getElementById("lang_switch").href = url.replace('/ja/', '/en/');
}

if ( location.href.match(new RegExp('/en/')) ){
    document.getElementById("lang_switch").innerHTML = "ja"
    document.getElementById("lang_switch").href = url.replace('/en/', '/ja/');
}