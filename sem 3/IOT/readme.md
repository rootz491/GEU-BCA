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
```c++
            ##include<mega16.h>
            void main() {
                PORTC = 0b00010000;   (port initialization)
                DDTC = 0b00010000;
                while(1) {
                    PORTC.4=1;   (1 for supply)
                }
            }
```

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
```c++
        ##include<mega16.h>
        void main() {
            PORTC = 0b00000001;     //  initialize port
            DDRC = 0b000000001;     //  declare port
            while(1) {
                PORTC.0=1;
            }
        }
``` 
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
```c++
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
```
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
```c++
        void main () {
            PORTC=0b00000000;
            DDRC=0b00000001;
            while (1) {
                PORTC.0=1;
            }
        }
```
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
```c++
            ##ifndef _hello_h_
            ##define _hello_h_
    
            function prototype
            function definition
    
            ##endif
```
            ---------------------
    *   example: switch1.h  ->  PORTC.0  {Switch 1}
    
```c++
                 ##ifndef _switch1_h_
                 ##define _switch1_h_
                 
                 void myswitch();
                 void myswitch() {
                     PO
                     RTC.0=1;
                     DDRC.0=0;
                 }
                 
                 ##endif
``` 
    
    ASSIGNMENTS :-
        lcd_6d()       ->   create
        lcd_max()      ->   max of two numbers  i.e.  lcd_max(1,5) return 5.
        lcd_decimal()  ->   explain


### lecture 10
    
    *   reading datasheel for LCD
```c++
        int lcd_max(int a, int b) {
            if(a>b)
                lcd_3d(a);
            else
                lcd_3d(b);
        }
        
```
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
```c++
            void uart_init() {
                UCSRA = 0b00000000;     //  Transmission default
                UCSRB = 0b00011000;     //  
                USCRC = 0b10000110;
                UBRRH = 0;
                UBRRL = 51;
            }
```
    ->  function to reciever and transmission in next class.

### lecture 12
    
    ->  function to transmit and recieve data
```c++        
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
```
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

### lecture 16
    
    ->  we don't need to use resistor to work with LED, because in nodeMCU is already using minimal power supply, i.e. 3.3v
    ->  Today, first we'll work with 'switch'
        *   CODE:                           {   diagram in PDF   }
                    void setup() {
                        pinMode(D0, OUTPUT);    //  LED
                        pinMode(D4, INPUT);     //  Switch
                    }
                    void loop() {
                        p = digitalRead(D4);    //  listening to switch
                        if(p==0) {              //  if switch pressed, LED = ON
                            digitalWrite(D0, 1);    
                        }
                        else {                  //  vise-versa
                            digitalWrite(D0, 0);
                        }
                    }
    ->  Next is 'motor'
        *   CODE:                           {   diagram in PDF   }
```c++
void setup(){                              
    digitalWrite(D0, 1);    //  motor rotate clock-wise.
    digitalWrite(D1, 0);
}
void loop() {               //  no need of repeating work
    //  empty
}
```
    ->  Pulse Width Modulation (PWM):           [   IMP. TOPIC  ]
        
        *   technique of sending Data through signal/pulses.
        *   amplitude modulation (AM):   mixing wave of small wave length with wave of long wavelength, so it can travel longer. it changes the amplitude of wave. 
        *   Frequency modulation (FM):  mixing wave of two frequencies, or change in frequency is called frequency modulation.
        *   For PWM and Duty cycle, refer to PDF.
            Most imp. topic, DON'T skip it.
        *   in summary, Effect of PWR is like when Lift door open smoothly or change in color for smart bulbs.
    
    ->  Duty cycle: The time for which device’s output is high.
        FORMULA for duty cycle:-    refer to PDF
    
    *   CODE:

```c++
                void setup() {
                    p = 0;
                    while (p < 1024) {
                        analogWrite(D2, p);
                        p++;
                        delay_ms(100);
                    }
                }
                void loop();
```

