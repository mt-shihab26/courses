#include <bits/stdc++.h>
using namespace std;

void print(string &name)
{
    cout << name << "\n";
}

void print2(const string &name)
{
    cout << name << "\n";
}

int main()
{
    string first_name = "Shihab";
    string last_name = "Mahamud";

    string full_name = first_name + last_name;

    print(first_name); // work
    print(last_name);  // work
    print(full_name);  // work
    // print(first_name + last_name); // not work because first_name + last_name is rvalue

    print2(full_name);              // work
    print2(first_name + last_name); // work because it is accept const lvalue reference

    return 0;
}