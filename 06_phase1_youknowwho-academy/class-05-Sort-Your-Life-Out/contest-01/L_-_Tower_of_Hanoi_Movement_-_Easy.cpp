#include <bits/stdc++.h>
using namespace std;

int x, y;
void tower(int n, int a, int b, int c)
{
    if (n == 0)
        return;
    tower(n - 1, a, c, b);
    y++;
    if (x == y)
        cout << n << " : " << char(a + 'A' - 1) << " => " << char(c + 'A' - 1) << '\n';
    tower(n - 1, b, a, c);
}
int main()
{
    ios_base ::sync_with_stdio(false);
    cin.tie(NULL);

    int t, n;
    cin >> t;
    while (t--)
    {
        cin >> n >> x;
        y = 0;
        tower(n, 1, 2, 3);
    }
    return 0;
}