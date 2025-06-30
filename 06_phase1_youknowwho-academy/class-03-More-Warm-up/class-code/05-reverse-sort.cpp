#include <bits/stdc++.h>
using namespace std;

int main()
{
    int a[] = {1, 2, 3, 4, 5};

    reverse(a, a + 5);

    for (int i = 0; i < 5; i++)
    {
        cout << a[i] << " ";
    }
    cout << "\n";

    int b[] = {1, 2, 4, 3, 8, 100, 5};

    sort(b, b + 7);

    for (int i = 0; i < 7; i++)
    {
        cout << b[i] << " ";
    }
    cout << "\n";
}