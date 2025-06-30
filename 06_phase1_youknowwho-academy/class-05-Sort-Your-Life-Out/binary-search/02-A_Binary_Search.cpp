#include <bits/stdc++.h>
using namespace std;

int binary_search(const vector<int> &arr, int tg)
{
    int low = 0, high = arr.size() - 1, mid;
    while (low <= high)
    {
        mid = low + (high - low) / 2;
        if (arr[mid] == tg)
            return mid;
        if (arr[mid] > tg)
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n, k, tmp;
    cin >> n >> k;
    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    while (k--)
    {
        cin >> tmp;
        int res = binary_search(a, tmp);
        cout << (res == -1 ? "NO" : "YES") << "\n";
    }
}
