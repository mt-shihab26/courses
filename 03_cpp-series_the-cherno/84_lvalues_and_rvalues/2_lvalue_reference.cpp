#include <bits/stdc++.h>
using namespace std;

void set_value(int &value)
{
    cout << value << "\n";
}

void set_value2(const int &value)
{
    cout << value << "\n";
}

int main()
{
    int i = 5;

    set_value(i);
    // set_value(50); // we can't pass rvalue to lvalue reference

    // int &x = 20; // not work
    const int &y = 20; // work

    set_value2(i);
    set_value2(50); // it work because const lvalue reference can accept rvalue as well

    return 0;
}