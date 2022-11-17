/*
Construct a class called ComplexNumber which stores two properties

real - The real part
imaginary - The imaginary part

The name of the properties should be strictly real and imaginary


Implement the following functionalities inside this class :-

add(ComplexNumber) -> Returns an object of ComplexNumber having sum of the two complex numbers.

subtract(ComplexNumber) -> Returns an object of ComplexNumber having difference of the two complex numbers.

multiply(ComplexNumber) -> Returns an object of ComplexNumber having multiplication of the two complex numbers.

divide(ComplexNumber) -> Returns an object of ComplexNumber having division of the two complex numbers.
*/
class ComplexNumber {

	float real, imaginary;

	ComplexNumber(float r, float i) {
		real = r;
		imaginary = i;
	}

	ComplexNumber add(ComplexNumber x) {
		float realPart = real + x.real;
		float imaginaryPart = imaginary + x.imaginary;
		return new ComplexNumber(realPart, imaginaryPart);
	}

	ComplexNumber subtract(ComplexNumber x) {
		float realPart = real - x.real;
		float imaginaryPart = imaginary - x.imaginary;
		return new ComplexNumber(realPart, imaginaryPart);
	}

	ComplexNumber multiply(ComplexNumber x) {
		float realPart = (real * x.real) - (imaginary * x.imaginary);
		float imaginaryPart = (imaginary * x.real) + (real * x.imaginary);
		return new ComplexNumber(realPart, imaginaryPart);
	}

	ComplexNumber divide(ComplexNumber x) {
		float modOfX = (x.real * x.real) + (x.imaginary * x.imaginary);
		float realPart = ((real * x.real) + (imaginary * x.imaginary)) / modOfX;
		float imaginaryPart = ((x.real * imaginary) - (x.imaginary * real)) / modOfX;
		return new ComplexNumber(realPart, imaginaryPart);
	}

	void print() {
		System.out.println(this.real);
		System.out.println(this.imaginary);
	}

	public static void main(String args[]) {
		ComplexNumber a = new ComplexNumber(10, 5);
		ComplexNumber b = new ComplexNumber(2, 3);
		ComplexNumber c1 = a.add(b);
		c1.print();
		ComplexNumber c2 = a.subtract(b);
		c2.print();
		ComplexNumber c3 = a.multiply(b);
		c3.print();
		ComplexNumber c4 = a.divide(b);
		c4.print();
	}
}

// class ComplexNumber {

// 	float real, imaginary;

// 	// Define constructor here
// 	ComplexNumber(float real, float imaginary) {
// 		this.real = real;
// 		this.imaginary = imaginary;
// 	}

// 	ComplexNumber add(ComplexNumber x) {
// 		// Complete the function
// 		this.real += x.real;
// 		this.imaginary += x.imaginary;
// 		return this;
// 	}

// 	ComplexNumber subtract(ComplexNumber x) {
// 		// Complete the function

// 		this.real -= x.real;
// 		this.imaginary -= x.imaginary;
// 		return this;
// 	}

// 	ComplexNumber multiply(ComplexNumber x) {
// 		// Complete the function

// 		this.real *= x.real;
// 		this.imaginary *= x.imaginary;
// 		return this;
// 	}

// 	ComplexNumber divide(ComplexNumber x) {
// 		// Complete the function
// 		this.real /= x.real;
// 		this.imaginary /= x.imaginary;
// 		return this;
// 	}

// 	void print() {
// 		System.out.println(this.real);
// 		System.out.println(this.imaginary);
// 	}

// 	public static void main(String args[]) {
// 		ComplexNumber a = new ComplexNumber(10, 5);
// 		ComplexNumber b = new ComplexNumber(2, 3);
// 		ComplexNumber c1 = a.add(b);
// 		c1.print();
// 		ComplexNumber c2 = a.subtract(b);
// 		c2.print();
// 		ComplexNumber c3 = a.multiply(b);
// 		c3.print();
// 		ComplexNumber c4 = a.divide(b);
// 		c4.print();
// 	}
// }