### lecture 17
    
    ->  code to increase light intensity by 100% by pressinging the switch.
        *   CODE:
                void setup() {
                    int p=0;
                    pinMode(D4, OUTPUT);
                    pinMode(D6, INPUT);
                }
                void loop() {
                    int f = digitalRead(D4);
                    if(f == 1) {
                        analogWrite(D4, p+=100);
                    }
                }
    
    ->  Now we'll code for arduino, because we can simulate that.
        


### lecture 18
    
    ->  ADC (analog digital conversion):    conversion of analog signal to digital signals.
    ->  as most sensors gives back data in analog form, so we'll use analogRead(analogPinNumber) to read data from sensors.
    ->  temperature sensor (LM35):  used to check temperature :)
    ->  Serial monitor: is used to visualize data.
        *   code:   {   'S' is capital in 'Serial'    }
                void setup() {
                    Serial.begin(9600);     //  baud rate as parameter.
                }
                void loop() {
                    Serial.print("Hello world!");
                    delay(1000);
                }
    ->  To print data in vertical manner: 
        *   Serial.println('hello');
        *   Serial.print('hello\n');
    
    ->  one more code example:
            int p=0;
            void setup() {          
              Serial.begin(9600);
            }
            void loop() {
              Serial.println(p++);
              //delay(1000);
            }
    
    
    ->  sensing data from TEMPERATURE sensor and print it into serial monitor:
            void setup() {
              pinMode(A1, INPUT);     //  declaring analog pin for sensor. 
              Serial.begin(9600);     //  initialize serial monitor.
            }
            void loop() {
              int z = analogRead(A1); //  taking row data from sensor
              float v = (5.0/256)*z;  //  convert data into voltage
              float t = v*10;         //  convert voltage into temperature
              Serial.println(t);      //  print Temperature.
              delay(1000);
            }
#### web development
    ->  HTML + Css + JavaScript
##### HTML: 
    ->  here we'll study about HTML.    :P
        *   create index.html

### lecture 19
    
    ->  function addBy2(input) { return input + 2; }
        const addBy2 = input => input+2; 
        both are same 
      


### [nodeMCU] lecture 20
    
    *   INTRODUCTION:   
            ->  digital or GPIO pins
            ->  some D1, D2 etc are also labeled as 
            ->  nodeMCU have only one analog input.
            ->  ADC0 located on left most side.
    *   first time nodeMCU Arduino setup:
            1   File -> preferences -> additional board manager -> url
            2   Tools -> boards -> board manager -> ESP8266 -> install
            3   Tools -> boards -> NODEMCU 1.0 ->      
            4   tools -> post: 'COM3'
            NOW, nodeMCU is Setup now!!!
```javascript
    URL:    http://arduino.esp8266.com/stable/package_esp8266com_index.json
```
#### IR sensor {study}
    >   used to transmit signal throgh rays.
    >   and there will be a reciever that recieves transmitted light.
    >   range of reflection is 15cm atmost.
    >   if we need more range, use ultraSonic sensor (HC-SR04)
    >   if some obsticle is in range of IR sensor. then it will give output.
    >   so when we get signals, it is very few signal. so we need amplifier. And luckily it is alreay present in IR sensor (LM-939).

#### projects/practicals
    
##### 1 - 2 {LED on & BLINK}
    
    >   setup() -> first pin DO to output mode :           pinMode(D0, OUTPUT);
    >   loop()  -> give supply:          digitalWrite(D0, 1);
    >   then upload file to MCU.
    >   can also give some delay for blinking.
    >   delay(1000);
```c++
void setup() {
  pinMode(D0, OUTPUT);  //  set pin to output
}
void loop() {
  digitalWrite(D0, 1);  //  give supply
  delay(1000);          //  delay for blinking
  digitalWrite(D0, 0);
  delay(1000);
}
```
##### 3 {PWM effect}
```c++
int k=0;
void setup() {
  pinMode(D2, OUTPUT);
}
void loop() {
  while(k<1024) {
    analogWrite(D2, k);
    k+=10;
    delay(100);
    if(k == 1023) {
      k=0;  
    }
  }
}
```

