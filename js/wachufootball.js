$(document).on('scroll', function (e) {
    if ($(document).scrollTop() > 12)
    {
        $('.navbar').addClass("scrolled");
    }
    else
    {
        $('.navbar').removeClass("scrolled");
    }
});

function doneLoading() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
}


// When the page is fully loaded, it calls the load() function, which hides the loading icon and shows the rest of the content
document.onreadystatechange = function () {
    if (document.readyState == 'complete') { doneLoading(); }
}

// This calls the page transitions
$(document).ready(function () {
    $(".animsition").animsition({
        inClass: 'zoom-in-sm',
        outClass: 'zoom-out-sm',
        inDuration: 200,
        outDuration: 200,
        linkElement: 'a:not([target="_blank"]):not([href^="#"])',
        loading: false,
        loadingParentElement: 'body',
        loadingClass: 'animsition-loading',
        loadingInner: '',
        timeout: true,
        timeoutCountdown: 10,
        onLoadEvent: true,
        browser: ['animation-duration', '-webkit-animation-duration'],
        overlay: false,
        overlayClass: 'animsition-overlay-slide',
        overlayParentElement: 'body',
        transition: function (url) { window.location.href = url; }
    });
});