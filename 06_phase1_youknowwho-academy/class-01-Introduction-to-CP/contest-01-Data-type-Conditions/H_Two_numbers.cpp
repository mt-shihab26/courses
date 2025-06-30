#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    double a, b;
    cin >> a >> b; 
    double res = a / b ;

    cout << "floor " << a << " / " << b << " = " << floor(res) << "\n";
    cout << "ceil " << a << " / " << b << " = " << ceil(res) << "\n";
    cout << "round " << a << " / " << b << " = " << round(res) << "\n";

    return 0;
}
