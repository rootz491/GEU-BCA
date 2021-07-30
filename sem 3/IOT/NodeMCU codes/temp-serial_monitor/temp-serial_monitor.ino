int M = 8.5;              //  multiplier, to calibrate temp with local temp. 
void setup() {
  pinMode(A1, INPUT);
  Serial.begin(9600);
}

void loop() {
  int z = analogRead(A1); //  taking row data from sensor
  float v = (5.0/256)*z;  //  convert data into voltage
  float t = v*M;          //  convert voltage into temperature
  Serial.println(t);      //  print Temperature.
  delay(1000);
}
