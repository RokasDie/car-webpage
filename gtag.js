// Global site tag (gtag.js) - Google Analytics 


  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131749913-1');
  //conversion of contact form adwords
  gtag('config', 'AW-771972095');

  function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-771972095/zFqfCK3W15IBEP-3jfAC',
        'event_callback': callback
    });
    return false;
  }
  //phone call conversion
  gtag('config', 'AW-771972095/ZdUrCMDa15IBEP-3jfAC', {
        'phone_conversion_number': '+37068845247'
      });

