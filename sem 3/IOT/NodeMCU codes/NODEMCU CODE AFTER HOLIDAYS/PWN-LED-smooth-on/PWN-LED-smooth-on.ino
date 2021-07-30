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
