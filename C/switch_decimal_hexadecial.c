#include <stdio.h>
#define MAX 10
/* Switch between Hex and Decimal */

int main()
{

printf("Author: Capeya\n\n\
Please, type down a number.\n\
If Decimal, then add nothing.\n\
If Hex, then add H at the end (1A2BH): ");

char num[MAX];
scanf("%s", &num);

int i, j, k;
char rev[MAX];
for(i = 0; num[i] != '\0'; i++);
  {
  k = i-1;
  }
  for(j = 0; j <= i-1; j++)
  {
  rev[j] = num[k];
  k--;
  }

if (rev[0] == 'H')
  {
/*
for(i=0;i<=n-2;i++) {
p[i]=p[i+1];
}
p[n-1]=0;
for(i=0;i<= n-2;i++)
printf("%d\n",p[i]);
*/
  char hex[MAX];
  printf("%s is Hex", hex);
  }
  else
  {
  char dec[MAX];
  printf("%s is Dec", dec);
  }
}
