$( function() {
    $.widget('limesharp.blocksToggle', {

        options: {
            selectors: { 
                descriptionContainer: '.item-description-container',
                fullDescription: '.item-full-description',
                shortDescription: '.item-short-description',
                toggleContainer: '.toggle-block',
                showShort: '.show-short',
                showFull: '.show-full'
            }
        },

        _create: function() {
            var self = this;

            self._bind();
        },

        _bind: function () {
            var self = this;

            $(self.options.selectors.showFull).on('click', function() {
                self._toggle(this);
            });

            $(self.options.selectors.showShort).on('click', function() {
                self._toggle(this);
            });
        },

        _toggle: function (element) {
            var self = this,
                fullDescription = $(element).parents(self.options.selectors.descriptionContainer).children(self.options.selectors.fullDescription),
                shortDescription = $(element).parents(self.options.selectors.descriptionContainer).children(self.options.selectors.shortDescription),
                fullTrigger = $(element).parents(self.options.selectors.toggleContainer).children(self.options.selectors.showFull),
                shortTrigger = $(element).parents(self.options.selectors.toggleContainer).children(self.options.selectors.showShort);

            if (element.className == fullTrigger.attr('class')) {
                shortDescription.hide();
                fullDescription.show();
                shortTrigger.show();
            } else {
                shortDescription.show();
                fullDescription.hide();
                fullTrigger.show();
            }

            $(element).hide();
        }
    });
});

$(document).ready(function(){

    $('.experienced-multitalented-blocks').blocksToggle();

});