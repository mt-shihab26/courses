#include <stdio.h>

int main()
{
	int n;

	for (n = 1; n <= 10; n = n + 1)
	{
		continue;
		printf("%d\n", n);
	}

	return 0;
}
