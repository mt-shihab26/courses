#include <bits/stdc++.h>
using namespace std;

void print(const string &name)
{
    cout << "[lvalue] " << name << "\n";
}

void print(const string &&name)
{
    cout << "[rvalue] " << name << "\n";
}

int main()
{
    string first_name = "Shihab";
    string last_name = " Mahamud";

    string full_name = first_name + last_name;

    print(full_name);              // it called lvalue overload func
    print(first_name + last_name); // it called rvalue overload func
    return 0;
}