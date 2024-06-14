*This is still in development phase, not yet completed./*


Inference of OpenAI's Whisper ASR model inside the browser

This example uses a WebAssembly (WASM) port of the whisper.cpp implementation of the transformer to run the inference inside a web page. The audio data does not leave your computer - it is processed locally on your machine. The performance is not great but you should be able to achieve x2 or x3 real-time for the tiny and base models on a modern CPU and browser (i.e. transcribe a 60 seconds audio in about ~20-30 seconds).
