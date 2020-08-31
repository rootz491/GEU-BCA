#include <mega16.h>

void main() {
    PORTC=0b00000000;
    DDRC.0=1;
    DDRC.1=1;
    PORTD=0b00000111;
    DDRD=0b00000000;
    
    while (1) {
        if (PIND.0==0) {
            PORTC.0=1;
            PORTC.1=0;
        }
        
        if (PIND.1==0) {
            PORTC.0=0;
            PORTC.1=1;
        } 
                                 
        if (PIND.2==0) {
            PORTC.0=0;
            PORTC.1=0;
        }
    }
}