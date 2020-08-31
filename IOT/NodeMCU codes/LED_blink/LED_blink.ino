void setup() {
  pinMode(D3, OUTPUT);    //  D3 is pin number, OUTPUT is mode of pin, i.e. LED is of output type.
}

void loop() {
  digitalWrite(D3, 1);  //  writing power supply (1 or HIGH) on pin D3.
  delay(1000);
  digitalWrite(D3, 0);  //  writing power supply (0 or LOW) on pin D3.
  delay(1000);
}
