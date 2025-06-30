// Given n items and w weight limit.
// Figure out what is the maximum amount of profit you can get from it.
// wi -> weight of i'th item
// pi -> profit of i'th item

// case #01
// input:
// 3 5
// 3 2 4
// 10 9 12

// output:
// 19

// case #02
// input:
// 3 4
// 3 2 4
// 10 9 12

// output:
// 15.6667

#include <bits/stdc++.h>
using namespace std;

struct info
{
    int w, p;
};

int most_op(const vector<info> &wp, const int &weights_limit, int i, int total_weights, int total_points)
{
    if (total_weights > weights_limit)
        return 0;
    if (i == -1)
        return total_points;
    int ans = most_op(wp, weights_limit, i - 1, total_weights, total_points);
    int ans2 = most_op(wp, weights_limit, i - 1, total_weights + wp[i].w, total_points + wp[i].p);
    return max(ans, ans2);
}

int main()
{
    int n, w;
    cin >> n >> w;
    vector<info> wp(n);
    for (int i = 0; i < n; i++)
        cin >> wp[i].w;
    for (int i = 0; i < n; i++)
        cin >> wp[i].p;

    int ans = most_op(wp, w, wp.size() - 1, 0, 0);

    cout << ans << "\n";

    // O(2 ^ n)
    // max n <= 28
}
