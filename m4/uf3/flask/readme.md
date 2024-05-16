# README ITERACIÓ 3
### ENUNCIAT
> Crear un fitxer README.md (markdown baby!) a l'arrel del projecte (és a dir, al mateix nivell que app.py) amb les instruccions per a desplegar l'aplicatiu. Ha d'incloure les instruccions de l'entorn virtual i com iniciar l'aplicatiu. També ha d'incloure com fer servir el mode remot (on es fa servir l'XML directament de la web de la vanguardia) o local (on es fa servir el XML descarregat). El README ha d'incloure algun enllaç (per exemple, a la doc de flask, o una web on expliqui que són els entorns virtuals...).

### INSTRUCCIONS DESPLEGAMENT

#### 1. Inicialització entorn virtual (venv)

L'objectiu d'un entorn virtual és principalment crear, per dir-ho d'alguna forma, una nova "instancia" de python. En aquest lloc podem tenir paquest diferents als que tenim per defecte. En comparació es podría considerar com una nova dimensió de python.

El procés d'activació es bastant senzill. Primer executarem la seguent comanda al directori on volguem fer servir l'entorn. Aquesta será l'encarregada de crear un directori amb tot el que necessita venv: 

Amb linux:
* `python3 -m venv .venv`

Amb windows:
* `python -m venv .venv`


Ara ho hem d'activar. Bàsicament el que fa aquesta "activació" es re definir variables temporals de la terminal, modificant rutes i/o el mateix prompt:

Amb linux:
* `source .venv/bin/activate`
* 
Amb Windows:
* `.venv\Scripts\activate`

I boom, ja hauriem de ser-hi dins. Si veiem un `(venv)` a l'inici del nostre prompt, és que tot ha anat bé.

Al prompt veuràs que ets dins de l'entorn:
Ara ja pots instal·lar els paquets que necessitis, com són:
	pip install flask
	pip install feedparser
Per sortir de l'entorn virtual, executa:
	deactivate
Finalment, per a Visual Code l'extensió Python Environment Manager facilita la integració entre el Visual Code i l'entorn virtual.

#### 2. Execució del programari

#### 3. Modes: remot i local
