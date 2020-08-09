#include <mega16.h>
#include <delay.h>

void main() {
    PORTC=0b00000000;
    DDRC=0b00000011;
    
    while (1) {
        PORTC.0=1;
        PORTC.1=0;
        delay_ms(2000);
        PORTC.0=0;
        PORTC.1=1;
        delay_ms(2000);
    }
}
