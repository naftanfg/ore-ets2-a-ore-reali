document.addEventListener('DOMContentLoaded', function() {
    var oreInput = document.getElementById('ore');
    var minutiInput = document.getElementById('minuti');
    var risultatoOutput = document.getElementById('risultato');
    
    function calcolaTempoReale() {
        var oreStringa = oreInput.value.trim(); // Rimuove gli spazi vuoti dal valore inserito
        var minutiStringa = minutiInput.value.trim(); // Rimuove gli spazi vuoti dal valore inserito
        var ore = parseInt(oreStringa);
        var minuti = parseInt(minutiStringa) || 0;
        
        if (isNaN(ore) || isNaN(minuti)) {
            risultatoOutput.textContent = "Inserisci le ore e i minuti di gioco";
            return;
        }
        
        if (ore === 0 && minuti === 0) {
            risultatoOutput.textContent = "";
            return;
        }
        
        if (oreStringa.length === 4) {
            risultatoOutput.textContent = "Numero di ore troppo elevato";
            return;
        }
        
        if (minutiStringa.length === 5) {
            risultatoOutput.textContent = "Numero di minuti troppo elevato";
            return;
        }
        
        var tempo_gioco = ore * 60 + minuti;
        var tempo_reale = tempo_gioco / 16;
        var ore_reali = Math.floor(tempo_reale / 60);
        var minuti_reali = Math.floor(tempo_reale % 60);
        var risultato = "Tempo reale: " + ore_reali + "h " + minuti_reali + "m";
        risultatoOutput.textContent = risultato;
    }
    
    oreInput.addEventListener('input', calcolaTempoReale);
    minutiInput.addEventListener('input', calcolaTempoReale);
});
