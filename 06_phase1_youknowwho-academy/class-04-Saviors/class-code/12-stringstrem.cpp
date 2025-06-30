#include <bits/stdc++.h>
using namespace std;

int count_words(string s)
{
    stringstream ss(s);
    string word;

    int count = 0;
    while (ss >> word)
        count++;
    return count;
}

int main()
{
    string s = "geeks for geeks geeks contribution placements";
    cout << "Number of words are: " << count_words(s) << "\n";
}