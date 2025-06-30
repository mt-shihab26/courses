#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int a, b, c;
    cin >> a >> b >> c;
    for (int i = 0; i * a <= c; i++)
    {
        for (int j = 0; j * b <= c; j++)
        {
            // cout << (i * a) + (j * b) << endn;
            if ((i * a) + (j * b) == c)
            {
                cout << "Yes" << endn;
                return 0;
            }
        }
    }

    cout << "No" << endn;
    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Tuesday, April 26, 2022 | 12:31:09 PM (+06)
