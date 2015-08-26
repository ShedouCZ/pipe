
// MODULE slug.js
if ($('input[data-provide=slug-src]')) {
	// observe slug-src to update slug-dst
	$('input[data-provide=slug-src]').on('keyup', function () {
		var slug_val = slug($('input[data-provide=slug-src]').val(), {lower: true});
		$('input[data-provide=slug-dst]').val(slug_val).trigger('keyup'); // keyup to notify slug-dst observers;
	});
	// observe slug-dst to update summernote content links
	$('input[data-provide=slug-dst]').on('keyup', function () {
		// vice informaci zde
		$('.note-editable').find('a:contains(zde)').each(function (i,e) {
			var url = '/' + $('input[data-provide=slug-dst]').val();
			$(e).attr('href', url);
		});
	});
}
