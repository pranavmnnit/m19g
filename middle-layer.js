
function getClickCoords(event) {
	// save co-ords
	var x = event.clientX;
	var y = event.clientY;

	// call multiply method of cpp
	var multiply_text = "multiplying in js : " + x + " * " + y;
	output(multiply_text);

	// get c++ method wrapper in js
	var multiply_result_cpp_wrapper = Module.cwrap('multiply_cpp', 'number', ['number', 'number']);
	// call wrapper with params
	var multiply_result = multiply_result_cpp_wrapper(x, y);
	// print result
	output(multiply_result)
}

function multiply_js(x, y) {
	return x * y;
}