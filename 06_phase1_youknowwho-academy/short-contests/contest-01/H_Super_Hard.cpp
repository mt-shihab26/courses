#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
typedef long long int llint;

llint digit_sum(llint n)
{
    llint sm = 0;
    while (n)
    {
        sm += n % 10;
        n = n / 10;
    }
    return sm;
}

llint broute_force(llint n, llint s)
{
    llint ct = 0;
    for (llint i = 1; i <= n; i++)
    {
        if (i - digit_sum(i) >= s)
        {
            // cout << i << " " << digit_sum(i) << endn;
            ct++;
        }
        // cout << i << " " << digit_sum(i) << endn;
    }
    return ct;
}

llint solution(llint n, llint s)
{
    llint low = 1, high = n, mid, ans = 0;

    while (low <= high)
    {
        mid = low + (high - low) / 2;

        if (mid - digit_sum(mid) >= s)
        {
            ans = mid;
            high = mid - 1;
        }
        else
        {
            low = mid + 1;
        }
    }
    if (ans == 0)
        return 0;
    return n - ans + 1;
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    llint n, s;
    cin >> n >> s;

    // cout << broute_force(n, s) << endn;
    cout << solution(n, s) << endn;

    return 0;
}
// Solved by: Shihab Mahamud (github.com/shihab4t)
// Thursday, October 07, 2021 | 09:48:23 AM (+06)