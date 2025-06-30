#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s = "abcd";
    cout << s << "\n";
    s.push_back('e');
    cout << s << "\n";

    s += 'f';    // internally used s.push_back('f') -> O(1)
    s = s + 'f'; // 0(n)
}