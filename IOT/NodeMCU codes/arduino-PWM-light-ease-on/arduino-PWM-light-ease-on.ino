void setup() {
  int p=0;
  pinMode(13, OUTPUT);
  pinMode(6, INPUT);
}
void loop() {
  int f = digitalRead(D4);
  if(f == 1) {
    analogWrite(D4, p+=100);
  }
}
