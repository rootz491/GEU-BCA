#include  <mega16.h>

    // 0 for switch
    // 2 for bulb

void main() {
    PORTC=0b00000001;
    DDRC=0b000000100;
    
    while (1) {
        if(PINC.0==0)
            PORTC.2=1; 
        else
            PORTC.2=0;
    }
}