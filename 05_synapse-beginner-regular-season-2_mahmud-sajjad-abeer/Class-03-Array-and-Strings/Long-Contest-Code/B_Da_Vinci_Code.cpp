#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
typedef unsigned int uint;
#define endn '\n'
#define umap unordered_map
#define uset unordered_set
#define pb push_back

llint fib[100];
void func() {
    fib[0] = 1;
    fib[1] = 1;
    for (int i = 2; i <= 50; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    func();
    
    int t; cin >> t;
    while (t--) {
        int n; 
        cin >> n;
        llint arr[n+10];
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cin.ignore();
        string str;
        getline(cin, str);
        string finals;
        for (int i = 0; i <= 50; i++) {
            finals.pb('*');
        }

        int mx = 0;
        int len = str.size();
        for (int i = 0, j = 0; i < len; i++) {
            if (str[i] >= 'A' && str[i] <= 'Z') {
                for (int k = 1; k < 50; k++) {
                    if (arr[j] == fib[k]) {
                        finals[k] = str[i];
                        mx = max(mx, k);
                        break;
                    }
                }                    
                j++;
            }
        }
        for (int i = 1; i <= mx; i++) {
            if (finals[i] == '*') {
                cout << " ";
            }
            else {
                cout << finals[i];
            }
        }
        cout << endn;
    }
}
