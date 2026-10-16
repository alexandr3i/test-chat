# test-chat

# Lista mea

Aplicație de sarcini în română, fără dependențe externe. Permite adăugarea, bifarea și ștergerea sarcinilor, data și ora opționale, categorii create manual și priorități. Sarcinile bifate se mută în fila Terminate și pot fi readuse în De făcut. Include filtre combinate pentru categorie, prioritate, interval de date și ore, sortare după dată/oră, categorie, prioritate sau ordinea adăugării, precum și mod luminos/întunecat cu accent turcoaz. Sarcinile existente din versiunea inițială se păstrează. Datele sunt locale și nu declanșează notificări; filtrele orare se aplică orelor din fiecare zi selectată. Sarcinile fără dată sunt afișate ultimele la sortarea după dată. Datele sunt salvate în localStorage, separat pentru fiecare browser. Nu există conturi sau sincronizare între dispozitive.

## Pornire

Ai nevoie de Node.js 18 sau mai nou.

```sh
cd /workspace/test-chat
npm start
```

Serverul ascultă pe portul 3000. Poți schimba portul folosind variabila `PORT`.
