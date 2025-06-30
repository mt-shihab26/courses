#include <bits/stdc++.h>
using namespace std;

#define ed '\n'

int main()
{
    pair<pair<int, string>, int> x = {{10, "hello"}, 200};

    cout << x.first.first << ed
         << x.first.second << ed
         << x.second << ed;
}