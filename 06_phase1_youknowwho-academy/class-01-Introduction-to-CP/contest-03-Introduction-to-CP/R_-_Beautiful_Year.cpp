#include <bits/stdc++.h>
using namespace std;
typedef long long int lli;
typedef long double ld;
#define endn "\n"

// void test1(void) {
//     int year;
//     string year_str;
//     cin >> year;

//     int i;
//     while (1) {
//         year++;
//         year_str = to_string(year);
//         set<char> year_set(begin(year_str), end(year_str));
//         if (year_set.size() == 4) {
//             cout << year << endn;
//             return;
//         }
//     }
// }

bool is_beautiful(string &str)
{
    int i, j;
    for (i = 0; i < 4; i++)
    {
        for (j = i + 1; j < 4; j++)
        {
            if (str[i] == str[j])
            {
                return false;
            }
        }
    }
    return true;
}

void test2(void)
{
    int year;
    string year_str;

    cin >> year;

    int i;
    while (1)
    {
        year++;
        year_str = to_string(year);
        if (is_beautiful(year_str))
        {
            cout << year << endn;
            return;
        }
    }
}

// void test3(void) {
//     int a, b, c, d;
//     int num;
//     // cin >> num;
//     a = num / 1000;
//     b = (num % 100) / 10;
//     c = (num % 1000) / 100;
//     d = (num % 10000) / 10000;
//     if (e1 != e2 && e1 != e3 && e1 != e4 && e2 != e3 && e2 != e4 && e3 != e4)
//             break;
// }

int main(void)
{

    // test1();

    test2();

    // test3();

    return 0;
}

// By Shihab Mahamud
// Date: Sunday, June 06, 2021 | 07:38:43 PM (+06)