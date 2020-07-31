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
	 
 

# lecture 2

    *   ATmega16 is 8 bit micro-controller.
    *   frequency -> from 1Mz to 8Mz 
    *   it have 1kB of SRAM.
    *   512 bytes of EEPROM
    *   usual application use low frequencies (1Mz) like controlling light 
    bulb!
    *   for accuracy and real time projects (safety bags) we use high frequency (8Mz)


    PORTS -

        *   There are total 4 ports.
        *   every port can have 8 pits. 
                        ----------------
        *   there are extra pins also :  (have to learn it myself)
            1. Reset pin -> to reset controller
            2. GRD pin -> ground connection (there are two grounds internally connected to each other)
            3. VCC pin -> power supply
            4. XTAL 1 & XTAL 2 -> to extend frequency upto 16Mz (at max)
                    Oscillator (CRYSTAL) is used to generate frequency.
                    connect (small value) oscillator between these two pins
            5. AREF -> to give reference to ground internally

    GLOWING FIRST BULB      ->  refer to image

    DDR register ->     to declare the type of port
      full-form  ->     Data direction port


    ### standard format of code

            1. #include -> include all header files
            2. Variables/constant declaration and initialization 
            3. Function definition and body
            4. main() ->  functuion start
            5. port initialization
            6. Port declaration
            7. while(1)  ->  to get continuous output!

    SAMPLE CODE  -----   blink LED  

        #include<mega16.h>
        void main() {
            PORTC = 0b00010000;   (port initialization)
            DDTC = 0b00010000;
            while(1) {
                PORTC.4=1;   (1 for supply)
            }
        }

    SOFTWARES

        *   Codevision - to convert code into machine lang. 
        *   Proteus    - to debug the code. before deploying into hardware like hardware simulator. 

