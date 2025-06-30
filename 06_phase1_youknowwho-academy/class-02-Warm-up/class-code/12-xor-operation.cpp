// Given a set of numbers where all elements occur an even number of times except one number, find the odd occurring number

#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> a(n);
    for (int i = 0; i < n; i++) cin >> a[i];

    int result = 0;
    for (int i = 0; i < n; i++)
    {
        result ^= a[i];
    }
    
    cout << result << "\n";
}