int z=0;
void setup() {
     pinMode(D4, INPUT);
     serial.begin(98600);
}
void loop() {
    k = digitalRead(D4);
    k = !k;
    if(k==1) {
        z+=1;
        serial.println(z);
        delay(400);
    }
}
