let ButtonComponent = {
	templateUrl: 'components/button.html',
	controller: function($attrs) {
		this.url = $attrs.url;
		this.text = $attrs.text;
	}
};

ButtonComponent.$inject = ['$attrs'];
