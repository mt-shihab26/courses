#include <bits/stdc++.h>
using namespace std;

int main()
{
    int var = 8;
    void *ptr = &var;

    *((int *)ptr) = 10;

    cout << fixed << setprecision(6) << var << "\n";

    // We don't know a pointer how much data it's pointing to
    // Because it's not holding data right
    // A pointer is just an integer which is memory address that's it.
}