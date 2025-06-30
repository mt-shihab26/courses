#include <bits/stdc++.h>
using namespace std;

#define lli long long int
#define ed '\n'

const lli mx = 1e18;

lli search(lli low, lli hight, lli k, lli n)
{
    while (low <= hight)
    {
        lli mid = low + (hight - low) / 2;
        lli not_dividable = mid - (mid / n);
        if (not_dividable == k)
        {
            if (mid % n != 0)
                return mid;
            hight = mid - 1;
        }
        else if (not_dividable < k)
        {
            low = mid + 1;
        }
        else
        {
            hight = mid - 1;
        }
    }
    return -1;
}

int main()
{
    int t;
    cin >> t;
    while (t--)
    {
        lli n, k;
        cin >> n >> k;
        lli res = search(1, mx, k, n);
        cout << res << ed;
    }
}