jQuery(document).ready(function($){
    $.get("https://api.npoint.io/f6112511583fb9acf856", function(data){
        // Display the returned data in browser
        $('#featured-image-877 .product-single__photo').attr('src', data.featured_ImgUrl);
        $('#id_D').html(data.title);
        $('#ProductPrice').html(data.currency + ' ' + data.price);
        $('#descText').html(data.description);
        var items = [];
        $.each( data.description_features, function( key, val ) {
            $( "<span>" + val + "</span>" ).appendTo( $('.description-text__main'));
        });
        $.each( data.available_sizes, function( key, val ) {
            $( "<span>" + val + "</span>" ).appendTo( $('.product--size'));
        });
        $.each( data.colors, function( key, val ) {
            $( '<label id="'+ val +'" class="color--'+ val +'"><input type="radio" name="radio"> </label>' ).appendTo( $('.product-single__variation'));
        });
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });
    $.get("https://api.npoint.io/cdbca0570276cb158572", function(data){
        // Display the returned data in browser
        $.each(data.more_products, function (key, val) {
            $( `<li class='product-list-item'><a href='#' class='product-link'><img src='${val}' alt='prod-n'></a></li>` ).appendTo( $('.products-list'));
            
            
        });
    })
    .fail(function() {
        console.log( "error" );
    })
    .always(function() {
        console.log( "complete" );
    });
})