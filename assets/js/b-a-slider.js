$('.slider').on('change input', function(e) {
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $(this).parent().find('.foreground-img').css('width', `calc(${sliderPos}%)`)
    // Update the position of the slider button
    $(this).parent().find('.slider-button').css('left', `calc(${sliderPos}% - 12px)`)
});