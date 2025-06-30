#include <bits/stdc++.h>
using namespace std;

void print2(const string &&name)
{
    cout << name << "\n";
}

int main()
{
    string first_name = "Shihab";
    string last_name = "Mahamud";

    string full_name = first_name + last_name;

    // print2(full_name);              // not work because we can't pass lvalue to rvalue reference
    print2(first_name + last_name); // work because it accept rvalue only

    return 0;
}