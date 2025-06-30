#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int

bool is_palindrome(string n)
{
    for (int i = 0, j = n.length()-1; i < j; i++, j--)
    {
        if (n[i] != n[j])
        {
            return false;
        }
    }
    return true;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    string num;
    cin >> num;

    string old_num = num;

    reverse(num.begin(), num.end());

    int i, len = num.length();

    for (i = 0; i < len; i++)
    {
        if (num[i] != '0')
        {
            break;
        }
    }

    while (i < len)
    {
        cout << num[i];
        i++;
    }
    cout << "\n";

    if (is_palindrome(old_num))
    {
        cout << "YES" << endn;
    }
    else
    {
        cout << "NO" << endn;
    }

    return 0;
}
