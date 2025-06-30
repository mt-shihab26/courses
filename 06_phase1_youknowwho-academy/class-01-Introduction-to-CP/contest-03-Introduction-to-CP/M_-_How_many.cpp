#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int s, t;
    cin >> s >> t;

    int ct = 0;

    for (int i = 0; i <= s; i++)
    {
        for (int j = 0; i + j <= s; j++)
        {
            for (int z = 0; i + j + z <= s; z++)
            {
                if (i * j * z <= t)
                {
                    ct++;
                }
            }
        }
    }

    cout << ct << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Tuesday, April 26, 2022 | 01:27:46 PM (+06)
