#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;
    cin >> n;
    vector<int> eles(n);
    for (int i = 0; i < n; i++)
    {
        cin >> eles[i];
    }

    int even = 0, odd = 0, positive = 0, negative = 0;

    // for (int i = 0; i < n; i++)
    // {
    //     cout << eles[i] << " ";
    // }

    for_each(eles.begin(), eles.end(), [&](int ele)
             {
        if (ele % 2 == 0)
            even++;
        else
            odd++;
        if (ele < 0)
            negative++;
        else if (ele > 0)
            positive++; });

    cout << "Even: " << even << endn;
    cout << "Odd: " << odd << endn;
    cout << "Positive: " << positive << endn;
    cout << "Negative: " << negative << endn;

    return 0;
}
