#include <bits/stdc++.h>
using namespace std;

#define endn '\n'

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int arr[3];
    cin >> arr[0] >> arr[1] >> arr[2];
    int arr2[3];
    arr2[0] = arr[0];
    arr2[1] = arr[1];
    arr2[2] = arr[2];

    sort(arr, arr + 3);

    cout << arr[0] << "\n";
    cout << arr[1] << "\n";
    cout << arr[2] << "\n\n";

    cout << arr2[0] << "\n";
    cout << arr2[1] << "\n";
    cout << arr2[2] << "\n";

    return 0;
}
