export const example = {
  "captchaResult": "CAPTCHA_NOT_NEEDED",
  "kind": "pagespeedonline#result",
  "id": "https://softteco.co/",
  "loadingExperience": {
    "initial_url": "https://softteco.co/"
  },
  "lighthouseResult": {
    "requestedUrl": "https://softteco.co/",
    "finalUrl": "https://softteco.co/",
    "mainDocumentUrl": "https://softteco.co/",
    "finalDisplayedUrl": "https://softteco.co/",
    "lighthouseVersion": "10.0.2",
    "userAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/111.0.5563.64 Safari/537.36",
    "fetchTime": "2023-03-27T13:13:38.264Z",
    "environment": {
      "networkUserAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
      "hostUserAgent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/111.0.5563.64 Safari/537.36",
      "benchmarkIndex": 1454.5
    },
    "runWarnings": [],
    "configSettings": {
      "emulatedFormFactor": "desktop",
      "formFactor": "desktop",
      "locale": "en-US",
      "onlyCategories": [
        "performance"
      ],
      "channel": "lr"
    },
    "audits": {
      "legacy-javascript": {
        "id": "legacy-javascript",
        "title": "Avoid serving legacy JavaScript to modern browsers",
        "description": "Polyfills and transforms enable legacy browsers to use new JavaScript features. However, many aren't necessary for modern browsers. For your bundled JavaScript, adopt a modern script deployment strategy using module/nomodule feature detection to reduce the amount of code shipped to modern browsers, while retaining support for legacy browsers. [Learn how to use modern JavaScript](https://web.dev/publish-modern-javascript/)",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 0 KiB",
        "details": {
          "items": [
            {
              "subItems": {
                "items": [
                  {
                    "signal": "@babel/plugin-transform-classes",
                    "location": {
                      "url": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                      "type": "source-location",
                      "line": 0,
                      "urlProvider": "network",
                      "column": 654
                    }
                  }
                ],
                "type": "subitems"
              },
              "wastedBytes": 64,
              "totalBytes": 0,
              "url": "https://snap.licdn.com/li.lms-analytics/insight.min.js"
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "signal": "@babel/plugin-transform-classes",
                    "location": {
                      "line": 1,
                      "type": "source-location",
                      "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
                      "urlProvider": "network",
                      "column": 50939,
                      "original": {
                        "line": 29,
                        "file": "../node_modules/react-animated-css/lib/index.js",
                        "column": 112
                      }
                    }
                  }
                ]
              },
              "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
              "wastedBytes": 53,
              "totalBytes": 0
            }
          ],
          "overallSavingsMs": 0,
          "headings": [
            {
              "valueType": "url",
              "subItemsHeading": {
                "valueType": "source-location",
                "key": "location"
              },
              "label": "URL",
              "key": "url"
            },
            {
              "subItemsHeading": {
                "key": "signal"
              },
              "key": null,
              "valueType": "code"
            },
            {
              "label": "Potential Savings",
              "key": "wastedBytes",
              "valueType": "bytes"
            }
          ],
          "overallSavingsBytes": 117,
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "uses-text-compression": {
        "id": "uses-text-compression",
        "title": "Enable text compression",
        "description": "Text-based resources should be served with compression (gzip, deflate or brotli) to minimize total network bytes. [Learn more about text compression](https://developer.chrome.com/docs/lighthouse/performance/uses-text-compression/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "headings": [],
          "overallSavingsMs": 0,
          "items": [],
          "overallSavingsBytes": 0,
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "redirects": {
        "id": "redirects",
        "title": "Avoid multiple page redirects",
        "description": "Redirects introduce additional delays before the page can be loaded. [Learn how to avoid page redirects](https://developer.chrome.com/docs/lighthouse/performance/redirects/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "items": [],
          "type": "opportunity",
          "overallSavingsMs": 0,
          "headings": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "dom-size": {
        "id": "dom-size",
        "title": "Avoids an excessive DOM size",
        "description": "A large DOM will increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn how to avoid an excessive DOM size](https://developer.chrome.com/docs/lighthouse/performance/dom-size/).",
        "score": 0.99,
        "scoreDisplayMode": "numeric",
        "displayValue": "530 elements",
        "details": {
          "headings": [
            {
              "valueType": "text",
              "key": "statistic",
              "label": "Statistic"
            },
            {
              "label": "Element",
              "key": "node",
              "valueType": "node"
            },
            {
              "valueType": "numeric",
              "key": "value",
              "label": "Value"
            }
          ],
          "type": "table",
          "items": [
            {
              "statistic": "Total DOM Elements",
              "value": {
                "value": 530,
                "type": "numeric",
                "granularity": 1
              }
            },
            {
              "statistic": "Maximum DOM Depth",
              "node": {
                "lhId": "1-68-SPAN",
                "path": "1,HTML,1,BODY,0,DIV,4,DIV,0,DIV,1,DIV,0,DIV,0,UL,0,LI,0,DIV,1,UL,0,LI,0,HEADER,0,SPAN",
                "boundingRect": {
                  "height": 60,
                  "left": 50,
                  "right": 110,
                  "top": 3140,
                  "width": 60,
                  "bottom": 3200
                },
                "nodeLabel": "ul.sc-jJEJSO \u003e li.sc-ezrdKe \u003e header.sc-bYEvPH \u003e span.sc-kLgntA",
                "type": "node",
                "selector": "ul.sc-jJEJSO \u003e li.sc-ezrdKe \u003e header.sc-bYEvPH \u003e span.sc-kLgntA",
                "snippet": "\u003cspan class=\"sc-kLgntA APvzc project-discovery\"\u003e"
              },
              "value": {
                "granularity": 1,
                "type": "numeric",
                "value": 13
              }
            },
            {
              "statistic": "Maximum Child Elements",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL",
                "selector": "div.sc-citwmv \u003e div.sc-hBEYos \u003e div.react-multi-carousel-list \u003e ul.react-multi-carousel-track",
                "snippet": "\u003cul class=\"react-multi-carousel-track \" style=\"transition: all 3s linear 0s; overflow: unset;\"\u003e",
                "lhId": "1-89-UL",
                "boundingRect": {
                  "bottom": 4245,
                  "top": 4118,
                  "right": 4953,
                  "height": 127,
                  "width": 8370,
                  "left": -3417
                },
                "type": "node",
                "nodeLabel": "ISO 27001"
              },
              "value": {
                "granularity": 1,
                "type": "numeric",
                "value": 31
              }
            }
          ]
        },
        "numericValue": 530,
        "numericUnit": "element"
      },
      "network-requests": {
        "id": "network-requests",
        "title": "Network Requests",
        "description": "Lists the network requests that were made during page load.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "table",
          "headings": [
            {
              "valueType": "url",
              "label": "URL",
              "key": "url"
            },
            {
              "valueType": "text",
              "key": "protocol",
              "label": "Protocol"
            },
            {
              "label": "Network Request Time",
              "granularity": 1,
              "valueType": "ms",
              "key": "networkRequestTime"
            },
            {
              "granularity": 1,
              "key": "networkEndTime",
              "label": "Network End Time",
              "valueType": "ms"
            },
            {
              "valueType": "bytes",
              "label": "Transfer Size",
              "granularity": 1,
              "key": "transferSize",
              "displayUnit": "kb"
            },
            {
              "key": "resourceSize",
              "label": "Resource Size",
              "displayUnit": "kb",
              "valueType": "bytes",
              "granularity": 1
            },
            {
              "label": "Status Code",
              "valueType": "text",
              "key": "statusCode"
            },
            {
              "label": "MIME Type",
              "valueType": "text",
              "key": "mimeType"
            },
            {
              "key": "resourceType",
              "label": "Resource Type",
              "valueType": "text"
            }
          ],
          "debugData": {
            "networkStartTimeTs": 214010519866.99997,
            "type": "debugdata"
          },
          "items": [
            {
              "rendererStartTime": 0,
              "url": "https://softteco.co/",
              "networkRequestTime": 0.97800001502037048,
              "experimentalFromMainFrame": true,
              "mimeType": "text/html",
              "finished": true,
              "networkEndTime": 57.179000020027161,
              "resourceSize": 3989,
              "protocol": "http/1.1",
              "statusCode": 200,
              "priority": "VeryHigh",
              "transferSize": 2138,
              "resourceType": "Document"
            },
            {
              "url": "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
              "protocol": "h2",
              "mimeType": "text/css",
              "resourceSize": 52789,
              "resourceType": "Stylesheet",
              "statusCode": 200,
              "transferSize": 4301,
              "networkEndTime": 79.276000022888184,
              "priority": "VeryHigh",
              "rendererStartTime": 62.841000020504,
              "networkRequestTime": 64.43299999833107,
              "finished": true,
              "experimentalFromMainFrame": true
            },
            {
              "statusCode": 200,
              "rendererStartTime": 63.188000023365021,
              "url": "https://softteco.co/static/css/2.81198f32.chunk.css",
              "mimeType": "text/css",
              "priority": "VeryHigh",
              "resourceType": "Stylesheet",
              "resourceSize": 2278,
              "finished": true,
              "networkEndTime": 169.3570000231266,
              "experimentalFromMainFrame": true,
              "protocol": "http/1.1",
              "transferSize": 1137,
              "networkRequestTime": 65.345000028610229
            },
            {
              "networkRequestTime": 65.459000021219254,
              "experimentalFromMainFrame": true,
              "priority": "VeryHigh",
              "mimeType": "text/css",
              "protocol": "http/1.1",
              "resourceSize": 756,
              "resourceType": "Stylesheet",
              "statusCode": 200,
              "rendererStartTime": 63.339000016450882,
              "transferSize": 772,
              "finished": true,
              "networkEndTime": 101.92200002074242,
              "url": "https://softteco.co/static/css/main.b33a723b.chunk.css"
            },
            {
              "rendererStartTime": 63.503000020980835,
              "url": "https://www.googletagmanager.com/gtag/js?id=G-2HTJSVEM09",
              "experimentalFromMainFrame": true,
              "networkEndTime": 97.401000022888184,
              "statusCode": 200,
              "resourceSize": 178663,
              "resourceType": "Script",
              "protocol": "h2",
              "networkRequestTime": 84.318000018596649,
              "transferSize": 67170,
              "mimeType": "application/javascript",
              "finished": true,
              "priority": "Low"
            },
            {
              "resourceType": "Script",
              "resourceSize": 257199,
              "protocol": "http/1.1",
              "networkEndTime": 150.04900002479553,
              "experimentalFromMainFrame": true,
              "finished": true,
              "statusCode": 200,
              "rendererStartTime": 63.599999994039536,
              "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
              "networkRequestTime": 65.571000039577484,
              "mimeType": "application/javascript",
              "transferSize": 82182,
              "priority": "High"
            },
            {
              "resourceSize": 83396,
              "resourceType": "Script",
              "url": "https://softteco.co/static/js/main.59777189.chunk.js",
              "experimentalFromMainFrame": true,
              "networkRequestTime": 65.682000041008,
              "transferSize": 22621,
              "protocol": "http/1.1",
              "mimeType": "application/javascript",
              "statusCode": 200,
              "priority": "High",
              "networkEndTime": 2119.9260000288486,
              "finished": true,
              "rendererStartTime": 63.956000000238419
            },
            {
              "transferSize": 74656,
              "priority": "Low",
              "mimeType": "application/javascript",
              "networkEndTime": 230.70900002121925,
              "rendererStartTime": 83.214000016450882,
              "statusCode": 200,
              "protocol": "h2",
              "networkRequestTime": 84.457000017166138,
              "resourceType": "Script",
              "finished": true,
              "url": "https://mc.yandex.ru/metrika/tag.js",
              "experimentalFromMainFrame": true,
              "resourceSize": 216452
            },
            {
              "finished": true,
              "resourceSize": 0,
              "networkRequestTime": 190.61399999260902,
              "resourceType": "Ping",
              "transferSize": 0,
              "experimentalFromMainFrame": true,
              "priority": "VeryLow",
              "rendererStartTime": 190.61399999260902,
              "statusCode": -1,
              "networkEndTime": 200.06000000238419,
              "url": "https://region1.analytics.google.com/g/collect?v=2&tid=G-2HTJSVEM09&gtm=45je33m0&_p=2008649827&_gaz=1&cid=1893330443.1679922820&ul=en-us&sr=800x600&uaa=x86&uab=&uafvl=&uamb=0&uam=&uap=macOS&uapv=10.15.7&uaw=0&_s=1&sid=1679922819&sct=1&seg=0&dl=https%3A%2F%2Fsoftteco.co%2F&dt=SoftTeco&en=page_view&_fv=1&_nsi=1&_ss=1&_ee=1"
            },
            {
              "resourceType": "Ping",
              "networkEndTime": 200.25500002503395,
              "experimentalFromMainFrame": true,
              "priority": "VeryLow",
              "finished": true,
              "url": "https://stats.g.doubleclick.net/g/collect?v=2&tid=G-2HTJSVEM09&cid=1893330443.1679922820&gtm=45je33m0&aip=1",
              "resourceSize": 0,
              "statusCode": -1,
              "networkRequestTime": 191.47400000691414,
              "transferSize": 0,
              "rendererStartTime": 191.47400000691414
            },
            {
              "resourceType": "Script",
              "protocol": "h2",
              "rendererStartTime": 194.58700001239777,
              "resourceSize": 115151,
              "experimentalFromMainFrame": true,
              "statusCode": 200,
              "transferSize": 45407,
              "url": "https://www.googletagmanager.com/gtag/js?id=UA-11098259-7&l=dataLayer&cx=c",
              "finished": true,
              "priority": "Low",
              "networkRequestTime": 196.03800001740456,
              "mimeType": "application/javascript",
              "networkEndTime": 209.67300000786781
            },
            {
              "mimeType": "image/gif",
              "experimentalFromMainFrame": true,
              "url": "https://www.google.be/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-2HTJSVEM09&cid=1893330443.1679922820&gtm=45je33m0&aip=1&z=1473847969",
              "finished": true,
              "protocol": "h2",
              "statusCode": 200,
              "networkRequestTime": 196.78400000929832,
              "networkEndTime": 222.60900002717972,
              "resourceType": "Image",
              "resourceSize": 42,
              "priority": "Low",
              "transferSize": 557,
              "rendererStartTime": 195.0450000166893
            },
            {
              "resourceType": "Script",
              "url": "https://embed.tawk.to/60bf171add60a20abbe52998/1f7l74gme",
              "networkEndTime": 224.57600000500679,
              "rendererStartTime": 200.90500003099442,
              "experimentalFromMainFrame": true,
              "resourceSize": 0,
              "statusCode": -1,
              "networkRequestTime": 200.90500003099442,
              "finished": true,
              "transferSize": 0,
              "priority": "Low"
            },
            {
              "transferSize": 5095,
              "experimentalFromMainFrame": true,
              "networkEndTime": 212.88300001621246,
              "url": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
              "resourceSize": 13352,
              "finished": true,
              "protocol": "h2",
              "mimeType": "application/x-javascript",
              "networkRequestTime": 202.78300002217293,
              "statusCode": 200,
              "resourceType": "Script",
              "priority": "Low",
              "rendererStartTime": 201.58200001716614
            },
            {
              "resourceType": "XHR",
              "statusCode": 200,
              "mimeType": "application/json",
              "transferSize": 467,
              "experimentalFromMainFrame": true,
              "finished": true,
              "networkRequestTime": 222.51600003242493,
              "url": "https://cdn.linkedin.oribi.io/partner/519972/domain/softteco.co/token",
              "networkEndTime": 248.69300001859665,
              "resourceSize": 36,
              "protocol": "h2",
              "rendererStartTime": 219.11599999666214,
              "priority": "High"
            },
            {
              "protocol": "http/1.1",
              "resourceSize": 0,
              "url": "https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=519972&time=1679922819581&url=https%3A%2F%2Fsoftteco.co%2F",
              "finished": true,
              "networkRequestTime": 227.55100002884865,
              "rendererStartTime": 221.89500001072884,
              "transferSize": 1046,
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "mimeType": "text/plain",
              "networkEndTime": 332.4360000193119,
              "statusCode": 302
            },
            {
              "statusCode": 200,
              "resourceType": "Script",
              "transferSize": 20594,
              "protocol": "h2",
              "rendererStartTime": 242.58300003409386,
              "resourceSize": 50234,
              "finished": true,
              "mimeType": "text/javascript",
              "networkEndTime": 247.83500003814697,
              "experimentalFromMainFrame": true,
              "url": "https://www.google-analytics.com/analytics.js",
              "networkRequestTime": 243.28700000047684,
              "priority": "Low"
            },
            {
              "experimentalFromMainFrame": true,
              "priority": "High",
              "networkRequestTime": 280.65000000596046,
              "protocol": "h2",
              "finished": true,
              "mimeType": "text/plain",
              "resourceSize": 2,
              "resourceType": "XHR",
              "transferSize": 494,
              "url": "https://www.google-analytics.com/j/collect?v=1&_v=j99&a=2008649827&t=pageview&_s=1&dl=https%3A%2F%2Fsoftteco.co%2F&ul=en-us&de=UTF-8&dt=SoftTeco&sd=24-bit&sr=800x600&vp=1350x940&je=0&_u=YADAAUABAAAAACAAI~&jid=894767124&gjid=2109864478&cid=1893330443.1679922820&tid=UA-11098259-7&_gid=1163664870.1679922820&_r=1&gtm=457e33m0&jsscut=1&z=774394717",
              "rendererStartTime": 279.92200002074242,
              "networkEndTime": 284.7940000295639,
              "statusCode": 200
            },
            {
              "rendererStartTime": 318.0120000243187,
              "finished": true,
              "priority": "Low",
              "networkEndTime": 368.93100002408028,
              "transferSize": 527,
              "experimentalFromMainFrame": true,
              "statusCode": 302,
              "mimeType": "text/plain",
              "networkRequestTime": 318.59500002861023,
              "protocol": "http/1.1",
              "resourceSize": 0,
              "url": "https://mc.yandex.com/sync_cookie_image_check"
            },
            {
              "protocol": "h2",
              "finished": true,
              "url": "https://stats.g.doubleclick.net/j/collect?t=dc&aip=1&_r=3&v=1&_v=j99&tid=UA-11098259-7&cid=1893330443.1679922820&jid=894767124&gjid=2109864478&_gid=1163664870.1679922820&_u=YADAAUAAAAAAACAAI~&z=1045771501",
              "resourceSize": 4,
              "transferSize": 569,
              "networkRequestTime": 321.70700001716614,
              "priority": "High",
              "networkEndTime": 327.63000002503395,
              "statusCode": 200,
              "rendererStartTime": 320.49800002574921,
              "mimeType": "text/plain",
              "experimentalFromMainFrame": true,
              "resourceType": "XHR"
            },
            {
              "priority": "Low",
              "transferSize": 557,
              "resourceType": "Image",
              "networkEndTime": 364.4360000193119,
              "url": "https://www.google.com/ads/ga-audiences?t=sr&aip=1&_r=4&slf_rd=1&v=1&_v=j99&tid=UA-11098259-7&cid=1893330443.1679922820&jid=894767124&_u=YADAAUAAAAAAACAAI~&z=215696799",
              "finished": true,
              "protocol": "h2",
              "mimeType": "image/gif",
              "statusCode": 200,
              "resourceSize": 42,
              "rendererStartTime": 330.58300000429153,
              "networkRequestTime": 331.49600002169609,
              "experimentalFromMainFrame": true
            },
            {
              "resourceType": "Image",
              "rendererStartTime": 330.82900002598763,
              "experimentalFromMainFrame": true,
              "mimeType": "image/gif",
              "finished": true,
              "url": "https://www.google.be/ads/ga-audiences?t=sr&aip=1&_r=4&slf_rd=1&v=1&_v=j99&tid=UA-11098259-7&cid=1893330443.1679922820&jid=894767124&_u=YADAAUAAAAAAACAAI~&z=215696799",
              "resourceSize": 42,
              "networkRequestTime": 334.29900002479553,
              "priority": "Low",
              "transferSize": 557,
              "statusCode": 200,
              "networkEndTime": 360.20700001716614,
              "protocol": "h2"
            },
            {
              "priority": "Low",
              "rendererStartTime": 332.4360000193119,
              "experimentalFromMainFrame": true,
              "networkEndTime": 432.29699999094009,
              "mimeType": "text/plain",
              "statusCode": 302,
              "transferSize": 1651,
              "protocol": "http/1.1",
              "networkRequestTime": 334.54100003838539,
              "url": "https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=519972&time=1679922819581&url=https%3A%2F%2Fsoftteco.co%2F&cookiesTest=true",
              "resourceSize": 0,
              "finished": true
            },
            {
              "mimeType": "text/plain",
              "resourceSize": 0,
              "url": "https://mc.yandex.ru/sync_cookie_image_start?redirect_domain=mc.yandex.com&token=9955.ipF5AkHvxWrTMAHq8dm5GoykE0ahFCCSOnociNNE6LbglJM1w1Oh4__iJaTdzJzs.QdxTBtUOWbXlyh9K3Ir-e6nqM-8%2C",
              "priority": "Low",
              "rendererStartTime": 368.93100002408028,
              "networkEndTime": 425.36100000143051,
              "experimentalFromMainFrame": true,
              "protocol": "http/1.1",
              "statusCode": 302,
              "transferSize": 544,
              "networkRequestTime": 369.46300002932549,
              "finished": true
            },
            {
              "finished": true,
              "networkEndTime": 481.65500003099442,
              "rendererStartTime": 425.36100000143051,
              "mimeType": "image/gif",
              "url": "https://mc.yandex.com/sync_cookie_image_decide?token=9955.0izHhqGoTuPfZY32YNdUeHcLkpvPSsrDTRysk3efx1bdBYDDE_NqAk31m1f555BCo2BkFg6q3okhzNBY8lnFrdIifedzE78Da4ph_LfXx6A%2C._2VOhdi8mvt5G25ou-UrtLWPoqQ%2C",
              "resourceSize": 43,
              "statusCode": 200,
              "transferSize": 217,
              "resourceType": "Image",
              "protocol": "h2",
              "networkRequestTime": 425.847000002861,
              "experimentalFromMainFrame": true,
              "priority": "Low"
            },
            {
              "networkRequestTime": 432.74000003933907,
              "protocol": "http/1.1",
              "url": "https://www.linkedin.com/px/li_sync?redirect=https%3A%2F%2Fpx.ads.linkedin.com%2Fcollect%3Fv%3D2%26fmt%3Djs%26pid%3D519972%26time%3D1679922819581%26url%3Dhttps%253A%252F%252Fsoftteco.co%252F%26cookiesTest%3Dtrue%26liSync%3Dtrue",
              "finished": true,
              "experimentalFromMainFrame": true,
              "networkEndTime": 537.68300002813339,
              "statusCode": 302,
              "transferSize": 2315,
              "rendererStartTime": 432.29699999094009,
              "priority": "Low",
              "mimeType": "text/plain",
              "resourceSize": 0
            },
            {
              "finished": true,
              "statusCode": 302,
              "priority": "High",
              "resourceSize": 0,
              "networkRequestTime": 485.48700001835823,
              "url": "https://mc.yandex.com/watch/76950112?wmode=7&page-url=https%3A%2F%2Fsoftteco.co%2F&charset=utf-8&browser-info=pv%3A1%3Avf%3A3ue65zhww2f2bruuawfi73%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aen-US%3Av%3A991%3Acn%3A1%3Adp%3A0%3Als%3A1527449993698%3Ahid%3A260205045%3Az%3A-420%3Ai%3A20230327061339%3Aet%3A1679922820%3Ac%3A1%3Arn%3A755559473%3Arqn%3A1%3Au%3A1679922820242257771%3Aw%3A1350x940%3As%3A800x600x24%3Ask%3A1%3Awv%3A2%3Ads%3A0%2C0%2C57%2C0%2C0%2C0%2C%2C%2C%2C%2C%2C%2C%3Aco%3A0%3Antf%3A1%3Ans%3A1679922819359%3Arqnl%3A1%3Ast%3A1679922820%3At%3ASoftTeco&t=gdpr(14)clc(0-0-0)rqnt(1)aw(1)ti(2)",
              "protocol": "http/1.1",
              "rendererStartTime": 484.85000002384186,
              "transferSize": 2056,
              "mimeType": "text/plain",
              "networkEndTime": 548.84900003671646,
              "experimentalFromMainFrame": true
            },
            {
              "priority": "Low",
              "rendererStartTime": 537.68300002813339,
              "experimentalFromMainFrame": true,
              "mimeType": "application/javascript",
              "networkRequestTime": 538.36200001835823,
              "networkEndTime": 635.92900002002716,
              "finished": true,
              "resourceType": "Image",
              "url": "https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=519972&time=1679922819581&url=https%3A%2F%2Fsoftteco.co%2F&cookiesTest=true&liSync=true",
              "statusCode": 200,
              "transferSize": 956,
              "protocol": "h2",
              "resourceSize": 0
            },
            {
              "priority": "High",
              "finished": true,
              "statusCode": 200,
              "transferSize": 1221,
              "experimentalFromMainFrame": true,
              "url": "https://mc.yandex.com/watch/76950112/1?wmode=7&page-url=https%3A%2F%2Fsoftteco.co%2F&charset=utf-8&browser-info=pv%3A1%3Avf%3A3ue65zhww2f2bruuawfi73%3Afu%3A0%3Aen%3Autf-8%3Ala%3Aen-US%3Av%3A991%3Acn%3A1%3Adp%3A0%3Als%3A1527449993698%3Ahid%3A260205045%3Az%3A-420%3Ai%3A20230327061339%3Aet%3A1679922820%3Ac%3A1%3Arn%3A755559473%3Arqn%3A1%3Au%3A1679922820242257771%3Aw%3A1350x940%3As%3A800x600x24%3Ask%3A1%3Awv%3A2%3Ads%3A0%2C0%2C57%2C0%2C0%2C0%2C%2C%2C%2C%2C%2C%2C%3Aco%3A0%3Antf%3A1%3Ans%3A1679922819359%3Arqnl%3A1%3Ast%3A1679922820%3At%3ASoftTeco&t=gdpr%2814%29clc%280-0-0%29rqnt%281%29aw%281%29ti%282%29",
              "protocol": "h2",
              "mimeType": "application/json",
              "resourceSize": 435,
              "networkEndTime": 602.80099999904633,
              "rendererStartTime": 548.84900003671646,
              "resourceType": "XHR",
              "networkRequestTime": 549.18000000715256
            },
            {
              "url": "https://mc.yandex.com/sync_cookie_image_check_secondary",
              "protocol": "http/1.1",
              "resourceSize": 0,
              "experimentalFromMainFrame": true,
              "rendererStartTime": 605.4360000193119,
              "networkEndTime": 667.80600002408028,
              "transferSize": 524,
              "statusCode": 302,
              "finished": true,
              "mimeType": "text/plain",
              "priority": "Low",
              "networkRequestTime": 606.18500003218651
            },
            {
              "experimentalFromMainFrame": true,
              "url": "https://mc.yandex.ru/sync_cookie_image_start_secondary?redirect_domain=mc.yandex.com&token=9955.n80wFYeExMgB5AUzDYX0PEhXumGobbJprYIhCyd7Ic7ZuseYva6tp-fBwum-iBDV.IfYFnYiCcA8_0n_76Y-K39MopN4%2C",
              "mimeType": "text/plain",
              "resourceSize": 0,
              "transferSize": 540,
              "rendererStartTime": 667.80600002408028,
              "statusCode": 302,
              "networkRequestTime": 668.085000038147,
              "finished": true,
              "priority": "Low",
              "protocol": "http/1.1",
              "networkEndTime": 726.330000013113
            },
            {
              "networkRequestTime": 726.69700002670288,
              "experimentalFromMainFrame": true,
              "mimeType": "image/gif",
              "statusCode": 200,
              "rendererStartTime": 726.330000013113,
              "networkEndTime": 788.5440000295639,
              "resourceType": "Image",
              "priority": "Low",
              "transferSize": 217,
              "finished": true,
              "protocol": "h2",
              "resourceSize": 43,
              "url": "https://mc.yandex.com/sync_cookie_image_decide_secondary?token=9955.T0KRv6meJwLMrRHjiHI5zQ-bWJ0qYERrrWrGygeMPgfOxitfbktA2Ugmg4pPdXPCm9d3MWq-o7w9VXe0k9MGOoXQRP7r4Z3QrHIa4sksFDM%2C.p6RYOocvj8LEyXKK9eHxsg2CZNU%2C"
            },
            {
              "url": "https://softteco.co/static/media/home-bg-lg.7abfce17.svg",
              "resourceSize": 5332,
              "mimeType": "image/svg+xml",
              "transferSize": 5623,
              "statusCode": 200,
              "resourceType": "Image",
              "rendererStartTime": 2307.6680000126362,
              "finished": true,
              "networkRequestTime": 2313.2170000374317,
              "priority": "High",
              "experimentalFromMainFrame": true,
              "networkEndTime": 2373.5250000059605,
              "protocol": "http/1.1"
            },
            {
              "rendererStartTime": 2308.5929999947548,
              "resourceSize": 239096,
              "transferSize": 239387,
              "url": "https://softteco.co/static/media/via.d87dbe6c.jpg",
              "mimeType": "image/jpeg",
              "statusCode": 200,
              "networkEndTime": 2403.483000010252,
              "protocol": "http/1.1",
              "networkRequestTime": 2313.3180000185966,
              "finished": true,
              "resourceType": "Image",
              "priority": "Low",
              "experimentalFromMainFrame": true
            },
            {
              "rendererStartTime": 2309.4820000231266,
              "url": "https://softteco.co/static/media/bridges.3b497c49.jpg",
              "mimeType": "image/jpeg",
              "experimentalFromMainFrame": true,
              "networkRequestTime": 2313.375,
              "resourceType": "Image",
              "finished": true,
              "protocol": "http/1.1",
              "statusCode": 200,
              "priority": "Low",
              "transferSize": 268185,
              "resourceSize": 267894,
              "networkEndTime": 2407.016999989748
            },
            {
              "priority": "Low",
              "transferSize": 238424,
              "networkRequestTime": 2313.4290000200272,
              "resourceType": "Image",
              "statusCode": 200,
              "mimeType": "image/jpeg",
              "url": "https://softteco.co/static/media/bubcon.e0ef8d9c.jpg",
              "rendererStartTime": 2310.0649999976158,
              "finished": true,
              "experimentalFromMainFrame": true,
              "networkEndTime": 2381.393000036478,
              "protocol": "http/1.1",
              "resourceSize": 238134
            },
            {
              "mimeType": "image/jpeg",
              "url": "https://softteco.co/static/media/bsb-bank.36738990.jpg",
              "transferSize": 199090,
              "finished": true,
              "protocol": "http/1.1",
              "resourceSize": 198799,
              "rendererStartTime": 2310.9860000014305,
              "networkRequestTime": 2315.3220000267029,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "resourceType": "Image",
              "networkEndTime": 3540.0470000207424,
              "priority": "Low"
            },
            {
              "url": "https://softteco.co/static/media/evoz.6b89ca34.jpg",
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "protocol": "http/1.1",
              "resourceType": "Image",
              "transferSize": 185706,
              "networkRequestTime": 2315.4580000042915,
              "finished": true,
              "resourceSize": 185415,
              "networkEndTime": 2396.2070000171661,
              "mimeType": "image/jpeg",
              "rendererStartTime": 2311.4960000216961
            },
            {
              "protocol": "http/1.1",
              "resourceType": "Image",
              "networkRequestTime": 2315.5320000052452,
              "finished": true,
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "resourceSize": 303286,
              "mimeType": "image/jpeg",
              "statusCode": 200,
              "transferSize": 303576,
              "url": "https://softteco.co/static/media/blueprint.4ef0da2b.jpg",
              "rendererStartTime": 2311.9259999990463,
              "networkEndTime": 2388.091000020504
            },
            {
              "finished": true,
              "url": "https://softteco.co/static/media/footer-bg.b8a5eab1.svg",
              "rendererStartTime": 2313.1610000133514,
              "resourceSize": 4003,
              "mimeType": "image/svg+xml",
              "protocol": "http/1.1",
              "priority": "Low",
              "transferSize": 4293,
              "experimentalFromMainFrame": true,
              "networkRequestTime": 2315.6130000352859,
              "statusCode": 200,
              "resourceType": "Image",
              "networkEndTime": 2370.0980000197887
            },
            {
              "priority": "VeryHigh",
              "networkRequestTime": 2315.688000023365,
              "statusCode": 200,
              "transferSize": 288230,
              "resourceType": "Font",
              "resourceSize": 287928,
              "networkEndTime": 2546.1070000231266,
              "rendererStartTime": 2314.2870000302792,
              "url": "https://softteco.co/static/media/Inter-Regular.9cd7588f.ttf",
              "mimeType": "application/font-sfnt",
              "finished": true,
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true
            },
            {
              "networkRequestTime": 2316.4900000095367,
              "resourceSize": 293448,
              "statusCode": 200,
              "networkEndTime": 2412.1140000224113,
              "resourceType": "Font",
              "priority": "VeryHigh",
              "url": "https://softteco.co/static/media/Inter-Bold.3e3cb905.ttf",
              "mimeType": "application/font-sfnt",
              "protocol": "http/1.1",
              "rendererStartTime": 2314.5900000035763,
              "finished": true,
              "experimentalFromMainFrame": true,
              "transferSize": 293750
            },
            {
              "rendererStartTime": 2314.8600000143051,
              "protocol": "http/1.1",
              "transferSize": 292442,
              "resourceSize": 292140,
              "experimentalFromMainFrame": true,
              "finished": true,
              "url": "https://softteco.co/static/media/Inter-Medium.18b8c68e.ttf",
              "statusCode": 200,
              "resourceType": "Font",
              "mimeType": "application/font-sfnt",
              "networkEndTime": 2408.1599999964237,
              "priority": "VeryHigh",
              "networkRequestTime": 2316.7510000169277
            },
            {
              "mimeType": "application/font-sfnt",
              "finished": true,
              "statusCode": 200,
              "networkRequestTime": 2318.511000007391,
              "protocol": "http/1.1",
              "resourceSize": 293028,
              "priority": "VeryHigh",
              "experimentalFromMainFrame": true,
              "transferSize": 293330,
              "rendererStartTime": 2315.5870000123978,
              "resourceType": "Font",
              "networkEndTime": 2404.3330000340939,
              "url": "https://softteco.co/static/media/Inter-SemiBold.c6588ec1.ttf"
            },
            {
              "resourceSize": 294072,
              "experimentalFromMainFrame": true,
              "transferSize": 294373,
              "resourceType": "Font",
              "finished": true,
              "url": "https://softteco.co/static/media/Inter-ExtraBold.55189ddf.ttf",
              "statusCode": 200,
              "protocol": "http/1.1",
              "networkEndTime": 3553.9259999990463,
              "rendererStartTime": 2316.6330000162125,
              "priority": "VeryHigh",
              "mimeType": "application/font-sfnt",
              "networkRequestTime": 2318.6090000271797
            },
            {
              "transferSize": 41284,
              "resourceSize": 40993,
              "experimentalFromMainFrame": true,
              "mimeType": "image/svg+xml",
              "url": "https://softteco.co/static/media/icons-sprite.58d296a2.svg",
              "protocol": "http/1.1",
              "networkEndTime": 3531.4730000197887,
              "finished": true,
              "statusCode": 200,
              "rendererStartTime": 2363.6150000095367,
              "networkRequestTime": 2366.3109999895096,
              "priority": "Low",
              "resourceType": "Image"
            },
            {
              "rendererStartTime": 2413.5120000243187,
              "protocol": "http/1.1",
              "mimeType": "image/svg+xml",
              "networkRequestTime": 2417.136000007391,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "networkEndTime": 3552.3640000224113,
              "resourceType": "Image",
              "resourceSize": 7340,
              "url": "https://softteco.co/static/media/logo-lg.544bb045.svg",
              "finished": true,
              "transferSize": 7631,
              "priority": "High"
            },
            {
              "networkRequestTime": 2417.3030000030994,
              "protocol": "http/1.1",
              "networkEndTime": 3520.8290000259876,
              "finished": true,
              "statusCode": 200,
              "resourceSize": 311,
              "resourceType": "Image",
              "mimeType": "image/svg+xml",
              "transferSize": 599,
              "url": "https://softteco.co/static/media/play.bad16803.svg",
              "rendererStartTime": 2413.8910000026226,
              "experimentalFromMainFrame": true,
              "priority": "Low"
            },
            {
              "transferSize": 912,
              "rendererStartTime": 2414.1490000188351,
              "resourceType": "Image",
              "networkRequestTime": 2417.3630000352859,
              "finished": true,
              "mimeType": "image/svg+xml",
              "statusCode": 200,
              "protocol": "http/1.1",
              "networkEndTime": 3516.108000010252,
              "experimentalFromMainFrame": true,
              "resourceSize": 624,
              "priority": "Low",
              "url": "https://softteco.co/static/media/desktop.4a72d18e.svg"
            },
            {
              "rendererStartTime": 2414.3490000069141,
              "resourceSize": 537,
              "resourceType": "Image",
              "transferSize": 826,
              "priority": "Low",
              "protocol": "http/1.1",
              "url": "https://softteco.co/static/media/mobile.58ed46dc.svg",
              "experimentalFromMainFrame": true,
              "networkRequestTime": 2417.4220000207424,
              "mimeType": "image/svg+xml",
              "finished": true,
              "statusCode": 200,
              "networkEndTime": 5515.2529999911785
            },
            {
              "transferSize": 1129,
              "resourceSize": 841,
              "resourceType": "Image",
              "mimeType": "image/svg+xml",
              "networkRequestTime": 2417.4820000231266,
              "rendererStartTime": 2414.5420000255108,
              "finished": true,
              "protocol": "http/1.1",
              "url": "https://softteco.co/static/media/tablet.402273ce.svg",
              "networkEndTime": 3516.4910000264645,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "priority": "Low"
            },
            {
              "mimeType": "image/svg+xml",
              "networkEndTime": 5535.1460000276566,
              "resourceSize": 1105,
              "resourceType": "Image",
              "url": "https://softteco.co/static/media/arrow-down.69158b9b.svg",
              "experimentalFromMainFrame": true,
              "finished": true,
              "transferSize": 1395,
              "rendererStartTime": 2414.921000033617,
              "statusCode": 200,
              "networkRequestTime": 2417.5400000214577,
              "priority": "Low",
              "protocol": "http/1.1"
            },
            {
              "networkEndTime": 3503.977000027895,
              "url": "https://softteco.co/static/media/samsung-lg.38dbb50c.svg",
              "resourceSize": 4133,
              "networkRequestTime": 2417.5990000069141,
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2415.2090000212193,
              "transferSize": 4423,
              "resourceType": "Image",
              "priority": "Low",
              "mimeType": "image/svg+xml",
              "protocol": "http/1.1",
              "finished": true,
              "statusCode": 200
            },
            {
              "networkEndTime": 5559.6650000214577,
              "protocol": "http/1.1",
              "resourceType": "Image",
              "rendererStartTime": 2415.4250000119209,
              "mimeType": "image/svg+xml",
              "experimentalFromMainFrame": true,
              "finished": true,
              "transferSize": 4221,
              "networkRequestTime": 2417.6780000030994,
              "resourceSize": 3931,
              "statusCode": 200,
              "priority": "Low",
              "url": "https://softteco.co/static/media/color-samsung.bda73e2a.svg"
            },
            {
              "mimeType": "image/svg+xml",
              "networkEndTime": 3518.4560000002384,
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2415.6200000345707,
              "resourceSize": 6332,
              "transferSize": 6622,
              "resourceType": "Image",
              "finished": true,
              "url": "https://softteco.co/static/media/evernote-lg.f6d4d2b6.svg",
              "statusCode": 200,
              "protocol": "http/1.1",
              "networkRequestTime": 2417.7400000095367,
              "priority": "Low"
            },
            {
              "rendererStartTime": 2418.8889999985695,
              "networkEndTime": 4516.7590000033379,
              "protocol": "http/1.1",
              "finished": true,
              "networkRequestTime": 2429.1620000302792,
              "resourceType": "Image",
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "transferSize": 6007,
              "url": "https://softteco.co/static/media/color-evernote.004dd8a7.svg",
              "resourceSize": 5716,
              "statusCode": 200,
              "mimeType": "image/svg+xml"
            },
            {
              "rendererStartTime": 2419.2520000040531,
              "resourceSize": 21367,
              "transferSize": 21659,
              "networkEndTime": 5552.41400000453,
              "priority": "Low",
              "url": "https://softteco.co/static/media/the-world-bank-lg.985a539c.svg",
              "mimeType": "image/svg+xml",
              "networkRequestTime": 2429.518000036478,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "protocol": "http/1.1",
              "statusCode": 200,
              "finished": true
            },
            {
              "transferSize": 16657,
              "resourceSize": 16366,
              "priority": "Low",
              "resourceType": "Image",
              "rendererStartTime": 2419.9620000123978,
              "finished": true,
              "mimeType": "image/svg+xml",
              "networkRequestTime": 2429.5920000076294,
              "networkEndTime": 3539.3510000109673,
              "url": "https://softteco.co/static/media/color-the-world-bank.bda29e40.svg",
              "protocol": "http/1.1",
              "statusCode": 200,
              "experimentalFromMainFrame": true
            },
            {
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "mimeType": "image/svg+xml",
              "networkRequestTime": 2429.6720000207424,
              "resourceSize": 7425,
              "resourceType": "Image",
              "protocol": "http/1.1",
              "rendererStartTime": 2420.177000015974,
              "statusCode": 200,
              "finished": true,
              "transferSize": 7716,
              "networkEndTime": 5543.7210000157356,
              "url": "https://softteco.co/static/media/barnes-and-noble-lg.53b685ff.svg"
            },
            {
              "resourceSize": 6571,
              "statusCode": 200,
              "networkRequestTime": 2429.7380000054836,
              "finished": true,
              "transferSize": 6862,
              "resourceType": "Image",
              "networkEndTime": 6551.3340000212193,
              "url": "https://softteco.co/static/media/color-barnes-and-noble.d1014854.svg",
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "mimeType": "image/svg+xml",
              "rendererStartTime": 2420.3780000209808
            },
            {
              "statusCode": 200,
              "mimeType": "image/svg+xml",
              "finished": true,
              "rendererStartTime": 2420.6230000257492,
              "networkRequestTime": 2429.9110000133514,
              "url": "https://softteco.co/static/media/volkswagen-lg.881c5fca.svg",
              "networkEndTime": 5538.8289999961853,
              "priority": "Low",
              "resourceType": "Image",
              "resourceSize": 6577,
              "protocol": "http/1.1",
              "transferSize": 6868,
              "experimentalFromMainFrame": true
            },
            {
              "resourceSize": 6316,
              "networkRequestTime": 2429.9850000143051,
              "networkEndTime": 3516.3290000259876,
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2420.9280000329018,
              "finished": true,
              "url": "https://softteco.co/static/media/color-volkswagen.bceb59fb.svg",
              "transferSize": 6606,
              "statusCode": 200,
              "priority": "Low",
              "mimeType": "image/svg+xml",
              "resourceType": "Image"
            },
            {
              "resourceType": "Image",
              "resourceSize": 48708,
              "rendererStartTime": 2421.1480000019073,
              "experimentalFromMainFrame": true,
              "url": "https://softteco.co/static/media/bsb-bank-lg.342670e0.svg",
              "finished": true,
              "transferSize": 48999,
              "networkRequestTime": 2430.0860000252724,
              "statusCode": 200,
              "priority": "Low",
              "mimeType": "image/svg+xml",
              "networkEndTime": 3532.0680000185966,
              "protocol": "http/1.1"
            },
            {
              "resourceType": "Image",
              "transferSize": 49046,
              "protocol": "http/1.1",
              "networkEndTime": 3551.8640000224113,
              "finished": true,
              "networkRequestTime": 2430.1630000174046,
              "rendererStartTime": 2421.341000020504,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "mimeType": "image/svg+xml",
              "url": "https://softteco.co/static/media/color-bsb-bank.65b31155.svg",
              "resourceSize": 48755,
              "priority": "Low"
            },
            {
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2421.5550000071526,
              "protocol": "http/1.1",
              "transferSize": 8385,
              "finished": true,
              "statusCode": 200,
              "resourceSize": 8095,
              "resourceType": "Image",
              "url": "https://softteco.co/static/media/kinvey-lg.5b4ba0d7.svg",
              "priority": "Low",
              "networkEndTime": 3518.6490000188351,
              "networkRequestTime": 2430.227000027895,
              "mimeType": "image/svg+xml"
            },
            {
              "statusCode": 200,
              "mimeType": "image/svg+xml",
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "resourceSize": 7312,
              "protocol": "http/1.1",
              "url": "https://softteco.co/static/media/color-kinvey.1ec90c80.svg",
              "transferSize": 7602,
              "networkEndTime": 3531.6820000112057,
              "finished": true,
              "rendererStartTime": 2421.7800000011921,
              "networkRequestTime": 2430.3200000226498,
              "resourceType": "Image"
            },
            {
              "statusCode": 200,
              "mimeType": "image/svg+xml",
              "networkEndTime": 6551.6680000126362,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "transferSize": 5075,
              "priority": "Low",
              "rendererStartTime": 2422.0119999945164,
              "networkRequestTime": 2430.4510000050068,
              "finished": true,
              "protocol": "http/1.1",
              "resourceSize": 4784,
              "url": "https://softteco.co/static/media/blueprint-lg.33237f9f.svg"
            },
            {
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "url": "https://softteco.co/static/media/color-blueprint.933f0140.svg",
              "priority": "Low",
              "rendererStartTime": 2422.1990000009537,
              "mimeType": "image/svg+xml",
              "networkEndTime": 6521.93900001049,
              "transferSize": 5076,
              "protocol": "http/1.1",
              "resourceType": "Image",
              "networkRequestTime": 2430.5250000059605,
              "finished": true,
              "resourceSize": 4785
            },
            {
              "rendererStartTime": 2422.40600001812,
              "networkEndTime": 3534.0030000209808,
              "priority": "Low",
              "url": "https://softteco.co/static/media/johnson-and-johnson-lg.bd4d7468.svg",
              "mimeType": "image/svg+xml",
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "finished": true,
              "protocol": "http/1.1",
              "resourceType": "Image",
              "resourceSize": 12275,
              "networkRequestTime": 2430.5860000252724,
              "transferSize": 12566
            },
            {
              "priority": "Low",
              "protocol": "http/1.1",
              "networkRequestTime": 2430.6660000085831,
              "resourceSize": 11696,
              "finished": true,
              "mimeType": "image/svg+xml",
              "url": "https://softteco.co/static/media/color-johnson-and-johnson.8d37d9ec.svg",
              "rendererStartTime": 2422.6250000298023,
              "statusCode": 200,
              "experimentalFromMainFrame": true,
              "transferSize": 11988,
              "networkEndTime": 6559.9839999973774,
              "resourceType": "Image"
            },
            {
              "statusCode": 200,
              "protocol": "http/1.1",
              "mimeType": "image/svg+xml",
              "resourceType": "Image",
              "transferSize": 1322,
              "networkRequestTime": 2430.7360000312328,
              "finished": true,
              "resourceSize": 1033,
              "experimentalFromMainFrame": true,
              "networkEndTime": 3518.2620000243187,
              "priority": "Low",
              "rendererStartTime": 2422.824000030756,
              "url": "https://softteco.co/static/media/file-add.3610d07c.svg"
            },
            {
              "resourceType": "Image",
              "finished": true,
              "rendererStartTime": 2423.1010000109673,
              "url": "https://softteco.co/static/media/linkedin.92d6bbc3.svg",
              "protocol": "http/1.1",
              "statusCode": 200,
              "priority": "Low",
              "experimentalFromMainFrame": true,
              "networkEndTime": 3518.022000014782,
              "transferSize": 1236,
              "networkRequestTime": 2430.9010000228882,
              "resourceSize": 948,
              "mimeType": "image/svg+xml"
            },
            {
              "rendererStartTime": 2423.352000027895,
              "networkRequestTime": 2430.9800000190735,
              "resourceType": "Image",
              "priority": "Low",
              "networkEndTime": 3520.5900000035763,
              "finished": true,
              "mimeType": "image/svg+xml",
              "transferSize": 2048,
              "resourceSize": 1759,
              "url": "https://softteco.co/static/media/twitter.6bf9ef74.svg",
              "statusCode": 200,
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true
            },
            {
              "resourceSize": 453,
              "url": "https://softteco.co/static/media/facebook.b985067a.svg",
              "rendererStartTime": 2423.5400000214577,
              "networkEndTime": 3534.2310000061989,
              "protocol": "http/1.1",
              "networkRequestTime": 2431.052000015974,
              "mimeType": "image/svg+xml",
              "transferSize": 741,
              "experimentalFromMainFrame": true,
              "finished": true,
              "resourceType": "Image",
              "statusCode": 200,
              "priority": "Low"
            },
            {
              "finished": true,
              "rendererStartTime": 2423.738999992609,
              "url": "https://softteco.co/static/media/logo-xs.095ef7f1.svg",
              "resourceSize": 7391,
              "resourceType": "Image",
              "statusCode": 200,
              "networkRequestTime": 2431.1260000169277,
              "priority": "Low",
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true,
              "transferSize": 7682,
              "mimeType": "image/svg+xml",
              "networkEndTime": 5542.0600000321865
            },
            {
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png",
              "resourceType": "Image",
              "resourceSize": 20383,
              "networkRequestTime": 2433.4040000140667,
              "statusCode": 200,
              "finished": true,
              "experimentalFromMainFrame": true,
              "networkEndTime": 4515.7090000212193,
              "protocol": "http/1.1",
              "transferSize": 20671,
              "rendererStartTime": 2423.9360000193119,
              "priority": "Low",
              "mimeType": "image/png"
            },
            {
              "networkRequestTime": 2434.3149999976158,
              "networkEndTime": 3515.6720000207424,
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png",
              "priority": "Low",
              "resourceSize": 11835,
              "resourceType": "Image",
              "rendererStartTime": 2424.1210000216961,
              "finished": true,
              "experimentalFromMainFrame": true,
              "protocol": "http/1.1",
              "mimeType": "image/png",
              "statusCode": 200,
              "transferSize": 12122
            },
            {
              "rendererStartTime": 2424.2910000085831,
              "protocol": "http/1.1",
              "networkEndTime": 6569.5710000097752,
              "networkRequestTime": 2434.3870000243187,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "resourceSize": 24001,
              "statusCode": 200,
              "priority": "Low",
              "transferSize": 24289,
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png",
              "mimeType": "image/png",
              "finished": true
            },
            {
              "finished": true,
              "protocol": "http/1.1",
              "networkEndTime": 4520.6250000298023,
              "url": "https://softteco.co/static/media/digital-knights.29954dc8.svg",
              "resourceType": "Image",
              "networkRequestTime": 2434.455000013113,
              "mimeType": "image/svg+xml",
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2424.5030000209808,
              "statusCode": 200,
              "resourceSize": 8819,
              "priority": "Low",
              "transferSize": 9110
            },
            {
              "statusCode": 200,
              "transferSize": 16530,
              "resourceSize": 16238,
              "resourceType": "Image",
              "networkRequestTime": 2434.5190000236034,
              "priority": "Low",
              "protocol": "http/1.1",
              "url": "https://softteco.co/static/media/best-it-companies-2.358554cb.svg",
              "networkEndTime": 4534.3710000216961,
              "finished": true,
              "rendererStartTime": 2424.7090000212193,
              "experimentalFromMainFrame": true,
              "mimeType": "image/svg+xml"
            },
            {
              "protocol": "http/1.1",
              "experimentalFromMainFrame": true,
              "finished": true,
              "resourceSize": 25851,
              "statusCode": 200,
              "mimeType": "image/svg+xml",
              "transferSize": 26142,
              "resourceType": "Image",
              "networkRequestTime": 2434.5930000245571,
              "networkEndTime": 3518.8499999940395,
              "url": "https://softteco.co/static/media/best-it-companies.3eede889.svg",
              "rendererStartTime": 2424.944000005722,
              "priority": "Low"
            },
            {
              "resourceSize": 65539,
              "networkEndTime": 3540.3920000195503,
              "finished": true,
              "mimeType": "image/jpeg",
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg",
              "networkRequestTime": 2434.6599999964237,
              "protocol": "http/1.1",
              "statusCode": 200,
              "rendererStartTime": 2425.1680000424385,
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "resourceType": "Image",
              "transferSize": 65828
            },
            {
              "mimeType": "image/png",
              "priority": "Low",
              "networkEndTime": 3531.8260000050068,
              "finished": true,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "rendererStartTime": 2425.3519999980927,
              "resourceSize": 42950,
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "networkRequestTime": 2434.7340000271797,
              "protocol": "http/1.1",
              "transferSize": 43237,
              "statusCode": 200
            },
            {
              "transferSize": 93120,
              "networkEndTime": 5560.1400000154972,
              "priority": "Low",
              "resourceSize": 92827,
              "rendererStartTime": 2425.5580000281334,
              "mimeType": "image/svg+xml",
              "statusCode": 200,
              "protocol": "http/1.1",
              "url": "https://softteco.co/static/media/network-belarus.d497140c.svg",
              "networkRequestTime": 2434.8250000178814,
              "resourceType": "Image",
              "finished": true,
              "experimentalFromMainFrame": true
            },
            {
              "networkEndTime": 3528.7090000212193,
              "mimeType": "image/svg+xml",
              "protocol": "http/1.1",
              "resourceSize": 4642,
              "experimentalFromMainFrame": true,
              "transferSize": 4932,
              "priority": "Low",
              "resourceType": "Image",
              "finished": true,
              "url": "https://softteco.co/static/media/htp.c3f82b1f.svg",
              "statusCode": 200,
              "networkRequestTime": 2451.080000013113,
              "rendererStartTime": 2425.7490000426769
            },
            {
              "experimentalFromMainFrame": true,
              "transferSize": 15521,
              "url": "https://softteco.co/static/media/iso-9001.3671892a.svg",
              "mimeType": "image/svg+xml",
              "statusCode": 200,
              "priority": "Low",
              "resourceSize": 15229,
              "finished": true,
              "networkRequestTime": 2451.2380000352859,
              "protocol": "http/1.1",
              "networkEndTime": 6563.3500000238419,
              "rendererStartTime": 2436.2360000312328,
              "resourceType": "Image"
            },
            {
              "protocol": "h2",
              "networkEndTime": 2661.8740000128746,
              "finished": true,
              "networkRequestTime": 2601.4720000326633,
              "statusCode": 200,
              "resourceType": "Image",
              "experimentalFromMainFrame": true,
              "priority": "Low",
              "url": "https://mc.yandex.com/metrika/advert.gif",
              "mimeType": "image/gif",
              "resourceSize": 43,
              "transferSize": 664,
              "rendererStartTime": 2597.7060000002384
            },
            {
              "protocol": "h2",
              "resourceSize": 43,
              "networkEndTime": 3919.6850000023842,
              "transferSize": 483,
              "experimentalFromMainFrame": true,
              "networkRequestTime": 3848.4520000219345,
              "resourceType": "XHR",
              "mimeType": "image/gif",
              "finished": true,
              "priority": "High",
              "statusCode": 200,
              "url": "https://mc.yandex.com/webvisor/76950112?wmode=0&wv-part=1&wv-hit=260205045&page-url=https%3A%2F%2Fsoftteco.co%2F&rn=895165987&wv-type=3&browser-info=bt%3A1%3Awe%3A1%3Aet%3A1679922823%3Aw%3A1350x940%3Av%3A991%3Az%3A-420%3Ai%3A20230327061343%3Au%3A1679922820242257771%3Avf%3A3ue65zhww2f2bruuawfi73%3Ast%3A1679922823&t=gdpr(14)ti(2)",
              "rendererStartTime": 3845.4980000257492
            },
            {
              "url": "https://mc.yandex.com/webvisor/76950112?wmode=0&wv-part=1&wv-hit=260205045&page-url=https%3A%2F%2Fsoftteco.co%2F&rn=210008941&wv-type=3&browser-info=we%3A1%3Aet%3A1679922824%3Aw%3A1350x940%3Av%3A991%3Az%3A-420%3Ai%3A20230327061343%3Au%3A1679922820242257771%3Avf%3A3ue65zhww2f2bruuawfi73%3Ast%3A1679922824&t=gdpr(14)ti(2)",
              "resourceSize": 43,
              "rendererStartTime": 4265.7710000276566,
              "statusCode": 200,
              "finished": true,
              "resourceType": "XHR",
              "mimeType": "image/gif",
              "experimentalFromMainFrame": true,
              "protocol": "h2",
              "networkEndTime": 4365.8480000197887,
              "networkRequestTime": 4267.0410000383854,
              "priority": "High",
              "transferSize": 483
            },
            {
              "networkRequestTime": 5029.8729999959469,
              "statusCode": 200,
              "resourceType": "XHR",
              "finished": true,
              "resourceSize": 43,
              "priority": "High",
              "protocol": "h2",
              "experimentalFromMainFrame": true,
              "transferSize": 483,
              "rendererStartTime": 5028.9990000128746,
              "networkEndTime": 5097.5949999988079,
              "mimeType": "image/gif",
              "url": "https://mc.yandex.com/webvisor/76950112?wmode=0&wv-part=2&wv-hit=260205045&page-url=https%3A%2F%2Fsoftteco.co%2F&rn=367253090&wv-type=3&browser-info=bt%3A1%3Awe%3A1%3Aet%3A1679922824%3Aw%3A1350x940%3Av%3A991%3Az%3A-420%3Ai%3A20230327061344%3Au%3A1679922820242257771%3Avf%3A3ue65zhww2f2bruuawfi73%3Ast%3A1679922824&t=gdpr(14)ti(2)"
            },
            {
              "networkRequestTime": 7035.5489999949932,
              "mimeType": "image/gif",
              "protocol": "h2",
              "rendererStartTime": 7034.5990000069141,
              "resourceSize": 43,
              "priority": "High",
              "finished": true,
              "experimentalFromMainFrame": true,
              "statusCode": 200,
              "transferSize": 483,
              "networkEndTime": 7097.2910000383854,
              "url": "https://mc.yandex.com/webvisor/76950112?wmode=0&wv-part=3&wv-hit=260205045&page-url=https%3A%2F%2Fsoftteco.co%2F&rn=438180044&wv-type=3&browser-info=bt%3A1%3Awe%3A1%3Aet%3A1679922826%3Aw%3A1350x940%3Av%3A991%3Az%3A-420%3Ai%3A20230327061346%3Au%3A1679922820242257771%3Avf%3A3ue65zhww2f2bruuawfi73%3Ast%3A1679922826&t=gdpr(14)ti(2)",
              "resourceType": "XHR"
            },
            {
              "url": "https://mc.yandex.com/webvisor/76950112?wmode=0&wv-part=4&wv-hit=260205045&page-url=https%3A%2F%2Fsoftteco.co%2F&rn=1001833661&wv-type=3&browser-info=bt%3A1%3Awe%3A1%3Aet%3A1679922828%3Aw%3A1350x940%3Av%3A991%3Az%3A-420%3Ai%3A20230327061348%3Au%3A1679922820242257771%3Avf%3A3ue65zhww2f2bruuawfi73%3Ast%3A1679922828&t=gdpr(14)ti(2)",
              "transferSize": 483,
              "experimentalFromMainFrame": true,
              "networkRequestTime": 9043.2900000214577,
              "finished": true,
              "rendererStartTime": 9041.2939999997616,
              "resourceType": "XHR",
              "statusCode": 200,
              "networkEndTime": 9110.45300000906,
              "protocol": "h2",
              "priority": "High",
              "mimeType": "image/gif",
              "resourceSize": 43
            }
          ]
        }
      },
      "largest-contentful-paint": {
        "id": "largest-contentful-paint",
        "title": "Largest Contentful Paint",
        "description": "Largest Contentful Paint marks the time at which the largest text or image is painted. [Learn more about the Largest Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": 0.52,
        "scoreDisplayMode": "numeric",
        "displayValue": "2.3 s",
        "numericValue": 2315,
        "numericUnit": "millisecond"
      },
      "offscreen-images": {
        "id": "offscreen-images",
        "title": "Defer offscreen images",
        "description": "Consider lazy-loading offscreen and hidden images after all critical resources have finished loading to lower time to interactive. [Learn how to defer offscreen images](https://developer.chrome.com/docs/lighthouse/performance/offscreen-images/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "overallSavingsBytes": 0,
          "type": "opportunity",
          "items": [],
          "overallSavingsMs": 0,
          "headings": []
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "render-blocking-resources": {
        "id": "render-blocking-resources",
        "title": "Eliminate render-blocking resources",
        "description": "Resources are blocking the first paint of your page. Consider delivering critical JS/CSS inline and deferring all non-critical JS/styles. [Learn how to eliminate render-blocking resources](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/).",
        "score": 0.85,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 180 ms",
        "details": {
          "overallSavingsMs": 180,
          "type": "opportunity",
          "items": [
            {
              "totalBytes": 4301,
              "url": "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
              "wastedMs": 230
            },
            {
              "wastedMs": 70,
              "totalBytes": 1137,
              "url": "https://softteco.co/static/css/2.81198f32.chunk.css"
            },
            {
              "wastedMs": 150,
              "totalBytes": 772,
              "url": "https://softteco.co/static/css/main.b33a723b.chunk.css"
            }
          ],
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "label": "URL"
            },
            {
              "valueType": "bytes",
              "label": "Transfer Size",
              "key": "totalBytes"
            },
            {
              "valueType": "timespanMs",
              "label": "Potential Savings",
              "key": "wastedMs"
            }
          ]
        },
        "numericValue": 180,
        "numericUnit": "millisecond"
      },
      "uses-rel-preload": {
        "id": "uses-rel-preload",
        "title": "Preload key requests",
        "description": "Consider using `\u003clink rel=preload\u003e` to prioritize fetching resources that are currently requested later in page load. [Learn how to preload key requests](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preload/).",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "headings": [],
          "items": [],
          "type": "opportunity",
          "overallSavingsMs": 0
        }
      },
      "modern-image-formats": {
        "id": "modern-image-formats",
        "title": "Serve images in next-gen formats",
        "description": "Image formats like WebP and AVIF often provide better compression than PNG or JPEG, which means faster downloads and less data consumption. [Learn more about modern image formats](https://developer.chrome.com/docs/lighthouse/performance/uses-webp-images/).",
        "score": 0.47,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 1,355 KiB",
        "details": {
          "overallSavingsMs": 1000,
          "type": "opportunity",
          "items": [
            {
              "isCrossOrigin": false,
              "wastedWebpBytes": 262498,
              "fromProtocol": true,
              "wastedBytes": 267815.05,
              "url": "https://softteco.co/static/media/blueprint.4ef0da2b.jpg",
              "totalBytes": 303286
            },
            {
              "wastedWebpBytes": 226900,
              "totalBytes": 267894,
              "wastedBytes": 232379.15,
              "fromProtocol": true,
              "url": "https://softteco.co/static/media/bridges.3b497c49.jpg",
              "isCrossOrigin": false
            },
            {
              "isCrossOrigin": false,
              "totalBytes": 238134,
              "fromProtocol": true,
              "url": "https://softteco.co/static/media/bubcon.e0ef8d9c.jpg",
              "wastedBytes": 215978.75,
              "wastedWebpBytes": 215374
            },
            {
              "fromProtocol": true,
              "isCrossOrigin": false,
              "url": "https://softteco.co/static/media/via.d87dbe6c.jpg",
              "wastedWebpBytes": 213036,
              "wastedBytes": 214571.25,
              "totalBytes": 239096
            },
            {
              "totalBytes": 198799,
              "isCrossOrigin": false,
              "wastedWebpBytes": 169649,
              "wastedBytes": 172057.5,
              "fromProtocol": true,
              "url": "https://softteco.co/static/media/bsb-bank.36738990.jpg"
            },
            {
              "isCrossOrigin": false,
              "url": "https://softteco.co/static/media/evoz.6b89ca34.jpg",
              "totalBytes": 185415,
              "wastedWebpBytes": 161949,
              "wastedBytes": 163200.85,
              "fromProtocol": true
            },
            {
              "isCrossOrigin": false,
              "node": {
                "nodeLabel": "Good Firm",
                "boundingRect": {
                  "right": 4413,
                  "bottom": 4241,
                  "height": 118,
                  "top": 4123,
                  "width": 137,
                  "left": 4276
                },
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,28,LI,0,IMG",
                "lhId": "1-30-IMG"
              },
              "wastedWebpBytes": 47679,
              "fromProtocol": true,
              "totalBytes": 65539,
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg",
              "wastedBytes": 49945.5
            },
            {
              "isCrossOrigin": false,
              "wastedWebpBytes": 22862,
              "totalBytes": 42950,
              "wastedBytes": 29079.3,
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "boundingRect": {
                  "width": 177,
                  "height": 126,
                  "top": 4119,
                  "bottom": 4245,
                  "left": 4526,
                  "right": 4703
                },
                "lhId": "1-31-IMG",
                "nodeLabel": "Top Mobile App Development Companies",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,29,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/top-mobile-app-development-companies.9f0a363b.png\" width=\"177\" alt=\"Top Mobile App Development Companies\"\u003e"
              },
              "fromProtocol": true,
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png"
            },
            {
              "wastedBytes": 18601.65,
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png",
              "fromProtocol": true,
              "totalBytes": 24001,
              "wastedWebpBytes": 16267,
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,24,LI,0,IMG",
                "lhId": "1-26-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "nodeLabel": "SoftwareWorld",
                "snippet": "\u003cimg src=\"/static/media/softwareworld.5cb07bc8.png\" srcset=\"/static/media/softwareworld@2x.1e223d3c.png 2x\" width=\"127\" alt=\"SoftwareWorld\"\u003e",
                "boundingRect": {
                  "height": 127,
                  "top": 4118,
                  "bottom": 4245,
                  "width": 127,
                  "right": 3328,
                  "left": 3201
                },
                "type": "node"
              },
              "isCrossOrigin": false
            },
            {
              "wastedWebpBytes": 13423,
              "isCrossOrigin": false,
              "node": {
                "boundingRect": {
                  "top": 4124,
                  "width": 116,
                  "right": 2782,
                  "left": 2666,
                  "bottom": 4240,
                  "height": 116
                },
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,22,LI,0,IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "snippet": "\u003cimg src=\"/static/media/iso-27001.fb3c1393.png\" srcset=\"/static/media/iso-27001@2x.05672cbb.png 2x\" width=\"116\" alt=\"ISO 27001\"\u003e",
                "type": "node",
                "lhId": "1-24-IMG",
                "nodeLabel": "ISO 27001"
              },
              "wastedBytes": 15338,
              "totalBytes": 20383,
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png",
              "fromProtocol": true
            },
            {
              "totalBytes": 11835,
              "wastedWebpBytes": 7831,
              "node": {
                "nodeLabel": "Clutch",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,23,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/clutch.60ccc87a.png\" srcset=\"/static/media/clutch@2x.7062a4e6.png 2x\" width=\"116\" alt=\"Clutch\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "lhId": "1-25-IMG",
                "boundingRect": {
                  "width": 116,
                  "top": 4119,
                  "bottom": 4245,
                  "height": 126,
                  "left": 2936,
                  "right": 3052
                }
              },
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png",
              "isCrossOrigin": false,
              "wastedBytes": 8780.65,
              "fromProtocol": true
            }
          ],
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "key": "totalBytes",
              "label": "Resource Size",
              "valueType": "bytes"
            },
            {
              "label": "Potential Savings",
              "valueType": "bytes",
              "key": "wastedBytes"
            }
          ],
          "overallSavingsBytes": 1387747.65
        },
        "warnings": [],
        "numericValue": 1000,
        "numericUnit": "millisecond"
      },
      "server-response-time": {
        "id": "server-response-time",
        "title": "Initial server response time was short",
        "description": "Keep the server response time for the main document short because all other requests depend on it. [Learn more about the Time to First Byte metric](https://developer.chrome.com/docs/lighthouse/performance/time-to-first-byte/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "displayValue": "Root document took 60 ms",
        "details": {
          "type": "opportunity",
          "overallSavingsMs": -42.808,
          "items": [
            {
              "url": "https://softteco.co/",
              "responseTime": 57.192
            }
          ],
          "headings": [
            {
              "valueType": "url",
              "key": "url",
              "label": "URL"
            },
            {
              "key": "responseTime",
              "valueType": "timespanMs",
              "label": "Time Spent"
            }
          ]
        },
        "numericValue": 57.192,
        "numericUnit": "millisecond"
      },
      "lcp-lazy-loaded": {
        "id": "lcp-lazy-loaded",
        "title": "Largest Contentful Paint image was not lazily loaded",
        "description": "Above-the-fold images that are lazily loaded render later in the page lifecycle, which can delay the largest contentful paint. [Learn more about optimal lazy loading](https://web.dev/lcp-lazy-loading/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "layout-shift-elements": {
        "id": "layout-shift-elements",
        "title": "Avoid large layout shifts",
        "description": "These DOM elements contribute most to the CLS of the page. [Learn how to improve CLS](https://web.dev/optimize-cls/)",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "2 elements found",
        "details": {
          "type": "table",
          "headings": [
            {
              "label": "Element",
              "key": "node",
              "valueType": "node"
            },
            {
              "key": "score",
              "valueType": "numeric",
              "label": "CLS Contribution",
              "granularity": 0.001
            }
          ],
          "items": [
            {
              "score": 0.017024078451974435,
              "node": {
                "selector": "div#home \u003e div.sc-hBEYos \u003e div.sc-dmlrTW \u003e h1",
                "boundingRect": {
                  "height": 160,
                  "bottom": 726,
                  "right": 800,
                  "width": 800,
                  "top": 566,
                  "left": 0
                },
                "lhId": "page-1-H1",
                "snippet": "\u003ch1\u003e",
                "path": "1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV,0,H1",
                "nodeLabel": "CUSTOM SOFTWARE DEVELOPMENT",
                "type": "node"
              }
            },
            {
              "score": 0.00322697487085194,
              "node": {
                "snippet": "\u003cdiv class=\"sc-bkzZxe cUsXlg\"\u003e",
                "nodeLabel": "ABOUT US\nSERVICE\nPORTFOLIO",
                "lhId": "page-2-DIV",
                "selector": "div.sc-kstrdz \u003e div.sc-hBEYos \u003e div.sc-idOhPF \u003e div.sc-bkzZxe",
                "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,DIV,0,DIV,1,DIV",
                "type": "node",
                "boundingRect": {
                  "left": 237,
                  "top": 40,
                  "right": 1178,
                  "bottom": 62,
                  "height": 22,
                  "width": 941
                }
              }
            }
          ]
        }
      },
      "font-display": {
        "id": "font-display",
        "title": "Ensure text remains visible during webfont load",
        "description": "Leverage the `font-display` CSS feature to ensure text is user-visible while webfonts are loading. [Learn more about `font-display`](https://developer.chrome.com/docs/lighthouse/performance/font-display/).",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "items": [
            {
              "wastedMs": 230.41899999976158,
              "url": "https://softteco.co/static/media/Inter-Regular.9cd7588f.ttf"
            },
            {
              "url": "https://softteco.co/static/media/Inter-Bold.3e3cb905.ttf",
              "wastedMs": 95.6240000128746
            },
            {
              "wastedMs": 91.408999979496,
              "url": "https://softteco.co/static/media/Inter-Medium.18b8c68e.ttf"
            },
            {
              "wastedMs": 85.822000026702881,
              "url": "https://softteco.co/static/media/Inter-SemiBold.c6588ec1.ttf"
            },
            {
              "wastedMs": 1235.3169999718666,
              "url": "https://softteco.co/static/media/Inter-ExtraBold.55189ddf.ttf"
            }
          ],
          "headings": [
            {
              "key": "url",
              "valueType": "url",
              "label": "URL"
            },
            {
              "valueType": "ms",
              "key": "wastedMs",
              "label": "Potential Savings"
            }
          ],
          "type": "table"
        },
        "warnings": []
      },
      "third-party-facades": {
        "id": "third-party-facades",
        "title": "Lazy load third-party resources with facades",
        "description": "Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required. [Learn how to defer third-parties with a facade](https://developer.chrome.com/docs/lighthouse/performance/third-party-facades/).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "timing-budget": {
        "id": "timing-budget",
        "title": "Timing budget",
        "description": "Set a timing budget to help you keep an eye on the performance of your site. Performant sites load fast and respond to user input events quickly. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "total-blocking-time": {
        "id": "total-blocking-time",
        "title": "Total Blocking Time",
        "description": "Sum of all time periods between FCP and Time to Interactive, when task length exceeded 50ms, expressed in milliseconds. [Learn more about the Total Blocking Time metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0 ms",
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "uses-rel-preconnect": {
        "id": "uses-rel-preconnect",
        "title": "Preconnect to required origins",
        "description": "Consider adding `preconnect` or `dns-prefetch` resource hints to establish early connections to important third-party origins. [Learn how to preconnect to required origins](https://developer.chrome.com/docs/lighthouse/performance/uses-rel-preconnect/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "type": "opportunity",
          "headings": [],
          "overallSavingsMs": 0,
          "items": []
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "unsized-images": {
        "id": "unsized-images",
        "title": "Image elements do not have explicit `width` and `height`",
        "description": "Set an explicit width and height on image elements to reduce layout shifts and improve CLS. [Learn how to set image dimensions](https://web.dev/optimize-cls/#images-without-dimensions)",
        "score": 0,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [
            {
              "key": "node",
              "valueType": "node"
            },
            {
              "valueType": "url",
              "key": "url",
              "label": "URL"
            }
          ],
          "type": "table",
          "items": [
            {
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "lhId": "1-9-IMG",
                "boundingRect": {
                  "right": -1237,
                  "width": 177,
                  "left": -1414,
                  "top": 4119,
                  "bottom": 4245,
                  "height": 126
                },
                "nodeLabel": "Top Mobile App Development Companies",
                "snippet": "\u003cimg src=\"/static/media/top-mobile-app-development-companies.9f0a363b.png\" width=\"177\" alt=\"Top Mobile App Development Companies\"\u003e",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,7,LI,0,IMG"
              }
            },
            {
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "node": {
                "lhId": "1-20-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,18,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/top-mobile-app-development-companies.9f0a363b.png\" width=\"177\" alt=\"Top Mobile App Development Companies\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "width": 177,
                  "right": 1733,
                  "height": 126,
                  "left": 1556,
                  "top": 4119,
                  "bottom": 4245
                },
                "nodeLabel": "Top Mobile App Development Companies",
                "type": "node"
              }
            },
            {
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "lhId": "1-31-IMG",
                "type": "node",
                "nodeLabel": "Top Mobile App Development Companies",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,29,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/top-mobile-app-development-companies.9f0a363b.png\" width=\"177\" alt=\"Top Mobile App Development Companies\"\u003e",
                "boundingRect": {
                  "top": 4119,
                  "bottom": 4245,
                  "height": 126,
                  "left": 4526,
                  "width": 177,
                  "right": 4703
                }
              }
            },
            {
              "url": "https://softteco.co/static/media/network-belarus.d497140c.svg",
              "node": {
                "boundingRect": {
                  "right": -993,
                  "width": 125,
                  "left": -1118,
                  "height": 125,
                  "top": 4119,
                  "bottom": 4244
                },
                "nodeLabel": "Network Belarus",
                "snippet": "\u003cimg src=\"/static/media/network-belarus.d497140c.svg\" width=\"125\" alt=\"Network Belarus\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,8,LI,0,IMG",
                "lhId": "1-10-IMG",
                "type": "node",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img"
              }
            },
            {
              "node": {
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/network-belarus.d497140c.svg\" width=\"125\" alt=\"Network Belarus\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "left": 1852,
                  "width": 125,
                  "height": 125,
                  "top": 4119,
                  "right": 1977,
                  "bottom": 4244
                },
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,19,LI,0,IMG",
                "lhId": "1-21-IMG",
                "nodeLabel": "Network Belarus"
              },
              "url": "https://softteco.co/static/media/network-belarus.d497140c.svg"
            },
            {
              "url": "https://softteco.co/static/media/network-belarus.d497140c.svg",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,30,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/network-belarus.d497140c.svg\" width=\"125\" alt=\"Network Belarus\"\u003e",
                "type": "node",
                "lhId": "1-32-IMG",
                "nodeLabel": "Network Belarus",
                "boundingRect": {
                  "top": 4119,
                  "height": 125,
                  "width": 125,
                  "right": 4947,
                  "bottom": 4244,
                  "left": 4822
                },
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img"
              }
            },
            {
              "url": "https://softteco.co/static/media/best-it-companies-2.358554cb.svg",
              "node": {
                "nodeLabel": "Best IT Companies",
                "type": "node",
                "lhId": "1-6-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,4,LI,0,IMG",
                "boundingRect": {
                  "top": 4142,
                  "bottom": 4222,
                  "left": -2235,
                  "height": 80,
                  "right": -2037,
                  "width": 198
                },
                "snippet": "\u003cimg src=\"/static/media/best-it-companies-2.358554cb.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e"
              }
            },
            {
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "nodeLabel": "Best IT Companies",
                "snippet": "\u003cimg src=\"/static/media/best-it-companies.3eede889.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,5,LI,0,IMG",
                "lhId": "1-7-IMG",
                "boundingRect": {
                  "bottom": 4222,
                  "left": -1965,
                  "right": -1767,
                  "height": 80,
                  "width": 198,
                  "top": 4142
                }
              },
              "url": "https://softteco.co/static/media/best-it-companies.3eede889.svg"
            },
            {
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "nodeLabel": "Best IT Companies",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,15,LI,0,IMG",
                "lhId": "1-17-IMG",
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/best-it-companies-2.358554cb.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e",
                "boundingRect": {
                  "left": 735,
                  "right": 933,
                  "height": 80,
                  "top": 4142,
                  "width": 198,
                  "bottom": 4222
                }
              },
              "url": "https://softteco.co/static/media/best-it-companies-2.358554cb.svg"
            },
            {
              "url": "https://softteco.co/static/media/best-it-companies.3eede889.svg",
              "node": {
                "snippet": "\u003cimg src=\"/static/media/best-it-companies.3eede889.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e",
                "nodeLabel": "Best IT Companies",
                "lhId": "1-18-IMG",
                "boundingRect": {
                  "bottom": 4222,
                  "width": 198,
                  "height": 80,
                  "top": 4142,
                  "left": 1005,
                  "right": 1203
                },
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,16,LI,0,IMG",
                "type": "node"
              }
            },
            {
              "url": "https://softteco.co/static/media/best-it-companies-2.358554cb.svg",
              "node": {
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/best-it-companies-2.358554cb.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e",
                "nodeLabel": "Best IT Companies",
                "boundingRect": {
                  "bottom": 4222,
                  "right": 3903,
                  "left": 3705,
                  "height": 80,
                  "width": 198,
                  "top": 4142
                },
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,26,LI,0,IMG",
                "lhId": "1-28-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img"
              }
            },
            {
              "url": "https://softteco.co/static/media/best-it-companies.3eede889.svg",
              "node": {
                "boundingRect": {
                  "top": 4142,
                  "right": 4173,
                  "left": 3975,
                  "width": 198,
                  "height": 80,
                  "bottom": 4222
                },
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "nodeLabel": "Best IT Companies",
                "lhId": "1-29-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,27,LI,0,IMG",
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/best-it-companies.3eede889.svg\" width=\"198\" alt=\"Best IT Companies\"\u003e"
              }
            },
            {
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg",
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "nodeLabel": "Good Firm",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,6,LI,0,IMG",
                "lhId": "1-8-IMG",
                "boundingRect": {
                  "height": 118,
                  "right": -1527,
                  "bottom": 4241,
                  "left": -1664,
                  "top": 4123,
                  "width": 137
                },
                "type": "node"
              }
            },
            {
              "node": {
                "type": "node",
                "nodeLabel": "Good Firm",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,17,LI,0,IMG",
                "boundingRect": {
                  "width": 137,
                  "bottom": 4241,
                  "right": 1443,
                  "height": 118,
                  "top": 4123,
                  "left": 1306
                },
                "lhId": "1-19-IMG"
              },
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg"
            },
            {
              "node": {
                "type": "node",
                "boundingRect": {
                  "height": 118,
                  "right": 4413,
                  "width": 137,
                  "left": 4276,
                  "bottom": 4241,
                  "top": 4123
                },
                "nodeLabel": "Good Firm",
                "lhId": "1-30-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,28,LI,0,IMG"
              },
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/softwareworld.5cb07bc8.png\" srcset=\"/static/media/softwareworld@2x.1e223d3c.png 2x\" width=\"127\" alt=\"SoftwareWorld\"\u003e",
                "lhId": "1-4-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,2,LI,0,IMG",
                "boundingRect": {
                  "right": -2612,
                  "bottom": 4245,
                  "left": -2739,
                  "top": 4118,
                  "height": 127,
                  "width": 127
                },
                "type": "node",
                "nodeLabel": "SoftwareWorld"
              },
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png"
            },
            {
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png",
              "node": {
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/softwareworld.5cb07bc8.png\" srcset=\"/static/media/softwareworld@2x.1e223d3c.png 2x\" width=\"127\" alt=\"SoftwareWorld\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,13,LI,0,IMG",
                "lhId": "1-15-IMG",
                "nodeLabel": "SoftwareWorld",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "width": 127,
                  "top": 4118,
                  "left": 231,
                  "right": 358,
                  "height": 127,
                  "bottom": 4245
                }
              }
            },
            {
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "lhId": "1-26-IMG",
                "nodeLabel": "SoftwareWorld",
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/softwareworld.5cb07bc8.png\" srcset=\"/static/media/softwareworld@2x.1e223d3c.png 2x\" width=\"127\" alt=\"SoftwareWorld\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,24,LI,0,IMG",
                "boundingRect": {
                  "height": 127,
                  "right": 3328,
                  "bottom": 4245,
                  "width": 127,
                  "left": 3201,
                  "top": 4118
                }
              },
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png"
            },
            {
              "node": {
                "boundingRect": {
                  "width": 116,
                  "height": 126,
                  "bottom": 4245,
                  "left": -3004,
                  "top": 4119,
                  "right": -2888
                },
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "nodeLabel": "Clutch",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,1,LI,0,IMG",
                "lhId": "1-3-IMG",
                "snippet": "\u003cimg src=\"/static/media/clutch.60ccc87a.png\" srcset=\"/static/media/clutch@2x.7062a4e6.png 2x\" width=\"116\" alt=\"Clutch\"\u003e"
              },
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/clutch.60ccc87a.png\" srcset=\"/static/media/clutch@2x.7062a4e6.png 2x\" width=\"116\" alt=\"Clutch\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "boundingRect": {
                  "top": 4119,
                  "width": 116,
                  "height": 126,
                  "left": -34,
                  "bottom": 4245,
                  "right": 82
                },
                "lhId": "1-14-IMG",
                "nodeLabel": "Clutch",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,12,LI,0,IMG"
              },
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/clutch.60ccc87a.png\" srcset=\"/static/media/clutch@2x.7062a4e6.png 2x\" width=\"116\" alt=\"Clutch\"\u003e",
                "nodeLabel": "Clutch",
                "lhId": "1-25-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,23,LI,0,IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "top": 4119,
                  "width": 116,
                  "left": 2936,
                  "right": 3052,
                  "bottom": 4245,
                  "height": 126
                },
                "type": "node"
              },
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/evernote-lg.f6d4d2b6.svg\" alt=\"Evernote\"\u003e",
                "boundingRect": {
                  "width": 165,
                  "height": 85,
                  "top": 7038,
                  "left": 593,
                  "bottom": 7123,
                  "right": 758
                },
                "nodeLabel": "Evernote",
                "lhId": "1-47-IMG",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,1,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG"
              },
              "url": "https://softteco.co/static/media/evernote-lg.f6d4d2b6.svg"
            },
            {
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png",
              "node": {
                "snippet": "\u003cimg src=\"/static/media/iso-27001.fb3c1393.png\" srcset=\"/static/media/iso-27001@2x.05672cbb.png 2x\" width=\"116\" alt=\"ISO 27001\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "nodeLabel": "ISO 27001",
                "lhId": "1-2-IMG",
                "boundingRect": {
                  "height": 116,
                  "left": -3274,
                  "right": -3158,
                  "top": 4124,
                  "width": 116,
                  "bottom": 4240
                },
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,0,LI,0,IMG"
              }
            },
            {
              "node": {
                "lhId": "1-13-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "nodeLabel": "ISO 27001",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,11,LI,0,IMG",
                "type": "node",
                "boundingRect": {
                  "width": 116,
                  "bottom": 4240,
                  "height": 116,
                  "left": -304,
                  "top": 4124,
                  "right": -188
                },
                "snippet": "\u003cimg src=\"/static/media/iso-27001.fb3c1393.png\" srcset=\"/static/media/iso-27001@2x.05672cbb.png 2x\" width=\"116\" alt=\"ISO 27001\"\u003e"
              },
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png"
            },
            {
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png",
              "node": {
                "lhId": "1-24-IMG",
                "snippet": "\u003cimg src=\"/static/media/iso-27001.fb3c1393.png\" srcset=\"/static/media/iso-27001@2x.05672cbb.png 2x\" width=\"116\" alt=\"ISO 27001\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "top": 4124,
                  "right": 2782,
                  "width": 116,
                  "height": 116,
                  "bottom": 4240,
                  "left": 2666
                },
                "nodeLabel": "ISO 27001",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,22,LI,0,IMG",
                "type": "node"
              }
            },
            {
              "url": "https://softteco.co/static/media/iso-9001.3671892a.svg",
              "node": {
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "lhId": "1-12-IMG",
                "boundingRect": {
                  "height": 110,
                  "top": 4127,
                  "left": -571,
                  "bottom": 4237,
                  "right": -461,
                  "width": 110
                },
                "nodeLabel": "ISO 9001",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,10,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/iso-9001.3671892a.svg\" width=\"110\" alt=\"ISO 9001\"\u003e"
              }
            },
            {
              "url": "https://softteco.co/static/media/iso-9001.3671892a.svg",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,21,LI,0,IMG",
                "lhId": "1-23-IMG",
                "boundingRect": {
                  "top": 4127,
                  "right": 2509,
                  "left": 2399,
                  "bottom": 4237,
                  "width": 110,
                  "height": 110
                },
                "snippet": "\u003cimg src=\"/static/media/iso-9001.3671892a.svg\" width=\"110\" alt=\"ISO 9001\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "nodeLabel": "ISO 9001"
              }
            },
            {
              "node": {
                "lhId": "1-5-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,3,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/digital-knights.29954dc8.svg\" width=\"111\" alt=\"Digital Knights\"\u003e",
                "nodeLabel": "Digital Knights",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "boundingRect": {
                  "right": -2350,
                  "height": 111,
                  "bottom": 4237,
                  "top": 4126,
                  "width": 111,
                  "left": -2461
                }
              },
              "url": "https://softteco.co/static/media/digital-knights.29954dc8.svg"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/digital-knights.29954dc8.svg\" width=\"111\" alt=\"Digital Knights\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "width": 111,
                  "bottom": 4237,
                  "top": 4126,
                  "right": 620,
                  "height": 111,
                  "left": 509
                },
                "lhId": "1-16-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,14,LI,0,IMG",
                "nodeLabel": "Digital Knights",
                "type": "node"
              },
              "url": "https://softteco.co/static/media/digital-knights.29954dc8.svg"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/digital-knights.29954dc8.svg\" width=\"111\" alt=\"Digital Knights\"\u003e",
                "lhId": "1-27-IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "nodeLabel": "Digital Knights",
                "boundingRect": {
                  "right": 3590,
                  "width": 111,
                  "bottom": 4237,
                  "height": 111,
                  "left": 3479,
                  "top": 4126
                },
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,25,LI,0,IMG"
              },
              "url": "https://softteco.co/static/media/digital-knights.29954dc8.svg"
            },
            {
              "node": {
                "nodeLabel": "HTP",
                "lhId": "1-11-IMG",
                "snippet": "\u003cimg src=\"/static/media/htp.c3f82b1f.svg\" width=\"143\" alt=\"HTP\"\u003e",
                "boundingRect": {
                  "width": 143,
                  "right": -714,
                  "height": 80,
                  "left": -857,
                  "bottom": 4222,
                  "top": 4142
                },
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,9,LI,0,IMG"
              },
              "url": "https://softteco.co/static/media/htp.c3f82b1f.svg"
            },
            {
              "url": "https://softteco.co/static/media/htp.c3f82b1f.svg",
              "node": {
                "snippet": "\u003cimg src=\"/static/media/htp.c3f82b1f.svg\" width=\"143\" alt=\"HTP\"\u003e",
                "nodeLabel": "HTP",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,20,LI,0,IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "lhId": "1-22-IMG",
                "type": "node",
                "boundingRect": {
                  "right": 2256,
                  "height": 80,
                  "left": 2113,
                  "top": 4142,
                  "bottom": 4222,
                  "width": 143
                }
              }
            },
            {
              "node": {
                "type": "node",
                "lhId": "1-45-IMG",
                "boundingRect": {
                  "top": 7054,
                  "width": 165,
                  "bottom": 7108,
                  "left": 169,
                  "right": 334,
                  "height": 54
                },
                "nodeLabel": "Samsung",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/samsung-lg.38dbb50c.svg\" alt=\"Samsung\"\u003e",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,0,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG"
              },
              "url": "https://softteco.co/static/media/samsung-lg.38dbb50c.svg"
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/logo-lg.544bb045.svg\" alt=\"\"\u003e",
                "lhId": "1-0-IMG",
                "boundingRect": {
                  "height": 40,
                  "top": 31,
                  "width": 217,
                  "bottom": 71,
                  "right": 237,
                  "left": 20
                },
                "selector": "div.sc-idOhPF \u003e button.sc-hHftDr \u003e picture \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,0,DIV,0,DIV,0,DIV,0,BUTTON,0,PICTURE,1,IMG",
                "nodeLabel": "div.sc-idOhPF \u003e button.sc-hHftDr \u003e picture \u003e img"
              },
              "url": "https://softteco.co/static/media/logo-lg.544bb045.svg"
            },
            {
              "url": "https://softteco.co/static/media/volkswagen-lg.881c5fca.svg",
              "node": {
                "nodeLabel": "Volkswagen",
                "type": "node",
                "boundingRect": {
                  "top": 7213,
                  "height": 42,
                  "right": 758,
                  "width": 165,
                  "bottom": 7255,
                  "left": 593
                },
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/volkswagen-lg.881c5fca.svg\" alt=\"Volkswagen\"\u003e",
                "lhId": "1-53-IMG",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,4,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG"
              }
            },
            {
              "url": "https://softteco.co/static/media/kinvey-lg.5b4ba0d7.svg",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,6,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "type": "node",
                "boundingRect": {
                  "bottom": 7384,
                  "width": 165,
                  "height": 39,
                  "right": 334,
                  "top": 7345,
                  "left": 169
                },
                "nodeLabel": "kinvey",
                "lhId": "1-57-IMG",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/kinvey-lg.5b4ba0d7.svg\" alt=\"kinvey\"\u003e",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img"
              }
            },
            {
              "url": "https://softteco.co/static/media/play.bad16803.svg",
              "node": {
                "nodeLabel": "Watch our company video",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,3,DIV,0,DIV,0,BUTTON,0,IMG",
                "boundingRect": {
                  "left": 526,
                  "width": 50,
                  "bottom": 2704,
                  "right": 576,
                  "top": 2654,
                  "height": 50
                },
                "lhId": "1-1-IMG",
                "selector": "div.sc-iJuUWI \u003e div.sc-hBEYos \u003e button.sc-giIncl \u003e img",
                "snippet": "\u003cimg src=\"/static/media/play.bad16803.svg\" alt=\"Watch our company video\"\u003e"
              }
            },
            {
              "url": "https://softteco.co/static/media/blueprint-lg.33237f9f.svg",
              "node": {
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/blueprint-lg.33237f9f.svg\" alt=\"blueprint\"\u003e",
                "lhId": "1-59-IMG",
                "boundingRect": {
                  "left": 593,
                  "bottom": 7383,
                  "right": 758,
                  "width": 165,
                  "top": 7346,
                  "height": 38
                },
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,7,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "nodeLabel": "blueprint",
                "type": "node"
              }
            },
            {
              "node": {
                "nodeLabel": "BSB Bank",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,5,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "type": "node",
                "boundingRect": {
                  "left": 1016,
                  "bottom": 7252,
                  "top": 7217,
                  "height": 35,
                  "right": 1181,
                  "width": 165
                },
                "lhId": "1-55-IMG",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/bsb-bank-lg.342670e0.svg\" alt=\"BSB Bank\"\u003e"
              },
              "url": "https://softteco.co/static/media/bsb-bank-lg.342670e0.svg"
            },
            {
              "url": "https://softteco.co/static/media/the-world-bank-lg.985a539c.svg",
              "node": {
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "lhId": "1-49-IMG",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,2,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/the-world-bank-lg.985a539c.svg\" alt=\"The world bank\"\u003e",
                "type": "node",
                "nodeLabel": "The world bank",
                "boundingRect": {
                  "bottom": 7098,
                  "width": 165,
                  "right": 1181,
                  "left": 1016,
                  "top": 7064,
                  "height": 34
                }
              }
            },
            {
              "url": "https://softteco.co/static/media/johnson-and-johnson-lg.bd4d7468.svg",
              "node": {
                "lhId": "1-61-IMG",
                "type": "node",
                "nodeLabel": "johnson and johnson",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/johnson-and-johnson-lg.bd4d7468.svg\" alt=\"johnson and johnson\"\u003e",
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,8,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "boundingRect": {
                  "bottom": 7379,
                  "right": 1181,
                  "width": 165,
                  "left": 1016,
                  "top": 7350,
                  "height": 30
                }
              }
            },
            {
              "url": "https://softteco.co/static/media/barnes-and-noble-lg.53b685ff.svg",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,7,DIV,0,DIV,1,DIV,3,DIV,0,DIV,0,DIV,0,PICTURE,1,IMG",
                "lhId": "1-51-IMG",
                "snippet": "\u003cimg src=\"https://softteco.co/static/media/barnes-and-noble-lg.53b685ff.svg\" alt=\"Barnes and Nobel\"\u003e",
                "type": "node",
                "boundingRect": {
                  "right": 334,
                  "width": 165,
                  "left": 169,
                  "height": 26,
                  "bottom": 7247,
                  "top": 7221
                },
                "selector": "div.sc-gTgzIj \u003e div.animated \u003e picture \u003e img",
                "nodeLabel": "Barnes and Nobel"
              }
            },
            {
              "url": "https://softteco.co/static/media/logo-xs.095ef7f1.svg",
              "node": {
                "selector": "div.sc-hBEYos \u003e div.sc-gsxnyZ \u003e div.sc-eGCarw \u003e img",
                "type": "node",
                "boundingRect": {
                  "left": 20,
                  "height": 14,
                  "bottom": 8540,
                  "right": 96,
                  "width": 76,
                  "top": 8526
                },
                "lhId": "1-67-IMG",
                "path": "1,HTML,1,BODY,0,DIV,9,DIV,0,DIV,0,DIV,2,DIV,0,IMG",
                "nodeLabel": "div.sc-hBEYos \u003e div.sc-gsxnyZ \u003e div.sc-eGCarw \u003e img",
                "snippet": "\u003cimg src=\"/static/media/logo-xs.095ef7f1.svg\" alt=\"\"\u003e"
              }
            },
            {
              "url": "https://softteco.co/static/media/twitter.6bf9ef74.svg",
              "node": {
                "boundingRect": {
                  "height": 14,
                  "left": 1283,
                  "right": 1303,
                  "top": 8526,
                  "width": 20,
                  "bottom": 8540
                },
                "lhId": "1-65-IMG",
                "selector": "div.sc-gsxnyZ \u003e div.sc-GTWni \u003e a \u003e img",
                "path": "1,HTML,1,BODY,0,DIV,9,DIV,0,DIV,0,DIV,0,DIV,1,A,0,IMG",
                "nodeLabel": "Twitter",
                "type": "node",
                "snippet": "\u003cimg src=\"/static/media/twitter.6bf9ef74.svg\" alt=\"Twitter\"\u003e"
              }
            },
            {
              "node": {
                "snippet": "\u003cimg src=\"/static/media/linkedin.92d6bbc3.svg\" alt=\"LinkedIn\"\u003e",
                "nodeLabel": "LinkedIn",
                "selector": "div.sc-gsxnyZ \u003e div.sc-GTWni \u003e a \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,9,DIV,0,DIV,0,DIV,0,DIV,0,A,0,IMG",
                "boundingRect": {
                  "bottom": 8540,
                  "right": 1263,
                  "left": 1249,
                  "height": 14,
                  "width": 14,
                  "top": 8526
                },
                "lhId": "1-64-IMG"
              },
              "url": "https://softteco.co/static/media/linkedin.92d6bbc3.svg"
            },
            {
              "url": "https://softteco.co/static/media/facebook.b985067a.svg",
              "node": {
                "type": "node",
                "boundingRect": {
                  "height": 14,
                  "top": 8526,
                  "bottom": 8540,
                  "width": 7,
                  "left": 1323,
                  "right": 1330
                },
                "path": "1,HTML,1,BODY,0,DIV,9,DIV,0,DIV,0,DIV,0,DIV,2,A,0,IMG",
                "lhId": "1-66-IMG",
                "selector": "div.sc-gsxnyZ \u003e div.sc-GTWni \u003e a \u003e img",
                "snippet": "\u003cimg src=\"/static/media/facebook.b985067a.svg\" alt=\"Facebook\"\u003e",
                "nodeLabel": "Facebook"
              }
            },
            {
              "url": "https://softteco.co/static/media/arrow-down.69158b9b.svg",
              "node": {
                "path": "1,HTML,1,BODY,0,DIV,6,DIV,0,DIV,1,DIV,4,BUTTON,0,IMG",
                "selector": "div.sc-hBEYos \u003e div \u003e button.sc-khAkjo \u003e img",
                "lhId": "1-41-IMG",
                "boundingRect": {
                  "right": 650,
                  "left": 636,
                  "width": 14,
                  "top": 6669,
                  "height": 8,
                  "bottom": 6677
                },
                "nodeLabel": "div.sc-hBEYos \u003e div \u003e button.sc-khAkjo \u003e img",
                "snippet": "\u003cimg src=\"/static/media/arrow-down.69158b9b.svg\" alt=\"\"\u003e",
                "type": "node"
              }
            }
          ]
        }
      },
      "first-contentful-paint": {
        "id": "first-contentful-paint",
        "title": "First Contentful Paint",
        "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more about the First Contentful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/).",
        "score": 0.61,
        "scoreDisplayMode": "numeric",
        "displayValue": "1.4 s",
        "numericValue": 1410,
        "numericUnit": "millisecond"
      },
      "non-composited-animations": {
        "id": "non-composited-animations",
        "title": "Avoid non-composited animations",
        "description": "Animations which are not composited can be janky and increase CLS. [Learn how to avoid non-composited animations](https://developer.chrome.com/docs/lighthouse/performance/non-composited-animations/)",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "type": "table",
          "headings": [],
          "items": []
        }
      },
      "max-potential-fid": {
        "id": "max-potential-fid",
        "title": "Max Potential First Input Delay",
        "description": "The maximum potential First Input Delay that your users could experience is the duration of the longest task. [Learn more about the Maximum Potential First Input Delay metric](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-max-potential-fid/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "20 ms",
        "numericValue": 18.5,
        "numericUnit": "millisecond"
      },
      "interactive": {
        "id": "interactive",
        "title": "Time to Interactive",
        "description": "Time to Interactive is the amount of time it takes for the page to become fully interactive. [Learn more about the Time to Interactive metric](https://developer.chrome.com/docs/lighthouse/performance/interactive/).",
        "score": 0.98,
        "scoreDisplayMode": "numeric",
        "displayValue": "1.7 s",
        "numericValue": 1700,
        "numericUnit": "millisecond"
      },
      "performance-budget": {
        "id": "performance-budget",
        "title": "Performance budget",
        "description": "Keep the quantity and size of network requests under the targets set by the provided performance budget. [Learn more about performance budgets](https://developers.google.com/web/tools/lighthouse/audits/budgets).",
        "score": null,
        "scoreDisplayMode": "notApplicable"
      },
      "metrics": {
        "id": "metrics",
        "title": "Metrics",
        "description": "Collects all available metrics.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "items": [
            {
              "largestContentfulPaint": 2315,
              "observedTotalCumulativeLayoutShift": 0.020251053322826375,
              "observedLargestContentfulPaintAllFramesTs": 214013141341,
              "firstMeaningfulPaint": 1700,
              "observedTimeOriginTs": 214010519753,
              "firstContentfulPaint": 1410,
              "observedLastVisualChangeTs": 214014255753,
              "maxPotentialFID": 19,
              "observedCumulativeLayoutShift": 0.020251053322826375,
              "interactive": 1700,
              "cumulativeLayoutShift": 0.020251053322826375,
              "observedFirstVisualChange": 2486,
              "observedLoadTs": 214017095536,
              "observedLastVisualChange": 3736,
              "observedFirstPaintTs": 214013026311,
              "totalBlockingTime": 0,
              "observedLoad": 6576,
              "observedNavigationStart": 0,
              "observedFirstContentfulPaintAllFramesTs": 214013026311,
              "cumulativeLayoutShiftMainFrame": 0.020251053322826375,
              "observedFirstPaint": 2507,
              "observedDomContentLoadedTs": 214013117970,
              "observedTraceEnd": 8892,
              "observedLargestContentfulPaint": 2622,
              "observedFirstMeaningfulPaint": 2622,
              "observedLargestContentfulPaintAllFrames": 2622,
              "observedLargestContentfulPaintTs": 214013141341,
              "observedFirstContentfulPaintTs": 214013026311,
              "speedIndex": 2233,
              "observedSpeedIndex": 2565,
              "totalCumulativeLayoutShift": 0.020251053322826375,
              "observedFirstContentfulPaint": 2507,
              "observedNavigationStartTs": 214010519753,
              "observedFirstVisualChangeTs": 214013005753,
              "observedDomContentLoaded": 2598,
              "observedCumulativeLayoutShiftMainFrame": 0.020251053322826375,
              "observedTraceEndTs": 214019411904,
              "observedFirstMeaningfulPaintTs": 214013141341,
              "observedTimeOrigin": 0,
              "observedSpeedIndexTs": 214013084801,
              "observedFirstContentfulPaintAllFrames": 2507
            },
            {
              "lcpInvalidated": false
            }
          ],
          "type": "debugdata"
        },
        "numericValue": 1700,
        "numericUnit": "millisecond"
      },
      "unminified-css": {
        "id": "unminified-css",
        "title": "Minify CSS",
        "description": "Minifying CSS files can reduce network payload sizes. [Learn how to minify CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "type": "opportunity",
          "overallSavingsMs": 0,
          "overallSavingsBytes": 0,
          "headings": [],
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "script-treemap-data": {
        "id": "script-treemap-data",
        "title": "Script Treemap Data",
        "description": "Used for treemap app",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "treemap-data",
          "nodes": [
            {
              "children": [
                {
                  "resourceBytes": 361,
                  "unusedBytes": 0,
                  "name": "(inline) !function(e,t,a…"
                },
                {
                  "name": "(inline) function gtag()…",
                  "unusedBytes": 0,
                  "resourceBytes": 160
                },
                {
                  "resourceBytes": 307,
                  "unusedBytes": 0,
                  "name": "(inline) var Tawk_API=Ta…"
                },
                {
                  "unusedBytes": 0,
                  "resourceBytes": 162,
                  "name": "(inline) _linkedin_partn…"
                },
                {
                  "name": "(inline) !function(){var…",
                  "resourceBytes": 228,
                  "unusedBytes": 0
                },
                {
                  "name": "(inline) !function(e){fu…",
                  "unusedBytes": 287,
                  "resourceBytes": 1526
                }
              ],
              "resourceBytes": 2744,
              "name": "https://softteco.co/",
              "unusedBytes": 287
            },
            {
              "unusedBytes": 77475,
              "name": "https://www.googletagmanager.com/gtag/js?id=G-2HTJSVEM09",
              "resourceBytes": 178663
            },
            {
              "resourceBytes": 257199,
              "name": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
              "unusedBytes": 93732,
              "children": [
                {
                  "unusedBytes": 92996,
                  "children": [
                    {
                      "unusedBytes": 86123,
                      "name": "node_modules",
                      "children": [
                        {
                          "children": [
                            {
                              "name": "jsx-runtime.js",
                              "resourceBytes": 17
                            },
                            {
                              "name": "index.js",
                              "resourceBytes": 17
                            },
                            {
                              "resourceBytes": 6577,
                              "children": [
                                {
                                  "resourceBytes": 5941,
                                  "name": "react.production.min.js",
                                  "unusedBytes": 1746
                                },
                                {
                                  "name": "react-jsx-runtime.production.min.js",
                                  "resourceBytes": 636
                                }
                              ],
                              "unusedBytes": 1746,
                              "name": "cjs"
                            }
                          ],
                          "name": "react",
                          "unusedBytes": 1746,
                          "resourceBytes": 6611
                        },
                        {
                          "children": [
                            {
                              "resourceBytes": 3092,
                              "unusedBytes": 1496,
                              "name": "helpers/esm",
                              "children": [
                                {
                                  "name": "taggedTemplateLiteral.js",
                                  "resourceBytes": 149
                                },
                                {
                                  "unusedBytes": 143,
                                  "resourceBytes": 632,
                                  "name": "objectSpread2.js"
                                },
                                {
                                  "resourceBytes": 58,
                                  "name": "slicedToArray.js"
                                },
                                {
                                  "name": "arrayWithHoles.js",
                                  "resourceBytes": 41
                                },
                                {
                                  "unusedBytes": 299,
                                  "name": "iterableToArrayLimit.js",
                                  "resourceBytes": 299
                                },
                                {
                                  "name": "nonIterableRest.js",
                                  "resourceBytes": 172,
                                  "unusedBytes": 172
                                },
                                {
                                  "resourceBytes": 155,
                                  "name": "defineProperty.js"
                                },
                                {
                                  "name": "toConsumableArray.js",
                                  "resourceBytes": 52
                                },
                                {
                                  "resourceBytes": 54,
                                  "name": "arrayWithoutHoles.js"
                                },
                                {
                                  "resourceBytes": 94,
                                  "unusedBytes": 94,
                                  "name": "iterableToArray.js"
                                },
                                {
                                  "resourceBytes": 167,
                                  "name": "nonIterableSpread.js",
                                  "unusedBytes": 167
                                },
                                {
                                  "name": "arrayLikeToArray.js",
                                  "resourceBytes": 141
                                },
                                {
                                  "name": "asyncToGenerator.js",
                                  "unusedBytes": 294,
                                  "resourceBytes": 351
                                },
                                {
                                  "resourceBytes": 355,
                                  "name": "unsupportedIterableToArray.js",
                                  "unusedBytes": 327
                                },
                                {
                                  "name": "objectWithoutProperties.js",
                                  "resourceBytes": 240
                                },
                                {
                                  "resourceBytes": 132,
                                  "name": "objectWithoutPropertiesLoose.js"
                                }
                              ]
                            },
                            {
                              "name": "regenerator/index.js",
                              "resourceBytes": 17
                            }
                          ],
                          "unusedBytes": 1496,
                          "resourceBytes": 3109,
                          "name": "babel-preset-react-app/node_modules/@babel/runtime"
                        },
                        {
                          "resourceBytes": 6084,
                          "children": [
                            {
                              "resourceBytes": 20,
                              "name": "index.js"
                            },
                            {
                              "resourceBytes": 58,
                              "name": "lib/ReactPropTypesSecret.js"
                            },
                            {
                              "resourceBytes": 51,
                              "name": "factory.js"
                            },
                            {
                              "unusedBytes": 4616,
                              "resourceBytes": 5263,
                              "name": "factoryWithTypeCheckers.js"
                            },
                            {
                              "resourceBytes": 70,
                              "unusedBytes": 36,
                              "name": "checkPropTypes.js"
                            },
                            {
                              "resourceBytes": 622,
                              "name": "factoryWithThrowingShims.js",
                              "unusedBytes": 295
                            }
                          ],
                          "unusedBytes": 4947,
                          "name": "prop-types"
                        },
                        {
                          "unusedBytes": 338,
                          "name": "object-assign/index.js",
                          "resourceBytes": 924
                        },
                        {
                          "unusedBytes": 8174,
                          "children": [
                            {
                              "children": [
                                {
                                  "name": "utils",
                                  "unusedBytes": 2160,
                                  "resourceBytes": 6654,
                                  "children": [
                                    {
                                      "unusedBytes": 350,
                                      "name": "common.js",
                                      "resourceBytes": 1842
                                    },
                                    {
                                      "resourceBytes": 1161,
                                      "name": "clones.js",
                                      "unusedBytes": 407
                                    },
                                    {
                                      "resourceBytes": 1029,
                                      "name": "index.js"
                                    },
                                    {
                                      "name": "elementWidth.js",
                                      "resourceBytes": 371,
                                      "unusedBytes": 67
                                    },
                                    {
                                      "resourceBytes": 233,
                                      "name": "throttle.js"
                                    },
                                    {
                                      "unusedBytes": 451,
                                      "resourceBytes": 512,
                                      "name": "throwError.js"
                                    },
                                    {
                                      "name": "next.js",
                                      "resourceBytes": 333
                                    },
                                    {
                                      "resourceBytes": 427,
                                      "name": "previous.js",
                                      "unusedBytes": 324
                                    },
                                    {
                                      "name": "mouseOrTouchMove.js",
                                      "resourceBytes": 458,
                                      "unusedBytes": 374
                                    },
                                    {
                                      "name": "dots.js",
                                      "resourceBytes": 288,
                                      "unusedBytes": 187
                                    }
                                  ]
                                },
                                {
                                  "name": "index.js",
                                  "resourceBytes": 83
                                },
                                {
                                  "unusedBytes": 4687,
                                  "resourceBytes": 12512,
                                  "name": "Carousel.js"
                                },
                                {
                                  "resourceBytes": 590,
                                  "unusedBytes": 182,
                                  "name": "types.js"
                                },
                                {
                                  "unusedBytes": 460,
                                  "name": "Dots.js",
                                  "resourceBytes": 1074
                                },
                                {
                                  "unusedBytes": 652,
                                  "resourceBytes": 740,
                                  "name": "Arrows.js"
                                },
                                {
                                  "resourceBytes": 1043,
                                  "unusedBytes": 33,
                                  "name": "CarouselItems.js"
                                }
                              ],
                              "unusedBytes": 8174,
                              "resourceBytes": 22696,
                              "name": "lib"
                            },
                            {
                              "resourceBytes": 18,
                              "name": "index.js"
                            }
                          ],
                          "name": "react-multi-carousel",
                          "resourceBytes": 22714
                        },
                        {
                          "children": [
                            {
                              "children": [
                                {
                                  "children": [
                                    {
                                      "unusedBytes": 583,
                                      "name": "ReactElement.js",
                                      "resourceBytes": 1476
                                    },
                                    {
                                      "name": "reactProdInvariant.js",
                                      "resourceBytes": 410,
                                      "unusedBytes": 398
                                    },
                                    {
                                      "name": "ReactBaseClasses.js",
                                      "resourceBytes": 739,
                                      "unusedBytes": 343
                                    },
                                    {
                                      "unusedBytes": 79,
                                      "resourceBytes": 192,
                                      "name": "ReactNoopUpdateQueue.js"
                                    },
                                    {
                                      "name": "canDefineProperty.js",
                                      "resourceBytes": 14
                                    },
                                    {
                                      "name": "ReactCurrentOwner.js",
                                      "resourceBytes": 26
                                    },
                                    {
                                      "name": "ReactElementSymbol.js",
                                      "resourceBytes": 94
                                    },
                                    {
                                      "resourceBytes": 445,
                                      "name": "React.js",
                                      "unusedBytes": 21
                                    },
                                    {
                                      "resourceBytes": 24,
                                      "name": "lowPriorityWarning.js",
                                      "unusedBytes": 12
                                    },
                                    {
                                      "name": "ReactChildren.js",
                                      "resourceBytes": 1304,
                                      "unusedBytes": 1044
                                    },
                                    {
                                      "name": "PooledClass.js",
                                      "unusedBytes": 607,
                                      "resourceBytes": 854
                                    },
                                    {
                                      "resourceBytes": 839,
                                      "name": "traverseAllChildren.js",
                                      "unusedBytes": 769
                                    },
                                    {
                                      "name": "getIteratorFn.js",
                                      "resourceBytes": 144,
                                      "unusedBytes": 82
                                    },
                                    {
                                      "resourceBytes": 289,
                                      "unusedBytes": 250,
                                      "name": "KeyEscapeUtils.js"
                                    },
                                    {
                                      "resourceBytes": 2171,
                                      "name": "ReactDOMFactories.js"
                                    },
                                    {
                                      "name": "ReactPropTypes.js",
                                      "resourceBytes": 51
                                    },
                                    {
                                      "name": "ReactVersion.js",
                                      "resourceBytes": 20
                                    },
                                    {
                                      "resourceBytes": 81,
                                      "name": "createClass.js"
                                    },
                                    {
                                      "name": "onlyChild.js",
                                      "resourceBytes": 89,
                                      "unusedBytes": 51
                                    }
                                  ],
                                  "resourceBytes": 9262,
                                  "name": "lib",
                                  "unusedBytes": 4239
                                },
                                {
                                  "name": "react.js",
                                  "resourceBytes": 17
                                }
                              ],
                              "name": "node_modules/react",
                              "unusedBytes": 4239,
                              "resourceBytes": 9279
                            },
                            {
                              "children": [
                                {
                                  "resourceBytes": 2803,
                                  "name": "index.js",
                                  "unusedBytes": 246
                                },
                                {
                                  "unusedBytes": 448,
                                  "name": "prefixer",
                                  "children": [
                                    {
                                      "resourceBytes": 1218,
                                      "unusedBytes": 302,
                                      "name": "index.js"
                                    },
                                    {
                                      "name": "prefix.js",
                                      "unusedBytes": 146,
                                      "resourceBytes": 547
                                    },
                                    {
                                      "resourceBytes": 410,
                                      "name": "supports.js"
                                    },
                                    {
                                      "name": "constants.js",
                                      "resourceBytes": 1941
                                    }
                                  ],
                                  "resourceBytes": 4116
                                }
                              ],
                              "name": "lib",
                              "resourceBytes": 6919,
                              "unusedBytes": 694
                            }
                          ],
                          "name": "react-animated-css",
                          "resourceBytes": 16198,
                          "unusedBytes": 4933
                        },
                        {
                          "name": "react-is",
                          "resourceBytes": 2134,
                          "unusedBytes": 408,
                          "children": [
                            {
                              "name": "index.js",
                              "resourceBytes": 17
                            },
                            {
                              "name": "cjs/react-is.production.min.js",
                              "unusedBytes": 408,
                              "resourceBytes": 2117
                            }
                          ]
                        },
                        {
                          "unusedBytes": 411,
                          "children": [
                            {
                              "resourceBytes": 347,
                              "name": "invariant.js",
                              "unusedBytes": 335
                            },
                            {
                              "name": "warning.js",
                              "resourceBytes": 25
                            },
                            {
                              "resourceBytes": 251,
                              "unusedBytes": 76,
                              "name": "emptyFunction.js"
                            },
                            {
                              "resourceBytes": 14,
                              "name": "emptyObject.js"
                            }
                          ],
                          "name": "fbjs/lib",
                          "resourceBytes": 637
                        },
                        {
                          "resourceBytes": 7412,
                          "name": "lodash",
                          "children": [
                            {
                              "resourceBytes": 59,
                              "name": "toString.js",
                              "unusedBytes": 35
                            },
                            {
                              "resourceBytes": 32,
                              "name": "_Symbol.js"
                            },
                            {
                              "name": "_baseGetTag.js",
                              "resourceBytes": 168
                            },
                            {
                              "name": "isObjectLike.js",
                              "resourceBytes": 59
                            },
                            {
                              "resourceBytes": 141,
                              "unusedBytes": 29,
                              "name": "_hasUnicode.js"
                            },
                            {
                              "resourceBytes": 318,
                              "name": "isPlainObject.js"
                            },
                            {
                              "name": "_root.js",
                              "resourceBytes": 117
                            },
                            {
                              "resourceBytes": 76,
                              "name": "_freeGlobal.js"
                            },
                            {
                              "unusedBytes": 123,
                              "name": "_getRawTag.js",
                              "resourceBytes": 223
                            },
                            {
                              "name": "_objectToString.js",
                              "resourceBytes": 73
                            },
                            {
                              "name": "_getPrototype.js",
                              "resourceBytes": 55
                            },
                            {
                              "resourceBytes": 61,
                              "name": "_overArg.js"
                            },
                            {
                              "unusedBytes": 54,
                              "resourceBytes": 91,
                              "name": "camelCase.js"
                            },
                            {
                              "resourceBytes": 73,
                              "name": "capitalize.js",
                              "unusedBytes": 41
                            },
                            {
                              "name": "_baseToString.js",
                              "resourceBytes": 240,
                              "unusedBytes": 147
                            },
                            {
                              "resourceBytes": 104,
                              "name": "_arrayMap.js",
                              "unusedBytes": 92
                            },
                            {
                              "resourceBytes": 33,
                              "name": "isArray.js"
                            },
                            {
                              "resourceBytes": 100,
                              "name": "isSymbol.js",
                              "unusedBytes": 68
                            },
                            {
                              "name": "upperFirst.js",
                              "resourceBytes": 40
                            },
                            {
                              "resourceBytes": 178,
                              "unusedBytes": 110,
                              "name": "_createCaseFirst.js"
                            },
                            {
                              "unusedBytes": 75,
                              "name": "_castSlice.js",
                              "resourceBytes": 99
                            },
                            {
                              "resourceBytes": 160,
                              "unusedBytes": 148,
                              "name": "_baseSlice.js"
                            },
                            {
                              "name": "_stringToArray.js",
                              "unusedBytes": 34,
                              "resourceBytes": 74
                            },
                            {
                              "unusedBytes": 31,
                              "resourceBytes": 43,
                              "name": "_asciiToArray.js"
                            },
                            {
                              "name": "_unicodeToArray.js",
                              "unusedBytes": 34,
                              "resourceBytes": 425
                            },
                            {
                              "unusedBytes": 49,
                              "resourceBytes": 138,
                              "name": "_createCompounder.js"
                            },
                            {
                              "resourceBytes": 113,
                              "unusedBytes": 101,
                              "name": "_arrayReduce.js"
                            },
                            {
                              "resourceBytes": 202,
                              "unusedBytes": 57,
                              "name": "deburr.js"
                            },
                            {
                              "name": "_deburrLetter.js",
                              "resourceBytes": 2385
                            },
                            {
                              "resourceBytes": 71,
                              "name": "_basePropertyOf.js",
                              "unusedBytes": 39
                            },
                            {
                              "unusedBytes": 84,
                              "resourceBytes": 135,
                              "name": "words.js"
                            },
                            {
                              "name": "_asciiWords.js",
                              "unusedBytes": 34,
                              "resourceBytes": 96
                            },
                            {
                              "unusedBytes": 29,
                              "name": "_hasUnicodeWord.js",
                              "resourceBytes": 116
                            },
                            {
                              "name": "_unicodeWords.js",
                              "unusedBytes": 34,
                              "resourceBytes": 1114
                            }
                          ],
                          "unusedBytes": 1448
                        },
                        {
                          "name": "browser-or-node/lib/index.js",
                          "unusedBytes": 262,
                          "resourceBytes": 742
                        },
                        {
                          "resourceBytes": 952,
                          "unusedBytes": 313,
                          "name": "hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"
                        },
                        {
                          "resourceBytes": 13045,
                          "unusedBytes": 284,
                          "name": "@emotion",
                          "children": [
                            {
                              "name": "memoize/dist/memoize.browser.esm.js",
                              "resourceBytes": 84
                            },
                            {
                              "name": "is-prop-valid/dist/is-prop-valid.browser.esm.js",
                              "resourceBytes": 4107
                            },
                            {
                              "unusedBytes": 284,
                              "name": "stylis/dist/stylis.browser.esm.js",
                              "resourceBytes": 8209
                            },
                            {
                              "resourceBytes": 645,
                              "name": "unitless/dist/unitless.browser.esm.js"
                            }
                          ]
                        },
                        {
                          "unusedBytes": 1182,
                          "name": "process/browser.js",
                          "resourceBytes": 1663
                        },
                        {
                          "resourceBytes": 118883,
                          "name": "react-dom",
                          "children": [
                            {
                              "resourceBytes": 223,
                              "name": "index.js"
                            },
                            {
                              "unusedBytes": 40831,
                              "resourceBytes": 118660,
                              "name": "cjs/react-dom.production.min.js"
                            }
                          ],
                          "unusedBytes": 40831
                        },
                        {
                          "name": "shallowequal/index.js",
                          "unusedBytes": 411,
                          "resourceBytes": 423
                        },
                        {
                          "unusedBytes": 296,
                          "name": "attr-accept/dist/es/index.js",
                          "resourceBytes": 324
                        },
                        {
                          "name": "file-selector/node_modules/tslib/tslib.es6.js",
                          "unusedBytes": 1726,
                          "resourceBytes": 1754
                        },
                        {
                          "name": "react-dropzone/dist/es",
                          "children": [
                            {
                              "name": "utils/index.js",
                              "unusedBytes": 2624,
                              "resourceBytes": 2781
                            },
                            {
                              "resourceBytes": 8590,
                              "name": "index.js",
                              "unusedBytes": 4159
                            }
                          ],
                          "unusedBytes": 6783,
                          "resourceBytes": 11371
                        },
                        {
                          "resourceBytes": 4395,
                          "unusedBytes": 908,
                          "children": [
                            {
                              "name": "index.js",
                              "resourceBytes": 17
                            },
                            {
                              "unusedBytes": 908,
                              "resourceBytes": 4378,
                              "name": "cjs/scheduler.production.min.js"
                            }
                          ],
                          "name": "scheduler"
                        },
                        {
                          "unusedBytes": 5018,
                          "name": "regenerator-runtime/runtime.js",
                          "resourceBytes": 6407
                        },
                        {
                          "name": "create-react-class/factory.js",
                          "resourceBytes": 5198,
                          "unusedBytes": 4188
                        },
                        {
                          "unusedBytes": 20,
                          "name": "classnames/index.js",
                          "resourceBytes": 446
                        },
                        {
                          "name": "webpack/buildin/global.js",
                          "resourceBytes": 132
                        }
                      ],
                      "resourceBytes": 231558
                    },
                    {
                      "unusedBytes": 6873,
                      "children": [
                        {
                          "resourceBytes": 18548,
                          "children": [
                            {
                              "name": "constants.js",
                              "resourceBytes": 4981,
                              "unusedBytes": 1307
                            },
                            {
                              "name": "sheet",
                              "unusedBytes": 699,
                              "children": [
                                {
                                  "resourceBytes": 484,
                                  "unusedBytes": 246,
                                  "name": "Tag.js"
                                },
                                {
                                  "resourceBytes": 1812,
                                  "unusedBytes": 453,
                                  "name": "Sheet.js"
                                }
                              ],
                              "resourceBytes": 2296
                            },
                            {
                              "name": "utils/isStaticRules.js",
                              "resourceBytes": 3048,
                              "unusedBytes": 885
                            },
                            {
                              "children": [
                                {
                                  "unusedBytes": 887,
                                  "resourceBytes": 4356,
                                  "name": "Keyframes.js"
                                },
                                {
                                  "unusedBytes": 482,
                                  "name": "StyledComponent.js",
                                  "resourceBytes": 2216
                                },
                                {
                                  "resourceBytes": 1337,
                                  "name": "GlobalStyle.js",
                                  "unusedBytes": 522
                                },
                                {
                                  "resourceBytes": 314,
                                  "name": "ServerStyleSheet.js",
                                  "unusedBytes": 242
                                }
                              ],
                              "unusedBytes": 2133,
                              "name": "models",
                              "resourceBytes": 8223
                            }
                          ],
                          "name": "src",
                          "unusedBytes": 5024
                        },
                        {
                          "name": "../src",
                          "children": [
                            {
                              "unusedBytes": 447,
                              "resourceBytes": 827,
                              "name": "file.ts"
                            },
                            {
                              "resourceBytes": 1435,
                              "unusedBytes": 1402,
                              "name": "file-selector.ts"
                            }
                          ],
                          "resourceBytes": 2262,
                          "unusedBytes": 1849
                        }
                      ],
                      "resourceBytes": 20810,
                      "name": ".."
                    }
                  ],
                  "resourceBytes": 252368,
                  "name": ".."
                },
                {
                  "unusedBytes": 736,
                  "name": "(unmapped)",
                  "resourceBytes": 4831
                }
              ]
            },
            {
              "resourceBytes": 13352,
              "name": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
              "unusedBytes": 3760
            },
            {
              "resourceBytes": 115151,
              "name": "https://www.googletagmanager.com/gtag/js?id=UA-11098259-7&l=dataLayer&cx=c",
              "unusedBytes": 56568
            },
            {
              "resourceBytes": 50234,
              "name": "https://www.google-analytics.com/analytics.js",
              "unusedBytes": 17023
            },
            {
              "unusedBytes": 99484,
              "name": "https://mc.yandex.ru/metrika/tag.js",
              "resourceBytes": 216449
            },
            {
              "unusedBytes": 6711,
              "name": "https://softteco.co/static/js/main.59777189.chunk.js",
              "children": [
                {
                  "unusedBytes": 713,
                  "resourceBytes": 980,
                  "name": "utils.js"
                },
                {
                  "unusedBytes": 20,
                  "name": "constants",
                  "children": [
                    {
                      "resourceBytes": 333,
                      "name": "system.js"
                    },
                    {
                      "name": "design.js",
                      "unusedBytes": 20,
                      "resourceBytes": 619
                    },
                    {
                      "resourceBytes": 237,
                      "name": "contacts.js"
                    }
                  ],
                  "resourceBytes": 1189
                },
                {
                  "children": [
                    {
                      "children": [
                        {
                          "name": "validation.js",
                          "resourceBytes": 392,
                          "unusedBytes": 384
                        },
                        {
                          "name": "Field.jsx",
                          "unusedBytes": 80,
                          "resourceBytes": 1535
                        },
                        {
                          "name": "Input.jsx",
                          "resourceBytes": 142
                        },
                        {
                          "name": "Textarea.jsx",
                          "resourceBytes": 173
                        },
                        {
                          "unusedBytes": 1296,
                          "name": "Attachment",
                          "resourceBytes": 3966,
                          "children": [
                            {
                              "name": "File.jsx",
                              "resourceBytes": 1038,
                              "unusedBytes": 608
                            },
                            {
                              "name": "Files.jsx",
                              "unusedBytes": 167,
                              "resourceBytes": 455
                            },
                            {
                              "name": "index.js",
                              "unusedBytes": 521,
                              "resourceBytes": 2473
                            }
                          ]
                        },
                        {
                          "name": "constants.js",
                          "resourceBytes": 167,
                          "unusedBytes": 4
                        },
                        {
                          "resourceBytes": 1394,
                          "name": "Checkbox.jsx"
                        }
                      ],
                      "name": "FormFields",
                      "unusedBytes": 1764,
                      "resourceBytes": 7769
                    },
                    {
                      "resourceBytes": 1337,
                      "name": "Button/index.js"
                    },
                    {
                      "name": "Modal/index.js",
                      "resourceBytes": 2412,
                      "unusedBytes": 587
                    },
                    {
                      "name": "Animation",
                      "resourceBytes": 428,
                      "children": [
                        {
                          "resourceBytes": 217,
                          "name": "Animated.jsx"
                        },
                        {
                          "resourceBytes": 211,
                          "name": "Slide.js"
                        }
                      ]
                    },
                    {
                      "name": "Banner",
                      "resourceBytes": 5155,
                      "children": [
                        {
                          "unusedBytes": 44,
                          "name": "constants.js",
                          "resourceBytes": 165
                        },
                        {
                          "unusedBytes": 1280,
                          "resourceBytes": 4990,
                          "name": "index.js"
                        }
                      ],
                      "unusedBytes": 1324
                    },
                    {
                      "resourceBytes": 2971,
                      "children": [
                        {
                          "name": "Menu.jsx",
                          "resourceBytes": 1187
                        },
                        {
                          "unusedBytes": 129,
                          "resourceBytes": 1784,
                          "name": "index.js"
                        }
                      ],
                      "unusedBytes": 129,
                      "name": "Header"
                    },
                    {
                      "unusedBytes": 255,
                      "resourceBytes": 3573,
                      "children": [
                        {
                          "name": "index.js",
                          "resourceBytes": 3189,
                          "unusedBytes": 255
                        },
                        {
                          "name": "constants.js",
                          "resourceBytes": 384
                        }
                      ],
                      "name": "Home"
                    },
                    {
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 1187
                        },
                        {
                          "name": "Item.jsx",
                          "resourceBytes": 665
                        },
                        {
                          "name": "index.js",
                          "resourceBytes": 455
                        }
                      ],
                      "resourceBytes": 2307,
                      "name": "AboutUs"
                    },
                    {
                      "unusedBytes": 78,
                      "resourceBytes": 1612,
                      "name": "Video",
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 113
                        },
                        {
                          "resourceBytes": 1499,
                          "unusedBytes": 78,
                          "name": "index.js"
                        }
                      ]
                    },
                    {
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 1975
                        },
                        {
                          "resourceBytes": 3099,
                          "name": "ListItem.jsx"
                        },
                        {
                          "resourceBytes": 335,
                          "name": "List.jsx"
                        },
                        {
                          "resourceBytes": 1577,
                          "unusedBytes": 80,
                          "name": "Slide.jsx"
                        },
                        {
                          "resourceBytes": 1307,
                          "name": "index.js"
                        }
                      ],
                      "name": "Slider",
                      "unusedBytes": 80,
                      "resourceBytes": 8293
                    },
                    {
                      "name": "Awards",
                      "children": [
                        {
                          "resourceBytes": 505,
                          "name": "constants.js"
                        },
                        {
                          "resourceBytes": 1867,
                          "name": "index.js"
                        }
                      ],
                      "resourceBytes": 2372
                    },
                    {
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 5331
                        },
                        {
                          "resourceBytes": 714,
                          "name": "Devices.jsx"
                        },
                        {
                          "resourceBytes": 5423,
                          "name": "Project.jsx",
                          "unusedBytes": 82
                        },
                        {
                          "resourceBytes": 1330,
                          "name": "index.js",
                          "unusedBytes": 24
                        }
                      ],
                      "resourceBytes": 12798,
                      "unusedBytes": 106,
                      "name": "Catalog"
                    },
                    {
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 509
                        },
                        {
                          "unusedBytes": 55,
                          "resourceBytes": 1196,
                          "name": "Logo.jsx"
                        },
                        {
                          "resourceBytes": 428,
                          "name": "index.js"
                        }
                      ],
                      "name": "Customers",
                      "unusedBytes": 55,
                      "resourceBytes": 2133
                    },
                    {
                      "resourceBytes": 9240,
                      "unusedBytes": 1270,
                      "children": [
                        {
                          "name": "constants.js",
                          "resourceBytes": 345
                        },
                        {
                          "name": "Address.jsx",
                          "resourceBytes": 825
                        },
                        {
                          "name": "Info.jsx",
                          "resourceBytes": 1664
                        },
                        {
                          "resourceBytes": 5670,
                          "name": "Form.jsx",
                          "unusedBytes": 1270
                        },
                        {
                          "name": "index.js",
                          "resourceBytes": 736
                        }
                      ],
                      "name": "Contacts"
                    },
                    {
                      "resourceBytes": 7543,
                      "name": "PrivacyPolicy/index.js"
                    },
                    {
                      "name": "Footer",
                      "resourceBytes": 1845,
                      "children": [
                        {
                          "resourceBytes": 821,
                          "name": "SocialNetworks.jsx"
                        },
                        {
                          "resourceBytes": 1024,
                          "name": "index.js"
                        }
                      ]
                    }
                  ],
                  "name": "components",
                  "resourceBytes": 71788,
                  "unusedBytes": 5648
                },
                {
                  "name": "images",
                  "children": [
                    {
                      "resourceBytes": 47,
                      "name": "light-close.svg"
                    },
                    {
                      "name": "logo.svg",
                      "resourceBytes": 40
                    },
                    {
                      "name": "logo-lg.svg",
                      "resourceBytes": 43
                    },
                    {
                      "name": "color-logo.svg",
                      "resourceBytes": 46
                    },
                    {
                      "resourceBytes": 43,
                      "name": "home-bg.svg"
                    },
                    {
                      "resourceBytes": 46,
                      "name": "home-bg-lg.svg"
                    },
                    {
                      "name": "play.svg",
                      "resourceBytes": 40
                    },
                    {
                      "resourceBytes": 48,
                      "name": "icons-sprite.svg"
                    },
                    {
                      "resourceBytes": 741,
                      "name": "awards",
                      "children": [
                        {
                          "name": "good-firms.jpg",
                          "resourceBytes": 46
                        },
                        {
                          "name": "good-firms@2x.jpg",
                          "resourceBytes": 49
                        },
                        {
                          "name": "network-belarus.svg",
                          "resourceBytes": 51
                        },
                        {
                          "name": "softwareworld.png",
                          "resourceBytes": 49
                        },
                        {
                          "resourceBytes": 52,
                          "name": "softwareworld@2x.png"
                        },
                        {
                          "resourceBytes": 72,
                          "name": "top-mobile-app-development-companies.png"
                        },
                        {
                          "resourceBytes": 42,
                          "name": "clutch.png"
                        },
                        {
                          "resourceBytes": 45,
                          "name": "clutch@2x.png"
                        },
                        {
                          "name": "iso-27001.png",
                          "resourceBytes": 45
                        },
                        {
                          "resourceBytes": 48,
                          "name": "iso-27001@2x.png"
                        },
                        {
                          "name": "htp.svg",
                          "resourceBytes": 39
                        },
                        {
                          "name": "best-it-companies.svg",
                          "resourceBytes": 53
                        },
                        {
                          "resourceBytes": 51,
                          "name": "digital-knights.svg"
                        },
                        {
                          "name": "best-it-companies-2.svg",
                          "resourceBytes": 55
                        },
                        {
                          "name": "iso-9001.svg",
                          "resourceBytes": 44
                        }
                      ]
                    },
                    {
                      "resourceBytes": 46,
                      "name": "arrow-down.svg"
                    },
                    {
                      "resourceBytes": 39,
                      "name": "via.jpg"
                    },
                    {
                      "name": "via@2x.jpg",
                      "resourceBytes": 42
                    },
                    {
                      "name": "bridges.jpg",
                      "resourceBytes": 43
                    },
                    {
                      "name": "bridges@2x.jpg",
                      "resourceBytes": 46
                    },
                    {
                      "resourceBytes": 42,
                      "name": "bubcon.jpg"
                    },
                    {
                      "name": "bubcon@2x.jpg",
                      "resourceBytes": 45
                    },
                    {
                      "name": "bsb-bank.jpg",
                      "resourceBytes": 44
                    },
                    {
                      "name": "bsb-bank@2x.jpg",
                      "resourceBytes": 47
                    },
                    {
                      "name": "evoz.jpg",
                      "resourceBytes": 40
                    },
                    {
                      "name": "evoz@2x.jpg",
                      "resourceBytes": 43
                    },
                    {
                      "resourceBytes": 45,
                      "name": "blueprint.jpg"
                    },
                    {
                      "name": "blueprint@2x.jpg",
                      "resourceBytes": 48
                    },
                    {
                      "resourceBytes": 43,
                      "name": "desktop.svg"
                    },
                    {
                      "name": "mobile.svg",
                      "resourceBytes": 42
                    },
                    {
                      "name": "tablet.svg",
                      "resourceBytes": 42
                    },
                    {
                      "name": "customers",
                      "resourceBytes": 1344,
                      "children": [
                        {
                          "name": "samsung.svg",
                          "resourceBytes": 43
                        },
                        {
                          "resourceBytes": 46,
                          "name": "samsung-lg.svg"
                        },
                        {
                          "resourceBytes": 49,
                          "name": "color-samsung.svg"
                        },
                        {
                          "resourceBytes": 44,
                          "name": "evernote.svg"
                        },
                        {
                          "resourceBytes": 47,
                          "name": "evernote-lg.svg"
                        },
                        {
                          "name": "color-evernote.svg",
                          "resourceBytes": 50
                        },
                        {
                          "name": "the-world-bank.svg",
                          "resourceBytes": 50
                        },
                        {
                          "resourceBytes": 53,
                          "name": "the-world-bank-lg.svg"
                        },
                        {
                          "name": "color-the-world-bank.svg",
                          "resourceBytes": 56
                        },
                        {
                          "name": "barnes-and-noble.svg",
                          "resourceBytes": 52
                        },
                        {
                          "resourceBytes": 55,
                          "name": "barnes-and-noble-lg.svg"
                        },
                        {
                          "name": "color-barnes-and-noble.svg",
                          "resourceBytes": 58
                        },
                        {
                          "resourceBytes": 46,
                          "name": "volkswagen.svg"
                        },
                        {
                          "resourceBytes": 49,
                          "name": "volkswagen-lg.svg"
                        },
                        {
                          "name": "color-volkswagen.svg",
                          "resourceBytes": 52
                        },
                        {
                          "resourceBytes": 44,
                          "name": "bsb-bank.svg"
                        },
                        {
                          "resourceBytes": 47,
                          "name": "bsb-bank-lg.svg"
                        },
                        {
                          "resourceBytes": 50,
                          "name": "color-bsb-bank.svg"
                        },
                        {
                          "resourceBytes": 42,
                          "name": "kinvey.svg"
                        },
                        {
                          "name": "kinvey-lg.svg",
                          "resourceBytes": 45
                        },
                        {
                          "name": "color-kinvey.svg",
                          "resourceBytes": 48
                        },
                        {
                          "resourceBytes": 45,
                          "name": "blueprint.svg"
                        },
                        {
                          "resourceBytes": 48,
                          "name": "blueprint-lg.svg"
                        },
                        {
                          "resourceBytes": 51,
                          "name": "color-blueprint.svg"
                        },
                        {
                          "resourceBytes": 55,
                          "name": "johnson-and-johnson.svg"
                        },
                        {
                          "resourceBytes": 58,
                          "name": "johnson-and-johnson-lg.svg"
                        },
                        {
                          "resourceBytes": 61,
                          "name": "color-johnson-and-johnson.svg"
                        }
                      ]
                    },
                    {
                      "resourceBytes": 45,
                      "name": "footer-bg.svg"
                    },
                    {
                      "resourceBytes": 41,
                      "name": "linkedin.svg"
                    },
                    {
                      "resourceBytes": 40,
                      "name": "twitter.svg"
                    },
                    {
                      "resourceBytes": 41,
                      "name": "facebook.svg"
                    },
                    {
                      "resourceBytes": 44,
                      "name": "file-add.svg"
                    },
                    {
                      "name": "file-pending.svg",
                      "resourceBytes": 48
                    },
                    {
                      "name": "file-done.svg",
                      "resourceBytes": 45
                    },
                    {
                      "resourceBytes": 48,
                      "name": "file-failure.svg"
                    },
                    {
                      "name": "file-remove.svg",
                      "resourceBytes": 47
                    },
                    {
                      "resourceBytes": 41,
                      "name": "check.svg"
                    },
                    {
                      "resourceBytes": 43,
                      "name": "logo-xs.svg"
                    }
                  ],
                  "resourceBytes": 3618
                },
                {
                  "unusedBytes": 151,
                  "resourceBytes": 756,
                  "name": "hoc/withActions.js"
                },
                {
                  "name": "containers",
                  "children": [
                    {
                      "resourceBytes": 988,
                      "name": "Wrapper/index.js"
                    },
                    {
                      "resourceBytes": 1338,
                      "name": "Container/index.js"
                    }
                  ],
                  "resourceBytes": 2326
                },
                {
                  "resourceBytes": 244,
                  "name": "fonts",
                  "children": [
                    {
                      "name": "Inter-Regular.ttf",
                      "resourceBytes": 49
                    },
                    {
                      "resourceBytes": 48,
                      "name": "Inter-Medium.ttf"
                    },
                    {
                      "name": "Inter-SemiBold.ttf",
                      "resourceBytes": 50
                    },
                    {
                      "resourceBytes": 46,
                      "name": "Inter-Bold.ttf"
                    },
                    {
                      "name": "Inter-ExtraBold.ttf",
                      "resourceBytes": 51
                    }
                  ]
                },
                {
                  "resourceBytes": 1069,
                  "name": "styles/globalStyles.js"
                },
                {
                  "name": "App.js",
                  "resourceBytes": 659,
                  "unusedBytes": 179
                },
                {
                  "resourceBytes": 112,
                  "name": "index.js"
                },
                {
                  "resourceBytes": 655,
                  "name": "(unmapped)"
                }
              ],
              "resourceBytes": 83396
            }
          ]
        }
      },
      "main-thread-tasks": {
        "id": "main-thread-tasks",
        "title": "Tasks",
        "description": "Lists the toplevel main thread tasks that executed during page load.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "headings": [
            {
              "granularity": 1,
              "label": "Start Time",
              "key": "startTime",
              "valueType": "ms"
            },
            {
              "valueType": "ms",
              "label": "End Time",
              "granularity": 1,
              "key": "duration"
            }
          ],
          "items": [
            {
              "duration": 9.243,
              "startTime": 60.364
            },
            {
              "duration": 12.318,
              "startTime": 115.08
            },
            {
              "startTime": 171.078,
              "duration": 24.559
            },
            {
              "duration": 7.409,
              "startTime": 200.433
            },
            {
              "duration": 8.887,
              "startTime": 215.501
            },
            {
              "startTime": 230.331,
              "duration": 12.988
            },
            {
              "duration": 8.096,
              "startTime": 251.572
            },
            {
              "startTime": 260.011,
              "duration": 21.401
            },
            {
              "startTime": 281.45,
              "duration": 37.147
            },
            {
              "duration": 5.394,
              "startTime": 321.295
            },
            {
              "startTime": 790.029,
              "duration": 8.313
            },
            {
              "duration": 14.515,
              "startTime": 799.581
            },
            {
              "startTime": 2124.765,
              "duration": 314.523
            },
            {
              "duration": 22.026,
              "startTime": 2439.319
            },
            {
              "startTime": 2462.388,
              "duration": 5.463
            },
            {
              "duration": 18.894,
              "startTime": 2467.894
            },
            {
              "duration": 5.859,
              "startTime": 2490.671
            },
            {
              "duration": 9.199,
              "startTime": 2501.99
            },
            {
              "duration": 26.287,
              "startTime": 2516.375
            },
            {
              "startTime": 2542.975,
              "duration": 18.577
            },
            {
              "startTime": 2561.736,
              "duration": 24.394
            },
            {
              "duration": 9.299,
              "startTime": 2589.107
            },
            {
              "startTime": 2598.424,
              "duration": 20.273
            },
            {
              "duration": 7.361,
              "startTime": 2618.998
            },
            {
              "duration": 38.304,
              "startTime": 2626.53
            },
            {
              "duration": 20.611,
              "startTime": 2666.26
            },
            {
              "startTime": 2688.553,
              "duration": 5.119
            },
            {
              "duration": 20.062,
              "startTime": 2739.865
            },
            {
              "duration": 10.827,
              "startTime": 2919.895
            },
            {
              "duration": 9.665,
              "startTime": 3031.879
            },
            {
              "duration": 10.997,
              "startTime": 3041.557
            },
            {
              "duration": 8.912,
              "startTime": 3143.89
            },
            {
              "startTime": 3359.893,
              "duration": 10.027
            },
            {
              "duration": 9.754,
              "startTime": 3471.893
            },
            {
              "startTime": 3521.757,
              "duration": 7.641
            },
            {
              "startTime": 3529.41,
              "duration": 7.816
            },
            {
              "duration": 7.279,
              "startTime": 3537.279
            },
            {
              "startTime": 3544.594,
              "duration": 10.604
            },
            {
              "startTime": 3565.516,
              "duration": 8.241
            },
            {
              "startTime": 3581.368,
              "duration": 20.926
            },
            {
              "startTime": 3605.142,
              "duration": 14.834
            },
            {
              "startTime": 3620.014,
              "duration": 11.869
            },
            {
              "duration": 16.447,
              "startTime": 3632.509
            },
            {
              "duration": 6.742,
              "startTime": 3658.638
            },
            {
              "duration": 14.806,
              "startTime": 3668.798
            },
            {
              "duration": 38.259,
              "startTime": 3685.801
            },
            {
              "startTime": 3724.117,
              "duration": 9.536
            },
            {
              "duration": 16.652,
              "startTime": 3835.888
            },
            {
              "startTime": 4259.92,
              "duration": 7.804
            },
            {
              "startTime": 5552.862,
              "duration": 7.96
            },
            {
              "startTime": 5565.416,
              "duration": 7.525
            },
            {
              "startTime": 6586.362,
              "duration": 5.615
            }
          ],
          "type": "table"
        }
      },
      "unused-css-rules": {
        "id": "unused-css-rules",
        "title": "Reduce unused CSS",
        "description": "Reduce unused rules from stylesheets and defer CSS not used for above-the-fold content to decrease bytes consumed by network activity. [Learn how to reduce unused CSS](https://developer.chrome.com/docs/lighthouse/performance/unused-css-rules/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "items": [],
          "overallSavingsMs": 0,
          "overallSavingsBytes": 0,
          "headings": [],
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "speed-index": {
        "id": "speed-index",
        "title": "Speed Index",
        "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more about the Speed Index metric](https://developer.chrome.com/docs/lighthouse/performance/speed-index/).",
        "score": 0.52,
        "scoreDisplayMode": "numeric",
        "displayValue": "2.2 s",
        "numericValue": 2233.069174666377,
        "numericUnit": "millisecond"
      },
      "uses-optimized-images": {
        "id": "uses-optimized-images",
        "title": "Efficiently encode images",
        "description": "Optimized images load faster and consume less cellular data. [Learn how to efficiently encode images](https://developer.chrome.com/docs/lighthouse/performance/uses-optimized-images/).",
        "score": 0.5,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 1,065 KiB",
        "details": {
          "headings": [
            {
              "valueType": "node",
              "key": "node"
            },
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            },
            {
              "key": "totalBytes",
              "valueType": "bytes",
              "label": "Resource Size"
            },
            {
              "label": "Potential Savings",
              "key": "wastedBytes",
              "valueType": "bytes"
            }
          ],
          "overallSavingsMs": 760,
          "items": [
            {
              "totalBytes": 303286,
              "wastedBytes": 226663,
              "fromProtocol": true,
              "isCrossOrigin": false,
              "url": "https://softteco.co/static/media/blueprint.4ef0da2b.jpg"
            },
            {
              "fromProtocol": true,
              "wastedBytes": 191425,
              "isCrossOrigin": false,
              "url": "https://softteco.co/static/media/bridges.3b497c49.jpg",
              "totalBytes": 267894
            },
            {
              "url": "https://softteco.co/static/media/bubcon.e0ef8d9c.jpg",
              "fromProtocol": true,
              "isCrossOrigin": false,
              "wastedBytes": 185929,
              "totalBytes": 238134
            },
            {
              "url": "https://softteco.co/static/media/via.d87dbe6c.jpg",
              "fromProtocol": true,
              "isCrossOrigin": false,
              "wastedBytes": 182693,
              "totalBytes": 239096
            },
            {
              "fromProtocol": true,
              "isCrossOrigin": false,
              "totalBytes": 198799,
              "wastedBytes": 138473,
              "url": "https://softteco.co/static/media/bsb-bank.36738990.jpg"
            },
            {
              "fromProtocol": true,
              "totalBytes": 185415,
              "isCrossOrigin": false,
              "wastedBytes": 134104,
              "url": "https://softteco.co/static/media/evoz.6b89ca34.jpg"
            },
            {
              "fromProtocol": true,
              "node": {
                "lhId": "1-30-IMG",
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "type": "node",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,28,LI,0,IMG",
                "boundingRect": {
                  "left": 4276,
                  "bottom": 4241,
                  "top": 4123,
                  "height": 118,
                  "right": 4413,
                  "width": 137
                },
                "nodeLabel": "Good Firm"
              },
              "isCrossOrigin": false,
              "wastedBytes": 31741,
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg",
              "totalBytes": 65539
            }
          ],
          "type": "opportunity",
          "overallSavingsBytes": 1091028
        },
        "warnings": [],
        "numericValue": 760,
        "numericUnit": "millisecond"
      },
      "unminified-javascript": {
        "id": "unminified-javascript",
        "title": "Minify JavaScript",
        "description": "Minifying JavaScript files can reduce payload sizes and script parse time. [Learn how to minify JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "overallSavingsMs": 0,
          "type": "opportunity",
          "headings": [],
          "items": [],
          "overallSavingsBytes": 0
        },
        "warnings": [],
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "viewport": {
        "id": "viewport",
        "title": "Has a `\u003cmeta name=\"viewport\"\u003e` tag with `width` or `initial-scale`",
        "description": "A `\u003cmeta name=\"viewport\"\u003e` not only optimizes your app for mobile screen sizes, but also prevents [a 300 millisecond delay to user input](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/). [Learn more about using the viewport meta tag](https://developer.chrome.com/docs/lighthouse/pwa/viewport/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "warnings": []
      },
      "screenshot-thumbnails": {
        "id": "screenshot-thumbnails",
        "title": "Screenshot Thumbnails",
        "description": "This is what the load of your site looked like.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "type": "filmstrip",
          "items": [
            {
              "timing": 467,
              "timestamp": 214010986753,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
            },
            {
              "timing": 934,
              "timestamp": 214011453753,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k="
            },
            {
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
              "timing": 1401,
              "timestamp": 214011920753
            },
            {
              "timestamp": 214012387753,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
              "timing": 1868
            },
            {
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAj/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//9k=",
              "timing": 2335,
              "timestamp": 214012854753
            },
            {
              "timing": 2802,
              "data": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAFcAfQDASIAAhEBAxEB/8QAHQABAAICAwEBAAAAAAAAAAAAAAYHBQgBAwQCCf/EAFwQAAEDAgIFBA0HBwkFBwMFAAEAAgMEBQYRBxIhMUETUXGxCBQiMjZhcnOBkaGy0RY0NUJSdMEVFyNUkpPCGDNDU1Vig6LSJEVWgtM3OFd1lLO0JWPhlcPj8PH/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EADcRAAICAQEHAQUHAwUBAQAAAAABAgMEEQUSITEzQXEyE1FhgbEUIjSRodHwFRbBBiNCUnLhU//aAAwDAQACEQMRAD8A1UREQBERAEREAREQBERAEREAREQBERAEREARF9BricgCegID5RfWq4jPI5Z5Z5cUDHOGYaSOcBAfKLkAncChBBIIII4FAcIi5aC4gNBJPAIDhF9BjyMw12XQha4HIg582SA+UX0GOOWTSc9g2Lggg5EEHmKA4RFy1pccmgk+IIDhF9BriAQ05E5DZxXPJv29w7Zv2bkB8IvoseCc2uGQzOzguMjzFAcIuSC0kEEEcCuEAREQBERAEREAREQBERAEREAREQBERAEUl0eYNuePMUU1kszW8tIC+SV/eQxjvnu8Q2dJIHFbR2/sUcMMpWC4368zVGXdPg5KJhPiaWuI9aA03Rbo/wAlPBv9r4g/ew/9NP5KeDf7XxB+9h/6aA0uRbo/yU8G/wBr4g/ew/8ATT+Sng3+18QfvYf+mgNLkW5lT2KWE3QuFNe77HLl3LpHRPaD4wGDP1rWvS3o5umjbEYttxe2oppmmSlq2NybMzPI7ODhxHjHOgIOiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCsS0Y1tVJRwUxpauDtSn7Xp5ohrOIdqukLgHsIzezWADtmu7oNdogLG+XlEy6CujirtRsxeKA6ohd/tPLcoTn3+WzLV3gHWy2LEPxRHR2ye3WqouAp3W/tNrzlEXvNTyxc5rXEAapc3efaogiAmdlxPQ2+no5P8AbG1kcDKV+pGwtY1sxlEjSXbTuGrkOPdDYsHiq4wXW9y1dKJuTcxjc5SdYlrA0na5xA2bi45c6xCIAs1hK6R2i7dszPmYwxujLom6xGYy3azTlw2Oadu/gcKiAsuox5by2jkp214dTGoIhfrFry+SZzSXib/7oz7nW2HuuK8NTjinqH9sPppxVMbG2DutYQgtYycaziXOBbGA3WOY1nZk7zAkQFiUuNaCO6RVjpbpHEI3R9pxgcjETDJHyjcnglxL9Ygau1zu6KhV9qo627VNTFJLIyR2YdK0hx2DeC95/wAxXgRAFnsJ375PvuMrYjLLUU3IR929gB5WN+ZLHNdlkw7jzcFgUQFhUOPIY6tldViqkmPJl9GxobTxvbKJDKzJ2Yc7I7AB37u64Lzy46kkeXMdWwxyQ07JIGSuLAWSZv2ucXODgPrEkZ6u4BQVEBPKfHDZLjJV1hrIdWqbUCOne54qGNz/AEMhe8kNOZ+0BrO7k5rrp8T2ulrpquBta6SpgijeDE1na7mxhmvGdc6xB7ppIbtA9EHRAZjElyjuVRSmJ883a8AhdUVAAlnIc52s4ZncHBo2nY0LDoiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgNiewrudDS45vNDUljKysox2s52wu1HZuaPGQQcv7pW2mKqCsuVmkprdPyM5kjf/ADr4tdrXtc5hezum6zQW5jaM1+ZVBWVNvrIauhnlp6qF4fHLE4tcxw3EEbirit/ZK6QqSkjhkqLdVuYMuVnpe7d06pA9iA2muGEcSVLpBBe304fSciJGVkxcw8jqagacwe7/AEnKnu89m5cOwbiN1GQ/ED3XB8NTA+p5eZrRys4c2QRhwAc2IvAyyyOWRyAI1i/lPY/+zZv/AEjv9afynsf/AGbN/wCkd/rQG09rwvfmvkbd7p21r0Yp+XjrJ4yHCNrNkYIaM3NMhfnrAuLdwzXoq8OXsQWGCguZYyliZFWOkqZS55EsMjngnMvJEb2d0RskO3gdUP5T2P8A7Nm/9I7/AFp/Kex/9mzf+kd/rQG4GBLTc7LZDSXmrNXUCUubI6d8ztXId894GZzBOwADPpJ177N650LqbDNrDmOuLXy1BA76OIgN2+UR/lKr+o7JrSDLC9jH2qFzhkJI6Tum+MZuI9YVQ328XG/3We5XmsmrK6c60k0rs3H4DmA2BAY9ERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBF6hb6wjMU02XkFPyfWfqs37BXujMt2XuPKi5c0scWuBDgciDwXC8MQiLtpqeWqmbDTxvlldua0ZkoEteCOpFMrfo9u9SwPqDDSg8Hu1neoL3SaM6sMzjuEDnczmEfFTrGta1UTbWDkNaqDK/RZ29YVutoa59RTl8A3yxnWb6eI9KwSilFxekka84SreklowiIsTAIu2GnmnB5GJ8mW/Vbnku38n1n6rN+wV7oz3RnlRd09NNABy0T4892s0jNdK8PAiIgCLO2bC11uzWvp6csgO6WQ6rfRxPoUii0a1ZbnJXwNdzNYSPwU8MW2xaxiSxpsktUiAIpjcNH12pmF9OYaoDgx2q71FROpglppnQ1Eb4pW72vGRCwspnV61oYyhKHqR1IiKMwCLlrS5wa0EuJyAHFentCs/VZ/2CvUm+QPKi9JoKsDM00wHkFeZGmuYCIi8ARemgoaq4TiGigfNIeDRu6eZSyj0d3OVgdUzQU+f1cy4j1bPap6sa27px1PdNSFIp3Po4rWtzgraeQ8zmlvxUYvFhuNoP+3UzmMzyEg2tPpC9txLqlrOLSPNDFoiLXARF3xUtRKzWigle3na0kL1JvkDoRentCr/AFWf92V1TQyQuDZo3xuIzycMiji1zQOtEReAIuVIrVg273BgfyIp4judMdXP0b/YpaqbLnu1xbZ45KPMjiKejRxVamZr4dbm1Dl61irngi8UTC+ONlUwb+ROZHoOR9S2J7NyoLelB/X6GCtg+5F0X09rmOLXgtcDkQRkQvlaRIERfccb5XhkbHPcdwaMynMHwi9PaFX+qz/sFcSUdTGwukp5WtG8lhACy3Je481R50RctaXuDWglxOQA4rE9OEXp7Qq/1Wf9goaGrAJNNMAOOoVluS9x5qjzIiLE9CL09oVf6tN+wVz2hV/qs/7BWW5L3HmqPKi5IIJBGRHBcLE9CIiA2Oo/mkPkDqXauqj+aQ+QOpdqvI8j6H2Rr9iXwguPn39axqyWJfCC4+ff1rGqklzZ8/t9b8nstNuqLrXxUlI3WlkPoA4k+JXdhrD9HYqUR07A6cj9JMR3Tj+A8SjWii1thts1xe39JO7UYeZrTt9Z6lPQrPEpUY775s6LZeHGFaukvvP9EERFvItGcEAggjMFVtj/AAfHHFJcrVGGBu2aFu7L7Q5vGFZS+XAOBDgCDsIKwtqjbHdZqZGPG+G7I1vRZjFltFqv9XSsGUQdrR+SRmOvJYdUMouLcX2OTnFwk4vsWbof+b3Lyo/4lYfFV5of+b3Lyo/4lYfFX2F0Y/zuX+F0I/zuV5pf+b23y5P4VWSs3S/83tvlyfwqslV53Wfy+hU53Xfy+gVj4BwhHJFHcrrGHB22GF27L7R5/EFEMJ20Xa/0lK8ZxF2tJ5IGZ6svSr3ADWgNAAGwALY2fjKx+0lyRnh0Kf35dgAAAAMgERFeIsWFhsSWCjvtKY6hobOB+jmA7pp/EeJZlcFeShGa3ZLVEUoqS0Zr7dbfPa6+Wkqm6ssZy8RHAjxLxq0tK1sbLbobixv6SF2o887Tu9R61Vq5nKo9hY4dipth7OWhkMPfT1u+8M94K/eCoLD309bvvDPeCv3grXZHpl5Jsfkzprfmk3kHqWvC2Hrfmk3kHqWvCw2xzh8/8GOR2Cy+GbJPfbiKeLuYm91LJlsY34rEK6NH9sbbsOwPLRy1SOVefEe9Hq6ytLAxlkW6PkuLIYx1Zl7Ra6S00jaeiiDGDeeLjzk8V7SiFdbGKit2K0RKzhfM8Uc8To5mNfG4ZOa4ZghfSFZ6akbKlx3hX8kyduULSaF5yc3fyR+Chy2Dr6WKupJqadutFK0tcOlUHXUz6OsnppO/ieWHpByXL7UxFRNThyf1MDoVv6M/BaPzr+tVArf0Z+C0fnX9a92L+I+T/wAGM+RLCqo0q/T9P93HvOVrlVRpV+n6f7uPecrjbH4Z+URw5kLXLQXEBoJJ2ABcKV6OLY2uvwmlbnFSt5TI7i7c34+hcvRS77I1x7ksnotSW4KwlFboY6y4RiSucNZrXbRF/wDnxqYLkLhd3j48MeChWuBoTk5PVhERbBCyNYtwvT3qndLC1sVe0dy8bA/xO+KqCeGSCZ8UzCyRhLXNO8ELYPgqx0pWxsFfT18TchUAtky+0Nx9I6lz228GO59ogtGuf7mxjWvXcZBlJNHnhZR9D/cKjakmjzwso+h/uFUOD+Jr/wDS+ptXdOXguNYTGngvcPN/iFm1hMaeC9w83+IXe5fQn4f0KWr1x8opNZLDfhBbfvDPeCxqyWG/CC2/eGe8F89o6sfKLyfpZei89w+YVPmndRXoXnuHzCp807qK+lz9LOYXNFAr6j79vSvlfUfft6V8vR1JsE3cOhc864buHQuedfVkcayg7n9I1XnXda8y9Nz+karzruteZfLLPUzsVyCIiwPTY6j+aQ+QOpdy6aP5pD5A6l3K8jyPofZGvuJfCC4+ff1rGrJYl8ILj59/WsaqSXNnz+31vyXrgZrW4Ttwbu1CfTrFZ0KIaMK5tThptPn+kpnlpHiJJB9p9Sl4V3S9a4te47HFkpUQa9yCIimRKwuCuVwVkiJlS6WWgX+nI3ugGfrKhCk2kSuFbieoDDmyACIHoG32kqMqhyGnbJr3nJ5UlK6TXvLN0P8Aze5eVH/ErD4qvND/AM3uXlR/xKw+KucLox/ncucLoR/ncrzS/wDN7b5Un8KrJWbpf+b23ypP4VWSq87rP5fQqc7ry+X0JtonaDiCoJ3inOX7QVslUro8rm0WJ6bXOTJgYiekbPbkrqVns1p1afE3MJp1afEIiKxNhhcFcrgrIwZgscMa/ClxDt2oD6Q4FUcrg0m1zabDboM/0lS9rAPECCT7B61T6oNqSTuSXZFZlP75kMPfT1u+8M94K/eCoLD309bvvDPeCv3gtvZHpl5Pcfkzprfmk3kHqWvC2IrPmk3kHqWu6w2xzh8/8GOR2C2GomtZRwNZ3ojaB0ZLXlXrhKtbcMO0MzTm4RhjvKbsPUmxpJTlHuR1mXQohXQmbOEKIVkRsfWVJ47Y1mLLiG7tdp9JaCVdbiG5uccgNpKoS/VguF5rKoHNsspLejh7MlTbbkvZRj31MDwK39GfgtH51/WqgVv6M/BaPzr+taOxfxHyf+DGfIlhVUaVfp+n+7j3nK1yqo0q/T9P93HvOVxtj8M/KI4cyFqydErW9r3J31i5g9HdKtlOdFVa2G6VVI85cuwOb4y3PZ6ifUqHZUlHKg3/ADgZW+lloBcLkLhdujRYREWRGzjgofpSaDh2IneKhuXqcpjwVfaV65ohoqFpBcSZnDmA2DrPqWjtSSjiT19xlStbEVwpJo88LKPof7hUbUk0eeFlH0P9wrjsH8TX/wCl9Swu6cvBcawmNPBe4eb/ABCzawmNPBe4eb/ELvcvoT8P6FLV64+Sk1ksN+EFt+8M94LGrJYb8ILb94Z7wXz2jqx8ovJ+ll6Lz3D5hU+ad1Fehee4fMKnzTuor6XP0s5hc0UCvqPv29K+V9R9+3pXy9HUmwTdw6Fzzrhu4dC5519WRxrKDuf0jVedd1rzL03P6RqvOu615l8ss9TOxXIIiLA9NjqP5pD5A6l3cFUsWki4xxtYKSmIaAPrfFfX5y7j+p0v+b4qzWVWdf8A1jF05v8AIiuJfCC4+ff1rGr0V9S6srZ6l4DXyvLyBuBJXnVa+LOSm96TaM/g2/OsN2ErszTSdzM0c3A9IV30s8VVAyene2SJ4za5u4rXFZzDmJq+xPyp369OTm6F/enxjmK2sbJ9n92XIstn7Q+z/wC3P0/QvYooVQaRbVO1vbkc1M/js12j0jb7F7ZcdWBjM21jnn7LYn5+0KyjfW1rvIu/tlElqpolCjONsRxWOgcyJwNdKMo2fZ/vFRq9aRy5jo7RTFhP9LLlmOhqr6rqZquofPUyOlmec3OcdpWtfmpLdr5ldl7SiouNPF+86nOLnFziS4nMk8VwiKrKEs3Q/wDN7l5Uf8SsPiqOwxiepw+ydtNDFIJi0nXz2ZZ83Ss5+cm4/qdL/m+KtsbLrrrUZPiW+NmVV1KEnxRktMHze2+VJ1NVZLP4nxPU4gZTtqYYoxCXEame3PLn6FgFo5VkbLXKPI0MqyNlrlHkctcWuDmkhwOYI4K6sFYjivdA1krgK6IZSMP1v7wVKLupKmakqGT00jopmHNrmnaF7i5Lx5a9jyi90y17GxKKtrLpGLWNju9MXkf0sO89LVIosc2B7M3VbmHmdE/P2BXteZTNa72nngWUciuS5knXTVTxUsD5qiRscTBm5ztwCiNfpEtcLT2nHNUv4bNRvrO32KAYixLX32TKoeGU4ObYWd6OnnKju2hVWvuvVkNmTCK4cWfWMb66+3UytzFNH3ELTzc/SVgURUE5uyTlLmytlJyerMhh76et33hnvBX7wWvNFUOpKyCoYAXRPDwDuJBzUy/ORcf1Sl/zfFWWz8uuiMlN8yaqxRT1LPrPmk3kHqWvBU2l0i3CSN7DSUoDgR9b4qELDaOTXkOO521PLZqWmgUv0fYjbaKt1LWOyo5z3x3Ru5+g8fQogi0qbpUzU480RJ6cTYtrg4AtIIO0EcVyVTOG8YV9ma2F2VTSDdG85FvkngpxR4/s07Ry5mp3cQ5hcPZmumo2lRauL3X8STeTJahUXqMdWKJmbKiSY/ZZE7P2gKLX7SBU1THQ2uI0zDs5Vxzf6OA9qlt2jj1LXe18cTBszOkTEjKWlktlHIDUyjKUj+jbzdJ6lVi+nuc95c9xc5xzJJzJK+VzGXlSybN+XyMQrf0Z+C0fnX9aqBSewYwq7Lbm0cFPBIwOLs3557egqfZuRDHu37OWhjJaouQqqNKv0/T/AHce85dn5xrj+qUv+b4qOYivU19rGVNRHHG9jAwBmeWWZPHpVhtHaFGRRuQfHUxjFpmKXfQ1UtFVw1NO7VlicHNK6EVAm09USF64evNPeqBlRTkB42SR57WO5lk1QdruNVa6ptRRTOikG/LcRzEcQp/atIlO9gbc6Z8cnF8PdNPoO0e1dXhbZqsio3PSX6M1LKWvST1FHG41sJZn24QeYxPz6li7npCoYmEUEEtRJwL+4b8VYz2hjQWrsXyev0IPZTfDQld1uFPa6F9VVvDI2etx4AeNUle7lLdrnNWT7C87G/ZbwC+73ea281HK1susB3rG7Gs6AsauX2ntJ5jUYcIr9Tbpp9nxfMKSaPPCyj6H+4VG177JcpLRcoqyBjHyR55NfnkcwR+K0cWxV3QnLkmn+pJZFyg0i+FhMaeC9w83+IUK/OLcP1Sl/wA3xXkuuN625W+eklpqdrJRqlzdbMbeldXkbZxZ1ShFvVp9vgVsMSxSTaImslhvwgtv3hnvBY1eigqXUdbBUsAc+F4eAdxIOa5GqSjOMn2ZaSWqaL+XnuHzCp807qKrj84lw/VKX/N8V8T6QK+aGSN1JSgPaWkjW4+ldpLbuG01q/yKP7BdrroQtfUfft6V8rkHIg8y4cvTYNu4dC551WA0iV4HzSl/zfFc/nEr/wBTpf8AN8V3v9fw/e/yOcezb/d+pEbn9I1XnXda8y7KiUzTySuABe4uIHjXWuEm9ZNo6JcgiIsT0IiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIpzhnANTXRtqLo91NAdojAze4fgs4QlN6RRNRj2ZEt2takGRXpQ4PsdIwBlCyQ8XSkuJ9exdlThayVEerJboQP7mbT7FsrCn70Wn9Eu09S/UodFZWINHIEbprLK4uG3kJDv6HfH1quaiGSnmfDOx0crDk5rhkQVr2VSrekkVuRi2470sR1oiKM1wimOHMDy3q0xVzK5kIeXDUMeeWRI35+JZP82U39px/uT8VPHGtktUjajhXyipKPB+Cu0WYxRZHWC4NpXziYlgfrBurv9Kw6hlFxejNecHCTjLmgilGFMJSYhpZp2VbYBG/UyLNbPZ0rN/mzm/tOP8Acn4qaGLbNb0VwJoYts470Y8CvEUhxbhl+HDSiSpbPy+tlkzVy1cvH41HlFOEoS3ZcyGcJQluy5hFncKYefiGoniZUNg5JodmW62eZ6VJvzZzf2nH+5PxU1eLbZHeitUSQx7JreiuBXiKVYpwfJYLeyqfWNnDpBHqiPV3gnPf4lFVFZXKqW7NaMjnCUHpIIi7qSmmq6hkFNG6WZ5ya1o2lYJa8EYnSisuxaO4gxsl5mc5528jEcgOl3H0KU0+F7LAzVZboCP741j7VY17MumtXwNiONN8XwKLRXbXYOslWwg0bYncHREtI9G72KB4nwPVWuN1TQuNVSt2uGWT2DxjiPGFjds66pb3NfAwnTKPEhyIi0CIIuRtKn7dG0zmg/lKPaM/5o/FT041l+vs1roepN8iv0Vg/m1m/tKP9yfioJVwmmqpoS7WMbyzPnyOSXY1tCTsWmoaa5nSiIoDwIpRhjB1ZeWtnlPa1Gdz3DNz/JH4qwKDBdlo2jOl5d/F0zi7P0bvYrDH2Zfet5cF8QUuivOTDVmkaWuttMB/dbqn1hRy96PaWVjn2qV0EvCOQ6zD6d49qnt2NfBaxaZjvIq9F6bhQ1Nuqn01ZE6KZu9p6xzheZVLTi9HzMgiKS4WwrJf6aaZlU2ARODcizWz2dKkppndLcrWrPG0lqyNIrA/NtN/aUf7o/FR/FeG34f7W16ls/La2WTNXLLLx+NT27PyKYOc46JeDFWRb0TI+iItMzCL2Wq21V0q209FEZJDtPM0c5PAKxrRo/oYGNdcnuqZeLWktYPxK3cTZ92X01w975EVl0a+ZVqK8mYcs8bNVtupsvGzM+srwXHBdmq2nUpzTyfaicR7NysZf6fvS1jJN/Mh+2Q14opxFIsTYUrLJnLny9JnslaMtXyhwUdVNdTZRPcsWjNmM1NaxCIiiMgi+o2PlkayNpc9xya0DMkqfWDADpI2zXiR0ee3kI946T+AW1i4d2XLdqWv0IrboUrWbK/RXbTYYs1MA1lBC7xvBefavirwrZqkEPoY2HnjzYR6lcf23kaa7y1+f7Gl/U6/cylUU5xDgOalY+e1PdPGNphd346DxUHIIJBGRG8KmysS7FluWrQ3aroXLeg9ThERaxKEREBYOjHDjKt5utYzWijdlC08XcT6P/7uVpcF4bDRNt9npKVoA5OMA5c+8+3Ne7grimtVxSO5wsWONSoLn38nK+eC+gvngpkTs5KhWkbDjLhQPuFMwCsgbm7L+kbx9IU1XBAcCCMwd4XlkFZHdZrZFMb4OEu5rai99+pBQXmspWjJsUpa3o4LwKja0ejOJlFxbi+xdOjTwRpPKk98qUFRfRp4I0nlSe+VKCr+jpx8I6zG6MPCKi0reEcfmG9ZULU00reEcfmG9ZULVLkdWXk5vM68/JauiP6JrPPDqU74qCaI/oms88OpTvirrD6MS6w+hErbTF39q6Jf4FXCsfTF39q6Jf4FXCqc3ry+X0KbN68v52J/oi+kbh5pvWrR4KrtEX0jcPNN61aPBW2z+iiww+iiE6V/B2H7w3qcqlVtaV/B2H7w3qcqlVdtHr/Ir8zqBXJgPDzLRbm1E7B29O3NxO9jeDfiqzwjRtr8SUFO8ZsMms4c4aCSPYr2WxsulNu19uRliVp6zYCcCgTgVeI3GOC44LnguFkRSKm0jYeZbKptdRs1aWc5OaNzH+LxFQtXrjCjbXYbr4nDMiMyN6W7fwVFLmtpUKq3WPJmjdHdlwOW98OlbExfzbOgLXZvfDpWxMX82zoC3Ni/8/l/kV9z6Wv94+lq3zz+srYBa/3j6WrfPP6ypNtemHzPLDxqU4CsAvNyMtS3Ojp8i8fbPBvx/wDyosro0fUYpML0pyyfNnK48+Z2ewBV+zcdX3pS5LiRkia0NAa0ANGwAcFyeCHvkPBdcjxnHFCnFCsyNmBxhYIr5bXBrQKyIEwv8f2T4iqVe1zHlrwQ5pyIPArYlUtj6jbR4nqgwZMlylA6Rt9uaoNt4ySV658mewfYjqs7RP8ARld50dSrFWdon+jK7zo6lo7H/FR+f0FvpJ2FXWlv/df+J/CrFCrrS3/uv/E/hXQ7W/CT+X1RrVetFdrsp4ZKieOGFpdJI4Na0cSV1qWaNKNtTiMSvGYp4zIOncOtchjU+3tjWu7Nuct2LZYuGrLDZLayCMB0zhnLJxc74DgsvzJwTmX0KquNUVCC0SKiTcnqwVwVyVwVKiJnxLGyaJ0crQ+Nwyc0jMEKmsZ2P8iXUsiB7VlGvETwHEej4K6FEtJlI2fDpny7unka4HxE5Ee0epVW2MWN+O56fejx/cmxbXCxLsypURem3U5q7hTUwORlkazPpOS4iKcmki4b04li6OsPsp6RtzqmZ1Eo/RAjvG8/SepThfETGxRsjjAaxgDQBwAX2vpOHjRxalVDt+r95zN9rtm5MfWXHFc/WXHFbaNdjiq80kWBjGm60jA3blO0cc9zvwKsPiui4UzayhqKeQZtlYWH0hamfiRy6JVvn28mePe6LFJcu/goFF9PaWPLXbwcivlfNTqwiIgNkIJGywMkYc2vaHDoK++Ci+jq7NuWHoonOHbFMOTePFt1T6upSjgrqEt6Kkjv6bVdXGyPdHIXzwX0F88FIj1nK4C5XgvVxitVrqKyYjVjbmB9o8B6162ktWRTkopyfJFLY0kbLiq5Obu5XV9QA/BYRdlRK+eeSWU60j3FzjzkrrVFJ70mzh7Jb83L3sunRp4I0nlSe+VKCovo08EaTypPfKlBV9R04+EdVjdGHhFRaVvCOPzDesqFqaaVvCOPzDesqFqlyOrLyc3mdefktXRH9E1nnh1Kd8VBNEf0TWeeHUp3xV1h9GJdYfQiVtpi7+1dEv8AAq4Vj6Yu/tXRL/Aq4VTm9eXy+hTZvXl/OxP9EX0jcPNN61aPBVdoi+kbh5pvWrR4K22f0UWGH0UQnSv4Ow/eG9TlUqtrSv4Ow/eG9TlUqrto9f5FfmdQkej2QR4uoC7cS9vrY5XWteaCqfRVsFTF38Tw8dIKv631kVfRQ1VO7WilaHD4Lc2VYt2UO/MlxJLdcT0BOBQJwVwjZY4Lhc8FwsiKR471IIrPWyO71sLyf2Stflbuky6torJ2mx36eqOrlxDAcyfw9KqJc/taxSsUV2NO96vQ5b3w6VsTF/Ns6Atdm98OlbEx/wA2zoCn2L/z+X+TGvufS1/vH0tW+ef1lbALX+8fS1b55/WVJtr0w+Z5YeNXnhCRsuGba5u4QhvpGw9SoxWhosurZaCW2yO/SQkvjHO07/Uetamx7FC/dfdGCJ2e+Q8EPfIeC6lGLOOKFOKFZkbOVUelCRr8Shrd7IWtPTtP4hWxUTR08Ek0zgyNjS5zjwAVD3yvddLvVVjsxyr8wDwbuA9QCptt2qNKr7t/QQXE8Cs7RP8ARld50dSrFWdon+jK7zo6lV7H/FR+f0PbfSTsKutLf+6/8T+FWKFXWlv/AHX/AIn8K6Ha34Sfy+qNar1ortTfRTIBeKth3ugzHocPioQstha5fkm+U1U4/ogdWTyTsPx9C5TBtVORCcuSZtWR3otIvLgi+WuD2BzSC0jMEcQvpfQEVDBXBXJXBWaI2FHsfvDMKVuf1tRo6dcKQqvNKd0aRT2yJwLgeVly4fZHtJ9S0tpXKnFm33Wn58DPHg5WJIrtZHDrxHfrc9xyaJ2En/mCxy5aS1wIORG0FcFCW5JS9xdNarQ2FRY3DtyZdrRT1TSC4t1ZBzOG8LJL6bXZGyKnHkzl5xcW0we+XHFcneuOKlRExxQnIEncnFYPGV0ba7FO8H9NKOSjHHM8fQNqwutjTXKyXJLUxhB2SUF3KcrHiSqme3vXPJHrXSiL5c3q9TsEERF4DK4cvVRYri2qp+6G6SM7nt5ldVivlFe6QS0coLsu6jOxzekfiqAXbTzy00zZaeR8cjdzmnIhT03urh2LHB2jPE+7zj7v2NjwvngqYoceXymYGvnZOBu5Rgz9YXbU6Qb1KzVjdDCedkYJ9ua3FmV/Euf61jta6P8AnzLauFdTW+mdPWTNiib9Z3UOcqnMa4okv1S2OEGOhiPcMO9x+0VgrhcKu4S8rW1Ek7+Bec8ujmXlWtflOxbq4IqM3aUshbkVpH6hERapWF06NSPkjSeVJ75UnJHOtcmyPaMmvcBzArnlpP6x3rVhXnbkVHd5fEt6tqezgobvJe//AOEw0reEcfmG9ZULX05znHNxJPjXytKye/Jy95WXWe1m5+8tXRIf/pNZ54dSnWYz3rXJr3NHcuI6CvrlpPtu9a3ac72UFDd5fE3adoeygobvL4lh6YT3dq6Jf4FXC+nPc/LWcTlzlfK1L7fazc9NNTTvt9rNz001J/oi+ka/zTetWhmMt61ya9zO9cR0FfXLSfbd61t4+f7GChu6/M2Kcz2UNzQtbSv4Ow/eG9TlUq+nPe4ZOcSPGV8rWyb/AG89/TQ17rfay3tApbgjFbrLL2tV5voHnPZvjPOPF4lEkWFVsqpKceZhGTg9UbEUdVBWQMmpZWSxO3Oacwu7gtfbdc622ya9DUyQk79U7D0jcVI4dIN5jZqv7XlP2nR5H2ZK6r2rW199aM3FlRfNFv8ABYfEOIKKx0xfUvDpiO4hae6d8B41WFdje91TC0VDYGnfyTAD696jcsr5pHSSvc97tpc45krG7ay00qXH4kc8hP0nsvV0qLvcJKuqdm92wNG5o4ALwIipJScnq+Zqt6nLe+C2JiI5NnQFrquzlZP6x/rW7hZv2Xe+7rqZRlumxGYWv94+lqzzz+srz8tJ/WP9a+DtO1ZZud9qSW7pp8RKW8cL026tnt1bFVUr9SaM5g/gfEvMi0E3F6oxLtwziajvkLQ1wiqwO7hcdvSOcLPHgtdmPcx4cxxa4HMEHIhSG34zvVG0M7ZE7BuEzQ727/ar/G2yktLlx96PGXRxXXUTR08TpZ5GxxtGZc45AKp5dIF5e0hopozztj2+0lR+53evubtauqpJstoaTk0dAGxT27bqiv8AbTb/ACMd3Uk2OcWi6A0NuJFGD3b9xlPwUKRFz1988ibnN8TJLQKztE/0ZXedHUqxX017m964joKkw8n7LardNdDycd5aGw2Y51Xelv8A3Z/ifwqv+Wk/rH+tfLnudlrOJy5yrHL2x9ppdW5pr8fj4I407stdT5REVITE9wPi9tJGy33R+UI2RTH6niPi8fBWTG9ksbXxua9jhmHNOYIWvKyVrvdxtfzGrkjb9je31HYr3A21KiKruWqXfuatuMpvWJe3BcFVOzSBeGsDXNpXH7RYc/YV4Lji+81zSx9WYmHe2EBvt3+1Wktv4yWsU2zW+xzbLExTimls0L44nNmriMmxg7G+N3N0Koauolq6mSeoeXyyO1nOPErqJJJJOZPFcLnc/aFmbLWXBLkjdpojUuHMIiLQJjP4SxDLYqskgyUkmXKR/iPGrdt1wpblTNno5myxnm3jxEcCqDXooqypoZeVpJ5IZPtMdkrnZ22J4a9nJb0fp4NLJw43feXBl/HeuOKqSmx3eYWgSPhmPO+Pb7Ml81eOLzO0hkscAP8AVsGftzV9/cWLpro/y/8ApXPZlr7os+73ajtNOZq2UMGXctG1zugKn8S3ue+V5nl7iJuyKPPY0fFY6qqZqqYy1Mr5ZDvc85krpXP7S2vZm/cS3Ye73+SxxcKOP97mwiIqg3QiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDL4Zw3ecUXEUGHrbU3Cqy1iyFmeqOdx3NHjOQUmxLogx5hu2vuF3w7Ux0cY1pJYnsmDBzu1HEgeMq8aKuk0Sdi9brvYGRxX2+yRl1WWBzmmTWcDt+zG3IDdmc+dVvo67IHFOGa2rdf56jEdDPGR2tVz5Fr+Dg8gkDeC3dtQFcYQwff8Y1VRTYatstfPAwSSMjc0arScs+6I4rDilmNYKQRntgyclqcdbPLL1rZfsPauGv0j4wrKWkZRQVFNyrKaM5thDpcwwHmGeS1+g8OY//ADIf+6gPrF+EL9g6rgpcS26Sgnnj5WNkjmkubnln3JPEKR2HQzpAvttjr7dhupdSyN1mPmkjhLxwID3AkePJXD2V9TRUWl3A9VdY+Vt8EUclRHlnrRifNwy47AdisLSth3HOM5rfftF+NI4rV2u3UpYal0TXuzJ1g9oIdnmBk7LLJAab3jCV+s2IIbJdbVU0l0me1kUErdUyFx1W6p3EE7MwclLPzHaSP+Fqv97F/qUu0/YxxhNDhy34ww1+R75a3tngurJQ8zuaAHOYWjV2uDXZAnIgKa9idjvFGKcb3akxDe6y4U0VvMrI535hruUYMx48ifWgKKxFoqxthuz1F1vdgqKS30+rysz5IyG6zg0bnE7yB6V48HaPMWYyjfJhuyVVbAw6rphkyMHm13ENz8WakmJcZ4vxZiyrwrX4hrprbW3PtTteR+bMuXybs8RAPoVxdklja4aNqPD+CcDSm0UzaMSySwACTU1i1rQ7gSWuJO8kjbvzA19xjo2xfg6AVGIrFVUlMTly41ZIweAL2EgHpK8mDsEYjxm6qbhm1y3A0oaZuTc1uprZ6vfEb9U+pbCdjJpCu+NrldsGY1qHXm31NE+Vjqvu3gAgOYTvIIdnt3ZbF7uxmt/yTxLpXoIDygtcjY4y76wjdPq5+gBAat4hsdyw5eJ7Ve6R9JcINUSQvIJbmA4bsxuIKkd+0W40w/Y5rxeLBUUltiDXSTvezJocQBmA7PeQN3FXtpfwjDi/TXo5u1HGH2/EcMMkpA75sWUjyf8ACLR6FP8AT/eI7voRx1yORio62KjBHEsmg1vU4uHoQGiqmODtGeMMZUrqrDtiqaulBLeXJbFGSN4DnkA+hQ5br0NHc8faEcL02ivE8VlqKCnjjqoY3mMl7WAOY9zc3MOsCd3dZ5oDU/GWAsT4LdEMTWapoWSnJkrsnxuPMHtJbn4s81jMO4fu2JLk2gsNvqa+scM+TgYXEDnPADxnYtgNKF60iYe0VVOF9IeHhdKaZ+rHfe2OV1CHBzMyB3wIIBdkSDks3g6rGinsX/lPaIYhf7w8ZTvaHZFzy1noawEgbsyedAUtdtCekO1UD6yrwxVGBg1nchJHM4Dn1WOLvYoRZbTXXu701rtdM+or6h/JxQtIBc7m25BWlo2024zt2N7dLdb5V3K31NSyKqp6l2u0sc4Alo+qRnmMst3MrSx5hejsHZXYNrrdCyGK7PbUysYMhyo12uIHj7knxkoClfzHaSP+Fqv97F/qWPOifHAv4shw/UflU0xrBT8pHnyIdqa+etllrHLetk9MFj0zVuPa+fA1XVxWFzIuQbHWxRtBDG63cuII7rNa84rxVpFwrjmpbfb5X0+I6WnbSySCdr3NidqyBms3MEbQUB9/mO0kf8LVf72L/Uug6GdIArm0Zw1UiqdGZhHysWZYCAT33OR61fthxpiOfsUbxiKa8Vb73FM5rKwu/SNHLxtyB6CR6VX/AGPOkm/3TTNaI8TXepr2VVPNQsNQ7PU1gHgDpdG0IClLLh+63u/RWW1UUlRdJHuY2nbkHFzQS4bdgyAPqXoxbhS94QuMdDiS3y0FXJEJmRyFpzYSRnmCRvB9S2f0Z4RisPZFaQ7zWNDKCzxyVTXkZBnbA5QEdDOUCxun63t0k2DRjie3RhrrtMy3yhu3UdMQQ3/lc2QIDXjEOCsQ4ctNvud7tktHRXAB1NJI5v6QFodsAOe4jeOK9FFo9xXW4UfiWlstTLY2MfI6rBbqhrCQ45Z55Ag8OCuvstJZb3pEwng20NDn09OyOKJu4STPDQD6GM9auuhvlkw3inD2iYRRSU0tle15d9ZwGQafKa2Vx6RzoDQBrS5wa0ZknIBWQNB2kcjMYWq/3sX+pR3HOGpsH4/uVin1v9jqtSNzvrxkgsd6Wlp9K3A7IGh0mVddZDo0fXNp2wyCr7WqI4hrZt1c9cjPZnuQGoGK8AYrwnA2fEViraGnc7VEz2a0efAazcxn4s16cLaM8YYrtQuWHrHPW0JeY+VY9gGsN42uB4rZ+plxFaOx0xTHpiqIn3Cdk0VGyaSN8hJYOSBLdhdymZG8gDM7tng0DUl8ruxnudNhOcwXySrmFLIHhmq7WZn3R3bM0BQ/5jtJH/C1X+9i/wBSrmaJ8E0kUrdWSNxa5p4EHIhbO1OE+yEp6eWaXEEojjYXuyuDNwGZ4LWKWR80r5ZXF0j3FznHeSd5QHwiIgCIuWgucA0Ek7ABxQHC99vtFwuG2jo5pW/aa3ufXuVgYQwTDBFHV3iMSTna2B3es8rnPi3Kcsa1jQ1gDWjYABkArzF2NKyO9c9Ph3I5WacilnYPvrW5m3vy8T2n8ViKyiqqKTUq6eWF3ASNIzWwS6aumgq4XQ1MTJY3b2vGYW3ZsGtr/bk9fj/ER+2fc17RTTGmD/yYx1bbQ51H9eM7TH4/GFC1z+Rjzx57li4k0ZKS1QRFM9GlDS11dWtrKeKdrYwWiRueRzTGoeRaqk9NROW6t5kMRXp8n7Rl9G0v7sKKaR7XQUVjhkpKSCGQztaXMYActV2xWWRsWyiuVjkuBDHJjKSikVsiKRYCpoKvEcMVVEyWIseS14zG5VdNTusjWu70Jpy3YuXuI6ivP5P2j+zaX92FhcZWa202Gq2anoaeOVobqvawAjugri3YNtcJWOa4Jvv2NWObGUlHTmVMiIqI3AvpjHSPDWNLnHYABmSsnh2yVF8rhBB3MbdskhGxg+PiVuWSxUNnhDaSIcp9aV217vT+Ctdn7Jtzfvco+/8AY1MjLjRw5sqinwteqhutHb5gP7+TeshfNVhm80zdaW3zZDeWAP6s1dp3hDvV7/bdG763r8v2K97UsT9K0Ne3AtJDgQRvBXCuu/4bobzG7lYxHUZdzMwZOB8fOFUd6tdRaK59LVNycNrXDc8c4VDtDZVuDxfGL7/uWGNmQyOC4P3HgREVWbYREQG1uE4YNMnY6U+E7fWQRYlsZYWQSu1dbUJDDz6pY4tz4OWB0adjvU01RcbjpUjittkpad5DW1bdYu/rC5pIa1ozO07TlsWvNur6y2VkdXbaqekqo9rJoJDG9vQRtCyt8xhiS/Uwp71frpX04OYiqap8jM+fInJAXZ2Kt6sdp0xXygoqiSO23CGSG3OqnDXk1ZAWAnIDWLQTu8S6m9jvjRmktrhBTOsgrxP2/wBsMy5LX1u8z1tbLZllv45bVr4xzmPDmOLXNOYIORBUo/OJjPtXtb5V33kMtXU7elyy5u+QF0dkvdcO3rTnh+23eqcbTRwx01xkp3gOhL5HF23I7WgtJXsxXoYxrhjEEVZocr619kqY2PbyNybG5rstpdm5oe07wdu/Lp1je5z3uc9xc5xzJJzJKkFnxvimy0YpLRiK70VKN0MFW9jB0AHIIDZLsm6mej0J4ZtWMKumq8Xunjke6LLPuWuD3bOG1rSdgJUS7Cf/ALRL1/5W7/3Y1QdzuNbdax9XdKyorKp/fTVEjpHnpJOa7LPebpZKh89muNbb53t1HSUs7onObnnkS0gkZgbEBk7vXSWvSFW3CAAy0t0fOzP7TZS4dS2a00YJdptsNixlo/np6upjp+QmpXyhji3PW1czsa9ri4EHLPPfz6jSyPmlfJK9z5Hkuc9xzLid5J4lZGx4gvFgmdLY7rXW6R+xzqWd0Wt06pGaA2j0FaOanRHHd8baQ56a2iKldBFByrXuAJBJJaSC46oDWgknMrx9jVd3Ygr9Ld4ezUdXt7Z1Ps6/Luy9GeS1rv2JL5iBzHX273C4lnedtVD5NXozOxdNpvl2s7KhlpuddQtqAGzCmqHxCQDPIO1SMxtO/nKA3X7H272+7aGrHeroGvqcMsqYeVO+JrWn/wDaLVXEdxmu/Yi4uuVSc56y6vqJD/efVROPWtcaG/Xi326ot9Bda+moKjPlqaGoeyOXMZHWaDkcxs28F8x3u6x2eS0x3Ouba5Haz6Ns7xC45g5lmeqTmAd3BAY9bL3HQ46rwjYMU6EK+udUTR61Sw14jl2gbA4aoBaQ4FpK1nWYsOJ77h4v/IV4uFu19rxS1D4w7pAO1AbdT/KLD3Y6Yoi0vV0U9bPDLDSRzSNklBcwCNpcNjna/dbyQNuezZGdGPaOlnsfJcBsrYabENs7qFsp74NeXsflvLciWEjPLfzZ60X3EN5xBKyS+XWvuL2d4aqd0ur0axOS8NFV1NDVR1NFUTU9RGc2SwvLHNPOCNoQF+aOex1xazGdDUYpp6ags9FO2eaTthkhmDDnqtDSTty3nLIepSLE+NKHF/ZV4RjtEzaigtcraRszDm2STu3PLTxGZAz46q1+ueOsV3WidR3LEl4qqVwydDNWSOY4eME7fSsFQ1lTb6uKqoKiamqojrRzQvLHsPOHDaCgL07JjGOJrRphu9HasQXaipGRwFsNPWSRsbnCwnJoOW0nNUfdLjW3WukrbpV1FZWS5a89RIZHuyAAzcdp2AD0Jc7jW3WsfV3Ssqa2reAHTVErpHuyGQzc4knZsXkQGz2Gv+5VfvvDv/kRrXbCt2fYcTWm7RZ69DVRVAA46jgcvYviO+3eKzvtMd0r2Wp5zfRtqHiFxzzzLM9U7QDu4LGoDfTshLnQ4e0T4lu9BqNrL9FDR8qD/Ohw1fZGXqLdiVV0mJdGgtFxaJZbBcxUQNP1Ae7Y79oyLUi44hvVzoIaG5Xe41dFCQYqeepfJHHkMhqtJyGQ2bOC4s1/vFjMxst1r7cZsuU7UqHxa+WeWeqRnlmfWgNoNGVC3G3ZK4vxfV6rrbY5Hsie49zrtBiYejVY93iOS8Vy056Mp8XG/wAuDK+ovEUoMdfmwPOpsa4d1s2AbFrbQYhvVupammt93uNLT1JJnigqXsbKSMjrAHJ2Y2bVi0Bs52V1kprvT4U0g2Ya9HcI44JngbwRrxOPjyLgegBSDsr8aYiwfiLCU2HLtVUIMMsj4o3nk5S1zctdm5w371qvJiG9S2llqku9wfbGZalI6peYW5HMZMzyGR27l8Xm+3a9viferpXXB8QLY3VdQ+UsB3gaxOSA2j0i2mh056JafGmHoi3EttjIqaVjidYtGckWXPl3TTvIyHHZ26FrZeLx2Ll3t+GnSMvE9VK2ndHNyTg7WjJyfmMtgPFatWbEN6sbZW2W73C3NlyMgpKl8Wvluz1SM8sz6132zFuI7VTugtl/u9HA55kMdPWSRtLjvOQIGZ50BcT9Emm97S19XcHNcMiDewQR+2qLuVFPbrjVUNW0MqKaV8MrQc8nNJBGfHaFnfl/jH/izEH/AOozf6lHZ5pKieSaeR8s0ji973uLnOcTmSSd5JQHWiIgCmujK0NrLlJXTtzjpstQHcXn4D8FClb2jOFseGGPG+SV7j68vwVjsqlW5C3u3Exk+BLVwuVwuxIGFwuVws0RM+XsbIxzJGhzHDIg7iFR+KrX+SL3UUrQeSz148/snd6t3oV5BVppZha2st8w758bmH0EEdZVRtulTx/ad4v68DOmWktCAqd6J/pCv803rUEU70T/AEhX+ab1qh2V+Lh/OxNf02WZwUO0p+D0H3hvuuUx4KHaU/B6D7w33XLrNpfhbPBoU9RFUqUaOPCmDyH+6VF1KNHHhTB5D/dK47A/E1+V9Tfu6cvBb6wGO/BSv8lvvBZ9YDHfgpX+S33gu7zPw9n/AJf0KarqR8opdc79y4WQw/E2a+UEbxm107AR4swvncI78lFdy9b0WpbuE7Sy0WaGHVymeNeU8S48PRuWZRF9NpqjTBVw5I5iyTnJyfc4O8Id6HeEO9TIhY4qN48tDblZZZGtHbFMDIw+L6w9XUpJxXD2h7XNcMwRkQosiiORVKqXJo8rsdU1NdjXtF21MfJVEsf2HFvqK6l8wa0eh14REXgL4wLoHt2INHVtxbd8ZwWWlq9fWFRTN1IyJHMA13SNG3V5uK7712OUsthqbngfFluxMacEvgga1rnZDPJpa9wLvEcs1IL1/wByW0+fH/y3qKdh3XVNPpZdSwvd2vVUMomYDsOrk5pI5wesoCK6EdGH5zb3crdJdHWs0UAmLu1+VLjrBuWWs3JT1+gfBkb3MfpbsjXtORaWRAg8388p5oIpYaPsiNJ0FMA2FrpCA3cM5syPWSoTcsD6D33GqfUaQLkyZ0ry9oZ3rszmP5rnQEfwxoXs2ItI11wrbsbQVDaWkZVQVlPTNlZUA5a7RlJkC0ubxPHdkqjxDaaixX+42msGVTRVD6eTZvLXEZjxHJTvDF7tGj7TfR1+GrjJXYfpatsYqZO+lge0NkJGQ3azuHAK5dKWjMXfslsNTxQh9svQbWVJAzaeQA5Qeloj9L0BWmL9CjML0OC+378fypiKpgpzR9qZdrB+rru1tfutQvaMshnnwUuvPY44cslU2mvOk23UFQ5ge2Kqp44nFpJGYDpgcswdviXj0zYp+UPZL2Cigk1qOz3Cko2AHZynLNdIenWOr/yqyeyBw1o1vGMqSox1iqss9zbRMZHBC3MOi13kO/m3bcy4b+CAoHSno2w9g6wU9fZMdW3ENRJUNhdS0wjDmNLXHX7mRxyzaBu4rp0r6K3YAw9hu6Ou4rxeYy8Rin5PksmMdlnrHPv8uG5dOliwYBstPbnYBxJVXmWV7xUtmGXJgAapHcN35nn3K1uyx/7PNG33d3/sxIDWJXbo80C1F8wszE2Lr7S4askrQ+J9Q0F72Hc46zmhoPDMknm3Km7bEye40sMp1Y5JWMceYEgFbLdmvV1FPPhO0QZxWtkEkrYm7GF4LWjZ/dbu5tYoCP33seY6uwVF20d4rosTtpwTJTxauuchnk1zXOBd/dOSh2hDRZ+c27XWikurrWaGJshPa/KlxLiMstZuWWSkPYgXCrpdLkdJTvf2tV0kzahgPckNGs0kc4IAz8Z51cGhKjp6Hsg9KUFIGthDg8AbgXP1iPWSgK+o+x0sF1ndSWPSdaa6vyJbTxwsc45eJsxPsVf4c0R3Gt0uuwFe6ttuq2h7jURx8s1zWsL2uaM25hwy5ss/QrdwZobsWEMbUeJbxpDs5goKg1QijeyMuIJIBcX7Bz7No2JhXGFvxr2XVNcrM7lLfFSS0sUuWXKhkL83ZcxJOXiAQFUactEcui6a05XQ3Onr2yZS9r8lqOZq5ty1nZ7HA+tTLB3Y3SX/AEf0OJKrERopKqlNWKXtLXybkS3utcb25HdxVh6V7ZNpJ0bXSkpQZbnZMVS0g4nVdOWAdAbMz9lWRSXCGK/YhwxQkCjsdhpo2sH1XPEuz9hkaA1O0M6HKfSJhq63mrxE2zwW+YxyF9MJGhoYHF5cXtyAB9ikv5icFf8Ai7Y/2Yf+upT2K0FDU6GcdwXeodTW2V8rKmdu+OI04D3DYdoGZ3FRX5CaCv8AxDuX7H/8KAimjXRJT450gYiw7S4hYymtfKOiroqcStqWtkDA4APAAIOe8qFY9wjXYLxhW2C57ZaeTJkobkJYz3rx4iPUcxwV29hmyGPSRiVlK8yQNoHCN53ubyzcj6ln9I9DTaa9FVNjCzQsGJrE50VbTxjunNac3t58vrt8RI3lAVzjDQrQYW0h4fw5csWQwUd0p5J5LjUU7YmU+qHZAgyZHMtA3jepdbexrsN0pKmqtmkmhrKWmGc80FMyRkQyz7oibIbBntXn7Nrwuw3/AOXu/wDcK9/Ywf8AY7pL8xJ/8d6ArDSro4w/g2y0lbZMcW7EU81RyL6emDA6NuqTrnVkdszAG7iqvREAREQBERAEREAREQBERAFa+i2qEthlp8xrwSnZ4nbR7c1VCkOCb2LLeGvmJ7VmGpL4uZ3o6s1vbOvVF6lLk+B5JaoupcLhj2yMa9jg5rhmCDmCFyu0NeQREWZEzgKrtK1UJLrS0zTnyMRcfEXHd6gFYt1uEFsoZauqdqxxjPxuPADxlUbda6S5XGern7+V2tlzDgPQNipNt5CjUqVzf0RJTHV7x5FPNE30jX+ab1qBqeaJ/pGv803rVLsr8XD+diW/pssvgodpT8HoPvDfdcpjwUO0p+D0P3hvuuXWbS/C2eDQp6iKpUo0ceFMHkP90qLqUaOPCmDyH+6Vx2B+Jr8r6m/d05eC31gMd+Clf5LfeCz6wGO/BSv8lvvBd3mfh7P/AC/oU1XUj5RS69VrqBSXKlqDuila8+g5ryovnUZOLUl2L1rXgbCtcHNDmkFpGYI4rlRHR7fG3C2top3jtqmbkM/rM4H0bvUpcvpWLkRyao2w5M5q6t1zcWccQh3pzId62ka7HFdVVM2nppppDkyNheegDNdvFQbSRfWQ0ptdO/OaXIykHvW78uk9XStbMyo4tMrZduXnsZUUu6xQRW0rzJK97t7iSV8Ii+Z8zrAiIgNqMG3rAN/7Hiz4OxRiuG1VDXOfM1v84wid72jaCNoI9a68MXzRNobguF2w1e6rEmIJ4DDCzLYASDlmGhrQSBmSSdmwLVtEBsD2M2PbXa8f4pvWMbrT0UlyhMhlmzAfI6XWcBl0leqs0e6GaqrnqHaS5Wule6QgBuQJOf2FroiAluk6zYcsWJG0mDr069WwwNeal2WeuSc27AN2Q9a2g0e6bML0+ia3Vl8uNL8qLXQSU7KeQHlZHMGTQDl9cMZn4+haZIgJHhS6j84lnu92qAB+VYaqpnfw/TBz3H2lbL6WKfRLpIxFBd7lpAZSTQ0zaYMp8i0gOc7Pa3f3RWoqIC2NJuDtHViw0KvB+MpLzc+XYztZwblqEHN2xo3ZD1q5sb1ui/SJhHCtDe8cRW+W10zRqwbTrGNgcDm07tVagogLe0jYM0b2TC81bhHG0t3uzJGBlKdXa0nujsaNw2qxafHGAdMWBrbZ9ItxdZMRW8ZR1p7lrzkAXhxBbk7IFzXZbRsWriIDarDl20WaEaG4XKxXw4oxJURGKLkiHADfq5tGqxpIBJJJ2bOZRzsZ9IFqtuN8XXrGV2p6Ka6MEpklzAfIZC5wGXSteEQHfWua+snew5tdI4g84zVj9jhfbZhzSxbblfKyKioY4p2vmlz1QTG4Dd4yqxRAbX6HdKOHLPpL0jNu14p4LPca91bR1D8+TeQ9wOWzeQWn/lXm0b6TsPux7pUu17u9PSw3QtjoXSkjlWMEjGZbPs6nrWrKIDZDscMT4Tt+jLFlgxVfYLU66SSRDXJ1+TfCGFzdhGzMryfm20L/APiZN6mf6Fr0iA2J7H++YRwFpXxU2XEEP5D7VMFHWz7OX/SMI3DfkDw4KGaCNJHyB0hPmqpT+Qbi/ka0bw1usdWXLnaT6i5VSiAvbsssWWLFmJ7HUYcucFwhgo3RyPhJya7XJyOY5l6ux+xhh/D+jDHlvvN0p6OtrontpoZCdaUmFzRls5yAtf0QBERAEREAREQBERAEREAREQBERASvCmMKizNFPUtNRRcG590zo8XiVi23E1ouDAYa2Jjj9SU6jh6/wVHorPF2rdjrc5r4mEoJmwb6ymYzXfUQtbzl4yWBu+M7Rb2ODJxVTcGQ7R6XblTa4W1Zt2xrSEUv1MPYruZjEeIKu+1IfUHUhb/NwtPct+J8aw6IqWyyVsnOb1bJUkuCCk2B77TWKrqZatkr2ysDRyYB25+MhRlFlTdKiashzR5KKktGWr+cO0/1FZ+w3/UsBjTFVDe7VHTUkdQ17ZQ8mRoAyAI4E86hKLeu2tkXQdc2tH8CONEIvVBZnCVzhtF6jq6lsjo2tcCGAE7RlxWGRV9Vkqpqcea4ksoqS0Zav5wrT/UVn7Df9SxmJcZ2652Sqo6eKpbLKAAXtAGxwPP4lXqKzs21lWQcJNaPhyNdYlaaaQREVSbJ3UlTNR1DJ6aR0czDm1zd4VkWHHtLPG2K7NMEw2cq0Esd4yN4VYot3Dz7sN61Ph7uxBdjwuWkkX1T3KiqQHU9XBIMvqyAriqudDSguqKyCMDnkGfqVDIrr+5bN3prXz/PqaP9Ljr6uBZGIcexNjfDZml8h2cu8ZBvQDv9KrqaV80r5ZXufI85uc45klfCKkzM67MlvWvwuyN6jHhQtIIIiLTJwiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiICTMwPf3sa5tGC1wzH6VnxXPyFxB+pD96z4q56L5rD5A6l2hWKxIe9nV/wBDx9Ob/T9jXGqgkpaiWCZurLG4tcM88iF1LJYl8ILj59/Wsaq9rRnLTW7JpEgocIXqupI6mmpQ+GQZtdyjBmPSV3/IXEH6kP3rPirRwX4LW7zf4lZoKxhhwlFNtnQVbIpnCMm3xS937Gu9zoKi21slJWM5OePLWbmDlmARtHiK8qkukbwxr/8AD9xqjS0LI7snFdiiugq7JQXZtGcteFrtdKNtVRUwkhcSA7lGjccjsJXr+Q1//Um/vmfFWBoy8Eqfy3+8VKirGrCrnBSbfEt6dmVWVxm29Wv52Nfbxaqy0VLYK+LkpXN1wNYO2eg+JeBTbSz4QQfdx7xUJVfbBQm4rsVN9arslBckF3UlNNWVDIKWJ0sr9jWtGZK4poJKmojggaXyyODWtHElXbhPDsFhomtAD6t4/Sy8/iHiUuNju+XwM8bGd8vgiG2nRxUSta+51TYM9vJxjWd6Tnl1rNjRxadXIz1efPrN+Cmp3oreGFTFaaFssOmK00KzuujeRjS+21gef6uVuR9Y+Cglwoam3VLqethdDK36rusc4Ww5WJxHY6a+UDoKhoEg2xygbWH4eJQ37OhJa18Ga12FFrWvgyhUXquVFNbq6akqW6ssTtU+PxjxLyqmaaejKprTgz1W6hqblVspqKPlJ356rcwM8hnxWZ+RV/8A1A/vWfFdmjfwupOh/uFXPxVlhYUL4OUm+ZtUURsjqyja7Ct5oaWSpqqMshjGbnco05eorBq8cc+Clx8ge8FRygzceOPNRj7iK+tVy0QRFOdHuF23F/5Rr2a1Kx2UcZ3SOHE+Ie1QU0yumoRI4xcnojE4fwhcrwwStaKemO6WTj0DeepTCm0b0DWDtmrqJH87AGj1bVOgAGgAZALldFTs2iC+8tWbPsopEDq9G9C5h7VrKiN/O8B49mShuIMKXGytMkrBNTf1se0DpG8K7SvlzWvaWvAc0jIg7ivbtmUWL7q0ZhKtdjXRFMsf4ZbaZxW0TcqKV2RaP6N3N0FQ1c5dTKmbhPmiBrTgFnaXCd6qqaOeCiL4pGhzHcowZg+lYJXvhbwbtvmGdS29n4kMqbjNvgux4iqvkXf/ANQP71nxWFr6Oegq5KarZyc8eQc3MHLZnw6VsGVSmPfC24+U33GrY2hs+vFrU4N89OII+iL32O2TXe5RUdPsc89047mt4kqpjFzajHmwfNrtlXdKkQUMLpX8ctzRzk8FOLdo4zaHXGtyPFkLd3pPwU3stqpbRQspqNga0d8473nnK9y6fF2PVCOt3F/oQym+xC3aOrVq5NqKwHnLmn8Fgbvo9rKdjpLdO2qaNuo4ajvRwPsVpFFt2bKxbFpu6eCP2kka8TRSQSuimY5kjTk5rhkQV8K48ZYaivVI6WBobXxjuHbtcfZP4Knntcx5a8FrmnIg7wVzGdhTxJ7r4p8mTwmpo+URcgEkADMncAtIzOY2Oke1kbS57jkGgZklTK0YAr6qNsldKykYduqRrP8AVuHrUqwVhmK00rKmqYHV8gzJP9GDwHj5ypUunwNiRcVPI5vt+5pW5LT0gQlmjq3Bnd1VU53ONUfgsfcdHTw0ut9aHHgyZuXtHwVjcFwrSWyMSS03NPzNX7TYnzKEuduq7ZUGCuhdFJwz3Ec4PFeNXxebVTXeifTVbAWnvXDew84VLXu2TWi4y0lQO6Ye5dwcOBC5naWzJYb3ovWL/nE3sfIVvB8zwLupKeWrqY6enbrzSO1WtzAzPpXSsvhHwmtvnmqupgp2Rg+7SJ5vdi2j1fI2+/qJ/eM+K658JXqCGSWWiLY42lzjyjNgAzPFXSvDfPoWv+7ye6V1tn+nsaMHJSlw8fsVMdoWOSWiKHXLWlzg0bzsC4XZTfOI/KC49cWXBnfkdff1E/vGfFPkdff1E/vGfFXJzIV2v9t4v/aX5r9ige1bvcv1/c18e0scWuGRByK+V21XzmXyj1rqXFNaPQv0ERF4DY6i+aw+QOpdoXVRfNYfIHUu0K8XI+hrkjX7EvhBcfPv61jVksS+EFx8+/rWNVJLmz5/b635L4wX4LW7zf4lZoLC4L8Frd5v8Ss0FeVeheDtKOjDwvoUlpG8Ma//AA/cao0pLpG8Ma//AA/cao0qa7qS8s4/K68/L+pc+jLwSp/Lf7xUqKiujLwSp/Lf7xUqKu8fpx8HTYvQh4RUmlnwgg+7j3ioSptpZ8IIPu494qEqnyerLyc3mdefknGim3tqLxPWPGYpWDV8p2Y6gVbB3qvdEJb2pch9bXZn6nKwjvVvgxSpWnct8GKVCa7g70Q70W4jYkCnBCnBZojZWmlq3hslHcGDIuzikPPltb+KrpW3pXy+TsOe/thuXqKqRc/tCKje9O5SZaStehJ9G/hdSdD/AHCrn4qmNG/hdSeS/wBwq5+Kstl9F+f2NjE9D8mCxz4KXHyB7wVHK8cc+Clx8ge8FRy1Nq9WPggy/WjsgidPNHFGM3vcGgeMrYC20kdBQQUsIyZEwNHj8aozDxAv1uLt3bDM/wBoK/FPsiK0lLueY65scFyuOCK8RM+QK4XJXCyI2eG+ULblaamkeAeVYQM+B3g+vJUEQWkg7CFsWtfbnq/lKq1O95V2XRmqPbUF9yXfiQWHlV74W8G7b5hnUqIV74W8G7b5hnUsNidWXgwRlDwVKY98Lbj5TfcarrPBUpj3wtuPlN9xq3NtdGPn/DPCPqztFNA2O31Ne5vdyv5Np5mjf7T7FWKuTRyQcJ0uW8Ofn06xVdseClk6vsmzGfIk4XC5C4XWkDBRCizREzhU/pGoG0WI5HxjJlS0S5Dn3H2jP0q31W2lvV7ct2Xfaj8+jMZfiqrbMFLFcn2a/YzpekiAKTaPbe2vxHE6QZx07TMRzkbB7SD6FGVPdExb2/Xj63JNy6M//wDFzmzoKzKhGXv+nEnuekG0WUFyuAuV3xVMcFwueC4WSImFBdKdvbJb6evaP0kT+Tcedp3e0e1TpRzSFl8k6zPnZl064WntKtWYtifub/LiZUScbY6FNrL4R8Jrb55qxCy+EfCa2+eauFxetDyvqXNvofgu9eG+fQtf93k90r3Lw3z6Fr/u8nulfR7unLwzm4eteSh12U3ziPygutdlN84j8oL5lHmjp2bA8yFOZCvqxxrNf6r5zL5R611LtqvnMvlHrXUvlMubOxXIIiLw9NjqL5rD5A6l2hdVF81h8gdS7Qrxcj6GuSNfsS+EFx8+/rWNWSxL4QXHz7+tY1UkubPn9vrfkvjBfgtbvN/iVmgsLgvwWt3m/wASs0FeVeheDtKOjDwvoUlpG8Ma/wDw/cao0pLpG8Ma/wDw/cao0qa7qS8s4/K68/L+pc+jLwSp/Lf7xUqKiujLwSp/Lf7xUqKu8fpx8HTYvQh4RUmlnwgg+7j3ioSptpZ8IIPu494qEqnyerLyc3mdefkmuiy4tpb3JSyOybVMyHlNzI9mats71rlDK+GVksTi2RhDmuG8FXTg/E0F9pGse5rK5g/SR8/94eLqW/s+9aezfyN7Z+Qt32UvkSQ70Q70VoixkCnBCsJijENLYaIvlIfUuH6KEHa4855h417KcYLek+BFOSitWQzSzchJU0tvjOfJgySdJ3D1Z+tV6u+uqpq6rlqal2vNK7WcV0Lmr7fbWOfvKC2z2k3Ik+jfwupPJf7hVzneqY0b+F1J5L/cKucq52X0X5/Y3cT0PyYLHPgpcfIHvBUcrxxz4KXHyB7wVHLU2r1Y+P8ALIMv1o+o3ujka9hyc0gg+NbAWiuZcrZT1cRGrKwOy5jxHoK19UywBihtplNFXOIopTm139W7n6CsNnZKps3ZcmR0z3Xoy2+CLiN7ZI2vY4Oa4Zgg5ghcrpUbT5ArhclfE0rIYnSSvayNozc5xyACyImeHEFwZa7PVVbyAY2HVz4uOwD1qhCSSSd5Urx3ib8tVLaekJ7RhOYP9Y77XRzKJrmNpZSvs0jyRrzerCvfC3g3bfMM6lRCvfC3g3bfMM6ls7E6svBijKHgqUx74W3Hym+41XWeCpTHvhbcfKb7jVuba6MfP+GeEfVl6Kbg11LVW957tjuVYOcHYfUQPWq0XstFwmtdwhq6Y5SRnPLg4cQVR4WR9nuVnbv4PGtUX+FwsbYL1S3qibPSv7od/Ge+YeY/FZJdtCcZxUovVM15AohRSojZwqc0h3FtfiOVsZzjp2iEEcSNp9pI9Cm+NsUR2mmfS0jw6veMtn9EOc+PmCqMkkkk5k8Vzm28yMkseD8/sS0w/wCTOFJdH1wbQYjhEhyjqAYSeYnd7QFGlyCQQQciFRUWumyNi7MmlHeTTNhgnBRXBOJ47tSspqp4bXsGRz/pBzjx84Ur4L6Bj3wyIKyt8GVM4uD0YXC5XC2EQsKC6U7g2Ogp6Bp/SSv5Rw5mjd6yfYpXertS2ejdUVbwB9Vg7555gqVvVymu1xlq6g9087G8GjgAqTbebGql0Rf3pfojZxKXKe++SPCsvhHwmtvnmrELL4S8Jrb55q5TF60PK+pZW+h+C714b59C1/3eT3SvcvDfPoWv+7ye6V9Hu6cvDObh615KHXZTfOI/KC612U3ziPygvmUeaOnZsDzIU5kK+qnGs1/qvnMvlHrXUu2q+cy+UetdS+VS5s7FcgiIvD0zzMXX1jQ1txkAAyA1W/Bc/K+/f2lL+y34LAIs/aT97J/tV3/d/mzsqJpKieSaZxdI9xc5x4krrRFgQN6mZpMT3mkp44KaukjhYMmtDW7B6l3fK+/f2lL+y34LAIs/aTXdkyyLUtFJ/mz0V9ZUV9U+prJDLO/LWeQNuQyHsC86IsG9eLIm23qzLW/EN1t1M2noqx8ULSSGgDj0hej5X37+0Zf2W/BYFFmrJrgmyRXWJaKT/M9dyuNXc5xNXzOmlDdUOcANnNsXkRFi229WRttvVhdkE0kErZYXujkac2uaciF1ovDwm9p0h3GlY1ldEysaPrZ6jvWBl7FmhpLpNXM0E2tza4y6lVyLajmXRWikbMcy6K03id3TSNXTsLKCmjpc/ruOu70bMlCquqnrJ3TVUr5ZXb3OOZK6UUVl07fW9SKy2dnqYREURGem311RbqtlTRymKdmeTgAcsxlxWY+WV/8A7Qd+7Z8FHkUkbZwWkZNGSnKPBMzVbii8VtLJT1Va6SGQZObqNGfqCwqIsZTlN6yep45N8wiIsTwzlixPc7MAymm14P6mQZt9HEehS6l0lRlgFVb3B3PHJmPaFWqLaqzbqlpGXAzU5LgmWTV6SmapFJbyXcDJJsHoAUPvmI7lejlVzZQ7xEwZNHx9KwyJbmXXLScuB45t8wiItUxCzlLiq9UtPHBBXOZFG0Na3UbsA9CwaLOFk63rBteASD5Y37+0H/sM+Cw9dVz11VJU1UhknkyLnEAZ7MuHQvOi9ndZYtJyb8sBERRg9NBW1NvqGz0cz4ZR9Zp9h51M7dpFqo2BtfSRz5fXjdqH0jIjqUDRbFGXdj9OWh44p8yzX6SKXVzZQTF3MXgBYG748udax0dK1lHGeLDrP9Z/AKIIp7Np5Vi3XL8uBiq4o+nuc95c9xc5xzJJzJK+URaBmEREB9RvdG9r43Fr2nMOByIKl9ox7cKRjY6yNlYwfWcdV/r4+pQ5FPRk2473qpaGMoRnwkiz49I1CW/pKOoa7mBBCx9x0iyvaW2+jbGftyu1j6goAi3ZbZy5LTe0+SIVjVp66HruNwqrlUGatnfNIeLuHiA4LyIirJScnvSerJ0kuCC7qSolpKmOenfqSxnWa7LPIrpRE2nqj1rXgzP/ACvvv6+/9hvwXxNiq9TQvilrnOje0tcNRu0HfwWDRbDzMh8HZL82Rexr/wCq/ILlri1wcN42hcItYlM/8r77+vv/AGG/BPlfff19/wCw34LAItr7bk//AKS/NkP2er/qvyR9OcXOLnHMk5lfKItUmCIiA//Z",
              "timestamp": 214013321753
            },
            {
              "timestamp": 214013788753,
              "data": "data:image/jpeg;base64,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",
              "timing": 3269
            },
            {
              "data": "data:image/jpeg;base64,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",
              "timing": 3736,
              "timestamp": 214014255753
            }
          ],
          "scale": 3736
        }
      },
      "diagnostics": {
        "id": "diagnostics",
        "title": "Diagnostics",
        "description": "Collection of useful page vitals.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "items": [
            {
              "maxServerLatency": null,
              "totalTaskTime": 1550.6240000000028,
              "numTasks": 3241,
              "numStylesheets": 3,
              "numTasksOver25ms": 5,
              "maxRtt": 0.000630089617101771,
              "totalByteWeight": 3885261,
              "numTasksOver100ms": 1,
              "throughput": 74539541259.035767,
              "mainDocumentTransferSize": 2138,
              "numScripts": 8,
              "rtt": 0.000630089617101771,
              "numTasksOver50ms": 1,
              "numFonts": 5,
              "numTasksOver500ms": 0,
              "numRequests": 92,
              "numTasksOver10ms": 27
            }
          ],
          "type": "debugdata"
        }
      },
      "long-tasks": {
        "id": "long-tasks",
        "title": "Avoid long main-thread tasks",
        "description": "Lists the longest tasks on the main thread, useful for identifying worst contributors to input delay. [Learn how to avoid long main-thread tasks](https://web.dev/long-tasks-devtools/)",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "1 long task found",
        "details": {
          "type": "table",
          "headings": [
            {
              "label": "URL",
              "valueType": "url",
              "key": "url"
            },
            {
              "granularity": 1,
              "key": "startTime",
              "valueType": "ms",
              "label": "Start Time"
            },
            {
              "valueType": "ms",
              "label": "Duration",
              "key": "duration",
              "granularity": 1
            }
          ],
          "items": [
            {
              "startTime": 834,
              "url": "https://softteco.co/static/js/main.59777189.chunk.js",
              "duration": 157
            }
          ]
        }
      },
      "duplicated-javascript": {
        "id": "duplicated-javascript",
        "title": "Remove duplicate modules in JavaScript bundles",
        "description": "Remove large, duplicate JavaScript modules from bundles to reduce unnecessary bytes consumed by network activity. ",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "overallSavingsBytes": 0,
          "overallSavingsMs": 0,
          "items": [],
          "headings": [],
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "first-meaningful-paint": {
        "id": "first-meaningful-paint",
        "title": "First Meaningful Paint",
        "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more about the First Meaningful Paint metric](https://developer.chrome.com/docs/lighthouse/performance/first-meaningful-paint/).",
        "score": 0.44,
        "scoreDisplayMode": "numeric",
        "displayValue": "1.7 s",
        "numericValue": 1700,
        "numericUnit": "millisecond"
      },
      "critical-request-chains": {
        "id": "critical-request-chains",
        "title": "Avoid chaining critical requests",
        "description": "The Critical Request Chains below show you what resources are loaded with a high priority. Consider reducing the length of chains, reducing the download size of resources, or deferring the download of unnecessary resources to improve page load. [Learn how to avoid chaining critical requests](https://developer.chrome.com/docs/lighthouse/performance/critical-request-chains/).",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "10 chains found",
        "details": {
          "chains": {
            "9B106505A1DB8BF95C2F04FFE8CE4C4B": {
              "request": {
                "responseReceivedTime": 214010.577037,
                "transferSize": 2138,
                "endTime": 214010.577046,
                "startTime": 214010.520845,
                "url": "https://softteco.co/"
              },
              "children": {
                "42.35": {
                  "request": {
                    "endTime": 214012.931981,
                    "url": "https://softteco.co/static/media/Inter-Bold.3e3cb905.ttf",
                    "startTime": 214012.836357,
                    "responseReceivedTime": 214012.93197499998,
                    "transferSize": 293750
                  }
                },
                "42.32": {
                  "request": {
                    "responseReceivedTime": 214013.065967,
                    "transferSize": 288230,
                    "startTime": 214012.835555,
                    "url": "https://softteco.co/static/media/Inter-Regular.9cd7588f.ttf",
                    "endTime": 214013.065974
                  }
                },
                "42.2": {
                  "request": {
                    "endTime": 214010.599143,
                    "transferSize": 4301,
                    "responseReceivedTime": 214010.59913199997,
                    "url": "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
                    "startTime": 214010.5843
                  }
                },
                "42.4": {
                  "request": {
                    "responseReceivedTime": 214010.62178299998,
                    "transferSize": 772,
                    "startTime": 214010.585326,
                    "endTime": 214010.621789,
                    "url": "https://softteco.co/static/css/main.b33a723b.chunk.css"
                  }
                },
                "42.33": {
                  "request": {
                    "startTime": 214012.836618,
                    "endTime": 214012.928027,
                    "transferSize": 292442,
                    "responseReceivedTime": 214012.928021,
                    "url": "https://softteco.co/static/media/Inter-Medium.18b8c68e.ttf"
                  }
                },
                "42.36": {
                  "request": {
                    "startTime": 214012.838476,
                    "endTime": 214014.073793,
                    "responseReceivedTime": 214014.07379000002,
                    "transferSize": 294373,
                    "url": "https://softteco.co/static/media/Inter-ExtraBold.55189ddf.ttf"
                  }
                },
                "42.6": {
                  "request": {
                    "startTime": 214010.585438,
                    "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
                    "transferSize": 82182,
                    "responseReceivedTime": 214010.66990900002,
                    "endTime": 214010.669916
                  }
                },
                "42.34": {
                  "request": {
                    "url": "https://softteco.co/static/media/Inter-SemiBold.c6588ec1.ttf",
                    "endTime": 214012.9242,
                    "transferSize": 293330,
                    "responseReceivedTime": 214012.924197,
                    "startTime": 214012.838378
                  }
                },
                "42.3": {
                  "request": {
                    "startTime": 214010.585212,
                    "endTime": 214010.689224,
                    "transferSize": 1137,
                    "responseReceivedTime": 214010.689217,
                    "url": "https://softteco.co/static/css/2.81198f32.chunk.css"
                  }
                },
                "42.7": {
                  "request": {
                    "startTime": 214010.585549,
                    "responseReceivedTime": 214012.63978300002,
                    "transferSize": 22621,
                    "endTime": 214012.639793,
                    "url": "https://softteco.co/static/js/main.59777189.chunk.js"
                  }
                }
              }
            }
          },
          "type": "criticalrequestchain",
          "longestChain": {
            "transferSize": 294373,
            "duration": 3552.947999984026,
            "length": 2
          }
        }
      },
      "mainthread-work-breakdown": {
        "id": "mainthread-work-breakdown",
        "title": "Minimizes main-thread work",
        "description": "Consider reducing the time spent parsing, compiling and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to minimize main-thread work](https://developer.chrome.com/docs/lighthouse/performance/mainthread-work-breakdown/)",
        "score": 0.96,
        "scoreDisplayMode": "numeric",
        "displayValue": "1.6 s",
        "details": {
          "headings": [
            {
              "key": "groupLabel",
              "label": "Category",
              "valueType": "text"
            },
            {
              "key": "duration",
              "label": "Time Spent",
              "valueType": "ms",
              "granularity": 1
            }
          ],
          "items": [
            {
              "group": "scriptEvaluation",
              "groupLabel": "Script Evaluation",
              "duration": 802.07799999998963
            },
            {
              "group": "other",
              "groupLabel": "Other",
              "duration": 483.88899999999774
            },
            {
              "duration": 125.02699999999994,
              "group": "styleLayout",
              "groupLabel": "Style & Layout"
            },
            {
              "groupLabel": "Rendering",
              "group": "paintCompositeRender",
              "duration": 78.99100000000098
            },
            {
              "duration": 34.025000000000006,
              "groupLabel": "Garbage Collection",
              "group": "garbageCollection"
            },
            {
              "group": "scriptParseCompile",
              "groupLabel": "Script Parsing & Compilation",
              "duration": 20.384
            },
            {
              "groupLabel": "Parse HTML & CSS",
              "duration": 6.23,
              "group": "parseHTML"
            }
          ],
          "type": "table"
        },
        "numericValue": 1550.6239999999884,
        "numericUnit": "millisecond"
      },
      "unused-javascript": {
        "id": "unused-javascript",
        "title": "Reduce unused JavaScript",
        "description": "Reduce unused JavaScript and defer loading scripts until they are required to decrease bytes consumed by network activity. [Learn how to reduce unused JavaScript](https://developer.chrome.com/docs/lighthouse/performance/unused-javascript/).",
        "score": 0.93,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 113 KiB",
        "details": {
          "headings": [
            {
              "label": "URL",
              "key": "url",
              "subItemsHeading": {
                "valueType": "code",
                "key": "source"
              },
              "valueType": "url"
            },
            {
              "label": "Transfer Size",
              "subItemsHeading": {
                "key": "sourceBytes"
              },
              "key": "totalBytes",
              "valueType": "bytes"
            },
            {
              "label": "Potential Savings",
              "subItemsHeading": {
                "key": "sourceWastedBytes"
              },
              "key": "wastedBytes",
              "valueType": "bytes"
            }
          ],
          "overallSavingsMs": 80,
          "overallSavingsBytes": 115696,
          "items": [
            {
              "wastedBytes": 34313,
              "totalBytes": 74656,
              "url": "https://mc.yandex.ru/metrika/tag.js",
              "wastedPercent": 45.961866305688638
            },
            {
              "wastedBytes": 29950,
              "totalBytes": 82182,
              "wastedPercent": 36.44337652945773,
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "sourceWastedBytes": 13047,
                    "sourceBytes": 37915,
                    "source": "…node_modules/react-dom/cjs/react-dom.production.min.js"
                  },
                  {
                    "sourceBytes": 2047,
                    "source": "…node_modules/regenerator-runtime/runtime.js",
                    "sourceWastedBytes": 1603
                  },
                  {
                    "sourceWastedBytes": 1498,
                    "source": "…node_modules/react-multi-carousel/lib/Carousel.js",
                    "sourceBytes": 3998
                  },
                  {
                    "sourceWastedBytes": 1475,
                    "sourceBytes": 1682,
                    "source": "…node_modules/prop-types/factoryWithTypeCheckers.js"
                  },
                  {
                    "source": "…node_modules/create-react-class/factory.js",
                    "sourceWastedBytes": 1338,
                    "sourceBytes": 1661
                  }
                ]
              },
              "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js"
            },
            {
              "totalBytes": 67170,
              "wastedPercent": 43.363763062301651,
              "url": "https://www.googletagmanager.com/gtag/js?id=G-2HTJSVEM09",
              "wastedBytes": 29127
            },
            {
              "wastedBytes": 22306,
              "url": "https://www.googletagmanager.com/gtag/js?id=UA-11098259-7&l=dataLayer&cx=c",
              "wastedPercent": 49.125061875276813,
              "totalBytes": 45407
            }
          ],
          "type": "opportunity"
        },
        "numericValue": 80,
        "numericUnit": "millisecond"
      },
      "user-timings": {
        "id": "user-timings",
        "title": "User Timing marks and measures",
        "description": "Consider instrumenting your app with the User Timing API to measure your app's real-world performance during key user experiences. [Learn more about User Timing marks](https://developer.chrome.com/docs/lighthouse/performance/user-timings/).",
        "score": null,
        "scoreDisplayMode": "notApplicable",
        "details": {
          "items": [],
          "headings": [],
          "type": "table"
        }
      },
      "no-document-write": {
        "id": "no-document-write",
        "title": "Avoids `document.write()`",
        "description": "For users on slow connections, external scripts dynamically injected via `document.write()` can delay page load by tens of seconds. [Learn how to avoid document.write()](https://developer.chrome.com/docs/lighthouse/best-practices/no-document-write/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "items": [],
          "type": "table"
        }
      },
      "network-rtt": {
        "id": "network-rtt",
        "title": "Network Round Trip Times",
        "description": "Network round trip times (RTT) have a large impact on performance. If the RTT to an origin is high, it's an indication that servers closer to the user could improve performance. [Learn more about the Round Trip Time](https://hpbn.co/primer-on-latency-and-bandwidth/).",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "0 ms",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "largest-contentful-paint-element": {
        "id": "largest-contentful-paint-element",
        "title": "Largest Contentful Paint element",
        "description": "This is the largest contentful element painted within the viewport. [Learn more about the Largest Contentful Paint element](https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/)",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "1 element found",
        "details": {
          "type": "table",
          "items": [
            {
              "node": {
                "snippet": "\u003cdiv class=\"sc-dmlrTW cTFKyv\"\u003e",
                "nodeLabel": "CUSTOM SOFTWARE DEVELOPMENT",
                "path": "1,HTML,1,BODY,0,DIV,1,DIV,0,DIV,0,DIV",
                "boundingRect": {
                  "right": 1350,
                  "bottom": 1130,
                  "top": 162,
                  "width": 1350,
                  "height": 968,
                  "left": 0
                },
                "selector": "div#root \u003e div#home \u003e div.sc-hBEYos \u003e div.sc-dmlrTW",
                "type": "node",
                "lhId": "page-0-DIV"
              }
            }
          ],
          "headings": [
            {
              "valueType": "node",
              "label": "Element",
              "key": "node"
            }
          ]
        }
      },
      "cumulative-layout-shift": {
        "id": "cumulative-layout-shift",
        "title": "Cumulative Layout Shift",
        "description": "Cumulative Layout Shift measures the movement of visible elements within the viewport. [Learn more about the Cumulative Layout Shift metric](https://web.dev/cls/).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "displayValue": "0.02",
        "details": {
          "type": "debugdata",
          "items": [
            {
              "totalCumulativeLayoutShift": 0.020251053322826375,
              "cumulativeLayoutShiftMainFrame": 0.020251053322826375
            }
          ]
        },
        "numericValue": 0.020251053322826375,
        "numericUnit": "unitless"
      },
      "efficient-animated-content": {
        "id": "efficient-animated-content",
        "title": "Use video formats for animated content",
        "description": "Large GIFs are inefficient for delivering animated content. Consider using MPEG4/WebM videos for animations and PNG/WebP for static images instead of GIF to save network bytes. [Learn more about efficient video formats](https://developer.chrome.com/docs/lighthouse/performance/efficient-animated-content/)",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "items": [],
          "overallSavingsBytes": 0,
          "headings": [],
          "overallSavingsMs": 0,
          "type": "opportunity"
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "total-byte-weight": {
        "id": "total-byte-weight",
        "title": "Avoid enormous network payloads",
        "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn how to reduce payload sizes](https://developer.chrome.com/docs/lighthouse/performance/total-byte-weight/).",
        "score": 0.56,
        "scoreDisplayMode": "numeric",
        "displayValue": "Total size was 3,794 KiB",
        "details": {
          "items": [
            {
              "totalBytes": 303576,
              "url": "https://softteco.co/static/media/blueprint.4ef0da2b.jpg"
            },
            {
              "url": "https://softteco.co/static/media/Inter-ExtraBold.55189ddf.ttf",
              "totalBytes": 294373
            },
            {
              "url": "https://softteco.co/static/media/Inter-Bold.3e3cb905.ttf",
              "totalBytes": 293750
            },
            {
              "url": "https://softteco.co/static/media/Inter-SemiBold.c6588ec1.ttf",
              "totalBytes": 293330
            },
            {
              "url": "https://softteco.co/static/media/Inter-Medium.18b8c68e.ttf",
              "totalBytes": 292442
            },
            {
              "totalBytes": 288230,
              "url": "https://softteco.co/static/media/Inter-Regular.9cd7588f.ttf"
            },
            {
              "url": "https://softteco.co/static/media/bridges.3b497c49.jpg",
              "totalBytes": 268185
            },
            {
              "totalBytes": 239387,
              "url": "https://softteco.co/static/media/via.d87dbe6c.jpg"
            },
            {
              "url": "https://softteco.co/static/media/bubcon.e0ef8d9c.jpg",
              "totalBytes": 238424
            },
            {
              "url": "https://softteco.co/static/media/bsb-bank.36738990.jpg",
              "totalBytes": 199090
            }
          ],
          "type": "table",
          "headings": [
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            },
            {
              "key": "totalBytes",
              "label": "Transfer Size",
              "valueType": "bytes"
            }
          ]
        },
        "numericValue": 3885261,
        "numericUnit": "byte"
      },
      "final-screenshot": {
        "id": "final-screenshot",
        "title": "Final Screenshot",
        "description": "The last screenshot captured of the pageload.",
        "score": null,
        "scoreDisplayMode": "informative",
        "details": {
          "timing": 6603,
          "timestamp": 214017122306,
          "type": "screenshot",
          "data": "data:image/jpeg;base64,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"
        }
      },
      "third-party-summary": {
        "id": "third-party-summary",
        "title": "Minimize third-party usage",
        "description": "Third-party code can significantly impact load performance. Limit the number of redundant third-party providers and try to load third-party code after your page has primarily finished loading. [Learn how to minimize third-party impact](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/loading-third-party-javascript/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "displayValue": "Third-party code blocked the main thread for 0 ms",
        "details": {
          "items": [
            {
              "mainThreadTime": 42.618000000000009,
              "transferSize": 112577,
              "entity": "Google Tag Manager",
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "transferSize": 67170,
                    "url": "https://www.googletagmanager.com/gtag/js?id=G-2HTJSVEM09",
                    "mainThreadTime": 28.630000000000006,
                    "blockingTime": 0
                  },
                  {
                    "url": "https://www.googletagmanager.com/gtag/js?id=UA-11098259-7&l=dataLayer&cx=c",
                    "transferSize": 45407,
                    "blockingTime": 0,
                    "mainThreadTime": 13.988000000000001
                  }
                ]
              },
              "blockingTime": 0
            },
            {
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "blockingTime": 0,
                    "transferSize": 74656,
                    "mainThreadTime": 333.25899999999655,
                    "url": "https://mc.yandex.ru/metrika/tag.js"
                  },
                  {
                    "url": "Other resources",
                    "blockingTime": 0,
                    "transferSize": 8925
                  }
                ]
              },
              "mainThreadTime": 333.25899999999655,
              "blockingTime": 0,
              "transferSize": 83581,
              "entity": "Yandex Metrica"
            },
            {
              "entity": "Google Analytics",
              "subItems": {
                "type": "subitems",
                "items": [
                  {
                    "mainThreadTime": 25.041999999999987,
                    "url": "https://www.google-analytics.com/analytics.js",
                    "transferSize": 20594,
                    "blockingTime": 0
                  }
                ]
              },
              "mainThreadTime": 25.041999999999987,
              "blockingTime": 0,
              "transferSize": 21088
            },
            {
              "blockingTime": 0,
              "subItems": {
                "items": [
                  {
                    "url": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
                    "blockingTime": 0,
                    "mainThreadTime": 16.982999999999997,
                    "transferSize": 5095
                  },
                  {
                    "transferSize": 5968,
                    "url": "Other resources",
                    "blockingTime": 0
                  }
                ],
                "type": "subitems"
              },
              "transferSize": 11063,
              "mainThreadTime": 16.982999999999997,
              "entity": "LinkedIn Ads"
            },
            {
              "mainThreadTime": 2.458,
              "transferSize": 4301,
              "subItems": {
                "items": [
                  {
                    "transferSize": 4301,
                    "mainThreadTime": 2.458,
                    "url": "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
                    "blockingTime": 0
                  }
                ],
                "type": "subitems"
              },
              "entity": "Cloudflare CDN",
              "blockingTime": 0
            },
            {
              "mainThreadTime": 0,
              "subItems": {
                "type": "subitems",
                "items": []
              },
              "blockingTime": 0,
              "entity": "Other Google APIs/SDKs",
              "transferSize": 1671
            },
            {
              "mainThreadTime": 0,
              "blockingTime": 0,
              "entity": "Google/Doubleclick Ads",
              "transferSize": 569,
              "subItems": {
                "items": [],
                "type": "subitems"
              }
            },
            {
              "entity": "oribi.io",
              "mainThreadTime": 0,
              "subItems": {
                "items": [],
                "type": "subitems"
              },
              "blockingTime": 0,
              "transferSize": 467
            },
            {
              "entity": "google.com",
              "blockingTime": 0,
              "transferSize": 0,
              "mainThreadTime": 0,
              "subItems": {
                "items": [],
                "type": "subitems"
              }
            },
            {
              "subItems": {
                "items": [],
                "type": "subitems"
              },
              "mainThreadTime": 0,
              "entity": "Tawk.to",
              "transferSize": 0,
              "blockingTime": 0
            }
          ],
          "summary": {
            "wastedMs": 0,
            "wastedBytes": 235317
          },
          "headings": [
            {
              "label": "Third-Party",
              "subItemsHeading": {
                "key": "url",
                "valueType": "url"
              },
              "valueType": "text",
              "key": "entity"
            },
            {
              "granularity": 1,
              "label": "Transfer Size",
              "valueType": "bytes",
              "subItemsHeading": {
                "key": "transferSize"
              },
              "key": "transferSize"
            },
            {
              "key": "blockingTime",
              "label": "Main-Thread Blocking Time",
              "subItemsHeading": {
                "key": "blockingTime"
              },
              "granularity": 1,
              "valueType": "ms"
            }
          ],
          "type": "table"
        }
      },
      "prioritize-lcp-image": {
        "id": "prioritize-lcp-image",
        "title": "Preload Largest Contentful Paint image",
        "description": "If the LCP element is dynamically added to the page, you should preload the image in order to improve LCP. [Learn more about preloading LCP elements](https://web.dev/optimize-lcp/#optimize-when-the-resource-is-discovered).",
        "score": 1,
        "scoreDisplayMode": "numeric",
        "details": {
          "type": "opportunity",
          "overallSavingsMs": 0,
          "headings": [],
          "debugData": {
            "type": "debugdata",
            "initiatorPath": [
              {
                "initiatorType": "parser",
                "url": "https://softteco.co/static/media/home-bg-lg.7abfce17.svg"
              },
              {
                "url": "https://softteco.co/",
                "initiatorType": "other"
              }
            ],
            "pathLength": 2
          },
          "items": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "bootup-time": {
        "id": "bootup-time",
        "title": "JavaScript execution time",
        "description": "Consider reducing the time spent parsing, compiling, and executing JS. You may find delivering smaller JS payloads helps with this. [Learn how to reduce Javascript execution time](https://developer.chrome.com/docs/lighthouse/performance/bootup-time/).",
        "score": 0.98,
        "scoreDisplayMode": "numeric",
        "displayValue": "0.7 s",
        "details": {
          "summary": {
            "wastedMs": 729.94899999998859
          },
          "items": [
            {
              "scripting": 386.868999999991,
              "scriptParseCompile": 2.671,
              "url": "https://softteco.co/static/js/main.59777189.chunk.js",
              "total": 562.279999999991
            },
            {
              "total": 333.25899999999757,
              "scripting": 301.86999999999762,
              "scriptParseCompile": 3.849,
              "url": "https://mc.yandex.ru/metrika/tag.js"
            },
            {
              "scriptParseCompile": 0,
              "scripting": 4.0599999999999961,
              "url": "Unattributable",
              "total": 307.90399999999789
            },
            {
              "url": "https://softteco.co/",
              "total": 224.71400000000034,
              "scripting": 28.365000000000006,
              "scriptParseCompile": 2.265
            }
          ],
          "type": "table",
          "headings": [
            {
              "label": "URL",
              "key": "url",
              "valueType": "url"
            },
            {
              "key": "total",
              "valueType": "ms",
              "label": "Total CPU Time",
              "granularity": 1
            },
            {
              "key": "scripting",
              "granularity": 1,
              "label": "Script Evaluation",
              "valueType": "ms"
            },
            {
              "granularity": 1,
              "key": "scriptParseCompile",
              "valueType": "ms",
              "label": "Script Parse"
            }
          ]
        },
        "numericValue": 729.94899999998859,
        "numericUnit": "millisecond"
      },
      "network-server-latency": {
        "id": "network-server-latency",
        "title": "Server Backend Latencies",
        "description": "Server latencies can impact web performance. If the server latency of an origin is high, it's an indication the server is overloaded or has poor backend performance. [Learn more about server response time](https://hpbn.co/primer-on-web-performance/#analyzing-the-resource-waterfall).",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "0 ms",
        "details": {
          "items": [],
          "type": "table",
          "headings": []
        },
        "numericValue": 0,
        "numericUnit": "millisecond"
      },
      "uses-passive-event-listeners": {
        "id": "uses-passive-event-listeners",
        "title": "Uses passive listeners to improve scrolling performance",
        "description": "Consider marking your touch and wheel event listeners as `passive` to improve your page's scroll performance. [Learn more about adopting passive event listeners](https://developer.chrome.com/docs/lighthouse/best-practices/uses-passive-event-listeners/).",
        "score": 1,
        "scoreDisplayMode": "binary",
        "details": {
          "headings": [],
          "type": "table",
          "items": []
        }
      },
      "resource-summary": {
        "id": "resource-summary",
        "title": "Keep request counts low and transfer sizes small",
        "description": "To set budgets for the quantity and size of page resources, add a budget.json file. [Learn more about performance budgets](https://web.dev/use-lighthouse-for-performance-budgets/).",
        "score": null,
        "scoreDisplayMode": "informative",
        "displayValue": "92 requests • 3,794 KiB",
        "details": {
          "headings": [
            {
              "label": "Resource Type",
              "key": "label",
              "valueType": "text"
            },
            {
              "label": "Requests",
              "key": "requestCount",
              "valueType": "numeric"
            },
            {
              "key": "transferSize",
              "label": "Transfer Size",
              "valueType": "bytes"
            }
          ],
          "items": [
            {
              "resourceType": "total",
              "transferSize": 3885261,
              "requestCount": 92,
              "label": "Total"
            },
            {
              "transferSize": 2082694,
              "label": "Image",
              "requestCount": 56,
              "resourceType": "image"
            },
            {
              "transferSize": 1462125,
              "label": "Font",
              "requestCount": 5,
              "resourceType": "font"
            },
            {
              "label": "Script",
              "requestCount": 8,
              "resourceType": "script",
              "transferSize": 317725
            },
            {
              "requestCount": 19,
              "transferSize": 14369,
              "label": "Other",
              "resourceType": "other"
            },
            {
              "requestCount": 3,
              "label": "Stylesheet",
              "resourceType": "stylesheet",
              "transferSize": 6210
            },
            {
              "transferSize": 2138,
              "label": "Document",
              "requestCount": 1,
              "resourceType": "document"
            },
            {
              "transferSize": 0,
              "label": "Media",
              "resourceType": "media",
              "requestCount": 0
            },
            {
              "transferSize": 235317,
              "label": "Third-party",
              "requestCount": 33,
              "resourceType": "third-party"
            }
          ],
          "type": "table"
        }
      },
      "uses-long-cache-ttl": {
        "id": "uses-long-cache-ttl",
        "title": "Serve static assets with an efficient cache policy",
        "description": "A long cache lifetime can speed up repeat visits to your page. [Learn more about efficient cache policies](https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/).",
        "score": 0,
        "scoreDisplayMode": "numeric",
        "displayValue": "65 resources found",
        "details": {
          "summary": {
            "wastedBytes": 3728113.8036666671
          },
          "headings": [
            {
              "key": "url",
              "label": "URL",
              "valueType": "url"
            },
            {
              "label": "Cache TTL",
              "key": "cacheLifetimeMs",
              "valueType": "ms",
              "displayUnit": "duration"
            },
            {
              "granularity": 1,
              "valueType": "bytes",
              "displayUnit": "kb",
              "key": "totalBytes",
              "label": "Transfer Size"
            }
          ],
          "type": "table",
          "items": [
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 303576,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/blueprint.4ef0da2b.jpg",
              "wastedBytes": 303576
            },
            {
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/Inter-ExtraBold.55189ddf.ttf",
              "wastedBytes": 294373,
              "cacheLifetimeMs": 0,
              "totalBytes": 294373
            },
            {
              "totalBytes": 293750,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "wastedBytes": 293750,
              "url": "https://softteco.co/static/media/Inter-Bold.3e3cb905.ttf"
            },
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 293330,
              "url": "https://softteco.co/static/media/Inter-SemiBold.c6588ec1.ttf",
              "wastedBytes": 293330,
              "cacheHitProbability": 0
            },
            {
              "cacheHitProbability": 0,
              "wastedBytes": 292442,
              "url": "https://softteco.co/static/media/Inter-Medium.18b8c68e.ttf",
              "cacheLifetimeMs": 0,
              "totalBytes": 292442
            },
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 288230,
              "cacheHitProbability": 0,
              "wastedBytes": 288230,
              "url": "https://softteco.co/static/media/Inter-Regular.9cd7588f.ttf"
            },
            {
              "totalBytes": 268185,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/bridges.3b497c49.jpg",
              "cacheHitProbability": 0,
              "wastedBytes": 268185
            },
            {
              "totalBytes": 239387,
              "wastedBytes": 239387,
              "url": "https://softteco.co/static/media/via.d87dbe6c.jpg",
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0
            },
            {
              "url": "https://softteco.co/static/media/bubcon.e0ef8d9c.jpg",
              "wastedBytes": 238424,
              "cacheLifetimeMs": 0,
              "totalBytes": 238424,
              "cacheHitProbability": 0
            },
            {
              "cacheHitProbability": 0,
              "totalBytes": 199090,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/bsb-bank.36738990.jpg",
              "wastedBytes": 199090
            },
            {
              "wastedBytes": 185706,
              "cacheHitProbability": 0,
              "totalBytes": 185706,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/evoz.6b89ca34.jpg"
            },
            {
              "url": "https://softteco.co/static/media/network-belarus.d497140c.svg",
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 93120,
              "wastedBytes": 93120
            },
            {
              "wastedBytes": 82182,
              "cacheLifetimeMs": 0,
              "totalBytes": 82182,
              "url": "https://softteco.co/static/js/2.dd95bc81.chunk.js",
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 65828,
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg",
              "cacheHitProbability": 0,
              "wastedBytes": 65828
            },
            {
              "wastedBytes": 49046,
              "totalBytes": 49046,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/color-bsb-bank.65b31155.svg",
              "cacheHitProbability": 0
            },
            {
              "wastedBytes": 48999,
              "cacheLifetimeMs": 0,
              "totalBytes": 48999,
              "url": "https://softteco.co/static/media/bsb-bank-lg.342670e0.svg",
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "totalBytes": 43237,
              "wastedBytes": 43237,
              "cacheHitProbability": 0
            },
            {
              "wastedBytes": 41284,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 41284,
              "url": "https://softteco.co/static/media/icons-sprite.58d296a2.svg"
            },
            {
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/best-it-companies.3eede889.svg",
              "cacheLifetimeMs": 0,
              "totalBytes": 26142,
              "wastedBytes": 26142
            },
            {
              "url": "https://softteco.co/static/media/softwareworld.5cb07bc8.png",
              "wastedBytes": 24289,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 24289
            },
            {
              "wastedBytes": 22621,
              "totalBytes": 22621,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/js/main.59777189.chunk.js",
              "cacheHitProbability": 0
            },
            {
              "wastedBytes": 21659,
              "url": "https://softteco.co/static/media/the-world-bank-lg.985a539c.svg",
              "totalBytes": 21659,
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0
            },
            {
              "wastedBytes": 20671,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 20671,
              "url": "https://softteco.co/static/media/iso-27001.fb3c1393.png"
            },
            {
              "url": "https://softteco.co/static/media/color-the-world-bank.bda29e40.svg",
              "totalBytes": 16657,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "wastedBytes": 16657
            },
            {
              "url": "https://softteco.co/static/media/best-it-companies-2.358554cb.svg",
              "totalBytes": 16530,
              "cacheLifetimeMs": 0,
              "wastedBytes": 16530,
              "cacheHitProbability": 0
            },
            {
              "totalBytes": 15521,
              "wastedBytes": 15521,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/iso-9001.3671892a.svg",
              "cacheLifetimeMs": 0
            },
            {
              "totalBytes": 12566,
              "wastedBytes": 12566,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/johnson-and-johnson-lg.bd4d7468.svg",
              "cacheHitProbability": 0
            },
            {
              "url": "https://softteco.co/static/media/clutch.60ccc87a.png",
              "wastedBytes": 12122,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 12122
            },
            {
              "totalBytes": 11988,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/color-johnson-and-johnson.8d37d9ec.svg",
              "wastedBytes": 11988,
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "wastedBytes": 9110,
              "url": "https://softteco.co/static/media/digital-knights.29954dc8.svg",
              "totalBytes": 9110
            },
            {
              "url": "https://softteco.co/static/media/kinvey-lg.5b4ba0d7.svg",
              "wastedBytes": 8385,
              "totalBytes": 8385,
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/barnes-and-noble-lg.53b685ff.svg",
              "wastedBytes": 7716,
              "totalBytes": 7716
            },
            {
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/logo-xs.095ef7f1.svg",
              "totalBytes": 7682,
              "cacheHitProbability": 0,
              "wastedBytes": 7682
            },
            {
              "url": "https://softteco.co/static/media/logo-lg.544bb045.svg",
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 7631,
              "wastedBytes": 7631
            },
            {
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/color-kinvey.1ec90c80.svg",
              "cacheHitProbability": 0,
              "wastedBytes": 7602,
              "totalBytes": 7602
            },
            {
              "cacheHitProbability": 0,
              "wastedBytes": 6868,
              "totalBytes": 6868,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/volkswagen-lg.881c5fca.svg"
            },
            {
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/color-barnes-and-noble.d1014854.svg",
              "wastedBytes": 6862,
              "totalBytes": 6862,
              "cacheLifetimeMs": 0
            },
            {
              "totalBytes": 6622,
              "cacheLifetimeMs": 0,
              "wastedBytes": 6622,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/evernote-lg.f6d4d2b6.svg"
            },
            {
              "totalBytes": 6606,
              "cacheLifetimeMs": 0,
              "url": "https://softteco.co/static/media/color-volkswagen.bceb59fb.svg",
              "wastedBytes": 6606,
              "cacheHitProbability": 0
            },
            {
              "wastedBytes": 6007,
              "cacheLifetimeMs": 0,
              "totalBytes": 6007,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/color-evernote.004dd8a7.svg"
            },
            {
              "url": "https://softteco.co/static/media/home-bg-lg.7abfce17.svg",
              "wastedBytes": 5623,
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 5623
            },
            {
              "url": "https://softteco.co/static/media/color-blueprint.933f0140.svg",
              "totalBytes": 5076,
              "wastedBytes": 5076,
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0
            },
            {
              "url": "https://softteco.co/static/media/blueprint-lg.33237f9f.svg",
              "totalBytes": 5075,
              "cacheHitProbability": 0,
              "wastedBytes": 5075,
              "cacheLifetimeMs": 0
            },
            {
              "cacheHitProbability": 0,
              "wastedBytes": 4932,
              "url": "https://softteco.co/static/media/htp.c3f82b1f.svg",
              "cacheLifetimeMs": 0,
              "totalBytes": 4932
            },
            {
              "totalBytes": 4423,
              "wastedBytes": 4423,
              "url": "https://softteco.co/static/media/samsung-lg.38dbb50c.svg",
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0
            },
            {
              "totalBytes": 4293,
              "url": "https://softteco.co/static/media/footer-bg.b8a5eab1.svg",
              "cacheLifetimeMs": 0,
              "wastedBytes": 4293,
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 4221,
              "url": "https://softteco.co/static/media/color-samsung.bda73e2a.svg",
              "wastedBytes": 4221
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "wastedBytes": 2048,
              "url": "https://softteco.co/static/media/twitter.6bf9ef74.svg",
              "totalBytes": 2048
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 1395,
              "url": "https://softteco.co/static/media/arrow-down.69158b9b.svg",
              "wastedBytes": 1395
            },
            {
              "wastedBytes": 1322,
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 1322,
              "url": "https://softteco.co/static/media/file-add.3610d07c.svg"
            },
            {
              "wastedBytes": 1236,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/linkedin.92d6bbc3.svg",
              "cacheLifetimeMs": 0,
              "totalBytes": 1236
            },
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 1137,
              "cacheHitProbability": 0,
              "wastedBytes": 1137,
              "url": "https://softteco.co/static/css/2.81198f32.chunk.css"
            },
            {
              "wastedBytes": 1129,
              "totalBytes": 1129,
              "url": "https://softteco.co/static/media/tablet.402273ce.svg",
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0
            },
            {
              "url": "https://px.ads.linkedin.com/collect?v=2&fmt=js&pid=519972&time=1679922819581&url=https%3A%2F%2Fsoftteco.co%2F&cookiesTest=true&liSync=true",
              "cacheLifetimeMs": 0,
              "totalBytes": 956,
              "wastedBytes": 956,
              "cacheHitProbability": 0
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "wastedBytes": 912,
              "totalBytes": 912,
              "url": "https://softteco.co/static/media/desktop.4a72d18e.svg"
            },
            {
              "url": "https://softteco.co/static/media/mobile.58ed46dc.svg",
              "totalBytes": 826,
              "cacheHitProbability": 0,
              "wastedBytes": 826,
              "cacheLifetimeMs": 0
            },
            {
              "totalBytes": 772,
              "url": "https://softteco.co/static/css/main.b33a723b.chunk.css",
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "wastedBytes": 772
            },
            {
              "totalBytes": 741,
              "wastedBytes": 741,
              "cacheHitProbability": 0,
              "url": "https://softteco.co/static/media/facebook.b985067a.svg",
              "cacheLifetimeMs": 0
            },
            {
              "cacheLifetimeMs": 0,
              "cacheHitProbability": 0,
              "totalBytes": 599,
              "url": "https://softteco.co/static/media/play.bad16803.svg",
              "wastedBytes": 599
            },
            {
              "wastedBytes": 217,
              "cacheHitProbability": 0,
              "cacheLifetimeMs": 0,
              "totalBytes": 217,
              "url": "https://mc.yandex.com/sync_cookie_image_decide_secondary?token=9955.T0KRv6meJwLMrRHjiHI5zQ-bWJ0qYERrrWrGygeMPgfOxitfbktA2Ugmg4pPdXPCm9d3MWq-o7w9VXe0k9MGOoXQRP7r4Z3QrHIa4sksFDM%2C.p6RYOocvj8LEyXKK9eHxsg2CZNU%2C"
            },
            {
              "cacheLifetimeMs": 0,
              "totalBytes": 217,
              "cacheHitProbability": 0,
              "wastedBytes": 217,
              "url": "https://mc.yandex.com/sync_cookie_image_decide?token=9955.0izHhqGoTuPfZY32YNdUeHcLkpvPSsrDTRysk3efx1bdBYDDE_NqAk31m1f555BCo2BkFg6q3okhzNBY8lnFrdIifedzE78Da4ph_LfXx6A%2C._2VOhdi8mvt5G25ou-UrtLWPoqQ%2C"
            },
            {
              "url": "https://mc.yandex.ru/metrika/tag.js",
              "cacheLifetimeMs": 3600000,
              "totalBytes": 74656,
              "wastedBytes": 59724.8,
              "cacheHitProbability": 0.2,
              "debugData": {
                "type": "debugdata",
                "max-age": 3600
              }
            },
            {
              "cacheHitProbability": 0.2,
              "cacheLifetimeMs": 3600000,
              "url": "https://mc.yandex.com/metrika/advert.gif",
              "debugData": {
                "max-age": 3600,
                "type": "debugdata"
              },
              "wastedBytes": 531.2,
              "totalBytes": 664
            },
            {
              "url": "https://www.google-analytics.com/analytics.js",
              "debugData": {
                "max-age": 7200,
                "type": "debugdata",
                "public": true
              },
              "cacheLifetimeMs": 7200000,
              "wastedBytes": 15445.5,
              "totalBytes": 20594,
              "cacheHitProbability": 0.25
            },
            {
              "cacheHitProbability": 0.36873333333333336,
              "debugData": {
                "type": "debugdata",
                "max-age": 23172
              },
              "wastedBytes": 3216.3036666666667,
              "url": "https://snap.licdn.com/li.lms-analytics/insight.min.js",
              "totalBytes": 5095,
              "cacheLifetimeMs": 23172000
            }
          ]
        },
        "numericValue": 3728113.8036666671,
        "numericUnit": "byte"
      },
      "uses-responsive-images": {
        "id": "uses-responsive-images",
        "title": "Properly size images",
        "description": "Serve images that are appropriately-sized to save cellular data and improve load time. [Learn how to size images](https://developer.chrome.com/docs/lighthouse/performance/uses-responsive-images/).",
        "score": 0.97,
        "scoreDisplayMode": "numeric",
        "displayValue": "Potential savings of 85 KiB",
        "details": {
          "type": "opportunity",
          "overallSavingsBytes": 87477,
          "headings": [
            {
              "key": "node",
              "valueType": "node"
            },
            {
              "valueType": "url",
              "label": "URL",
              "key": "url"
            },
            {
              "valueType": "bytes",
              "label": "Resource Size",
              "key": "totalBytes"
            },
            {
              "valueType": "bytes",
              "label": "Potential Savings",
              "key": "wastedBytes"
            }
          ],
          "overallSavingsMs": 40,
          "items": [
            {
              "node": {
                "lhId": "1-8-IMG",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,6,LI,0,IMG",
                "snippet": "\u003cimg src=\"/static/media/good-firms.29cc63cc.jpg\" srcset=\"/static/media/good-firms@2x.b4ed7717.jpg 2x\" width=\"137\" alt=\"Good Firm\"\u003e",
                "nodeLabel": "Good Firm",
                "type": "node",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "top": 4123,
                  "width": 137,
                  "left": -1664,
                  "bottom": 4241,
                  "height": 118,
                  "right": -1527
                }
              },
              "wastedBytes": 55234,
              "wastedPercent": 84.275848652854776,
              "totalBytes": 65539,
              "url": "https://softteco.co/static/media/good-firms.29cc63cc.jpg"
            },
            {
              "url": "https://softteco.co/static/media/top-mobile-app-development-companies.9f0a363b.png",
              "wastedPercent": 75.070422535211264,
              "wastedBytes": 32243,
              "node": {
                "lhId": "1-9-IMG",
                "snippet": "\u003cimg src=\"/static/media/top-mobile-app-development-companies.9f0a363b.png\" width=\"177\" alt=\"Top Mobile App Development Companies\"\u003e",
                "nodeLabel": "Top Mobile App Development Companies",
                "path": "1,HTML,1,BODY,0,DIV,5,DIV,0,DIV,0,DIV,0,UL,7,LI,0,IMG",
                "selector": "div.react-multi-carousel-list \u003e ul.react-multi-carousel-track \u003e li.react-multi-carousel-item \u003e img",
                "boundingRect": {
                  "width": 177,
                  "bottom": 4245,
                  "right": -1237,
                  "height": 126,
                  "left": -1414,
                  "top": 4119
                },
                "type": "node"
              },
              "totalBytes": 42950
            }
          ]
        },
        "numericValue": 40,
        "numericUnit": "millisecond"
      }
    },
    "categories": {
      "performance": {
        "id": "performance",
        "title": "Performance",
        "score": 0.79,
        "auditRefs": [
          {
            "id": "first-contentful-paint",
            "weight": 10,
            "group": "metrics",
            "acronym": "FCP",
            "relevantAudits": [
              "server-response-time",
              "render-blocking-resources",
              "redirects",
              "critical-request-chains",
              "uses-text-compression",
              "uses-rel-preconnect",
              "uses-rel-preload",
              "font-display",
              "unminified-javascript",
              "unminified-css",
              "unused-css-rules"
            ]
          },
          {
            "id": "largest-contentful-paint",
            "weight": 25,
            "group": "metrics",
            "acronym": "LCP",
            "relevantAudits": [
              "server-response-time",
              "render-blocking-resources",
              "redirects",
              "critical-request-chains",
              "uses-text-compression",
              "uses-rel-preconnect",
              "uses-rel-preload",
              "font-display",
              "unminified-javascript",
              "unminified-css",
              "unused-css-rules",
              "largest-contentful-paint-element",
              "prioritize-lcp-image",
              "unused-javascript",
              "efficient-animated-content",
              "total-byte-weight",
              "lcp-lazy-loaded"
            ]
          },
          {
            "id": "total-blocking-time",
            "weight": 30,
            "group": "metrics",
            "acronym": "TBT",
            "relevantAudits": [
              "long-tasks",
              "third-party-summary",
              "third-party-facades",
              "bootup-time",
              "mainthread-work-breakdown",
              "dom-size",
              "duplicated-javascript",
              "legacy-javascript",
              "viewport"
            ]
          },
          {
            "id": "cumulative-layout-shift",
            "weight": 25,
            "group": "metrics",
            "acronym": "CLS",
            "relevantAudits": [
              "layout-shift-elements",
              "non-composited-animations",
              "unsized-images"
            ]
          },
          {
            "id": "speed-index",
            "weight": 10,
            "group": "metrics",
            "acronym": "SI"
          },
          {
            "id": "interactive",
            "weight": 0,
            "group": "hidden",
            "acronym": "TTI"
          },
          {
            "id": "max-potential-fid",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "first-meaningful-paint",
            "weight": 0,
            "group": "hidden",
            "acronym": "FMP"
          },
          {
            "id": "render-blocking-resources",
            "weight": 0
          },
          {
            "id": "uses-responsive-images",
            "weight": 0
          },
          {
            "id": "offscreen-images",
            "weight": 0
          },
          {
            "id": "unminified-css",
            "weight": 0
          },
          {
            "id": "unminified-javascript",
            "weight": 0
          },
          {
            "id": "unused-css-rules",
            "weight": 0
          },
          {
            "id": "unused-javascript",
            "weight": 0
          },
          {
            "id": "uses-optimized-images",
            "weight": 0
          },
          {
            "id": "modern-image-formats",
            "weight": 0
          },
          {
            "id": "uses-text-compression",
            "weight": 0
          },
          {
            "id": "uses-rel-preconnect",
            "weight": 0
          },
          {
            "id": "server-response-time",
            "weight": 0
          },
          {
            "id": "redirects",
            "weight": 0
          },
          {
            "id": "uses-rel-preload",
            "weight": 0
          },
          {
            "id": "efficient-animated-content",
            "weight": 0
          },
          {
            "id": "duplicated-javascript",
            "weight": 0
          },
          {
            "id": "legacy-javascript",
            "weight": 0
          },
          {
            "id": "prioritize-lcp-image",
            "weight": 0
          },
          {
            "id": "total-byte-weight",
            "weight": 0
          },
          {
            "id": "uses-long-cache-ttl",
            "weight": 0
          },
          {
            "id": "dom-size",
            "weight": 0
          },
          {
            "id": "critical-request-chains",
            "weight": 0
          },
          {
            "id": "user-timings",
            "weight": 0
          },
          {
            "id": "bootup-time",
            "weight": 0
          },
          {
            "id": "mainthread-work-breakdown",
            "weight": 0
          },
          {
            "id": "font-display",
            "weight": 0
          },
          {
            "id": "resource-summary",
            "weight": 0
          },
          {
            "id": "third-party-summary",
            "weight": 0
          },
          {
            "id": "third-party-facades",
            "weight": 0
          },
          {
            "id": "largest-contentful-paint-element",
            "weight": 0
          },
          {
            "id": "lcp-lazy-loaded",
            "weight": 0
          },
          {
            "id": "layout-shift-elements",
            "weight": 0
          },
          {
            "id": "uses-passive-event-listeners",
            "weight": 0
          },
          {
            "id": "no-document-write",
            "weight": 0
          },
          {
            "id": "long-tasks",
            "weight": 0
          },
          {
            "id": "non-composited-animations",
            "weight": 0
          },
          {
            "id": "unsized-images",
            "weight": 0
          },
          {
            "id": "viewport",
            "weight": 0
          },
          {
            "id": "performance-budget",
            "weight": 0,
            "group": "budgets"
          },
          {
            "id": "timing-budget",
            "weight": 0,
            "group": "budgets"
          },
          {
            "id": "network-requests",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "network-rtt",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "network-server-latency",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "main-thread-tasks",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "diagnostics",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "metrics",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "screenshot-thumbnails",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "final-screenshot",
            "weight": 0,
            "group": "hidden"
          },
          {
            "id": "script-treemap-data",
            "weight": 0,
            "group": "hidden"
          }
        ]
      }
    },
    "categoryGroups": {
      "seo-crawl": {
        "title": "Crawling and Indexing",
        "description": "To appear in search results, crawlers need access to your app."
      },
      "a11y-aria": {
        "title": "ARIA",
        "description": "These are opportunities to improve the usage of ARIA in your application which may enhance the experience for users of assistive technology, like a screen reader."
      },
      "pwa-optimized": {
        "title": "PWA Optimized"
      },
      "load-opportunities": {
        "title": "Opportunities",
        "description": "These suggestions can help your page load faster. They don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
      },
      "a11y-language": {
        "title": "Internationalization and localization",
        "description": "These are opportunities to improve the interpretation of your content by users in different locales."
      },
      "a11y-best-practices": {
        "title": "Best practices",
        "description": "These items highlight common accessibility best practices."
      },
      "metrics": {
        "title": "Metrics"
      },
      "best-practices-ux": {
        "title": "User Experience"
      },
      "best-practices-general": {
        "title": "General"
      },
      "budgets": {
        "title": "Budgets",
        "description": "Performance budgets set standards for the performance of your site."
      },
      "a11y-audio-video": {
        "title": "Audio and video",
        "description": "These are opportunities to provide alternative content for audio and video. This may improve the experience for users with hearing or vision impairments."
      },
      "a11y-color-contrast": {
        "title": "Contrast",
        "description": "These are opportunities to improve the legibility of your content."
      },
      "a11y-names-labels": {
        "title": "Names and labels",
        "description": "These are opportunities to improve the semantics of the controls in your application. This may enhance the experience for users of assistive technology, like a screen reader."
      },
      "pwa-installable": {
        "title": "Installable"
      },
      "a11y-tables-lists": {
        "title": "Tables and lists",
        "description": "These are opportunities to improve the experience of reading tabular or list data using assistive technology, like a screen reader."
      },
      "diagnostics": {
        "title": "Diagnostics",
        "description": "More information about the performance of your application. These numbers don't [directly affect](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) the Performance score."
      },
      "best-practices-browser-compat": {
        "title": "Browser Compatibility"
      },
      "a11y-navigation": {
        "title": "Navigation",
        "description": "These are opportunities to improve keyboard navigation in your application."
      },
      "best-practices-trust-safety": {
        "title": "Trust and Safety"
      },
      "seo-mobile": {
        "title": "Mobile Friendly",
        "description": "Make sure your pages are mobile friendly so users don’t have to pinch or zoom in order to read the content pages. [Learn how to make pages mobile-friendly](https://developers.google.com/search/mobile-sites/)."
      },
      "seo-content": {
        "title": "Content Best Practices",
        "description": "Format your HTML in a way that enables crawlers to better understand your app’s content."
      }
    },
    "timing": {
      "total": 17806.2
    },
    "i18n": {
      "rendererFormattedStrings": {
        "varianceDisclaimer": "Values are estimated and may vary. The [performance score is calculated](https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/) directly from these metrics.",
        "opportunityResourceColumnLabel": "Opportunity",
        "opportunitySavingsColumnLabel": "Estimated Savings",
        "errorMissingAuditInfo": "Report error: no audit information",
        "errorLabel": "Error!",
        "warningHeader": "Warnings: ",
        "passedAuditsGroupTitle": "Passed audits",
        "notApplicableAuditsGroupTitle": "Not applicable",
        "manualAuditsGroupTitle": "Additional items to manually check",
        "toplevelWarningsMessage": "There were issues affecting this run of Lighthouse:",
        "crcLongestDurationLabel": "Maximum critical path latency:",
        "crcInitialNavigation": "Initial Navigation",
        "lsPerformanceCategoryDescription": "[Lighthouse](https://developers.google.com/web/tools/lighthouse/) analysis of the current page on an emulated mobile network. Values are estimated and may vary.",
        "labDataTitle": "Lab Data",
        "warningAuditsGroupTitle": "Passed audits but with warnings",
        "snippetExpandButtonLabel": "Expand snippet",
        "snippetCollapseButtonLabel": "Collapse snippet",
        "thirdPartyResourcesLabel": "Show 3rd-party resources",
        "runtimeDesktopEmulation": "Emulated Desktop",
        "runtimeMobileEmulation": "Emulated Moto G Power",
        "runtimeNoEmulation": "No emulation",
        "runtimeSettingsBenchmark": "Unthrottled CPU/Memory Power",
        "runtimeSettingsCPUThrottling": "CPU throttling",
        "runtimeSettingsDevice": "Device",
        "runtimeSettingsNetworkThrottling": "Network throttling",
        "runtimeSettingsUANetwork": "User agent (network)",
        "runtimeUnknown": "Unknown",
        "dropdownCopyJSON": "Copy JSON",
        "dropdownDarkTheme": "Toggle Dark Theme",
        "dropdownPrintExpanded": "Print Expanded",
        "dropdownPrintSummary": "Print Summary",
        "dropdownSaveGist": "Save as Gist",
        "dropdownSaveHTML": "Save as HTML",
        "dropdownSaveJSON": "Save as JSON",
        "dropdownViewer": "Open in Viewer",
        "footerIssue": "File an issue",
        "throttlingProvided": "Provided by environment",
        "calculatorLink": "See calculator.",
        "runtimeSettingsAxeVersion": "Axe version",
        "viewTreemapLabel": "View Treemap",
        "showRelevantAudits": "Show audits relevant to:"
      }
    },
    "stackPacks": [
      {
        "id": "react",
        "title": "React",
        "iconDataURL": "data:image/svg+xml,\u003csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 841.9 595.3\"\u003e\u003cg fill=\"%2361DAFB\"\u003e\u003cpath d=\"M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24 4.7 8 9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6 0-15.7 22.9-35.6 58.3-50.6 8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6zM320.8 78.4z\"/\u003e\u003ccircle cx=\"420.9\" cy=\"296.5\" r=\"45.7\"/\u003e\u003cpath d=\"M520.5 78.1z\"/\u003e\u003c/g\u003e\u003c/svg\u003e",
        "descriptions": {
          "user-timings": "Use the React DevTools Profiler, which makes use of the Profiler API, to measure the rendering performance of your components. [Learn more.](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html)",
          "redirects": "If you are using React Router, minimize usage of the `\u003cRedirect\u003e` component for [route navigations](https://reacttraining.com/react-router/web/api/Redirect).",
          "unused-javascript": "If you are not server-side rendering, [split your JavaScript bundles](https://web.dev/code-splitting-suspense/) with `React.lazy()`. Otherwise, code-split using a third-party library such as [loadable-components](https://www.smooth-code.com/open-source/loadable-components/docs/getting-started/).",
          "dom-size": "Consider using a \"windowing\" library like `react-window` to minimize the number of DOM nodes created if you are rendering many repeated elements on the page. [Learn more](https://web.dev/virtualize-long-lists-react-window/). Also, minimize unnecessary re-renders using [`shouldComponentUpdate`](https://reactjs.org/docs/optimizing-performance.html#shouldcomponentupdate-in-action), [`PureComponent`](https://reactjs.org/docs/react-api.html#reactpurecomponent), or [`React.memo`](https://reactjs.org/docs/react-api.html#reactmemo) and [skip effects](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) only until certain dependencies have changed if you are using the `Effect` hook to improve runtime performance.",
          "server-response-time": "If you are server-side rendering any React components, consider using `renderToPipeableStream()` or `renderToStaticNodeStream()` to allow the client to receive and hydrate different parts of the markup instead of all at once. [Learn more](https://reactjs.org/docs/react-dom-server.html#renderToPipeableStream).",
          "unminified-javascript": "If your build system minifies JS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build).",
          "unminified-css": "If your build system minifies CSS files automatically, ensure that you are deploying the production build of your application. You can check this with the React Developer Tools extension. [Learn more](https://reactjs.org/docs/optimizing-performance.html#use-the-production-build)."
        }
      }
    ],
    "entities": [
      {
        "name": "softteco.co",
        "isFirstParty": true,
        "isUnrecognized": true,
        "origins": [
          "https://softteco.co"
        ]
      },
      {
        "name": "Cloudflare CDN",
        "homepage": "https://cdnjs.com/",
        "origins": [
          "https://cdnjs.cloudflare.com"
        ]
      },
      {
        "name": "Google Tag Manager",
        "homepage": "https://marketingplatform.google.com/about/tag-manager/",
        "origins": [
          "https://www.googletagmanager.com"
        ]
      },
      {
        "name": "Yandex Metrica",
        "homepage": "https://metrica.yandex.com/about?",
        "origins": [
          "https://mc.yandex.ru",
          "https://mc.yandex.com"
        ]
      },
      {
        "name": "google.com",
        "isUnrecognized": true,
        "origins": [
          "https://region1.analytics.google.com"
        ]
      },
      {
        "name": "Google/Doubleclick Ads",
        "homepage": "https://marketingplatform.google.com/about/enterprise/",
        "origins": [
          "https://stats.g.doubleclick.net"
        ]
      },
      {
        "name": "Other Google APIs/SDKs",
        "homepage": "https://developers.google.com/apis-explorer/#p/",
        "origins": [
          "https://www.google.be",
          "https://www.google.com"
        ]
      },
      {
        "name": "Tawk.to",
        "homepage": "https://www.tawk.to/",
        "origins": [
          "https://embed.tawk.to"
        ]
      },
      {
        "name": "LinkedIn Ads",
        "origins": [
          "https://snap.licdn.com",
          "https://px.ads.linkedin.com",
          "https://www.linkedin.com"
        ]
      },
      {
        "name": "oribi.io",
        "isUnrecognized": true,
        "origins": [
          "https://cdn.linkedin.oribi.io"
        ]
      },
      {
        "name": "Google Analytics",
        "homepage": "https://marketingplatform.google.com/about/analytics/",
        "origins": [
          "https://www.google-analytics.com"
        ]
      }
    ],
    "fullPageScreenshot": {
      "nodes": {
        "1-38-IMG": {
          "right": 747,
          "width": 30,
          "top": 6516,
          "left": 717,
          "bottom": 6546,
          "height": 30
        },
        "page-18-DIV": {
          "bottom": 7379,
          "left": 1016,
          "top": 7350,
          "right": 1181,
          "height": 30,
          "width": 165
        },
        "1-77-SPAN": {
          "bottom": 3409,
          "left": 924,
          "top": 3349,
          "width": 60,
          "height": 60,
          "right": 984
        },
        "1-81-LINK": {
          "left": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "width": 0,
          "height": 0
        },
        "1-59-IMG": {
          "bottom": 7383,
          "top": 7346,
          "left": 593,
          "right": 758,
          "height": 38,
          "width": 165
        },
        "1-71-SPAN": {
          "top": 3765,
          "height": 60,
          "right": 110,
          "left": 50,
          "width": 60,
          "bottom": 3825
        },
        "1-47-IMG": {
          "height": 85,
          "width": 165,
          "right": 758,
          "bottom": 7123,
          "left": 593,
          "top": 7038
        },
        "1-78-SPAN": {
          "width": 60,
          "bottom": 3616,
          "height": 60,
          "right": 984,
          "left": 924,
          "top": 3556
        },
        "1-29-IMG": {
          "height": 80,
          "right": 3779,
          "bottom": 4222,
          "top": 4142,
          "left": 3581,
          "width": 198
        },
        "1-61-IMG": {
          "top": 7350,
          "left": 1016,
          "width": 165,
          "right": 1181,
          "bottom": 7379,
          "height": 30
        },
        "1-51-IMG": {
          "top": 7221,
          "width": 165,
          "left": 169,
          "height": 26,
          "right": 334,
          "bottom": 7247
        },
        "page-16-DIV": {
          "width": 165,
          "left": 593,
          "height": 0,
          "top": 7123,
          "right": 758,
          "bottom": 7123
        },
        "1-62-IMG": {
          "top": 7350,
          "height": 30,
          "width": 165,
          "right": 1181,
          "bottom": 7379,
          "left": 1016
        },
        "1-32-IMG": {
          "right": 4552,
          "top": 4119,
          "height": 125,
          "left": 4427,
          "width": 125,
          "bottom": 4244
        },
        "1-79-SPAN": {
          "height": 60,
          "top": 3765,
          "bottom": 3825,
          "left": 924,
          "width": 60,
          "right": 984
        },
        "1-55-IMG": {
          "top": 7217,
          "right": 1181,
          "bottom": 7252,
          "width": 165,
          "height": 35,
          "left": 1016
        },
        "1-24-IMG": {
          "right": 2388,
          "top": 4124,
          "bottom": 4240,
          "height": 116,
          "left": 2272,
          "width": 116
        },
        "1-31-IMG": {
          "width": 177,
          "height": 126,
          "bottom": 4245,
          "left": 4131,
          "top": 4119,
          "right": 4308
        },
        "1-9-IMG": {
          "width": 177,
          "top": 4119,
          "bottom": 4245,
          "height": 126,
          "right": -1632,
          "left": -1809
        },
        "page-11-DIV": {
          "bottom": 7384,
          "width": 165,
          "top": 7345,
          "left": 169,
          "height": 39,
          "right": 334
        },
        "1-74-SPAN": {
          "bottom": 3614,
          "top": 3554,
          "left": 487,
          "right": 547,
          "height": 60,
          "width": 60
        },
        "1-37-IMG": {
          "left": 156,
          "bottom": 6029,
          "top": 5999,
          "right": 186,
          "width": 30,
          "height": 30
        },
        "page-19-DIV": {
          "bottom": 7384,
          "top": 7384,
          "right": 334,
          "width": 165,
          "height": 0,
          "left": 169
        },
        "1-4-IMG": {
          "width": 127,
          "left": -3134,
          "bottom": 4245,
          "right": -3007,
          "top": 4118,
          "height": 127
        },
        "1-16-IMG": {
          "width": 111,
          "right": 225,
          "top": 4126,
          "left": 114,
          "bottom": 4237,
          "height": 111
        },
        "1-27-IMG": {
          "bottom": 4237,
          "right": 3195,
          "width": 111,
          "top": 4126,
          "height": 111,
          "left": 3084
        },
        "page-1-H1": {
          "width": 800,
          "right": 800,
          "height": 160,
          "bottom": 726,
          "top": 566,
          "left": 0
        },
        "1-18-IMG": {
          "height": 80,
          "bottom": 4222,
          "right": 809,
          "width": 198,
          "left": 611,
          "top": 4142
        },
        "1-56-IMG": {
          "right": 1181,
          "width": 165,
          "bottom": 7251,
          "height": 34,
          "top": 7217,
          "left": 1016
        },
        "1-69-SPAN": {
          "right": 110,
          "bottom": 3409,
          "height": 60,
          "top": 3349,
          "left": 50,
          "width": 60
        },
        "1-63-IMG": {
          "right": 160,
          "left": 144,
          "height": 16,
          "top": 8163,
          "bottom": 8179,
          "width": 16
        },
        "1-46-IMG": {
          "height": 54,
          "bottom": 7108,
          "width": 165,
          "top": 7054,
          "right": 334,
          "left": 169
        },
        "1-82-LINK": {
          "height": 0,
          "left": 0,
          "right": 0,
          "bottom": 0,
          "top": 0,
          "width": 0
        },
        "1-35-IMG": {
          "bottom": 4970,
          "width": 30,
          "top": 4940,
          "left": 286,
          "right": 316,
          "height": 30
        },
        "1-53-IMG": {
          "top": 7213,
          "height": 42,
          "left": 593,
          "right": 758,
          "width": 165,
          "bottom": 7255
        },
        "1-14-IMG": {
          "height": 126,
          "width": 116,
          "right": -312,
          "bottom": 4245,
          "top": 4119,
          "left": -428
        },
        "1-6-IMG": {
          "right": -2431,
          "bottom": 4222,
          "height": 80,
          "width": 198,
          "left": -2629,
          "top": 4142
        },
        "1-75-SPAN": {
          "bottom": 3821,
          "width": 60,
          "top": 3761,
          "height": 60,
          "left": 487,
          "right": 547
        },
        "page-6-DIV": {
          "top": 8192,
          "right": 685,
          "height": 0,
          "left": 125,
          "bottom": 8192,
          "width": 560
        },
        "1-22-IMG": {
          "width": 143,
          "right": 1861,
          "height": 80,
          "top": 4142,
          "left": 1718,
          "bottom": 4222
        },
        "1-83-LINK": {
          "width": 0,
          "bottom": 0,
          "left": 0,
          "right": 0,
          "height": 0,
          "top": 0
        },
        "1-34-IMG": {
          "top": 4940,
          "height": 30,
          "left": 226,
          "width": 30,
          "bottom": 4970,
          "right": 256
        },
        "page-23-DIV": {
          "bottom": 7255,
          "width": 165,
          "top": 7255,
          "right": 758,
          "left": 593,
          "height": 0
        },
        "1-30-IMG": {
          "left": 3881,
          "height": 118,
          "right": 4018,
          "width": 137,
          "top": 4123,
          "bottom": 4241
        },
        "page-0-DIV": {
          "right": 1350,
          "height": 968,
          "bottom": 1130,
          "top": 162,
          "left": 0,
          "width": 1350
        },
        "page-8-DIV": {
          "height": 54,
          "top": 7054,
          "right": 334,
          "bottom": 7108,
          "left": 169,
          "width": 165
        },
        "1-89-UL": {
          "left": -3745,
          "width": 8370,
          "height": 127,
          "right": 4625,
          "bottom": 4245,
          "top": 4118
        },
        "page-9-DIV": {
          "height": 0,
          "right": 1181,
          "bottom": 7379,
          "width": 165,
          "top": 7379,
          "left": 1016
        },
        "1-11-IMG": {
          "top": 4142,
          "left": -1252,
          "right": -1109,
          "height": 80,
          "bottom": 4222,
          "width": 143
        },
        "1-19-IMG": {
          "height": 118,
          "top": 4123,
          "left": 911,
          "bottom": 4241,
          "right": 1048,
          "width": 137
        },
        "1-64-IMG": {
          "bottom": 8540,
          "width": 14,
          "top": 8526,
          "left": 1249,
          "height": 14,
          "right": 1263
        },
        "page-14-DIV": {
          "bottom": 8349,
          "right": 685,
          "top": 8349,
          "height": 0,
          "left": 125,
          "width": 560
        },
        "1-45-IMG": {
          "bottom": 7108,
          "left": 169,
          "height": 54,
          "right": 334,
          "top": 7054,
          "width": 165
        },
        "1-68-SPAN": {
          "bottom": 3200,
          "right": 110,
          "top": 3140,
          "width": 60,
          "height": 60,
          "left": 50
        },
        "1-85-META": {
          "left": 0,
          "top": 0,
          "right": 0,
          "width": 0,
          "height": 0,
          "bottom": 0
        },
        "1-0-IMG": {
          "bottom": 71,
          "top": 31,
          "right": 237,
          "height": 40,
          "width": 217,
          "left": 20
        },
        "1-15-IMG": {
          "top": 4118,
          "bottom": 4245,
          "height": 127,
          "width": 127,
          "right": -37,
          "left": -164
        },
        "1-66-IMG": {
          "bottom": 8540,
          "height": 14,
          "width": 7,
          "top": 8526,
          "left": 1323,
          "right": 1330
        },
        "1-88-META": {
          "left": 0,
          "top": 0,
          "height": 0,
          "bottom": 0,
          "width": 0,
          "right": 0
        },
        "1-57-IMG": {
          "top": 7345,
          "right": 334,
          "left": 169,
          "bottom": 7384,
          "height": 39,
          "width": 165
        },
        "1-39-IMG": {
          "bottom": 6546,
          "top": 6516,
          "height": 30,
          "width": 30,
          "right": 812,
          "left": 782
        },
        "1-5-IMG": {
          "bottom": 4237,
          "top": 4126,
          "height": 111,
          "width": 111,
          "left": -2856,
          "right": -2745
        },
        "1-3-IMG": {
          "right": -3282,
          "height": 126,
          "left": -3398,
          "top": 4119,
          "bottom": 4245,
          "width": 116
        },
        "page-22-DIV": {
          "height": 42,
          "right": 758,
          "top": 7213,
          "left": 593,
          "bottom": 7255,
          "width": 165
        },
        "1-60-IMG": {
          "height": 38,
          "bottom": 7383,
          "right": 758,
          "left": 593,
          "width": 165,
          "top": 7346
        },
        "page-4-DIV": {
          "bottom": 7247,
          "left": 169,
          "height": 0,
          "top": 7247,
          "width": 165,
          "right": 334
        },
        "page-20-DIV": {
          "width": 165,
          "left": 169,
          "height": 0,
          "top": 7108,
          "right": 334,
          "bottom": 7108
        },
        "1-20-IMG": {
          "left": 1161,
          "right": 1338,
          "top": 4119,
          "bottom": 4245,
          "height": 126,
          "width": 177
        },
        "1-42-IMG": {
          "bottom": 7123,
          "left": 156,
          "height": 30,
          "right": 186,
          "top": 7093,
          "width": 30
        },
        "1-44-IMG": {
          "right": 747,
          "left": 717,
          "top": 7610,
          "bottom": 7640,
          "height": 30,
          "width": 30
        },
        "page-10-DIV": {
          "left": 1016,
          "bottom": 7252,
          "height": 35,
          "right": 1181,
          "top": 7217,
          "width": 165
        },
        "1-10-IMG": {
          "right": -1388,
          "left": -1513,
          "bottom": 4244,
          "width": 125,
          "height": 125,
          "top": 4119
        },
        "1-17-IMG": {
          "height": 80,
          "top": 4142,
          "right": 539,
          "width": 198,
          "left": 341,
          "bottom": 4222
        },
        "1-65-IMG": {
          "right": 1303,
          "width": 20,
          "bottom": 8540,
          "top": 8526,
          "height": 14,
          "left": 1283
        },
        "1-33-IMG": {
          "top": 4940,
          "right": 190,
          "left": 160,
          "bottom": 4970,
          "width": 30,
          "height": 30
        },
        "1-40-IMG": {
          "right": 873,
          "height": 30,
          "left": 843,
          "top": 6516,
          "bottom": 6546,
          "width": 30
        },
        "1-1-IMG": {
          "width": 50,
          "left": 526,
          "top": 2654,
          "right": 576,
          "height": 50,
          "bottom": 2704
        },
        "1-86-META": {
          "bottom": 0,
          "height": 0,
          "right": 0,
          "width": 0,
          "left": 0,
          "top": 0
        },
        "1-52-IMG": {
          "width": 165,
          "right": 334,
          "height": 26,
          "top": 7221,
          "bottom": 7247,
          "left": 169
        },
        "page-12-DIV": {
          "bottom": 7123,
          "left": 593,
          "top": 7038,
          "right": 758,
          "width": 165,
          "height": 85
        },
        "1-48-IMG": {
          "left": 593,
          "top": 7038,
          "right": 758,
          "width": 165,
          "height": 85,
          "bottom": 7123
        },
        "1-43-IMG": {
          "height": 30,
          "width": 30,
          "top": 7093,
          "bottom": 7123,
          "left": 216,
          "right": 246
        },
        "1-72-SPAN": {
          "right": 547,
          "bottom": 3200,
          "width": 60,
          "top": 3140,
          "left": 487,
          "height": 60
        },
        "page-13-DIV": {
          "top": 7346,
          "left": 593,
          "right": 758,
          "bottom": 7383,
          "height": 38,
          "width": 165
        },
        "1-50-IMG": {
          "height": 34,
          "right": 1181,
          "top": 7064,
          "width": 165,
          "bottom": 7098,
          "left": 1016
        },
        "1-76-SPAN": {
          "width": 60,
          "bottom": 3200,
          "right": 984,
          "left": 924,
          "top": 3140,
          "height": 60
        },
        "page-3-DIV": {
          "height": 0,
          "left": 1016,
          "top": 7098,
          "bottom": 7098,
          "width": 165,
          "right": 1181
        },
        "1-80-DIV": {
          "width": 1350,
          "right": 1350,
          "height": 1041,
          "top": 7464,
          "left": 0,
          "bottom": 8504
        },
        "1-87-META": {
          "height": 0,
          "left": 0,
          "right": 0,
          "top": 0,
          "width": 0,
          "bottom": 0
        },
        "page-24-UL": {
          "bottom": 4245,
          "height": 127,
          "width": 8370,
          "top": 4118,
          "left": -3745,
          "right": 4625
        },
        "1-7-IMG": {
          "top": 4142,
          "width": 198,
          "height": 80,
          "right": -2161,
          "left": -2359,
          "bottom": 4222
        },
        "1-36-IMG": {
          "left": 717,
          "bottom": 5512,
          "width": 30,
          "height": 30,
          "top": 5482,
          "right": 747
        },
        "1-73-SPAN": {
          "right": 547,
          "top": 3347,
          "bottom": 3407,
          "width": 60,
          "height": 60,
          "left": 487
        },
        "1-8-IMG": {
          "width": 137,
          "height": 118,
          "top": 4123,
          "bottom": 4241,
          "right": -1922,
          "left": -2059
        },
        "1-49-IMG": {
          "height": 34,
          "top": 7064,
          "right": 1181,
          "width": 165,
          "bottom": 7098,
          "left": 1016
        },
        "1-13-IMG": {
          "bottom": 4240,
          "left": -698,
          "width": 116,
          "top": 4124,
          "right": -582,
          "height": 116
        },
        "1-26-IMG": {
          "right": 2933,
          "left": 2806,
          "top": 4118,
          "width": 127,
          "bottom": 4245,
          "height": 127
        },
        "page-7-DIV": {
          "top": 7221,
          "right": 334,
          "height": 26,
          "left": 169,
          "width": 165,
          "bottom": 7247
        },
        "1-28-IMG": {
          "height": 80,
          "width": 198,
          "left": 3311,
          "right": 3509,
          "top": 4142,
          "bottom": 4222
        },
        "1-2-IMG": {
          "right": -3552,
          "height": 116,
          "bottom": 4240,
          "left": -3668,
          "width": 116,
          "top": 4124
        },
        "1-70-SPAN": {
          "top": 3558,
          "bottom": 3618,
          "left": 50,
          "height": 60,
          "width": 60,
          "right": 110
        },
        "1-12-IMG": {
          "height": 110,
          "right": -855,
          "width": 110,
          "bottom": 4237,
          "left": -965,
          "top": 4127
        },
        "page-5-DIV": {
          "width": 165,
          "left": 593,
          "right": 758,
          "height": 0,
          "bottom": 7383,
          "top": 7383
        },
        "1-54-IMG": {
          "bottom": 7255,
          "right": 758,
          "top": 7213,
          "height": 42,
          "left": 593,
          "width": 165
        },
        "1-67-IMG": {
          "bottom": 8540,
          "top": 8526,
          "right": 96,
          "width": 76,
          "left": 20,
          "height": 14
        },
        "1-41-IMG": {
          "bottom": 6677,
          "top": 6669,
          "left": 636,
          "right": 650,
          "width": 14,
          "height": 8
        },
        "1-84-LINK": {
          "left": 0,
          "width": 0,
          "top": 0,
          "bottom": 0,
          "right": 0,
          "height": 0
        },
        "page-15-DIV": {
          "top": 8349,
          "bottom": 8349,
          "height": 0,
          "left": 125,
          "width": 560,
          "right": 685
        },
        "page-17-DIV": {
          "bottom": 7252,
          "right": 1181,
          "width": 165,
          "left": 1016,
          "height": 0,
          "top": 7252
        },
        "1-21-IMG": {
          "height": 125,
          "bottom": 4244,
          "left": 1457,
          "width": 125,
          "top": 4119,
          "right": 1582
        },
        "1-58-IMG": {
          "left": 169,
          "top": 7345,
          "right": 334,
          "bottom": 7384,
          "width": 165,
          "height": 39
        },
        "page-2-DIV": {
          "right": 1178,
          "top": 40,
          "height": 22,
          "width": 941,
          "left": 237,
          "bottom": 62
        },
        "1-23-IMG": {
          "right": 2115,
          "left": 2005,
          "bottom": 4237,
          "width": 110,
          "top": 4127,
          "height": 110
        },
        "page-21-DIV": {
          "width": 165,
          "left": 1016,
          "height": 34,
          "right": 1181,
          "top": 7064,
          "bottom": 7098
        },
        "1-25-IMG": {
          "bottom": 4245,
          "top": 4119,
          "left": 2542,
          "width": 116,
          "height": 126,
          "right": 2658
        }
      },
      "screenshot": {
        "height": 8562,
        "width": 1350,
        "data": "data:image/"
      }
    }
  },
  "analysisUTCTimestamp": "2023-03-27T13:13:38.264Z"
}
