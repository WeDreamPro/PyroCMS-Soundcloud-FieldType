(function($) {
    var inputs = '[data-fieldtype="soundcloud"]',
    soundcloud_regex = /^https?:\/\/(soundcloud.com|snd.sc)\/(.*)$/;

    function get_soundcloud_from_url() {
        var $this = $(this),
        url = $this.val(),
        service_url = 'http://soundcloud.com/oembed',
        match = url.match(soundcloud_regex),
        $preview_content = $(this).parent().find('.preview_soundcloud_url');
        if(url.match(soundcloud_regex) !== null){
            if (service_url !== null && url !== "") {            
                $.ajax({
                    url: 'http://soundcloud.com/oembed',
                    data: {
                        format: 'js',
                        url: url
                    },
                    dataType: "jsonp",
                    beforeSend: function() {
                        $preview_content.find('.iframe-preview').empty();
                    },
                    success: function(data) {
                        data.url = url;
                        if (data) {
                            render_preview.call($this, data);
                        }
                    },
                    error: function(result) {
                        alert("Sorry no data found.");
                    }
                });
            }
        }else{
            $preview_content = $(this).parent().find('.preview_soundcloud_url'),
            $iframe_content = $preview_content.find('.iframe-preview'),
            $hidden = $preview_content.find('[type="hidden"]');
            $hidden.val('');
            $iframe_content.html('');
        }
        
    }

    function render_preview(data) {
        var $preview_content = $(this).parent().find('.preview_soundcloud_url'),
        $iframe_content = $preview_content.find('.iframe-preview'),
        $hidden = $preview_content.find('[type="hidden"]');



        if (data.html) {
            var $sound = $(data.html),
            video_html = $sound.clone();

            $iframe_content.html(video_html);

            $sound.attr('width', '100%').attr('height', data.height);

        }

        data = $.extend(data, {
            url: $(this).val(),
            html: $sound[0].outerHTML
        });

        $hidden.val(JSON.stringify(data));

        return $preview_content.show();
    }

    $(document).on('keyup', inputs, get_soundcloud_from_url);

    $(document).on('click', inputs, function() {
        $(this).select();
    });

    $(function() {
        $.each($(inputs), function() {
            get_soundcloud_from_url.call(this);
        });
    });
})(window.jQuery);
