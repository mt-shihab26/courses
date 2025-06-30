#include <bits/stdc++.h>
using namespace std;

double EP = 1e-9;

int main()
{
    int n;
    cin >> n;

    vector<pair<int, int>> p(n);
    for (int i = 0; i < n; i++)
        cin >> p[i].first;

    for (int j = 0; j < n; j++)
        cin >> p[j].second;

    sort(p.begin(), p.end());

    if (p[0].first == p[p.size() - 1].first)
    {
        cout << "0.000000000000";
        return 0;
    }

    double lt = 0;
    double rt = 1e9;

    while (abs(rt - lt) / max(1.0, rt) > EP)
    {
        double mid = (lt + rt) / 2;
        double lmn = 2e9, rmx = -2e9;

        for (int i = 0; i < n; i++)
            lmn = min(lmn, p[i].first + p[i].second * mid),
            rmx = max(rmx, p[i].first - p[i].second * mid);

        if (lmn >= rmx)
            rt = mid;
        else
            lt = mid;
    }
    cout << setprecision(15) << fixed << rt;
}
