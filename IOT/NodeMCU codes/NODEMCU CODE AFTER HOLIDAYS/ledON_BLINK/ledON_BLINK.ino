void setup() {
  pinMode(D0, OUTPUT);  //  set pin to output
}

void loop() {
  digitalWrite(D0, 1);  //  give supply
  delay(1000);          //  delay for blinking
  digitalWrite(D0, 0);
  delay(1000);
}
