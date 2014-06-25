!function(window,jQuery){
	if (!jQuery) {
		console.error("capJS: jQuery not found");
	} else {
		if (!window.cap) {
			window.cap = {
				conf: {},
				use: function(fn){
					cap.load_mem.push(fn);
				},
				load_mem: [],
				loading: function () {
					for ( var key in window.cap.load_mem) {
						window.cap.load_mem[key](window,jQuery,window.cap);
					}
				}
			};

			jQuery(window).load(function() {
				window.cap.loading();
			});

		};
	};
}(window,jQuery);