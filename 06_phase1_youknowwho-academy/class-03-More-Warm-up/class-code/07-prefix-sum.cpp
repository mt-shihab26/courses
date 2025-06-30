/*
Given array a of N integers. Give Q queries
and in cash query given L and R print usm of
array elements from index L to R (L, R included)

Constraints
1 <= N <= 10^5
1 <= a[i] <= 10^9
1 <= A <= 10^5
1 <= L, R <= N
*/

#include <bits/stdc++.h>
using namespace std;
const int N = 1e5 + 10;
int prefix_sum[N];

int main(void)
{
    int n;
    cin >> n;
    for (int i = 1; i <= n; i++)
    {
        cin >> prefix_sum[i];
        prefix_sum[i] = prefix_sum[i - 1] + prefix_sum[i];
    }
    int q;
    cin >> q;
    int l, r;
    while (q--)
    {
        cin >> l >> r;
        cout << (prefix_sum[r + 1] - prefix_sum[l]) << "\n";
    }

    // O(N) + O(Q) = O(Q) or O(N)
}