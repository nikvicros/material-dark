
$(document)
    .ready(function () {

    //init DateTimePickers
    materialKit.initFormExtendedDatetimepickers();

    // Sliders Init
    materialKit.initSliders();


        $('#twitter').sharrre({
            share: {
                twitter: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            buttons: {
                twitter: {
                    via: 'CreativeTim'
                }
            },
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('twitter');
            },
            template: '<i class="fa fa-twitter "></i> Twitter',
            url: 'http://demos.creative-tim.com/material-kit-pro/presentation.html'
        });


        $('#facebook').sharrre({
            share: {
                facebook: true
            },
            enableHover: false,
            enableTracking: false,
            enableCounter: false,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('facebook');
            },
            template: '<i class="fa fa-facebook-square "></i> Facebook',
            url: 'http://demos.creative-tim.com/material-kit-pro/presentation.html'
        });

        $('#google').sharrre({
            share: {
                googlePlus: true
            },
            enableCounter: false,
            enableHover: false,
            enableTracking: true,
            click: function (api, options) {
                api.simulateClick();
                api.openPopup('googlePlus');
            },
            template: '<i class="fa fa-google-plus "></i> Google',
            url: 'http://demos.creative-tim.com/material-kit-pro/presentation.html'
        });
    });

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-46172202-1']);
_gaq.push(['_trackPageview']);

(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol
        ? 'https://ssl'
        : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s
        .parentNode
        .insertBefore(ga, s);
})();

// Facebook Pixel Code Don't Delete
!function (f, b, e, v, n, t, s) {
    if (f.fbq) 
        return;
    n = f.fbq = function () {
        n.callMethod
            ? n
                .callMethod
                .apply(n, arguments)
            : n
                .queue
                .push(arguments)
    };
    if (!f._fbq) 
        f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s
        .parentNode
        .insertBefore(t, s)
}(window, document, 'script', '//connect.facebook.net/en_US/fbevents.js');

try {
    fbq('init', '111649226022273');
    fbq('track', "PageView ");

} catch (err) {
    console.log('Facebook Track Error:', err);
}