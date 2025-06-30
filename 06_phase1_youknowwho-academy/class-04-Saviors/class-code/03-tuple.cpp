#include <bits/stdc++.h>
using namespace std;

#define ed '\n'

int main()
{
    tuple<int, int, int> a;
    tuple<int, int, int, int> a2;

    a2 = make_tuple(4, 1, 2, 3);

    cout << (get<0>(a2)) << " "
         << (get<1>(a2)) << " "
         << (get<2>(a2)) << " "
         << (get<3>(a2)) << ed;
}