#include <stdio.h>

// Print Some Fibonaccies

int a;
int b;
int c;

#define MAX 100

int main(void)
{
a=0; b=1; c=a+b;
while ( a < MAX ) 
{
	a=b;
	b=c;
	c=a+b;
	printf("%3d\n", a);

}
return 0;
}
