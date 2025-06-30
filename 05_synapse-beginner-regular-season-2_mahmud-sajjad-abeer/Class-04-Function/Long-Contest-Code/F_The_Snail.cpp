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

    double goo_hight, distance, now_hight, slide_down, percen;
    while (true) {
        cin >> goo_hight;
        if (goo_hight == 0)
            return 0;
    
        cin >> distance >> slide_down >> percen;
        percen = distance * (percen / 100);
        now_hight = 0;
        for (int i = 1; ; i++) { 
            if (distance > 0)
                now_hight += distance;
            distance -= percen;
            
            if (now_hight > goo_hight) {
                cout << "success on day " << i << endn;
                break;
            }
            now_hight -= slide_down;
            if (now_hight < 0) {
                cout << "failure on day " << i << endn;
                break;
            }
        }
    }
}
