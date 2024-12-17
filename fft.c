#include <emscripten/emscripten.h>
#include <math.h>
#include <complex.h>

#define PI 3.14159265358979323846

EMSCRIPTEN_KEEPALIVE
void fft(int n, double complex *x, double complex *X) {
    if (n <= 1) {
        X[0] = x[0];
        return;
    }

    // Arrays para armazenar termos pares e ímpares
    double complex even[n/2];
    double complex odd[n/2];
    for (int i = 0; i < n/2; i++) {
        even[i] = x[i*2];
        odd[i] = x[i*2 + 1];
    }

    // Arrays para armazenar resultados da FFT dos termos pares e ímpares
    double complex Feven[n/2];
    double complex Fodd[n/2];
    fft(n/2, even, Feven);
    fft(n/2, odd, Fodd);

    // Combinação dos resultados
    for (int k = 0; k < n/2; k++) {
        double complex t = cexp(-2.0 * I * PI * k / n) * Fodd[k];
        X[k] = Feven[k] + t;
        X[k + n/2] = Feven[k] - t;
    }
}
