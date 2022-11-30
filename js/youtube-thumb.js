'use strict';
jQuery(document).ready(function($) {

	var vid = $('body').find('.youtube');
	$.each(vid, function(key, value) {
		var thumb = $(this).attr("thumb");
		var id = $(this).attr("id");
		var quality = $(this).attr("quality");
		var host = $(this).attr('host');
		var vidurl;
		if (thumb) {
			vidurl = thumb;
		} else {
			switch (host) {
				case 'youtube':
					vidurl = 'https://img.youtube.com/vi/'+id+'/'+quality+'.jpg';
					break;
				case 'bitchute':
					vidurl = 'https://img.youtube.com/vi/'+id+'/'+quality+'.jpg';
					break;
				case 'brighteon':
					vidurl = 'https://img.youtube.com/vi/'+id+'/'+quality+'.jpg';
					break;
			}

		}
		$(this).css("background-image", "url(https://vaticancatholic.com/wp-content/themes/mhfm-theme-4.0/images/play.png), url("+vidurl+")");
	});

	$('.youtube').click(function() {
		var vidurl, url, auto;
		var id = $(this).attr('id');
		var quality = $(this).attr('quality');
		var host = $(this).attr('host');
		var thumb = $(this).attr('thumb');
		var start = $(this).attr('start');
		var end = $(this).attr('end');
		var rel = $(this).attr('rel');
		var autoplay = $(this).attr('autoplay');
		var playlist = $(this).attr('playlistid');
		if (autoplay) {
			auto = 1;
		} else {
			auto = 0;
		}
		switch (host) {
			case 'youtube':
				//url = 'https://www.youtube.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1&list='+playlist;
				url = 'https://www.youtube.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1';

				$(this).html('<iframe width="100%" height="472.5px" src="'+url+'" frameborder="0"></iframe>');
				$(this).css('background-image', '');
				break;
			case 'bitchute':
				//url = 'https://www.bitchute.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1'+playlist;
				url = 'https://www.bitchute.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1';
				$(this).html('<iframe width="100%" height="472.5px" src="'+url+'" frameborder="0"></iframe>');
				//$(this).html('<video onplay="$('#loader-container').fadeOut('slow');" ></video>');
				break;
			case 'brighteon':
				//url = 'https://www.brighteon.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1'+playlist;
				url = 'https://www.brighteon.com/embed/'+id+'?start='+start+'&end='+end+'&rel='+rel+'&autoplay='+auto+'&autohide=1&border=0&wmode=opaque&enablejsapi=1';
				$(this).html('<iframe width="100%" height="472.5px" src="'+url+'" frameborder="0"></iframe>');
				break;
		}
	});
});
