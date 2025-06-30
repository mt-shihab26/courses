#include <bits/stdc++.h>
using namespace std;

bool is_even(int num)
{
    if (num & 1)
    {
        return false;
    }
    return true;
}

int main()
{
    int n;
    cin >> n;
    cout << to_string(n) + " is" + (is_even(n) ? " even" : " odd") << "\n";
}