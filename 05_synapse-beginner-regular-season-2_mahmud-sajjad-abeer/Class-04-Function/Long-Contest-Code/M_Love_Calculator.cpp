#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int value(string name) {
    int sum = 0, len = name.size(), new_sum;
    for (int i = 0; i < len; i++) {
        if (name[i] >= 'a' && name[i] <= 'z')
            sum += (name[i] - 96);
        else if (name[i] >= 'A' && name[i] <= 'Z')
            sum += (name[i] - 64);
    }
    while (sum >= 10) {
        new_sum = 0;
        while (sum) {
            new_sum += (sum % 10);
            sum /= 10;
        }
        sum = new_sum;
    }
    return sum;
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    
    string name1, name2;
    int va1, va2;
    while (getline(cin, name1)) {
        getline(cin, name2);
        va1 = value(name1);
        va2 = value(name2);
        if (va1 > va2) swap(va1, va2);
        double ans = va1 * 100.0 / va2;
        cout << fixed << setprecision(2) << ans << " %" << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 17, 2021 | 07:31:00 PM (+06)
