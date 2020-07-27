 IOT NOTES

 # lecture 1

	->  embedded systems : Scale down computer system which is designed to perform a specific task.

 		calculators, cell phones etc.
 		NFC -> Near field application


 	simply, HARDWARE + SOFTWARE

 	FIRMWARE is code wrote on the top of HARDWARE to operate it.

 	MCU : Micro controller unit
 		perform repetable task
 	
 	what is 8/16/32/64 bit system?
 	->	data processed per unit time.

 	microcontroller -> peropherals are on single unit. (respberry pi)
 	microprocessor  -> CPU is stand-alone and all other peripherals are seperate units. (PC)

 	microcontroller can be mini computer.

 	Flash memory : Reusable ROM  -> ssd or harddisk

 	our microconntroller -> ATmega8 -> memory (8kb) for code.

 	printf() returns : strlen

 	IF we code some hardware which checks for pins, first thing it will check is 'ARGUMENT COUNT'.

 	C questions :

 	->	printf("%d",printf("%d",printf("hello")));
 	->	int a, b, c; a = scanf("%d%d",&b);

 	A=11001100
 	B=11110000

 	A&B=11000000
 	A|B=11111100

 	" what about NOT ? "

 	Let A = 12 ( in decimal )

 	everyone : change 1 to 0
 	sir : !A = - (n+1)	= -13 ( in decimal )

 	now, XOR ^

 	then right shift >>

 		A=11001100
 		A>>2=00110011				(right shift A's data by two places, data will get lost for last two bits)

 	now left shift

 		A<<2=00110000




 	INTRODUCTION TO ATmega 16 (we'll work on 8 also)

	 	AT 		--->	ATMEL		(company name)
	 	mega 	--->	category between Tiny and super complex (X-mega) microcontroller.	--->	used for testing purposes
	 	16		--->	means 16kB is size given for code  

 
	 Types of microcontroller :
	  
	 	1. Through hole	type
	 	2. SMD (surface mounted) type
	 
 
