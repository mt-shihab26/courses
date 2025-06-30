#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string exp;
    cin >> exp;

    int tmp = 0;
    int first, second;
    char op;

    for (auto it = exp.begin(); it != exp.end(); it++)
    {
        if ((*it) == '+' || (*it) == '-' || (*it) == '*' || (*it) == '/')
        {
            first = tmp;
            tmp = 0;
            op = *it;
        }
        else
        {
            tmp = tmp * 10 + ((*it) - '0');
        }
    }
    second = tmp;

    int res;

    if (op == '+')
    {
        res = first + second;
    }
    else if (op == '-')
    {
        res = first - second;
    }
    else if (op == '*')
    {
        res = first * second;
    }
    else
    {
        res = first / second;
    }

    cout << res << endn;

    return 0;
}
