// https://www.youtube.com/watch?v=qq64FrA2UXQ
// https://www.geeksforgeeks.org/add-two-numbers-without-using-arithmetic-operators/
/*
 *  If x and y don’t have set bits at same position(s), 
 * then bitwise XOR (^) of x and y gives the sum of x and y. 
 * To incorporate common set bits also, bitwise AND (&) is used. 
 * Bitwise AND of x and y gives all carry bits. 
 * We calculate (x & y) << 1 and add it to x ^ y to get the required result. 
 */

// 0 0 0 1
// 0 0 1 1
// =======
// 0 0 1 0  x ^ y -> x
// 0 0 1 0  x & y -> 0 0 0 1 -> (x & y) << 1 -> 0 0 1 0
// =======
// 0 0 0 0 | x ^ y
// 0 1 0 0 | x & b -> 0 0 1 0 -> (x & y) << 1 -> 0 1 0 0
// =========

class SumOfTwoNumber {
    static int add(int x, int y) {
        // Iterate till there is no carry
        while (y != 0) {
            // carry now contains common
            // set bits of x and y
            int carry = x & y;

            // Sum of bits of x and
            // y where at least one
            // of the bits is not set
            x = x ^ y;

            // Carry is shifted by
            // one so that adding it
            // to x gives the required sum
            y = carry << 1;
        }
        return x;
    }

    // Driver code
    public static void main(String arg[]) {
        // System.out.println(add(3, 6));
        System.out.println(add(12, 3));
    }
}
