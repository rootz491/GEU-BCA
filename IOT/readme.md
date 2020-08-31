# IOT NOTES:

## Embedde programming and Hardware

### lecture 1
    
	->  embedded systems : Scale down computer system which is designed to perform a specific task.
    	calculators, cell phones etc.
	NFC -> Near field application
    simply, HARDWARE + SOFTWARE
    FIRMWARE is code wrote on the top of HARDWARE to operate it.
    MCU : Micro controller unit
        perform repetable task
    what is 8/16/32/64 bit system?
    ->  data processed per unit time.
    microcontroller -> peropherals are on single unit. (respberry pi)
    microprocessor  -> CPU is stand-alone and all other peripherals are seperate units. (PC)
    microcontroller can be mini computer.
    Flash memory : Reusable ROM  -> ssd or harddisk
    our microconntroller -> ATmega8 -> memory (8kb) for code.
    printf() returns : strlen
    IF we code some hardware which checks for pins, first thing it will check is 'ARGUMENT COUNT'.
    C questions :
    ->  printf("%d",printf("%d",printf("hello")));
    ->  int a, b, c; a = scanf("%d%d",&b);
    A=11001100
    B=11110000
    A&B=11000000
    A|B=11111100
    " what about NOT ? "
    Let A = 12 ( in decimal )
    everyone : change 1 to 0
    sir : !A = - (n+1)  = -13 ( in decimal )
    now, XOR ^
    then right shift >>
        A=11001100
        A>>2=00110011               (right shift A's data by two places, data will get lost for last two bits)
    now left shift
        A<<2=00110000
    INTRODUCTION TO ATmega16 (we'll work on 8 also)
        AT      --->    ATMEL       (company name)
        mega    --->    category between Tiny and super complex (X-mega) microcontroller.   --->    used for testing purposes
        16      --->    means 16kB is size given for code  
     Types of microcontroller :
      
        1. Through hole type
        2. SMD (surface mounted) type
     
 	

### lecture 2
    
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
    ###### standard format of code
            1. ##include -> include all header files
            2. Variables/constant declaration and initialization 
            3. Function definition and body
            4. main() ->  functuion start
            5. port initialization
            6. Port declaration
            7. while(1)  ->  to get continuous output!
    
    SAMPLE CODE  -----   blink LED  
'''        ##include<mega16.h>
            void main() {
                PORTC = 0b00010000;   (port initialization)
                DDTC = 0b00010000;
                while(1) {
                    PORTC.4=1;   (1 for supply)
                }
            }
'''

    SOFTWARES
        *   Codevision - to convert code into machine lang. 
        *   Proteus    - to debug the code. before deploying into hardware like hardware simulator. 


### lecture 3
    
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
        ##include<mega16.h>
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
                    ##include<mega16.h>
                    void main() {
                    PORTA=0b00000000;
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


### lecture 4
    
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


### lecture 5
    
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


### lecture 6
    
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


### lecture 7 : doubt session 
    
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


### lecture 8
    
    *   types of modes : 4 pin or 8 pin.
    *   by using 4 pin mode, we'll save other 4 pins that was before used by other mode.
    *   learning to connect pins of LCD to that of ATmega16.    ->  go to lecture 8 PFD.
    *   copy header files and goto : c > cvavreval > INC 
    *   ti select LCD : keyword - alpha  { choose 16x2 LCD }


### lecture 9
    
    *   Voting machine problem  -> go to PDFs
            -----------------
    *   LCD header files: details.
        --> How to make header files.
        --> STANDARD SYNTAX
        --> hello.h     {HEADER FILE}
    
    '''
            ##ifndef _hello_h_
            ##define _hello_h_
    
            function prototype
            function definition
    
            ##endif
    '''
            ---------------------
    *   example: switch1.h  ->  PORTC.0  {Switch 1}
    
    '''
                ##ifndef _switch1_h_
                ##define _switch1_h_
                
                void myswitch();
                void myswitch() {
                    PO
                    RTC.0=1;
                    DDRC.0=0;
                }
                
                ##endif
    ''' 
    
    ASSIGNMENTS :-
        lcd_6d()       ->   create
        lcd_max()      ->   max of two numbers  i.e.  lcd_max(1,5) return 5.
        lcd_decimal()  ->   explain


### lecture 10
    
    *   reading datasheel for LCD
    
    int lcd_max(int a, int b) {
        if(a>b)
            lcd_3d(a);
        else
            lcd_3d(b);
    }
    
    must read data sheets thoroughly!
    
#### USART: new topic
    ->  universal SYN. ASYNC. recieve and trans
    
        synchronous : working with respect to some element {TIME}
        asynchronous : when event is indipendent, not affecting other events.
    
        but we will only study, USRT {universal async. recieve and transmit}
        
        ATmega16L -> are nothing but little variatio like requirement for power supply.
        
        PRE-REQUISITE KNOWLEDGE: for this lecture!
        ->  simplex         one way comm.
        ->  half-duplex     two way but one at a time, like walkie-talkie
        ->  full-duplex     proper two way, like phone call, video conference.
        ->  even or odd parity
        ->  study below keyowrds :) i'm not kidding ~
        
    features of UART:
    
    ->  UART works in serial communication.
    ->  follows data communication mode: Full-Duplex (2 way comm.)
    ->  SPI protocol - serial perepheral interface.
    ->  Baud rate - data transmission rate. (bits per second)
            we will use 9600 baud rate.
    ->  support serial frame with 5,6,7,8,9 data bit and 1, 2 stop bit.
            we will use 8 data bit
            stop bit is when error occur, where to stop (which bit)!
            we will use 1 data bit.
    ->  even or odd parity generationa and checked by hardware.
    ->  Data overflow detection
             we can control flow of data.
    ->  framing error detection.
    ->  noice filtering includes false start bit detection and digital low pass filter.
    ->  three seperate interup on TX complete, TX data register Emptym and RX complete.
    ->  multi processor communication mode.
    ->  doulbe speed Async. communication mode.         <IMPORTANT>
    
    next: SART Control and Status Register  { refer to pdf }
    




### lecture 11
    
    *   FIRST OF ALL, GO AND STUDY PDF {lecture 10, 11}reciever
    
    ->  Writing this bit to one will reduce the divisor of the baud rate divider from 16 to 8 effectively doubling the transfer rate for asynchronous communication. 
        
    ->  details about resistors
    
    ->  calculating baud rate!   { Refer to pdf }
    
    ->  function to initialize UART
    
        '''
            void uart_init() {
                UCSRA = 0b00000000;     //  Transmission default
                UCSRB = 0b00011000;     //  
                USCRC = 0b10000110;
                UBRRH = 0;
                UBRRL = 51;
            }
        '''
    
    ->  function to reciever and transmission in next class.

### lecture 12
    
    ->  function to transmit and recieve data
        '''
            void uart_tx(char d) {
                UDR = d;
                while ((UCSRA & 0b01000000) == 0);
                delay_ms(100);
            }
            char uart_rx(){
                while ( (UCSRA & 0b10000000) == 0);
                return UDR;
                delay_ms(100);
            }
        '''
    
    ->  if vitual terminal not found:   debug > virtual terminal {last}
    
    Assignment:
        ->  screen1: "Enter your password:"
                        <input password>
            screen2: if passwd is correct, then "welcome" else "wrong passwd" {2 sec. delay}
    
        ->  uart_s("hello"); // create function
              

### lecture 13
    
    ->  assignment 1: Home automation
    ->  assignment 2: A/C wireless
    
    ->  bluetooth module:  HC05
    ->  serial bluetooth terminal <application> is used to control using modules
    ->  BLYNK is another good app.
    ->  study working with RELAY. 


## IoT part Started

### lecture 14
    
    ->  We'll work on application layer.
    ->  INTERNET    :   Network of devices connected together to exchange data.
    ->  IoT:    Enabling computers so they can see, hear and smell the world.
    ->  Data = Information + Noise
    ->  Information = quick decisions
    ->  Iot can be used to gather data or to automate some work.
    ->  life cycle of IoT:
            *   visit PDF ;)
    ->  Revolution of IoT
            *   1st revolution:     Due to poolie and assembly line.
            *   2nd and 3rd rev.:   Introduced IC and programming tasks.
            *   4th revolution:     Communication through internet among devices.
    ->  NodeMCU ->  10 bits ACD ->  same as Arduino.
        Arduino ->  8 Bit   ACD ->  Arduino is exprensive.
    
    ->  NodeMCU:    ainuino.cc  >   download it's software 
                                    download Arduino IDE
    ->  setup IDE for NodeMCU:  file > preferences > popup window will apear > additional bla-bla > http://arduino.esp8266.com/stable/package_esp8266com_index.json > ok 
    ->  go to: Tools > board > select 'board manager' > pop up appear > search 'ESP 8266'   >   install.
    ->  tools > board > arduino uno > nodeMCU v1.0 > ESP12e module
    
    ->  gpio pin:   they are digital pins, we cannot use arduino directly. we use third party tools.
    
    ->  Master out slave in
        clock select
        Master in slave out
        serial clock    {}
    
    ->  SPI:    Serial peripheral interface.
    ->  Flash
    ->  SOC Anteena:    System on chip anteena
    ->  

### lecture 15
    
    ->  setting up IDE
    ->  writing code on arduino IDE:
        *   header files  ==>   functions   ==>     constant/variables.
        *   void setup() {
                //  code that we want to execute once.
            }
        *   void loop() {
                //  code that we want infinite times.
            }
    ->  writing first code: <Glow an LED>
            refer to code file.
    ->  watch PDF for circuit diagram.




























































# KEY-NOTES:
    
    --> Rx is Reception meaning, UART is listrening for data, and after listening it. It will return it to micro-controler.
    
    --> Now in Micro-controller, Data is there, But if we want to use/print it somewhere, then we have to transmit it, that it, Tx.
    
    --> so when we see the basic code for reception and transmission of data :
        uart_init();
        while(1) {              //  repeatedly listening and transmitting data.
            P = uart_rx();      //  listening for input and storing it into P variable of type 'char'
            delay_ms(100);
            uart_tx(P);         //  transmitting data back to V.terminal to print what we've listened before 
        }
    
    --> Let's discuss the listening and transmitting functionality in detail.
    
    *   Transmission function:
    
    void uart_tx(char d) {
        UDR = d;
        while ((UCSRA & 0b01000000) == 0);    
        delay_ms(100);
    }
    
    --> UCSRA is default 0 (0b00000000) and we are using 0b01000000 as matching condition.
    
    --> if we see only (UCSRA & 0b01000000) part of condition, it is saying that condition will only be true if value in UCSRA and that binary will match.
    
    --> Now, why only 0b01000000?   Well, we can see that in register UCSRA, bit 6 represents 'UART Transmit complete'. if we look at the data sheet for description, it will show us that, bit 6 will be set to 1, if and only if data transmit have been completed! 
    
    -->  But we know that we haven't transmitted the data yet. Meaning, this  (UCSRA & 0b01000000) contion will not be true untill data is successfully transmitted.
    
    --> Ok, what now?   So simply we check for condition UNTILL it's True, so that we will know when will the data successfully transmitted!
    
    --> Wait what!!!    yes, we can apply that by using while loop, that is, while((UCSRA & 0b01000000) == 0);   Here we are simply checking that 'data is not Transmitted yet' as for True condition. But it will become False when data transmission get completed.   Thus (UCSRA & 0b01000000) wil be equals to 1, but also 1 == 0 is FALSE. 
    
    --> Therefore, we will get out of loop as soon as data is transmitted!
    
    --> Now if data is transmitted, Meaning that we can use data by the device it is transmitted to, like a micro-controller.
    
    *   Reception function:
    
    char uart_rx(){
        while((UCSRA & 0b10000000) == 0);
        return UDR;
    }
    
    --> The only thing suspicious here is that, 0b10000000. That is the bit 7 of UCSRA register. Which tells that it'll only be set to 1 if there will be some data in the register. Else bit 7 will be 0.
    
    --> Using this information, we've used previous trick to, now, extract data from UART. 
    
    --> The condition will be, while((UCSRA & 0b10000000) == 0);   means if register have no data, then while loop will go on. and if register have some data in it, Then we can retutn that data to whereever we want.
    
    --> Pretty simple, Huh :) 
        yes it is!
    
    --> Last thing for now, Go and do read Data sheet. Everything is there!
