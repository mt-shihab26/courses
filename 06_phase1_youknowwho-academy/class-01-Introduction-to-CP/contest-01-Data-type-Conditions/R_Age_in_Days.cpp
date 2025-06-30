#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int days;
    cin >> days;

    int years = days / 365;
    days = days - (years * 365);
    int months = days / 30;
    days = days - (months * 30);

    cout << years << " years" << endn;
    cout << months << " months" << endn;
    cout << days << " days" << endn;
    return 0;
}
