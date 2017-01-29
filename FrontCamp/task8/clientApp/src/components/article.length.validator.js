function MoreThan () {
	return {
		restrict: 'A',
		require: 'ngModel',
		scope: {
			value: '=moreThan'
		},
		link: function (scope, element, attr, ngModel) {
			ngModel.$validators.mustBeMoreThan = function (value) {
				let status = true;
				let minLength = scope.value;
				if (value && value.length < minLength) {
					status = false;
				}
				return status;
			}
		}
	}
}

export default MoreThan;
