jQuery(document).ready(function() {
	jQuery("#new_user").validate({
		debug : true,
		rules : {
			"user[first_name]" : {
				required : true,
			},
			"user[last_name]" : {
				required : true,
			},
			"user[email]" : {
				required : true,
				remote : "/users/check_email"
			}
		}
	});
});
