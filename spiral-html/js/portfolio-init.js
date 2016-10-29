jQuery(document).ready(function($) {

    $('.latest_portfolio.carousel').each(function (){
        var $prev = $(this).find('.portfolio_prev');
        var $next = $(this).find('.portfolio_next');
        $(this).find('ul').carouFredSel({
            prev: $prev,
            next: $next,
            auto: false,
            width: '100%',
            padding: null,
            scroll: 1,
        });

        var $image_height = $(this).find('img').height();
        var $button_height = $(this).find('.portfolio_prev').height();

        var nav_height = $image_height/2+$button_height/2;


        $prev.css('top', - (nav_height+20) +'px');
        $next.css('top', - (nav_height+20) +'px');

    });

    /* Gallery Upload */


    /* WP Media Uploader */

    $(document).on('click', '#manage_gallery', upload_gallery_button);

    function upload_gallery_button(e) {
        e.preventDefault();
        var $input_field = $('#portfolio_gallery_input');
        var ids = $input_field.val();
        var gallerysc = '[gallery ids="' + ids + '"]';
        wp.media.gallery.edit(gallerysc).on('update', function(g) {
            var id_array = [];
            var url_array = [];
            $.each(g.models, function(id, img){
                url_array.push(img.attributes.url);
                id_array.push(img.id);
            });
            var ids = id_array.join(",");
            ids = ids.replace(/,\s*$/, "");
            var urls = url_array.join(",");
            urls = urls.replace(/,\s*$/, "");
            $input_field.val(ids);
            var html = '';
            for(var i = 0 ; i < url_array.length; i++){
                html += '<div class="gallery-item"><img src="'+url_array[i]+'"></div>';
            }

            $('.gallery_images').html('').append(html);
        });

    }

    $(document).on('click', '#empty_gallery', empty_gallery_button);

    function empty_gallery_button(e){
        e.preventDefault();
        var $input_field = $('#portfolio_gallery_input');
        $input_field.val('');
        $('.gallery_images').html('');
    }

    /* Featured Portfolio */

    var $content = $(".spiral_featured_portfolio");
    var $loaded_content = $("#portfolio_content_details");
    var $item_selector = $(".featured_item");
    var $close = $("#close_wrapper");

   $('#close_wrapper').on('click', function() {
        $loaded_content.slideUp('slow').removeClass("open");
        $('#pointer').hide();
        $(".current").removeClass("current");
    });

   if ($content.length>0) {
    $content.imagesLoaded( function() {

        $item_selector.on('click', function(){
            var $this = $(this);
            leftOffset = parseInt($this.offset().left+$this.width()/2, 10);
            $('#pointer').css({'left': leftOffset, 'display': 'inline-block'});

            var element_number = $this.data('number');
            var insert_after = (Math.ceil(element_number/4)*4)-1;

            $loaded_content.detach().insertAfter($item_selector.eq(insert_after));

            var thumbnail = $this.data('thumbnail');
            var thumbnail_url = $this.data('image_link');
            var name = $this.data('name');
            var link_to = $this.data('link_to');
            var date = $this.data('date');
            var description = $this.data('description');
            var cat = $this.data('cat');
            var client = $this.data('client');
            var skills = $this.data('skills');

            $loaded_content.find('.gallery_post_image a').html(thumbnail);
            $loaded_content.find('.gallery_post_image a').attr("href", thumbnail_url);
            $loaded_content.find('.gallery_post_title a').html(name);
            $loaded_content.find('.gallery_post_title a').attr("href", link_to);
            $loaded_content.find('.gallery_post_linkto a').attr("href", link_to);
            $loaded_content.find('.gallery_post_date').html(date);
            $loaded_content.find('.gallery_post_description p').html(description);
            $loaded_content.find('.gallery_post_category .cat_names').html(cat);
            $loaded_content.find('.gallery_post_client .client_names').html(client);
            $loaded_content.find('.gallery_post_skill .skills_names').html(skills);

            if (!$this.hasClass("current")) {
                $this.addClass("current");
                $loaded_content.slideDown('slow').addClass("open");
            } else{
                $(".current").removeClass("current");
                $loaded_content.slideUp('slow').removeClass("open");
            }

            setTimeout(function(){
                $('html, body').animate({
                    scrollTop: $loaded_content.offset().top-300}, 500);
            }, 600);

        });
    });
   }


});