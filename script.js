// script.js

function calcularResultados() {
    let totalScore = 0;
    let unanswered = false;

    for (let i = 1; i <= 20; i++) {
        let radios = document.getElementsByName('q' + i);
        let answered = false;

        for (let radio of radios) {
            if (radio.checked) {
                totalScore += parseInt(radio.value);
                answered = true;
                break;
            }
        }

        if (!answered) {
            unanswered = true;
            break;
        }
    }

    if (unanswered) {
        alert('Por favor, responda todas las preguntas.');
        return;
    }

    // Interpretación de los resultados
    let resultado = '';
    if (totalScore < 8) {
        resultado = 'No se detectan síntomas significativos de trastornos mentales comunes.';
    } else {
        resultado = 'Posibles síntomas de trastornos mentales comunes. Se recomienda consultar a un profesional de la salud mental.';
    }

    document.getElementById('resultados').innerHTML = `
        <h2>Resultados</h2>
        <p>Puntuación total: ${totalScore}</p>
        <p>${resultado}</p>
        <p><em>Nota: Este resultado es orientativo y no sustituye una evaluación profesional. Si tiene preocupaciones acerca de su salud mental, consulte a un profesional cualificado.</em></p>
    `;
}
