#include <bits/stdc++.h>
using namespace std;

using lli = long long int;
#define ed '\n'

int main()
{
    lli w, h, n;
    cin >> w >> h >> n;

    lli low = 1, high = 1e18, mid;
    while (low <= high)
    {
        mid = low + (high - low) / 2;
        cerr << low << " " << high << " " << mid << ed;
        if (1.0l * (mid / w) * (mid / h) < 1.0L * n)
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }

    cout << low << ed;
}