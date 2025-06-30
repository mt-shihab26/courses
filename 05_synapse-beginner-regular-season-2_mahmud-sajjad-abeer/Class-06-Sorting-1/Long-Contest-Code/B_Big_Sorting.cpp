#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

bool cmp(string a, string b) {
    int size_a = a.size(), size_b = b.size();
    if (size_a == size_b) return a < b;
    else return size_a < size_b; 
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    int n;
    cin >> n;
    vector<string> a(n);
    for (int i = 0; i < n; i++) {
        cin >> a[i];
    }

    sort(a.begin(), a.end(), cmp);

    for (int i = 0; i < n; i++) {
        cout << a[i] << endn;
    }
}
// Solved By: shihab4t
// Wednesday, September 01, 2021 | 04:08:09 AM (+06)
