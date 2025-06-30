#include <bits/stdc++.h>
using namespace std;

#define endn "\n"

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    unordered_map<string, int> students;
    int q;
    cin >> q;
    int fi, value;
    string name;
    while (q--)
    {
        cin >> fi;
        if (fi == 1)
        {
            cin >> name >> value;
            students[name] += value;
        }
        else if (fi == 2)
        {
            cin >> name;
            students.erase(name);
        }
        else
        {
            cin >> name;
            cout << students[name] << endn;
        }
    }

    return 0;
}
// Solved By: shihab4t
// Thursday, July 08, 2021 | 11:54:31 AM (+06)
