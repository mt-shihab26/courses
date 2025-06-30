#include <stdio.h>

int main()
{
	int i, sum;

	for (i = 5, sum = 0; i <= 1000; i += 5)
	{
		printf("%d\n", i);
		sum += i;	
	}
	printf("Sum is : %d\n", sum);

	return 0;
 }
