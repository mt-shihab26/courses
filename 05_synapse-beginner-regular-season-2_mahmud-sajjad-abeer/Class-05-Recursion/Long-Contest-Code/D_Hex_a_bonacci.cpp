#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;

int main() {
    llint n, cases;
    llint arr[10009];
    scanf("%lld", &cases);
    for (llint caseno = 1; caseno <= cases; ++caseno) {
        scanf("%lld%lld%lld%lld%lld%lld%lld", &arr[0], &arr[1], &arr[2], &arr[3], &arr[4], &arr[5], &n);
        for (int i = 6; i <= n; i++) {
            arr[i] = (arr[i-1] + arr[i-2] + arr[i-3] + arr[i-4] + arr[i-5] + arr[i-6]) % 10000007;
        }
        printf("Case %lld: %lld\n", caseno, arr[n] % 10000007);
    }
    return 0;
}