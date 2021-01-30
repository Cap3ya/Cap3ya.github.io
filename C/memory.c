#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	char *s = malloc(4);	//Allocate Memory (4bytes)

	s[0] = 'H';
	s[1] = 'I';
	s[2] = '!';
	s[3] = '\0';

	printf("%s\n", s);	

	free(s);		//Free up Memory

	return 0;
}

