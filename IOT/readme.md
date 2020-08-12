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

# lecture 3

    today we are going to have some hands-on practice.
    
    1. software [PROTEUS] for simulating the hardware.
        
    in above menu, go to LIBRARY -> pick parts -> dialog board appear -> search for component by corresponding keyword:

        *   use the below keywords to find the correct hardware simulation.
                keyword :   atmega16  (microcontroller)
                            red/blue led
                            res (resistor)
        *   while using resistor, change its default value from 10k to 220 ohm.
        *   use 'ground' from left menu -> Terminals (=).   
        *   now connect wirings.
                    
                    first circuit is completed!

    2.  software [CODEVISION] for coding.

    steps to setup for the project:
        *   create seperate folder for new projects.
        *   open codevision
        *   FILE -> NEW -> PROJECT -> confirm for project -> select chip type
        *   new screen appear ->    select CHIP (ATmega16) 
                              ->    CLOCK (choose frequency)
                              ->    click on PROGRAM (next to FILE)
                              ->    select folder. (and give project_name) and save.
                              ->    again, type same project name and save
                              ->    one more time :)
                              ->    now sample code file will appear.
                              ->    close all files accept navigator and C file.
                              ->    clean the C file. (code from scratch)

                         
        ---------------------- START CODING ----------------------    
'''
        #include<mega16.h>
        void main() {
            PORTC = 0b00000001;     //  initialize port
            DDRC = 0b000000001;     //  declare port
            while(1) {
                PORTC.0=1;
            }
        }
'''

    ->  from above menu, click on 'build all project files'.
    ->  Dialog box appear (will show some info and error )
    ->  if error exist, 'ERROR DETAILS' will appear on side-screen.
    ->  in same dialog box, look at bottom, will show the size of file in byte and %age.

    ->  projectname > Debug > exe : Here is the HEX file for the code.

    ->  double click on IC.
    ->  select hex file. on PROGRAM FILE
    ->  configure Frequency.

    FINALLY, Run the simulation by clicking on left-bottom button (triangle). And bulb will glow!


    GLOW LED at PC0, PA0, PB4 ports. < CODE >

'''
>             #include<mega16.h>
>             void main() {
>                   PORTA=0b00000000;
>                   DDRA=0b00000001;
>                   PORTB=0b00000000;
>                   DDRB=0b00010000;
>                   PORTC=0b00000000;
>                   DDRC=0b00000001;
>                   while(1) {
>                       PORTA.0=1;
>                       PORTB.4=1;
>                       PORTC.0=1;
>                   }
>             }
'''


ASSIGNMENT -> PD0 : LED, PD3 : LED, PC1 : LED, PC2 : LED, PC3 : LED, PD1 : LED, PA7 : LED   { GLOW THE LED } // Assignment done!

# lecture 4

    delay.h -> 

        delay_ms() -> counts in mili seconds.
        delay_us() -> counts in micro seconds.

    SWITCH concept - 
        
        states:
            A  = 1
            ~A = 0

    ->  switch is input type device.
    ->  we will use active low switch.
    ->  current follow least resistive path.

    active high switch -> current flows when switch is on.
    active low switch  -> current flows when switch is off.

    ->  use keyword 'BUTTON' to find switch
    ->  initialize port as high because it is 'ACTIVE HIGH SWITCH' 
    ->  on press, switch will changed to '0' so current will flow and led will glow fine.
    

    De-bouncing: fluctuation of 1 and 0 even after pressing the switch. 
        SOLn. : Use while loop instead of 'if condition'

# lecture 5

    ->  Arduino use ATmega328P

    MOTORS

        ->  we will use DC motor.
        ->  It is output type device.
        ->  we have to identify ourselves that in which direction motor moves clockwise and anti-clockwise.
        ->  keyword: 'DC MOTOR' to find motor,  choose type 'ACTIVE'.

        *   simple code to RUN the motor clockwise: {one terminal of motor is connected to PORTC.0 and other terminal to GROUND}

        '''
        void main () {
            PORTC=0b00000000;
            DDRC=0b00000001;
            while (1) {
                PORTC.0=1;
            }
        }
        '''

        ->  assignment of some projects. // DONE

# lecture 6

    ->  old assignment explaination
    ->  Elevator question + ASSIGNMENT 3 -> given
    ->  INTRODUCTION to LED.

        *   pin1 : VSS -> ground
        *   pin2 : VCC -> power (+5v)
        *   pin3 : VEE -> to control voltage supply (Potentiometer)
             {It will help in setting CONTRAST by attaching to PIN3}
        *   pin4 : RS  -> register select 
                          to enable it -> make it 0 {activate instruction reg.}
                          print char   -> make it 1 {activate char register} 
        *   pin5 : R/W -> read  : 0  to the LCD
                          write : 1
        *   pin6 : E   -> to enable LCD {default shot with power (pin2)}
        *   pin7-14 :   dataLines {D0 to D7} 
                        two modes :  8 bit or 4 bit
                        -> just 8 bit is faster, works same as 4 bits.
                        -> we will generally use 4 bit.
                        -> if use 8 bit, then 8 pins will be used. {tey not to use it}
        *   pin15 : +ive {VCC}
        *   pin16 : -ive {GRD}

    ->  SENDING DATA to LED : 
        *   we use 4 bit mode!
        *   send LSB first.
        *   send bit from right to left.

# lecture 7 : doubt session 
    
    *   Switch
            ->  Active high :   { PIN, GROUND(+res), SWITCH, POWER }
                    default low (0)
                    on press, high (1)
            ->  Active low :    { PIN, POWER(+res), SWITCH, GROUND }
                    default high (1)
                    on press, low (0)
            ->  Voltage divider rule:
                    v1 = (V * R1)/(R1 + R2)

            UART: universal asynchoronus recieve andd transmission protocol
                ->  Protocol to work wirelessly in 99% of technologies!



