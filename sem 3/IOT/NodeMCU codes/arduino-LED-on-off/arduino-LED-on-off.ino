void setup() {
  int p=0;
  pinMode(13, OUTPUT);
  pinMode(6, INPUT);
}

void loop() {
  int f = digitalRead(6);
  if(f == 1)
    digitalWrite(13, HIGH);
}
