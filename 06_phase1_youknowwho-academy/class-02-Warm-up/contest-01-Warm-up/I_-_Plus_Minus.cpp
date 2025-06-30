#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int32_t n;
    cin >> n;
    int32_t positive = 0, negative = 0, zero = 0, tmp;

    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        if (tmp == 0)
            zero++;
        else if (tmp > 0)
            positive++;
        else
            negative++;
    }

    double_t pos = positive * 1.0 / n;
    double_t neg = negative * 1.0 / n;
    double_t zer = zero * 1.0 / n;

    cout << fixed << setprecision(6);
    cout << pos << "\n"
         << neg << "\n"
         << zer << "\n";

    return 0;
}
