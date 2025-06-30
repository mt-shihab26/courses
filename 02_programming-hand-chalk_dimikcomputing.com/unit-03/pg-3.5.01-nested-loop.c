#include <stdio.h>

int main()
{
	int n, m;

	// (n = n + 1) == (n++) == (n += 1)
	// (n = n + 2) == (n += 2)

	for (n = 0; n < 3; n += 1)
	{
		for (m = 0; m < 3; m += 1)
		{
			printf("%d, %d\n", n, m);
		}
	}	

	return 0;
}
