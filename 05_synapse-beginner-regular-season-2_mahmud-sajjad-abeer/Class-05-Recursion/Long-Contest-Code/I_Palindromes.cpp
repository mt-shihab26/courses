#include <bits/stdc++.h>
using namespace std;

#define endn '\n'
#define umap unordered_map

umap<char, char> chr;
void cal_reverse_char() {
    chr['A'] = 'A';
    chr['E'] = '3';
    chr['H'] = 'H';
    chr['I'] = 'I';
    chr['J'] = 'L';
    chr['M'] = 'M';
    chr['O'] = 'O';
    chr['S'] = '2';
    chr['T'] = 'T';
    chr['U'] = 'U';
    chr['V'] = 'V';
    chr['W'] = 'W';
    chr['X'] = 'X';
    chr['Y'] = 'Y';
    chr['Z'] = '5';
    chr['1'] = '1';
    chr['8'] = '8';
    chr['L'] = 'J';
    chr['2'] = 'S';
    chr['3'] = 'E';
    chr['5'] = 'Z';
}


bool is_palindrome(string &str, int a, int b) {
    if (a >= b) return true;
    if (str[a] != str[b]) return false;
    return is_palindrome(str, a+1, b-1);
}

bool is_mirrored(string str, int a, int b) {
    if (a > b) return true;
    if (a == b) {
        if (chr[str[a]] == str[a]) return true;
        else return false;
    }
    if (chr[str[a]] != str[b]) return false;
    return is_mirrored(str, a+1, b-1);
}

int main(void) {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    cal_reverse_char();

    string str;
    while (cin >> str) {
        bool is_pd = is_palindrome(str, 0, str.length()-1);
        bool is_mr = is_mirrored(str, 0, str.length()-1);

        if (is_pd && is_mr) {
            cout << str << " -- is a mirrored palindrome.";
        }
        else if (is_pd == false && is_mr == false) {
            cout << str << " -- is not a palindrome.";
        }
        else if (is_pd && is_mr == false) {
            cout << str << " -- is a regular palindrome.";
        }
        else if (is_pd == false && is_mr) {
            cout << str << " -- is a mirrored string.";
        }
        cout << endn << endn;
    }
}
// Solved By: shihab4t
// Tuesday, August 24, 2021 | 11:41:10 AM (+06)
// Accepted: 01:04:02 PM (+06)
