int f=0;
oid setup() {
    pinMode(13, OUTPUT);
}

void loop() {
  while (f < 1024) {
    analogWrite(13, m+=10);
    delay(100);
  }
  
  while (f > 0) {
    analogWrite(13, m-=10);
    delay(100);
  }
  f=0;
}
