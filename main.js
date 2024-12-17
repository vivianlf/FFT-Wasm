// Função FFT em JavaScript Puro
function fftJS(input) {
    const n = input.length;
    if (n <= 1) return input;

    const even = fftJS(input.filter((_, i) => i % 2 === 0));
    const odd = fftJS(input.filter((_, i) => i % 2 !== 0));

    const result = new Array(n);
    for (let k = 0; k < n / 2; k++) {
        const t = Math.exp(-2.0 * Math.PI * k / n) * odd[k];
        result[k] = even[k] + t;
        result[k + n / 2] = even[k] - t;
    }
    return result;
}

// Testar FFT em JavaScript Puro e WebAssembly
document.getElementById('run').addEventListener('click', () => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Executando...';

    const n = 1024; // Tamanho do sinal
    const inputSignal = new Float64Array(n).fill(0).map((_, i) => Math.sin(2 * Math.PI * i / n));

    // 1️⃣ FFT em JavaScript Puro
    console.time('FFT JS');
    const resultJS = fftJS(inputSignal);
    console.timeEnd('FFT JS');

    // 2️⃣ FFT em WebAssembly
    Module().then((FFTModule) => {
        // Carregar o heap diretamente sem malloc
        const inputOffset = 0; // Alocamos no início do HEAPF64
        const outputOffset = n * 2; // Espaço para entrada + saída

        const inputArray = new Float64Array(FFTModule.HEAPF64.buffer, inputOffset, n * 2);
        const outputArray = new Float64Array(FFTModule.HEAPF64.buffer, outputOffset, n * 2);

        // Preencher o sinal no heap WASM
        for (let i = 0; i < n; i++) {
            inputArray[i * 2] = inputSignal[i]; // Parte real
            inputArray[i * 2 + 1] = 0;         // Parte imaginária
        }

        // Executar FFT
        console.time('FFT WASM');
        FFTModule._fft(n, inputOffset, outputOffset); // Chama a FFT compilada
        console.timeEnd('FFT WASM');

        // Calcular a magnitude da saída
        const magnitudes = [];
        for (let i = 0; i < n; i++) {
            const real = outputArray[i * 2];
            const imag = outputArray[i * 2 + 1];
            magnitudes.push(Math.sqrt(real * real + imag * imag));
        }

        // Exibir resultados
        outputElement.textContent = `
        🕒 Resultados:
        - FFT JS: (ver console)
        - FFT WASM: (ver console)
        `;
        console.log('Magnitudes FFT WASM:', magnitudes);
    }).catch((error) => {
        console.error('Erro ao carregar o módulo FFT WebAssembly:', error);
        outputElement.textContent = 'Erro ao carregar o WebAssembly.';
    });
});
