let ButtonComponent = {
	templateUrl: 'app/src/components/button.html',
	controller: function($attrs) {
		this.url = $attrs.url;
		this.text = $attrs.text;
	}
};

ButtonComponent.$inject = ['$attrs'];

export default ButtonComponent;
