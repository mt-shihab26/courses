#include <bits/stdc++.h>
using namespace std;

struct point
{
    int x, y;
};

int main()
{
    int t, n;
    cin >> t;
    while (t--)
    {
        cin >> n;
        vector<point> a(n);
        for (int i = 0; i < n; i++)
            cin >> a[i].x >> a[i].y;
        
        sort(a.begin(), a.end(), [](point a, point b)
             { return a.x == b.x ? a.y > b.y : a.x < b.x; });

        for (int i = 0; i < n; i++)
            cout << a[i].x << " " << a[i].y << "\n";
    }
}