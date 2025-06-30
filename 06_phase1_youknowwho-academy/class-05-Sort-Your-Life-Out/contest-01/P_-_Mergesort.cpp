#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define lli long long int
#define vec vector
#define str string

void merge_sort(vec<int> &a, int low, int high)
{
    if (low == high)
        return;

    int mid = low + (high - low) / 2;
    merge_sort(a, low, mid);
    merge_sort(a, mid + 1, high);

    int len = high - low + 1;

    vec<int> merged(len);

    for (int i = low, j = mid + 1, k = 0; i <= mid || j <= high; k++)
    {
        if (i > mid)
            merged[k] = a[j++];
        else if (j > high)
            merged[k] = a[i++];
        else if (a[i] > a[j])
            merged[k] = a[j++];
        else
            merged[k] = a[i++];
    }
    for (int i = 0, j = low; i < len; i++, j++)
        a[j] = merged[i];
}

bool solve()
{
    vec<int> a;
    int tmp;

    while (cin >> tmp)
        a.push_back(tmp);

    int len = a.size();

    merge_sort(a, 0, len - 1);

    for (int i = 0; i < len; i++)
        cout << a[i] << gp;
    cout << ed;

    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    solve();

    return 0;
}
// github.com/shihab4t (Shihab Mahamud)
// Tuesday, July 05, 2022 | 07:19:42 PM (+06)
