#include <bits/stdc++.h>
using namespace std;

void print_value(int n)
{
    cout << "The value of the n is " << n << "\n";
}

void print_value(int *ptr)
{
    cout << "The value of the *ptr is " << ptr << "\n";
}

int main()
{
    int *ptr1; // Wild Pointer

    int a = 10;

    int *ptr2 = &a;

    // NULL Pointer
    int *ptr3 = NULL;
    cout << ptr3 << "\n";

    // nullptr pointer
    int *ptr4 = nullptr;
    cout << ptr4 << "\n";

    // 0 pointer
    int *ptr5 = 0;
    cout << ptr5 << "\n";

    print_value(0);
    // print_value(NULL);
    print_value(nullptr);
}
