//jquery was imported in index.html

$(document).ready(function() {
    $('.loader').delay(1000).fadeOut('slow', function() {
        $(this).remove();
    });
});