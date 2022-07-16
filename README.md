# ar-text-to-speech
A website to transform arabic speech to text using javascript.

Submitting the first task for Smart Methods training progragm which's first part is to make a website that supports arabic speech to text using javascript, and the second part which's the algorithm for setting up the ESP32 chip.

Instructions to set up ESP32:

1-	Download arduino on your device 

2-	Connect the chip “ESP32” with the device through a USB port

3-	Open arduino and download the ESP32 library by going to file -> preference, and put the link https://dl.espressif.com/dl/package_esp32_index.json in the additional board manager URLs section (obtained from the datasheet)

4-	Install the ESP32 board manager by going to tools and searching for “esp32” and clicking install

5-	To test the functionality, go to file -> example -> basic -> blink

6-	Before compiling the code, select the port from tools -> port, and from tools -> board -> ESP32 arduino select “WEMOS D1 MINI ESP32” 

7-	Compile the code. (Result: the light in the chip should start blinking according to the speed specified in the code)
