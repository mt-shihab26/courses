#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string str;
    getline(cin, str);

    int tmp = 0;
    int first, second;
    char op;

    int ind = 1;

    for_each(str.begin(), str.end(), [&tmp, &first, &op, &ind](char ch) 
    {
        if (ch == '<' || ch == '>' || ch == '=') 
        {
            first = tmp * ind;
            tmp = 0;
            op = ch;
            ind = 1;
        }
        else if (ch == '-')
        {
            ind = -1;
        }
        else if (ch != ' ')
        {
            tmp = (tmp * 10) + (ch - '0');
        }
        
    });
    second = tmp * ind;

    // cout << first << " " << second << " ";

    string ans;

    if (op == '<')
    {
        ans = first < second ? "Right" : "Wrong";
    }
    else if (op == '>') 
    {
        ans = first > second ? "Right" : "Wrong";
    }
    else 
    {
        ans = first == second ? "Right" : "Wrong";
    }

    cout << ans << endn;

    return 0;
}
