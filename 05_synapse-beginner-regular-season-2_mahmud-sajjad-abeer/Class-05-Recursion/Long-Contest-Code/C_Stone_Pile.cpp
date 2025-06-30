#include <bits/stdc++.h>
using namespace std;

#define endn "\n"

int n;
vector<int> arr(22);
int sum = 0;
int ans;

void backtrack(int i, int s) {
    if (i == n) {
        ans = min(ans, abs(sum - s*2));
        return;
    }
    backtrack(i+1, s);
    backtrack(i+1, s + arr[i]);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cin >> n;
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        sum += arr[i];
    }
    ans = sum;
    backtrack(0, 0);
    cout << ans << endn;
}