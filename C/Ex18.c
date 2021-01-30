#include <stdio.h>

/* count blanks, tabs, and newlines */

int main()
{
	int c, n, t, b;

	n = 0;
	t = 0; 
	b = 0;
	while ((c = getchar()) != EOF)
	{
		if (c == '\n')
			n++;
		if (c == '\t')
			t++;
		if (c == ' ')
			b++;
	}
	
	printf("New lines: %d, Tabs: %d, Blanks: %d \n", n, t, b);
	
	return 0;

}

