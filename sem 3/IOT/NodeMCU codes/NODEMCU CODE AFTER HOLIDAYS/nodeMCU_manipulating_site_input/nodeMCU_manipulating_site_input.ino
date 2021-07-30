#include<ESP8266WiFi.h>
#define ssid "JioFi2_CCFB01"
#define pass "ysi67zmi9k"

WiFiServer server(80);
int m=0;

void setup(){
Serial.begin(115200);
WiFi.begin(ssid, pass);
Serial.println("Connecting to N/w ...");
while(WiFi.status()!=WL_CONNECTED){
delay(400);
Serial.println(".");
}
Serial.println();
Serial.println("Connected to N/w");
server.begin();
Serial.println();
Serial.println(WiFi.localIP());
pinMode(D0, OUTPUT);
pinMode(D1, OUTPUT);
pinMode(D2, OUTPUT);
pinMode(D3, OUTPUT);
}
void loop(){

  WiFiClient client = server.available();
    if(!client){
    return;
  }
  
  String request = client.readStringUntil('\r');
  
  if(request.indexOf("/on")!=-1){
     m=!m;
     digitalWrite(D0,m); 
  }
  
  client.print("<!DOCTYPE html>\n"
  "<html>\n"
  "<head>\n"
  "\t<title>my dashboard</title>\n"
  "</head>\n"
  "<body> <center>\n"
  "\t<h1>Home automation </h1>\n"
  "\t<div style=\" margin-top:80px; margin-bottom: 50px \"> \n");
  
  if(m==1)
    client.print("\t\t<h1><a href=\"on\" ><button style='background-color:green;'> LED </button></a></h1>\n<p>Status: ON");
  else
    client.print("\t\t<h1><a href=\"on\" ><button style='background-color:red;'> LED </button></a></h1>\n<p>Status: OFF");
  
    
  client.print("\t</div>\n"
  "\t</center>\n"
  "\t<h1><marquee style=\"color: red\">Your bill is due for this month pay asap</marquee></h1>\n"
  "</body>\n"
  "</html>");
}
