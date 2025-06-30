#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> v;

    int n, temp, i;
    cin >> n;

    for (i = 0; i < n; i++)
    {
        cin >> temp;
        v.push_back(temp);
    }

    sort(v.begin(), v.end());

    for (i = 0; i < n; i++)
        cout << v[i] << " ";

    return 0;
}
