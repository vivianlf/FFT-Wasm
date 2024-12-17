# Comparação de Gradiente Descendente: JavaScript vs WebAssembly (WASM)

Este projeto compara o desempenho de um algoritmo de Gradiente Descendente implementado em JavaScript Puro e WebAssembly (WASM).  
O objetivo é verificar a eficiência de ambos na execução de cálculos intensivos. 

---

# O que o projeto faz?
- 🧮 **Executa o Gradiente Descendente** para minimizar a função \( f(x) = x^2 \)  
- 📈 **Compara o desempenho** entre JavaScript e WebAssembly  
- 🕒 **Exibe o tempo de execução** e o valor de \( x \) após a convergência  

---

## 📦 **Tecnologias Utilizadas**
- **JavaScript**: Para a interface e execução do gradiente.  
- **WebAssembly (WASM)**: Para alto desempenho nas operações de gradiente.  
- **Emscripten**: Para compilar C/C++ para WebAssembly.  
- **HTML/CSS**: Interface gráfica simples.  

---

## 🚀 **Como executar?**

### 1️⃣ **Requisitos**
- **Emscripten** (para compilar o C para WebAssembly)  

### 2️⃣ **Configurar o Ambiente**
1. **Instalar Emscripten**:  
   ```bash
   git clone https://github.com/emscripten-core/emsdk.git
   cd emsdk
   ./emsdk install latest
   ./emsdk activate latest
   source ./emsdk_env.sh

# Compilar o Código C para WebAssembly:
   emcc gradiente.c -o gradiente.js -s EXPORTED_FUNCTIONS="['_gradiente_descendente']" -s MODULARIZE=1

