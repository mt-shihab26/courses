#include <bits/stdc++.h>
using namespace std;

void print(deque<int> d)
{
    for (int i : d)
        cout << i << " ";
    cout << "\n";
}

int main()
{
    deque<int> d;
    d.push_back(23);
    d.push_back(82);
    d.push_back(52);
    print(d);

    d.pop_back();
    print(d);

    d.push_front(10);
    d.push_front(11);
    print(d);

    d.pop_front();
    print(d);

    d.pop_front();
    print(d);

    cout << d[0] << " " << (*d.begin()) << "\n";
}