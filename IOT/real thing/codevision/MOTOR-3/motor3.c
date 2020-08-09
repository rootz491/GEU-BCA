#include <mega16.h>
#include <delay.h>

void main() {
    PORTC=0b00000000;
    DDRC.0=1;
    DDRC.2=1;
    DDRC.1=1;
    PORTD=0b00000111;
    DDRD=0b00000000;
    
    while (1) {
       
        while (PIND.0==0) {
            PORTC.0=1;
            PORTC.1=0;
            
            PORTC.2=0;
            delay_ms(225);
            PORTC.2=1;    
            delay_ms(225);
                
            if (PIND.0==1 || PIND.2==0)
                    break;
            }
        }
        
        if (PIND.1==0) {
            PORTC.0=0;
            PORTC.1=1;
            PORTC.2=1;
        } 
                                 
        if (PIND.2==0) {
            PORTC.0=0;
            PORTC.1=0;
            PORTC.2=0;
        }
    }
}