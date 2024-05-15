# README ITERACIÓ 3
### ENUNCIAT
> Crear un fitxer README.md (markdown baby!) a l'arrel del projecte (és a dir, al mateix nivell que app.py) amb les instruccions per a desplegar l'aplicatiu. Ha d'incloure les instruccions de l'entorn virtual i com iniciar l'aplicatiu. També ha d'incloure com fer servir el mode remot (on es fa servir l'XML directament de la web de la vanguardia) o local (on es fa servir el XML descarregat). El README ha d'incloure algun enllaç (per exemple, a la doc de flask, o una web on expliqui que són els entorns virtuals...).

### INSTRUCCIONS DESPLEGAMENT

#### 1. Inicialització entorn virtual (venv)


Informació: https://docs.python.org/es/3/library/venv.html

Per començar a treballar amb un entorn virtual, el primer pas és crear-lo. Per això, obre un terminal integrat des del Visual Code i executa:

Amb linux:

python3 -m venv .venv

Amb windows:

		python -m venv .venv

El següent pas és activar-lo. Per això executa:

	Amb linux:

		source .venv/bin/activate

	Amb Windows:

		.venv\Scripts\activate

Al prompt veuràs que ets dins de l'entorn:



Ara ja pots instal·lar els paquets que necessitis, com són:

	pip install flask
	pip install feedparser

Per sortir de l'entorn virtual, executa:

	deactivate

Finalment, per a Visual Code l'extensió Python Environment Manager facilita la integració entre el Visual Code i l'entorn virtual.

#### 2. Execució del programari

#### 3. Modes: remot i local
