#include <stdio.h>

//Num of Scores
const int TOTAL = 3;

//Prototype
float average();

//Return the average of int n inputs
int main(void)
{
	// Build the array 
	int scores[TOTAL];
	for (int i = 0; i < TOTAL; i++)
	{
		// Ask the integers
		int num;
		printf("Score %i is ", i);
		scanf("%i", &num);
		scores[i] = num;
	}

	printf("Average: %f\n", average(scores, TOTAL) );
}

// Average the array 
float average(int array[], int length)
{
	int sum = 0;
	for (int i = 0; i < length; i++)
	{
		sum = sum + array[i];
	}
	return sum / (float) length;
}
