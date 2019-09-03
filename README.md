# LinkIndexCreatorJs

Autore: Avv. Roberto Alma
Linguaggio: Javascript

## Descrizione

Si tratta di un semplice tool per creare un **indice ipertestuale degli atti e dei documenti di un fascicolo**

Il Programma provvede a:

- individuare i file contenuti in una cartella (che dovrà essere indicata come paramentro del comando di start);
- verificare che si tratti di file permessi;
- creare un indice ipertestuale in HTML;
- convertire l'indice in formato PDF

## Installazione

> Prerequisiti: Avere un'installazione di node sul proprio sistema operativo

1. Clonare il repository
2. Digitare ``npm install`` dalla cartella del repository
3. Digitare ``npm start "[path-to-folder]" "[nome-cognome-avvocato]"`` (es. ``npm start "/Users/Tizio/Documents/TEST_CARTELLA" "Mario Rossi"``)
