#include <mega16.h>
#include <delay.h>

int counter = 0;

void main() {
    PORTC=0b00000000;
    DDRC=0b00000101;
    PORTD=0b00000111;
    DDRD=0b00000000;
      
    while (1) {
        if (PIND.0==0) {
            delay_ms(300);
            counter++;
        }
        
        if (PIND.1==0 && counter > 0) {    
            PORTC.0=1;
            while (counter > 0) {          
                PORTC.2=1;
               
                delay_ms(225);
                
                if (PIND.2==0) {
                    delay_ms(100);
                    break;
                }
                
                delay_ms(225);
                
                if (PIND.2==0) {
                    delay_ms(100);
                   
                    break;
                }
                
                PORTC.2=0;
               
                delay_ms(225);
                              
                if (PIND.2==0) {
                    delay_ms(100);
                    break;
                }
                
                delay_ms(225);
                              
                if (PIND.2==0) {
                    delay_ms(100);
                    break;
                }
               
                counter-=1;
            }
            PORTD.1=1;  
           
            PORTC=0x00;
            counter = 0;
        }
        
        if (PIND.2==0) {
            delay_ms(100);
            PORTC=0x00;
            counter = 0;
        }
    }  
}