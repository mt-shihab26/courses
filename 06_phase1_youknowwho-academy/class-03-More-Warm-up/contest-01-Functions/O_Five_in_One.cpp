#include <bits/stdc++.h>
using namespace std;

template <typename T>
istream &operator>>(istream &istream, vector<T> &v)
{
    int len = v.size();
    for (int i = 0; i < len; i++)
        cin >> v[i];
    return istream;
}

#define end '\n'
#define vec vector
#define str string
#define len(a) a.size()
#define slen(s) s.length()
#define gap ' '

int _max(const vec<int> &a)
{
    int mx = INT_MIN, len = a.size();
    for (int i = 0; i < len; i++)
    {
        mx = max(a[i], mx);
    }
    return mx;
}

int _min(const vec<int> &a)
{
    int mn = INT_MAX, len = a.size();
    for (int i = 0; i < len; i++)
    {
        mn = min(a[i], mn);
    }
    return mn;
}

bool is_prime(const int &num)
{
    if (num <= 1)
        return false;
    if (num == 2)
        return true;
    if (num % 2 == 0)
        return false;
    for (int i = 3; i * i <= num; i += 2)
    {
        if (num % i == 0)
            return false;
    }
    return true;
}

int prime_count(const vec<int> &a)
{
    int n = a.size(), ct = 0;
    for (int i = 0; i < n; i++)
    {
        if (is_prime(a[i]))
        {
            ct++;
        }
    }
    return ct;
}

bool is_palindrome(const int &num)
{
    str st = to_string(num);
    int len = st.length();
    for (int i = 0, j = len - 1; i < j; i++, j--)
    {
        if (st[i] != st[j])
            return false;
    }
    return true;
}

int palindrome_count(const vec<int> &a)
{
    int n = a.size(), ct = 0;
    for (int i = 0; i < n; i++)
    {
        if (is_palindrome(a[i]))
        {
            ct++;
        }
    }
    return ct;
}

int count_divisors(const int num)
{
    int ct = 0;
    int root = sqrt(num);
    for (int i = 1; i <= root; i++)
    {
        if (num % i == 0)
        {
            ct++;
            // cerr << i << " ";
            if (num / i != i)
            {
                ct++;
                // cerr << num / i << " ";
            }
        }
    }
    // cerr << "\n";
    return ct;
}

int max_divisor(const vec<int> &a)
{
    int mx = INT_MIN, ans = INT_MIN, n = a.size(), tmp;
    for (int i = 0; i < n; i++)
    {
        tmp = count_divisors(a[i]);
        if (mx <= tmp)
        {
            if (mx == tmp)
                ans = max(ans, a[i]);
            else
                ans = a[i];
            mx = tmp;
            // // cerr << ans << " " << tmp << " " << mx << "\n";
        }
    }
    return ans;
}

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    vec<int> a(n);
    cin >> a;

    const int mx = _max(a);
    const int mn = _min(a);
    const int ct_prime = prime_count(a);
    const int ct_palindrome = palindrome_count(a);
    const int mx_divisor = max_divisor(a);

    cout << "The maximum number : " << mx << end;
    cout << "The minimum number : " << mn << end;
    cout << "The number of prime numbers : " << ct_prime << end;
    cout << "The number of palindrome numbers : " << ct_palindrome << end;
    cout << "The number that has the maximum number of divisors : " << mx_divisor << end;

    return 0;
}
// 1, 5
// 1, 2, 4;