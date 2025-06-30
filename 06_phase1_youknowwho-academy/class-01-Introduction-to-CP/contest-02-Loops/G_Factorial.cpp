#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define llint long long int


int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    llint n;
    cin >> t;
    llint ans;
    while (t--)
    {
        cin >> n;
        ans = 1;
        while(n) {
            ans = ans * n;
            n--;
        }
        
        cout << ans << endn;
    }

    return 0;
}
