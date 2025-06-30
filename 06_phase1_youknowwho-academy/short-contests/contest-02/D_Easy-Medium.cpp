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
    vector<int> a(n);
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    uset<int> as(a.begin(), a.end());

    cout << as.size() << endn;
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
