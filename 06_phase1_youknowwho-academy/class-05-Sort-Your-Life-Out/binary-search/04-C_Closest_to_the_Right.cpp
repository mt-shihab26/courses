#include <bits/stdc++.h>
using namespace std;

int find_getter(const vector<int> &arr, int tg)
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

int main()
{
    int n, k, tmp;
    cin >> n >> k;
    vector<int> a(n + 1);
    for (int i = 1; i <= n; i++)
        cin >> a[i];

    while (k--)
    {
        cin >> tmp;
        cout << find_getter(a, tmp) << "\n";
    }
}