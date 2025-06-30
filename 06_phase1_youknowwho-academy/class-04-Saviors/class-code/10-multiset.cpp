#include <bits/stdc++.h>
using namespace std;

ostream &operator<<(ostream &ostream, const multiset<int> &ms)
{
    for (auto it = ms.begin(); it != ms.end(); it++)
    {
        cout << (*it) << " ";
    }
    return ostream;
}

int main()
{
    multiset<int> ms;

    ms.insert(3);
    ms.insert(2);
    ms.insert(2);
    ms.insert(2);
    ms.insert(1);
    cout << ms << "\n";

    auto it = ms.find(2);
    ms.erase(it);
    cout << ms << "\n";

    ms.erase(2);
    cout << ms << "\n";
}