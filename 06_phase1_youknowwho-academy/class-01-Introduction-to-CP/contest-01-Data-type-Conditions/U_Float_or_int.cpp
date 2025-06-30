#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    double x;
    cin >> x;

    int int_x = (int)x;

    double dif = x - int_x;

    if (dif > 0.0)
    {
        cout << "float " << int_x << " " << dif << endn;
    }
    else
    {
        cout << "int " << int_x << endn;
    }

    return 0;
}
