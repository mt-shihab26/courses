#include <bits/stdc++.h>
using namespace std;

int main()
{
    void *ptr = 0;
    // ptr is valid pointer but 0 is not valid memory address
    void *ptr2 = NULL;
    // here 0 means null we also write null instance
    void *ptr3 = nullptr;
    // or we can use nullptr. a keyword that introduce in c++11

    // This pointers complexly type less
    // And complexly useless
    // This is the simples pointer you can write

    int var = 8;
    void *ptr4 = &var;
    cout << ptr4 << "\n";

    int *ptr5 = &var;
    cout << ptr5 << "\n";

    double *ptr6 = (double *)&var;
    cout << ptr6 << "\n";
    // Type do not matter
    // Types help to manipulation of that memory
}