### lecture 21
    
    *   IR sensor
        ->  so when light reflects to reciever, it's not sufficient to trigger any event. so we amplify the signal recieved by reciever. (via op-amp)
        ->  refer to PDF. 
##### 4 {IR sensor}   *PROJECT_CONTINUED*
    
    >   IR sensor have 3 pins: 
            pin 1:  output
            pin 2:  grd
            pin 3:  vcc/5v
```c++
int z=0;
void setup() {
     pinMode(D4, INPUT);
     serial.begin(98600);
}
void loop() {
    k = digitalRead(D4);
    k = !k;
    if(k==1) {
        z+=1;
        serial.println(Z);
        delay(400);
    }
}
```

### lecture 22  (next lecture)
#### nodeMCU internet connectivity part
    
    >   connectivity:
        1.  local server
        2.  Third party service - Thingspeak, Blynk, adafruit
        3.  Global - Firebase, AWS, IBM watson
    >   LOCAL SERVER:
        ->  communication b/w two nearby devices, like shareIt.
        ->  devices must be on same network.
        *   PHONE HOTSPOTS [ or router]
            ->  name of network: SSID (service set identifier)
            ->  pwd of network:   1234
        *   RECIEVING PHONE
            1.  search of Hotspot
            2.  match the SSID (name of hotspots)
            3.  enter password
            4.  then phone says, "obtaining IP address".
            5.  meaning that if device will connect to any network, the first thing it will look for will be network's IP addess.
    >   now to summarize the process and relate it with nodeMCU, here it is
    >   first upload html file to nodeMCU,
    >   use nodeMCU as a little server (like apache tomcat or NGNIX)
    >   then make a local network using router or phone's hotspot
    >   then copy SSID of network and password and add to the code that we will be going to write on nodeMCU, so that it can connect to network.
    >   now once nodeMCU is connected, take it i.p. address and search on chrome of any connected device, even in the Host's browser.
    >   you'll be able to see that hosted HTML page of nodeMCU.

### lecture 23 [& lecture 24]
#### nodeMCU code for connecting to internet:
```c++
#include<ESP8266WiFi.h>
#define ssid "racka"
#define pass "123456"
#define port 80
WiFiServer server(port);
void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, pass);
    Serial.println('connecting to network ...');
    while(WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print('.');
    }
    Serial.println("connected!");
    server.begin();
    Serial.print("\nuse this URL:");
    Serial.print(WiFi.localIP());
}
void loop() {
    WiFiClient client = server.available();
    if(!client)
        return;
    client.print("Hello from nodeMCU");
}
```
##### Breaking code down
    >   first of all, include basic standard header file for nodeMCU
    >   define constants like SSID (name of network) & password.
    >   WiFiServer is pre-defined class and we are creating an instance 'server' with port '80', and that's how we are initializing a server.
    >   WiFi.begin(ssid, pass)  will connect to network.
    >   WiFi.status();  shows the current status of WiFi.
            if(connected)   ->  return WL_CONNECTED
            if(!connected)  ->  return NO_SHIELD    (due to wrong ssid or pass)
            if(disconnected) -> return WL_DISCONNECTED
    >   in while loop, we will wait untill MCU are connected to network.
    >   server.begin();  to begin the server.
    >   WiFi.localIP()  will return i.p. address of nodeMCU


### lecture 24
    
    >   let's connect nodeMCU to network and use it as server:
    >   first, change SSID and PASSWORD macro to corresponding network name and password. 
    >   upload code to nodeMCU.
    >   then focus on client.print() function.
    >   this fuction will print text to main site page.
    >   here if we type some html code, it will render and display that code to main page of site hosted in nodeMCU I.P. address.
    >   write html code, now after writing html.
    >   convert text to cpp string format using some converter.
    >   then upload whole arduino code to nodeMCU.

