$(function () {

    const height = $('.slider_container').height()
    const width = $('.slider_container').width()
    console.log(height)

    $('.slider_container').directorySlider({
            animation: 'fade',
            filebase: '/slide_',
            extension: 'png',
            directory: 'monitor1',
            numslides: 10,
            height: height,
            width: width
        }
    );
});

(function ($) {
    const directorySlider = function (element, options) {
        const elem = $(element),
            elemId = elem[0].id;

        // Merge config settings
        const config = $.extend({
            animation: 'slide',
            filebase: 'slide_',
            extension: 'jpg',
            speed: 1000,
            timeout: 4000,
            directory: null,
            numslides: null,
            height: null,
            width: null
        }, options || {});

        // set slideshow dimensions if set
        if (config.height) {
            $(elem).css('height', config.height);
        }
        if (config.width) {
            $(elem).css('width', config.width);
        }

        $(elem).css('overflow', 'hidden');

        // Get slides
        let slides = [],
            slideNumber = 1;

        while (slideNumber <= config.numslides) {
            slides.push('<img src="' + config.directory + config.filebase + slideNumber + '.' + config.extension + '" onerror="this.remove()"/>');
            slideNumber++;
        }

        // append slideshow
        // apply slide wrap 1st
        const slideWrap = $('<div class="' + elemId + '-slide-wrap" ></div>');
        slideWrap.appendTo(elem);

        // append slide and position absolutley
        $.each(slides, function (index, val) {
            $(val).css({
                height: config.height,
                width: config.width // ADDED THIS SO WE DON'T NEED TO HAVE ALL IMAGES WITH SAME HEIGHT & WIDTH
            }).appendTo(slideWrap);
        });

        setInterval(function () {
            const firstSlide = elem.find('img:first-child'),
                lastSlide = elem.find('img:last-child');
            // Apply animation
            switch (config.animation) {

                case 'fade':
                    $(lastSlide).animate({
                            opacity: 0
                        },
                        config.speed, function () {
                            $(this).insertBefore(firstSlide).css('opacity', 1);
                        });
                    break;

                case 'uncover':
                    lastSlide.animate({
                            marginLeft: -$(this).width()
                        },
                        config.speed, function () {
                            $(this).insertBefore(firstSlide).css('marginLeft', 0);
                        });
                    break;
                default:
                    $(lastSlide).animate({
                            opacity: 0
                        },
                        config.speed, function () {
                            $(this).insertBefore(firstSlide).css('opacity', 1);
                        });
            }
        }, config.timeout);

    };

    $.fn.directorySlider = function (options) {
        return this.each(function () {
            const element = $(this);

            // Return early if this element already has a plugin instance
            if (element.data('directoryslider')) return;

            // pass options to plugin constructor
            const directoryslider = new directorySlider(this, options);

            // Store plugin object in this element's data
            element.data('directoryslider', directoryslider);

        });
    };
})(jQuery);