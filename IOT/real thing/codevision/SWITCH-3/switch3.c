#include <mega16.h>
#include <delay.h>

void main() {
    PORTC=0b01010100;
    DDRC=0b00000001;
    
    while(1) {
        if (PINC.2==0)
            PORTC.0=1;
                       
        if (PINC.4==0){ 
            while (1) {
                PORTC.0=1;
                delay_ms(225);
                PORTC.0=0;
                delay_ms(225);
                                
                if (PINC.2==0) {
                    PORTC.0=1;
                    break;
                }
                if (PINC.6==0) {
                    PORTC.0=0;
                    break;
                }      
            }
        }
        
        
        if (PINC.6==0) 
            PORTC.0=0;
    }                
}