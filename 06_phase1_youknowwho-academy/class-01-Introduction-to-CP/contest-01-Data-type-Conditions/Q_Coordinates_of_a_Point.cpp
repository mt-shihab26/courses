#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    double x, y;
    cin >> x >> y;

    string ans = "";

    if (x > 0)
    {
        if (y > 0)
        {
            ans = "Q1";
        }
        else if (y < 0)
        {
            ans = "Q4";
        }
        else
        {
            ans = "Eixo X";
        }
    }
    else if (x < 0)
    {
        if (y > 0)
        {
            ans = "Q2";
        }
        else if (y < 0)
        {
            ans = "Q3";
        }
        else
        {
            ans = "Eixo X";
        }
    }
    else
    {
        if (y == 0)
        {
            ans = "Origem";
        }
        else
        {
            ans = "Eixo Y";
        }
    }

    cout << ans << endn;

    return 0;
}
