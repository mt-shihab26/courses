#include <bits/stdc++.h>
using namespace std;

// input: hello world bangladesh

int main()
{
    string s;
    getline(cin, s);

    stringstream ss;
    ss << s;

    string word;

    while (ss >> word)
    {
        cout << word << "\n";
    }
}