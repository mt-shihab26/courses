#include <bits/stdc++.h>
using namespace std;

int main()
{
    char *buffer = new char[8];

    memset(buffer, 0, 8);
    buffer[1] = 'C';

    cout << buffer[1] << "\n";

    delete[] buffer;
}