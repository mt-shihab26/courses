#include <bits/stdc++.h>
using namespace std;

typedef long long int llint;
typedef unsigned long long int ullint;
typedef short int sint;
#define endn "\n"
#define umap unordered_map
#define uset unordered_set
#define pb push_back
template<typename tem>
void print_vector(vector<tem> &vec) {
for (auto &ele : vec) cout<<ele<<" ";
cout << "\n";}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL); cout.tie(NULL);

    string sen, cm_sen;
    while (true) {
        getline(cin, sen);
        if (sen == "DONE") {
            return 0;
        }
        cm_sen = "";
        for (int i = 0; i < sen.size(); i++) {
            if (sen[i] >= 'A' && sen[i] <= 'Z') {
                cm_sen.pb(sen[i] + 32);
            }
            else if (sen[i] >= 'a' && sen[i] <= 'z') {
                cm_sen.pb(sen[i]);
            }
        }
        int len = cm_sen.size();
        int i = 0, j = len-1;
        bool is = true;
        while (i < (len / 2)) {
            if (cm_sen[i] != cm_sen[j]) {
                is = false;
                break;
            }
            i++, j--;
        }
        if (is) {
            cout << "You won't be eaten!";
        }
        else {
            cout << "Uh oh..";
        }
        cout << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 03, 2021 | 03:33:51 AM (+06)
// Accepted: 3:55 AM (+06)
