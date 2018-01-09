#include<iostream>
#include <emscripten.h>

extern "C" {
	extern void multiply_js(double x, double y);
}

int multiply_cpp(double x, double y) {
	// call js method
	double multiply_result = EM_ASM_({
									return multiply_js($0, $1);
							 }, x, y);
	return multiply_result;
}