/*
input:

5
4
1 4 7 9
6
2 9 1 7 25 29
7
1 23 4 7 9 11 29
10
2 28 8 7 9 10 30 21 18 19
4
1 11 29 7
*/

#include <bits/stdc++.h>
using namespace std;

int32_t main()
{
    int32_t n, num_workers, day, i, j, intersection, common_days;
    cin >> n;
    vector<int32_t> mask(n, 0);
    for (i = 0; i < n; i++)
    {
        cin >> num_workers;
        for (j = 0; j < num_workers; j++)
        {
            cin >> day;
            mask[i] = mask[i] | (1 << day);
        }
    } 

    int32_t person1 = -1, person2 = -1, max_day = 0;

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            intersection = mask[i] & mask[j];
            common_days = __builtin_popcount(intersection);
            if (common_days > max_day)
            {
                person1 = i;
                person2 = j;
                max_day = common_days;
            }
        }
    }

    cout << person1 << " " << person2 << " : " << max_day << "\n";
}