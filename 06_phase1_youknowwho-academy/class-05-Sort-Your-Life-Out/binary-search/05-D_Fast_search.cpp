#include <bits/stdc++.h>
using namespace std;

int lower_bound(const vector<int> &arr, int tg)
{
    int low = 1, hight = arr.size() - 1, mid, ans = arr.size();
    while (low <= hight)
    {
        mid = low + ((hight - low) / 2);
        if (arr[mid] >= tg)
        {
            ans = mid;
            hight = mid - 1;
        }
        else
            low = mid + 1;
    }
    return ans;
}

int upper_bound(const vector<int> &arr, int tg)
{
    int low = 1, hight = arr.size() - 1, mid, ans = arr.size();
    while (low <= hight)
    {
        mid = low + ((hight - low) / 2);
        if (arr[mid] > tg)
        {
            ans = mid;
            hight = mid - 1;
        }
        else
            low = mid + 1;
    }
    return ans;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;

    vector<int> a(n + 1);
    for (int i = 1; i <= n; i++)
        cin >> a[i];

    sort(a.begin() + 1, a.end());

    // for (int i = 1; i <= n; i++)
    //     cout << a[i] << " ";
    // cout << "\n";

    int q, l, r;
    cin >> q;
    while (q--)
    {
        cin >> l >> r;
        auto it = lower_bound(a, l);
        auto it2 = upper_bound(a, r);
        // cout << it << " ";
        // cout << it2 << "\n";
        cout << it2 - it << " ";
    }
    cout << "\n";
}