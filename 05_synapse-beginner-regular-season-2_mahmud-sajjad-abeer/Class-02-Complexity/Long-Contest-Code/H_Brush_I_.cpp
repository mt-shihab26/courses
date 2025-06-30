#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

int main(void) 
{
    int test_case, student_num, i, j, temp, sum;
    scanf("%d", &test_case);
    for (i=0; i<test_case; i++) {
        sum = 0;
        scanf("%d", &student_num);
        for (j=0; j<student_num; j++) {
            scanf("%d", &temp);
            if (temp > 0)
                sum += temp;
        }
        printf("Case %d: %d\n", i+1, sum);
    }

    return 0;
}
