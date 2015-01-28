var mainController = function ($http) {
	this.status = "Ideal";
	this.targetUrl = "http://localhost:3000/serverListener";
	this.valueFromClient1 = "ABC";
	this.valueFromClient2 = "DEF";
	this.serverResponse = "This will be the server response";

		this.clearServerResponse = function () {
			this.serverResponse = "";
		};

		this.onButtonClicked = function () {
			this.status = "Loading";

			var req = {
				method: 'POST',
				url: this.targetUrl,
				data: {
					valueFromClient1: this.valueFromClient1,
					valueFromClient2: this.valueFromClient2
				}
			};

			$http(req).
				success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					this.status = "Ideal";
					this.serverResponse = data;
				}.bind(this)).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					this.status = "Ideal";
					this.serverResponse = "There was an error calling to the server: " + status;
				}.bind(this));
		}
};