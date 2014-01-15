    $(function () {
      $('#contactfrm').submit(function (e) {
        var thisForm = $(this);
        //Prevent the default form action
        e.preventDefault();
        $("#success").fadeOut();


        //Display the "loading" message
        $("#loading").fadeIn(function () {
          //Post the form to the send script
          $.ajax({
            type: 'POST',
            url: thisForm.attr("action"),
            data: thisForm.serialize(),
            //Wait for a successful response
            success: function (data) {

              $("#loading").fadeOut(function () {
                $("#success").text(data).fadeIn();
              });

            }
          });
        });
      })
    });




  $(document).ready(function () {
    $(window).on("load scroll resize", function () {
      $('.hero-top-badge,.fade-element').scrollzip({
        showFunction: function () {
          $(this).css("visibility", "visible").addClass('animated fadeIn');
        },
        hideFunction: function () {
          $(this).css("visibility", "hidden").removeClass('animated');
        },
        showShift: 150,
        hideShift: 50,
      });
    });
    $('.fix-1,.fix-2,.fix-3,.fix-4,.map').parallax({
      speed: 0.15
    });


    $('.toggle').click(function () {
      var $toggled = $(this).data('id');
      $($toggled).siblings(':visible').css("z-index", "9997").slideUp('fast');
      $($toggled).css("z-index", "9998").slideDown('slow');
      return false;
    });
  });




      $(function () {
        $("#mygmap").gmap3({
          marker: {
            values: [{
              address: "47 Clinton St Schenectady NY",
              data: "Communication Hub",
              options: {
                icon: "images/marker-green.png"
              }
            }, {
              address: "497 Erie Boulevard Schenectady NY",
              data: "Headquarters",
              options: {
                icon: "images/marker-red.png"
              }
            }],
          },

          map: {
            options: {
              zoom: 17,
              mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, "style1", "style2"]
              }
            }
          },
          styledmaptype: {
            id: "style1",
            options: {
              name: "Map"
            },
            styles: [{
              "featureType": "road",
              "elementType": "geometry",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#2d2b28"
              }]
            }, {
              "featureType": "road.local",
              "elementType": "labels",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#808080"
              }, {
                "weight": 0.3
              }]
            }, {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "road.arterial",
              "elementType": "labels.text.fill",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#808080"
              }, {
                "weight": 0.1
              }]
            }, {
              "featureType": "landscape",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#323232"
              }]
            }, {
              "featureType": "poi",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "on"
              }, {
                "color": "#c8c8c8"
              }]
            }, {
              "featureType": "road.highway",
              "elementType": "labels.text.stroke",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "transit.line",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "transit.station",
              "elementType": "labels.text",
              "stylers": [{
                "visibility": "off"
              }]
            }, {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [{
                "visibility": "on"
              }]
            }, {
              "featureType": "water",
              "elementType": "geometry.stroke",
              "stylers": [{
                "visibility": "simplified"
              }]
            }]
          }
        }, {
          styledmaptype: {
            id: "style2",
            options: {
              name: "Style 2"
            },
            styles: [{
              stylers: [{
                gamma: 0.87
              }, {
                hue: "#00d4ff"
              }, {
                saturation: -97
              }]
            }, {
              featureType: "poi",
              elementType: "labels",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "road.local",
              elementType: "labels",
              stylers: [{
                visibility: "on"
              }]
            }, {
              elementType: "geometry",
              stylers: [{
                visibility: "simplified"
              }]
            }, {
              featureType: "road.highway",
              elementType: "labels",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "road.arterial",
              elementType: "labels",
              stylers: [{
                visibility: "off"
              }]
            }, {
              featureType: "administrative"
            }]
          }
        });
      });