#include<mega16.h>

void main() {
    PORTC=0b00000000;
  //  PORTA=0xf0;
    DDRC.0=1; 
  //  DDRA.3=1;
    while (1) {
        PORTC.0=1;  
    }
}