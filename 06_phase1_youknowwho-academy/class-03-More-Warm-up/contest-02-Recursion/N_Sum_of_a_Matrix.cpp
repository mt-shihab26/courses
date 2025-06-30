#include <bits/stdc++.h>
using namespace std;

#define end '\n'
#define gap ' '
#define i32 int
#define i64 long long int
#define f32 float
#define f64 double
#define bol bool
#define chr char
#define str string
#define vec vector

int32_t main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    i32 r, c;
    cin >> r >> c;

    vec<vec<i32>> a(r, vec<i32>(c));
    vec<vec<i32>> b(r, vec<i32>(c));

    for (int i = 0; i < r; i++)
    {
        for (i32 j = 0; j < c; j++)
        {
            cin >> a[i][j];
        }
    }

    for (int i = 0; i < r; i++)
    {
        for (i32 j = 0; j < c; j++)
        {
            cin >> b[i][j];
        }
    }

    for (int i = 0; i < r; i++)
    {
        for (i32 j = 0; j < c; j++)
        {
            cerr << a[i][j] << " " << b[i][j] << end;
            cout << a[i][j] + b[i][j] << gap;
        }
        cout << end;
    }

    return 0;
}
