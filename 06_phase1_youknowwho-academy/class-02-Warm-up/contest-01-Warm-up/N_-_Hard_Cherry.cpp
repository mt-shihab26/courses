#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back
template <typename tem>
void print_vector(vector<tem> &vec)
{
    for (auto &ele : vec)
        cout << ele << " ";
    cout << "\n";
}

void test()
{
    int n;
    cin >> n;
    vector<int> a(n + 2);
    a[0] = 0;
    a[n + 1] = 0;
    int mx = 0;
    int mx_indx;
    for (int i = 1; i <= n; i++)
    {
        cin >> a[i];
    }
    llint ans = 0;
    for (int i = 2; i <= n; i++)
    {
        ans = max(ans, a[i] * 1LL * a[i - 1]);
    }

    cout << ans << endn;
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;
    while (t--)
    {
        test();
    }
}
// Solved By: shihab4t
// Friday, July 30, 2021 | 12:10:39 AM (+06)