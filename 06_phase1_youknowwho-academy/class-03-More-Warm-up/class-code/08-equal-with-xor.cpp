#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a = 200, b = 200;
    if (a == b)
    {
        cout << a << " is equal to " << b << "\n";
    }

    if (a ^ b == 0)
    {
        cout << a << " is equal to " << b << "\n";
    }

    //  011010110
    //^ 011010110
    //-----------
    //  000000000
}