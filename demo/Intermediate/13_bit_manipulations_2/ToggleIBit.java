class ToggleIBit {
    public static int solve(int A, int B) {
        return A ^ (1 << B);
    }

    public static void main(String[] args) {
        int A = 10;
        int B = 2;
        int ans = solve(A, B);
        System.out.println(ans);
    }
}