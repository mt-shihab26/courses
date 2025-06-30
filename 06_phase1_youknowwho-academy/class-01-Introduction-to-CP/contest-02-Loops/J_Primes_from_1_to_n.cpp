#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int

#define MAX 10000001
bool is_not_prime2[MAX+10];
vector<long long int> primes;
void sieve(int n) {
    int i, j;
    is_not_prime2[1] = true;

    primes.push_back(2);
    for (i = 4; i <= n; i += 2) is_not_prime2[i] = true;
    
    int root = sqrt(n);
    for (i = 3; i <= n; i += 2) {
        if (is_not_prime2[i] == false) {
            primes.push_back(i);
            if (i <= root) {
                for (j = i*i; j <= n; j += 2*i) {
                    is_not_prime2[j] = true;
                }
            }
        }
    }
    // O(n * log log n)
}


int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);


    int n; 
    cin >> n;
    
    sieve(n);

    for (int i = 1; i <= n; i++) {
        if (!is_not_prime2[i])
        {
            cout << i << " ";
        }
    }
    cout << endn;

    return 0;
}
