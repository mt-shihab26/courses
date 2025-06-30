#include <bits/stdc++.h>
using namespace std;

#define endn "\n"

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int len;
    cin >> len;
    vector<int> values;

    for (int i = 0; i < len; i++)
    {
        int temp;
        cin >> temp;
        values.push_back(temp);
    }

    int x, y;
    cin >> x;
    values.erase(values.begin() + x - 1);
    cin >> x >> y;
    values.erase((values.begin() + x - 1), values.begin() + y - 1);

    cout << values.size() << endn;
    for (const int &v : values)
        cout << v << " ";
    cout << endn;

    return 0;
}
// Solved By: shihab4t
// Saturday, July 10, 2021 | 06:52:29 AM (+06)
