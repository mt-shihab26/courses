#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set

#define mx 3005
bitset<mx> mark;
vector<int> primes;
void sieve(void)
{
    int i, j;
    primes.push_back(2);
    for (i = 3; i <= sqrt(int(mx)); i += 2)
    {
        if (mark[i] == false)
        {
            primes.push_back(i);
            for (j = i * i; j <= mx; j += i * 2)
            {
                mark[j] = true;
            }
        }
    }
    for (; i <= mx; i += 2)
    {
        if (mark[i] == false)
        {
            primes.push_back(i);
        }
    }
}

bool almost_prime(int num)
{
    int root = sqrt(num);
    int main_ct = 0;
    for (int i = 0; i < primes.size() && primes[i] <= root; i++)
    {
        if (num % primes[i] == 0)
        {
            while (num % primes[i] == 0)
            {
                num /= primes[i];
            }
            root = sqrt(num);
            main_ct++;
        }
        if (main_ct > 2)
        {
            return false;
        }
    }
    if (num > 1)
    {
        main_ct++;
    }
    if (main_ct == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

int main(void)
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    sieve();
    uset<int> p_set(primes.begin(), primes.end());
    int n;
    cin >> n;
    int ct = 0;
    for (int i = 6; i <= n; i++)
    {
        if (p_set.find(i) == p_set.end())
        {
            if (almost_prime(i))
            {
                ct++;
            }
        }
    }
    cout << ct << endn;
}
// Solved By: shihab4t
// Wednesday, July 14, 2021 | 11:20:28 AM (+06)