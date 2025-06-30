#include <stdio.h>

int main()
{
    int marks;

    scanf("%d", &marks);
    if (marks >= 80){
        printf("A+\n");
    }
    else if (marks >= 70){
        printf("A\n");
    }
    else if (marks >= 60){
        printf("B\n");
    }
    else if (marks >= 50){
        printf("C\n");
    }
    else if (marks >= 40){
        printf("D\n");
    }
    else{
        printf("F\n");
    }

    return 0;
}