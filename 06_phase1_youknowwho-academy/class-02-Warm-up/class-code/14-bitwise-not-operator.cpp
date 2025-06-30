#include <bits/stdc++.h>
using namespace std;

bool isPowerOfTwo(int x)
{
    // x will check if x == 0 and !(x & (x - 1)) will check if x is a power of 2 or not
    return (x && !(x & (x - 1)));
}

int main()
{
    unsigned int ui12 = 12;
    signed int si12 = -12;

    cout << (~ui12) << "\n";
    cout << (~si12) << "\n";

    unsigned int x = 1;
    signed int a = 1;

    cout << "Signed Result " << ~a << endl;
    cout << "Unsigned Result " << ~x;

    printf("\nOutput = %d\n", ~35);
    printf("Output = %d\n", ~-12);
    return 0;
}