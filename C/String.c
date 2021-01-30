#include <stdio.h>

int main(void)
{
	char *s = "Hello, world";

	printf("%s\n", s);	// Return the string 
	printf("%p\n", *(s+0));	// Return the memory address of the first char
	printf("%i\n", *(s+0));	// Return the ASCII value of the first char

	return 0;
}
