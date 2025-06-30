// Given n items and w weight limit.
// Figure out what is the maximum amount of profit you can get from it.
// wi -> weight of i'th item
// pi -> profit of i'th item

// case #01
// input:
// 3 5
// 3 2 4
// 10 9 12

// output:
// 19

// case #02
// input:
// 3 4
// 3 2 4
// 10 9 12

// output:
// 15.6667

#include <bits/stdc++.h>
using namespace std;

struct info
{
    int w, p;

    bool operator<(info &other)
    {
        return this->p * other.w > other.p * this->w;
    }
};

int main()
{
    int n, w;
    cin >> n >> w;
    vector<info> wp(n);
    for (int i = 0; i < n; i++)
        cin >> wp[i].w;
    for (int i = 0; i < n; i++)
        cin >> wp[i].p;

    sort(wp.begin(), wp.end());

    double profit_ct = 0;

    int i = 0;
    while (w > 0)
    {
        if (i >= n)
            break;

        if (w >= wp[i].w)
        {
            w -= wp[i].w;
            profit_ct += wp[i].p;
        }
        else
        {
            profit_ct += wp[i].p * w * 1.0 / wp[i].w; 
            w -= w;
        }
        cerr << profit_ct << " " << w << "\n";
        i++;
    }

    cout << profit_ct << "\n";

    cerr << "\n";
    for (int i = 0; i < n; i++)
    {
        cerr << wp[i].w << " " << wp[i].p << "\n";
    }
}

// Greedy