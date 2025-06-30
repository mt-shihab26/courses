#include <stdio.h>

int main()
{
	int x, y, z;
	printf("Enter the Value of x: ");
    scanf("%d", &x);
    z = x + y;
    printf("Enter the Value of y: ");
    scanf("%d", &y);
    
    z = x + y;
    printf("The value of %d + %d = %d\n", x, y, z);
    
    return 0;	
}