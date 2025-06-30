#include <bits/stdc++.h>
using namespace std;

int bubble_sort(int arr[], int n)
{
    int i, j, swap_ct = 0;
    bool swapped;
    for (i = 0; i < n - 1; i++)
    {
        swapped = false;
        for (j = 0; j < n - i - 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap_ct++;
                swap(arr[j], arr[j + 1]);
                swapped = true;
            }
        }
        if (swapped == false)
            break;
    }
    return swap_ct;
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++)
    {
        cin >> arr[i];
    }
    int swaps = bubble_sort(arr, n);

    cout << "Array is sorted in " << swaps << " swaps.\n";
    cout << "First Element: " << arr[0] << "\n";
    cout << "Last Element: " << arr[n - 1] << "\n";
}