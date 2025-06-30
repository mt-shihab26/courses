#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '
#define i64 long long int
#define str string
#define vec vector

bool solve()
{
    int n, k, i;
    cin >> n >> k;
    vec<int> a(n);
    for (i = 0; i < n; i++)
        cin >> a[i];

    deque<int> dq(k);

    for (i = 0; i < k; i++)
    {
        while ((!dq.empty()) && a[dq.back()] <= a[i])
            dq.pop_back();
        dq.push_back(i);
    }

    for (; i < n; i++)
    {
        cout << a[dq.front()] << " ";

        while ((!dq.empty()) && dq.front() <= i - k)
            dq.pop_front();

        while ((!dq.empty()) && a[dq.back()] <= a[i])
            dq.pop_back();
        dq.push_back(i);
    }

    cout << a[dq.front()] << ed;

    return true;
}

bool test()
{
    int t;
    cin >> t;
    while (t--)
    {
        solve();
    }
    return true;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    test();

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
