#include <bits/stdc++.h>
using namespace std;

int main()
{
    char *buffer = new char[8];
    memset(buffer, 0, 8);

    char **ptr = &buffer;
    cout << ptr << "\n";
    cout << *ptr << "\n";

    delete[] buffer;
}