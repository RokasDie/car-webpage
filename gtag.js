window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-131658868-1');
  gtag('config', 'AW-771972095');

function gtag_report_conversion(url) {
    var callback = function () {
      if (typeof(url) != 'undefined') {
        window.location = url;
      }
    };
    gtag('event', 'conversion', {
        'send_to': 'AW-771972095/zZbfCNqXxZIBEP-3jfAC',
        'event_callback': callback
    });
    return false;
  }

  