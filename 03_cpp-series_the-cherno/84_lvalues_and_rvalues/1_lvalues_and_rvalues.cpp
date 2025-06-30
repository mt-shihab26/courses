#include <bits/stdc++.h>
using namespace std;

int get_value()
{
    return 10;
}

int &get_value2()
{
    static int value = 10;
    return value;
}

void set_value(int &value)
{
    cout << value << "\n";
}

int main()
{
    int i = 5;           // here i is lvalue and 5 is rvalue
    int a = i;           // here a is lvalue and i is also lvalue
    int j = get_value(); // here j is lvalue and get_value() is rvalue

    // 5 = i; // this expression does not work because we can't assign any thing to rvalue
    // get_value() = 5; // also not work for same reason

    get_value2() = 100; // now it work because get_value2 is lvalue
    cout << get_value2() << "\n";

    set_value(i);
    // set_value(50); // we can't pass rvalue to lvalue reference

    return 0;
}