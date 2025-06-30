#include <stdio.h>

int main()
{
	int n, m;

	for (n = 0; n < 3; n += 1)
	{
		for (m = 0; m < 3; m += 1)
		{
			printf("%d, %d\n", n, m);
			break;
		}
	}

	return 0;
}
