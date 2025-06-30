#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int

vector<int> divisors(int n)
{
    vector<int> a;
    int root = sqrt(n);
    for (int i = 1; i <= root; i++)
    {
        if (n % i == 0)
        {
            a.push_back(i);
            if (n / i != i)
                a.push_back(n / i);
        }
    }
    return a;
    // O(sqrt(n))
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;

    auto divis = divisors(n);

    sort(divis.begin(), divis.end());

    for (auto it = divis.begin(); it != divis.end(); it++)
    {
        cout << (*it) << endn;
    }

    return 0;
}
