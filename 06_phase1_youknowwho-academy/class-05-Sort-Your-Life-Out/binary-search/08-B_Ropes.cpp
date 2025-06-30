#include <bits/stdc++.h>
using namespace std;

int n, k;
vector<int> a;

bool is_good(double mid)
{
    int sum = 0;
    for (int i = 0; i < n; i++)
    {
        sum += (a[i] / mid);
    }
    return sum >= k;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n >> k;
    a.resize(n);
    for (int i = 0; i < n; i++)
        cin >> a[i];

    double low = 0, high = 1e8, mid;

    for (int i = 1; i < 100; i++)
    {
        mid = low + (high - low) / 2;
        if (is_good(mid))
            low = mid;
        else
            high = mid;
    }
    cout << setprecision(20) << low << "\n";
}