#include<ESP8266WiFi.h>
#define ssid "racka"
#define pass "123456"
#define port 80
WiFiServer server(port);
void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, pass);
    Serial.println('connecting to network ...');
    while(WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print('.');
    }
    Serial.println("connected!");
    server.begin();
    Serial.print("\nuse this URL:");
    Serial.print(WiFi.localIP());
}
void loop() {
    WiFiClient client = server.available();
    if(!client)
        return;
    client.print("Hello from nodeMCU");
}
