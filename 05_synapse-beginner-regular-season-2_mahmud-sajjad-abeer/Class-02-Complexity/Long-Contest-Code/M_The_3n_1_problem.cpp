#include <stdio.h>

int cycle_length(int n) {
    int count = 0;
    while(1) {
        count++;
        if (n == 1) {
            break;
        }
        if (n % 2 != 0) {
            n = (3*n) + 1;
        }
        else {
            n = n/2;
        }
    }
    return count;
}

int main() {

    int i, j, n, single_cycle_length, max, temp;
    while (scanf("%d%d", &i, &j) == 2) {
        max = 0;
        printf("%d %d ", i, j);
        if(i > j)
        {
            temp = i;
            i = j;
            j =temp;
        }
        for (n = i; n <= j; n++) {
            single_cycle_length = cycle_length(n);
            if (single_cycle_length >= max) {
                max = single_cycle_length;
            }
        }
        printf("%d\n", max);
    
    }
    return 0;
}