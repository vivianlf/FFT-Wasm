#include <emscripten/emscripten.h>

/*EMSCRIPTEN_KEEPALIVE
double gradiente_descendente(double x, double taxa_aprendizado, int iteracoes) {
    for (int i = 0; i < iteracoes; i++) {
        double gradiente = 2 * x;  // Derivada de f(x) = x^2
        x = x - taxa_aprendizado * gradiente;
    }
    return x;
}
*/

//73 ms no js e 77 no webAssembly