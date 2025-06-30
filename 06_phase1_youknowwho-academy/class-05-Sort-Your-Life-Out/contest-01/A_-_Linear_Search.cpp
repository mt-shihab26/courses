#include <bits/stdc++.h>
using namespace std;

#define ed '\n'
#define gp ' '

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int k;
    cin >> k;

    int end = 1e8 + 5, tmp, sm, ct = 0;

    for (int i = 1; i <= end; i++)
    {
        sm = 0, tmp = i;
        while (tmp)
        {
            sm += (tmp % 10);
            tmp /= 10;
        }
        if (sm == 10)
            ct++;
        if (ct == k)
        {
            cout << i << ed;
            return 0;
        }
    }

    return 0;
}
// sh048b (Shihab Mahamud)
// Saturday, July 02, 2022 | 04:10:11 PM (+06)
