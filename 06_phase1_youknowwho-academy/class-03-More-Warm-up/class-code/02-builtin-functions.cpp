#include <bits/stdc++.h>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cout << ceil(2.2) << '\n';
    cout << floor(2.8) << '\n';
    cout << round(2.5) << '\n';
    cout << llround(2.4) << '\n';

    cout << "log(16) = " << log(16) << '\n';
    cout << "log2(16) = " << log2(16) << '\n';
    cout << "log10(16) = " << log10(16) << '\n';

    cout << "abs(-69) = " << abs(-69) << '\n';

    cout << "sqrt(64) = " << sqrt(64) << '\n';
    cout << "cbrt(64) = " << cbrt(64) << '\n';
    cout << "pow(2, 5) = " << pow(2, 5) << '\n';

    int a = atoi("123");
    cout << a << "\n";
    long long int b = atoll("123");
    cout << b << "\n";

    cerr << "This is error\n";

    int a2[10];
    memset(a2, -1, sizeof a); // -1, 0, 1 or any character
    for (int i = 0; i < 10; i++)
    {
        cout << a2[i] << " ";
    }
    cout << "\n";

    int b2[10];
    fill(b2, b2 + 10, 23);
    for (int i = 0; i < 10; i++)
    {
        cout << b2[i] << " ";
    }
    cout << "\n";

    // isalpha()
    // isdigit()
    // islower()
    // isupper()
    // tolower()
    // toupper()

    return 0;
}