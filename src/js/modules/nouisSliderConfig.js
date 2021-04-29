function nouisSlider () {
    let slider = document.getElementById('slider');

    noUiSlider.create(slider, {
        start: [0, 100],
        tooltips: [{to: function (value) {return 'от ' + Math.round(value) + ' $';}}, 
        {to: function (value) {return 'до ' + Math.round(value) + ' $';}}],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        },
                
    });
}

function minVal () {
    let min = Math.round(slider.noUiSlider.get()[0]);
    return (min);
    
} 

function maxVal () {
    let max = Math.round(slider.noUiSlider.get()[1]);
    return (max);
} 


export {nouisSlider};
export {minVal, maxVal};
