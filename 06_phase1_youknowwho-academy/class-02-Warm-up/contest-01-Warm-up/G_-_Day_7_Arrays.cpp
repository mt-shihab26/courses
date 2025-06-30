#include <bits/stdc++.h>
using namespace std;

int main()
{
    int n;
    cin >> n;
    vector<int> a;
    int tmp;
    for (int i = 0; i < n; i++)
    {
        cin >> tmp;
        a.push_back(tmp);
    }

    for (int i = n - 1; i >= 0; i--)
    {
        cout << a[i] << " ";
    }
}