### lecture 25
    
    >   to manipulate user input, we have to do it through URL:
        steps:    fetch URL   ->   perform filtering
    .
        1.  to fetch URL:
```c++
            string request = client.readStringUntil('\r');                  
```
            \r :  carriage return
            \n :  new line
        2.  to perform URL filtering:
            ->  function 'indexOf()':   return index of perticular character or string.
                int index = string.indexOf('H');
```c++
            if(request.indexOf('/ON') != -1) {   //  check for 'ON' in URL
                digitalWrite(D0, 1);
            }
            else if(request.indexOf('/OFF') != -1) {  // check for 'OFF' in URL
                digitalWrite(D0, 0);
            }
```

### lecture 26
    
    >   thingSpeak
    >   blynk
    >   Blynk + IFTTT  ->   voice control home automation system
    
    >   let's do it one by one.
#### thingSpeak:
    >   thingSpeak is organised by MatLab.
    
#### blynk:
    >   go to playstore -> download 'Blynk'
    >   go to 'blynk.io'
    >   blynk library (javascript)  ->  https://github.com/vshymanskyy/blynk-library-js.git
    >   missed the le by MatLab.cture <blynk setup with arduino IDE part>
    >   can't do anything coz i dont have nodeMCU
    

### lecture 27
#### IFTTT:
	>	if GOOGLE_ASSISTANT then WEB_HOOK
    >   when working with IFTTT, make sure that email ID on google assistant and IFTTT must be same.
	>	IFTTT is talking to BLYNK using 'webhooks' feature present in IFTT used to make a web request.
   	>	then setup BLYNK in NODEmcu
    
    >	now in  IFTTT -> in webhook
    	->  URL:	https://<blynk_IP_Address>/<blynk_project_token>/update/<pin_number>
    	->	method:	PUT
    	->	body:	["1"]
    	->	save and finish
    >	now, open google assistant to say 'turn on light'.

```text
	blynk ip address:	185.203.72.17
	if pin is D4 then it's also GPIO 2 so we write D2 in URL.
```

### lecture 28 (last)
#### ATmega8 practical
	>	first connect atmega8 to USBdriver using some pins.	(mosi, miso, sck, grd, vcc, vss)
	>	connect programmer to computer (light will turn on)
	>	download 'extreme burner' software
	>	refer to /Atmega-setup folder.
	>	read that txt file
	>	and also follow those pdf according to TXT file.







































# KEY-NOTES:
## my thoughts on How UART work !?!! 
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
    
    --> Edge computing: when we do computatuion on hardware instead of cloud. then it's called edge computing.



# FIREBASE
    
    ->  firebase is to work with real-time database.
    ->  commands:
```bash
        >   sudo npm install -g firebase-tools
        >   firebase login
        >   firebase init
        >   firebase emulators:start
        >   firebase deploy
        >   firebase deploy --only hosting,database
```

# Raspberry Pi resources
    
    >   https://pypi.org/
    >   https://pypi.org/project/raspberrypi-py/        <raspberry pi>
    >   https://pypi.org/project/firebase/              <firebase>
 



# Arduino
## analog write
    
    >   analogRead(pin, range);     //  function to analog write.
    
    >   where PIN that works with analog data;
    >   and RANGE is b/w 0 and 255.
    >   0 -> 0.0 v
    >   255 -> max_volt (3.3 v OR 5.0 v)

## ohm's law
    
    >   voltage (v) = current (I) * resistance (r)

    >   think of it like water flowing through pipe.
    >   pressure will be VOLTAGE, so more the voltage is higher the flow of electrons (therefore, current)
    >   so thickness is like RESISTANCE so smaller the resistance is the greater voltage and lower flow of current

