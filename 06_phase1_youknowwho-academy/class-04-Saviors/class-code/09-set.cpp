#include <bits/stdc++.h>
using namespace std;

int main()
{
    set<int> s;

    s.insert(23);
    s.insert(81);
    s.insert(92);
    s.insert(43);

    cout << (*s.begin()) << " " << (*(++s.begin())) << "\n";

    s.erase(92);
    for (int i : s)
        cout << i << " ";
    cout << "\n";

    set<int>::iterator it = s.find(23); // O(log(n));
    if (it != s.end())
    {
        cout << "23 is exist" << "\n";
    }
}