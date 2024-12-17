# Comparação de FFT: JavaScript vs WebAssembly (WASM)

Este projeto compara o desempenho de um algoritmo **Transformada Rápida de Fourier (FFT)** implementado em **JavaScript Puro** e **WebAssembly (WASM)**.  
O objetivo é avaliar a eficiência de ambas as tecnologias na execução de cálculos matemáticos intensivos.

---

## 📋 **O que o projeto faz?**
- **Executa a FFT** (Transformada Rápida de Fourier) em um sinal de entrada.
- **Compara o desempenho** entre as implementações em JavaScript Puro e WebAssembly.
- **Exibe o tempo de execução** para cada abordagem no console e apresenta os resultados processados.

---

## **Tecnologias Utilizadas**
- **JavaScript**: Implementação da FFT diretamente no navegador.
- **WebAssembly (WASM)**: Algoritmo FFT compilado a partir de C para alto desempenho.
- **Emscripten**: Compilador utilizado para converter C em WebAssembly.
- **HTML/CSS**: Interface simples para interagir com o projeto.

---

## **Como Executar?**

### 1️⃣ **Requisitos**
- **Emscripten** instalado no sistema (para compilar o código C para WASM).

---

### 2️⃣ **Configurar o Ambiente**
1. **Instale o Emscripten**:  
   ```bash
   git clone https://github.com/emscripten-core/emsdk.git
   cd emsdk
   ./emsdk install latest
   ./emsdk activate latest
   source ./emsdk_env.sh

### 3️⃣ **Compile o Código C para WebAssembly:**
1. **Compile o projeto**:  
    ```bash
   emcc fft.c -o fft.js -s EXPORTED_FUNCTIONS="['_fft']" -s MODULARIZE=1 -s ALLOW_MEMORY_GROWTH=1

### 4️⃣ **Executar Localmente:**
    ```bash
    emrun --no_browser --port 8080


