#include <mega16.h>
#include <delay.h>

int counter = 0;

void main() {
    PORTC=0b00000000;
    DDRC=0b00000111;
    
    PORTD=0b00001111;
    DDRD=0b00000000;
    
    while (1) {
        if (PIND.0==0) {
            delay_ms(250);
            counter++;    
        }
        if (PIND.1==0) {
            delay_ms(250);
            if (counter > 0)
                counter--;
        }                 
        if (PIND.2==0 && counter > 0) {
            delay_ms(250);
            PORTC.0=1;
            
            while (counter) {
                PORTC.2=1;
                delay_ms(250);
                if (PIND.3==0)
                    break;
                delay_ms(250);
                
                PORTC.2=0;
                
                if (PIND.3==0)
                    break;
                delay_ms(250);
                if (PIND.3==0)
                    break;
                delay_ms(250);
                if (PIND.3==0)
                    break;  
                    
                counter--;  
            }
            PORTC=0x00;
            counter=0;
        }
        if (PIND.3==0) {
            delay_ms(250);
            counter=0;
            PORTC=0x00; 
            PORTD=0x11;
        }
    }                
}