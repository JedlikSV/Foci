#  Faktoriális meghatározása

## Verziókezelés Git-el VS Code-ban (nagyon alap, opcionális):
1. GitHub account létrehozása:<br>
   https://github.com/<br>
   (nitslaszlo az account név a példában)
2. Git repository létrehozása:<br>
   pl.: GitHub asztali alkalmazással vagy github.com-on<br>
   (JedlikTsTemplate a repository neve a példában)
3. Git konfigurálása CMD vagy "Git CMD" ablakból:
   - git config --global user.name nitslaszlo
   - git config --global user.email nitslaszlo@gmail.com
   - git config --global credential.helper wincred
4. Visual Studio Code indítása - project betöltése
5. Ha van klónozott projektben .Git (rejtett!!!) mappa, akkor törölni kell
6. Git inicializálása a 3. ("Y") ikonnal vagy Ctrl-Shift-G<br>
   majd "Initialize Repository"-ra kattint (felül a rombusz ikonnal)<br>
   majd meg kell adni a projekt könyvtárát a git-nek
7. Remote repository megadása új terminál ablakból (Ctrl-Shift-ö), például:
   - "git remote add origin https://github.com/nitslaszlo/JedlikTsTemplate.git"<br>
   (A pontos parancsot a repo létrehozásakor kiírja a GitHub)   
8. ".gitignore" fájl szerkesztése/létrehozása (ezek a mappák/állományok nem lesznek feltöltve):<br>
   Ctrl-N -el új fájl létrehozása vagy meglévő szerkesztése<br>
   A fájl tartalma:<br>
   node_modules<br>
   npm-debug.log<br>
   (További mappák és fájlok megadhatók, melyek nem kerülnek "feltöltésre")<br>
   Ctrl-S -> .gitignore néven menteni a projekt főkönyvtárába
9. Ctrl-Shift-G -> Commit message megadása felül, majd "commit" utasítás kiadása<br>
   Ctrl-Enter -el, vagy felül a "pipa" ikonnal<br>
10. "There are no staged ..." kérdésre válaszolj "always"-el
11. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" ikonra kattint<br>
    Első alkalommal a GitHub felhasználói nevet vagy e-mail címet és jelszót kér!
12. Változások szinkronizálása ("feltöltés")<br>
    Alul a státus sorban balra "Synchronize Changes" (felhő) ikonra kattint<br>
    Később fel- és letöltésnél egymást "kergető" nyilak lesznek.
13. A "Would you like Code to periodically run 'git fetch'?"  kérdésére válaszoljunk "yes"-el<br>
    ("git.autofetch": true lesz beállítva, alapértelmezésben 3 percenként ellenőrzi a változásokat)
