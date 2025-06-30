#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string num;
    cin >> num;

    int sum = 0;
    int len = num.size();
    int ct = 0;

    for (int i = 0; i < len; i++)
    {
        sum += (num[i] - '0');
    }
    if (sum > 0 && len > 1) 
    {
        ct++;
    }

    int tmp;
    while (sum >= 10)
    {
        tmp = 0;
        while (sum)
        {
            tmp += sum % 10;
            sum /= 10;
        }
        sum = tmp;
        ct++;
    }

    cout << ct << endn;

    return 0;
}
// Shihab Mahamud (github.com/shihab4t)
// Monday, April 25, 2022 | 03:32:31 PM (+06)
