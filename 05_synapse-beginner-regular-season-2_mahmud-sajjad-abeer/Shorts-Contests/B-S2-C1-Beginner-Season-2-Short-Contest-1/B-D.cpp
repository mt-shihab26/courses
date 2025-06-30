#include <bits/stdc++.h>
using namespace std;

int main(void) {
    int lucky_numbers[11] = {4, 7, 47, 74, 444, 447, 474, 477, 744, 747, 777};
    int num;
    scanf("%d", &num);

    for (int i=0; i<11; i++) {
        if (num%lucky_numbers[i] == 0) {
            printf("YES\n");
            return 0;
        }
    }
    printf("NO\n");
    
    return 0;
}