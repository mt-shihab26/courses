#include <bits/stdc++.h>
using namespace std;

int find_less(const vector<int> &arr, int tg)
{
    int low = 1, high = arr.size() - 1, mid, ans = 0;
    while (low <= high)
    {
        mid = low + ((high - low) / 2);
        // cout << low << " " << high << " " << mid << "\n";
        if (arr[mid] <= tg)
        {
            ans = mid;
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return ans;
}

int main()
{
    int n, k, tmp;
    cin >> n >> k;
    vector<int> a(n+1);
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }

    while (k--)
    {
        cin >> tmp;
        cout << find_less(a, tmp) << "\n";
    }
}