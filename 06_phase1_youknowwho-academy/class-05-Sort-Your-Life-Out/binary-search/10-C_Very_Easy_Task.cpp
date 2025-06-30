#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '

bool is_possible(int n, int x, int y, int mid)
{
    if (mid < min(x, y))
        return false;
    mid -= min(x, y);
    return ((mid / x) + (mid / y) + 1 >= n);
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, x, y, mid;
    cin >> n >> x >> y;
    int low = 0, high = n * min(x, y);
    while (high > low + 1)
    {
        mid = low + (high - low) / 2;
        if (is_possible(n, x, y, mid))
        {
            high = mid;
        }
        else
        {
            low = mid;
        }
    }

    cout << high << ed;

    return 0;
}
