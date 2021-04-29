function map () {

    let mark1 = '/icons/placeMark1.svg';
    let mark2 = '/icons/placeMark2.svg';
    let mark3 = '/icons/placeMark3.svg';
    let mark1Active = '/icons/placeMark1-red.svg';
    let mark2Active = '/icons/placeMark2-red.svg';
    let mark3Active = '/icons/placeMark3-red.svg';
    let centerMapX = document.querySelector("[data-centerMapX]").getAttribute("data-centerMapX");
    let centerMapY = document.querySelector("[data-centerMapY]").getAttribute("data-centerMapY");
    let placeMark1X = document.querySelector("[data-Placemark1X]").getAttribute("data-Placemark1X");
    let placeMark1Y = document.querySelector("[data-Placemark1Y]").getAttribute("data-Placemark1Y");
    let placeMark2X = document.querySelector("[data-Placemark2X]").getAttribute("data-Placemark2X");
    let placeMark2Y = document.querySelector("[data-Placemark2Y]").getAttribute("data-Placemark2Y");
    let placeMark3X = document.querySelector("[data-Placemark3X]").getAttribute("data-Placemark3X");
    let placeMark3Y = document.querySelector("[data-Placemark3Y]").getAttribute("data-Placemark3Y");
    let activeCoords = document.querySelector(".activeCoords");
    
    ymaps.ready(init);

    function init(){
        let myMap = new ymaps.Map("map", {
            center: [centerMapX, centerMapY],
            zoom: 15,
            controls: []
        });

        let myPlacemark1 = new ymaps.Placemark([placeMark1X, placeMark1Y], {}, {
            iconLayout: 'default#image',
            preset: 'myMark',
            iconImageHref: mark1,
            iconImageSize: [39, 52],
            active: false,
        });
        
        let myPlacemark2 = new ymaps.Placemark([placeMark2X, placeMark2Y], {}, {
            iconLayout: 'default#image',
            preset: 'myMark',
            iconImageHref: mark2,
            iconImageSize: [39, 52],
            iconImageOffset: [0, -70],
            active: false,
        });
        
        let myPlacemark3 = new ymaps.Placemark([placeMark3X, placeMark3Y], {}, {
            iconLayout: 'default#image',
            preset: 'myMark',
            iconImageHref: mark3,
            iconImageSize: [39, 52],
            active: false,
        });

        function removeActiveAll () {
            myPlacemark1.options.set('active', false)
            myPlacemark1.options.set('iconImageHref', mark1);
            myPlacemark2.options.set('active', false);
            myPlacemark2.options.set('iconImageHref', mark2);
            myPlacemark3.options.set('active', false);
            myPlacemark3.options.set('iconImageHref', mark3);
        };

        function placeMarkActive(myPlacemark, markIcon, markIconActive) {

            function addActive (e) {
                e.get('target').options.set('iconImageHref', markIconActive);
            };

            function removeActive (e) {
                e.get('target').options.set('iconImageHref', markIcon);
            };

            myPlacemark.events.add(['click', 'mouseenter', 'mouseleave'], function (e) {
                let eType = e.get('type');

                if (eType == 'mouseenter') {
                    addActive (e);
                }

                if (eType == 'click' ) {
                    if (e.get('target').options.get('active') == false) {
                        removeActiveAll ();
                        e.get('target').options.set('active', true);
                        addActive (e);
                        activeCoords.setAttribute("data-PlacemarkX", e.get('coords')[0]);
                        activeCoords.setAttribute("data-PlacemarkY", e.get('coords')[1]);
                    } else {
                        e.get('target').options.set('active', false);
                        removeActive (e);
                    }  
                } 
                
                if (eType == 'mouseleave' && e.get('target').options.get('active') == false) {
                    removeActive (e);
                }
                
            });
        }

        myMap.geoObjects.add(myPlacemark1)
        .add(myPlacemark2)
        .add(myPlacemark3);

        placeMarkActive(myPlacemark1, mark1, mark1Active);
        placeMarkActive(myPlacemark2, mark2, mark2Active);
        placeMarkActive(myPlacemark3, mark3, mark3Active);
    }
};

export default map;