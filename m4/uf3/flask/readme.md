# README ITERACIÓ 3
### ENUNCIAT
> Crear un fitxer README.md (markdown baby!) a l'arrel del projecte (és a dir, al mateix nivell que app.py) amb les instruccions per a desplegar l'aplicatiu. Ha d'incloure les instruccions de l'entorn virtual i com iniciar l'aplicatiu. També ha d'incloure com fer servir el mode remot (on es fa servir l'XML directament de la web de la vanguardia) o local (on es fa servir el XML descarregat). El README ha d'incloure algun enllaç (per exemple, a la doc de flask, o una web on expliqui que són els entorns virtuals...).

### ENUNCIAT

1. Skibidi
2. Toilet

### INSTRUCCIONS DESPLEGAMENT

#### 1. Inicialització i ús d'un entorn virtual (venv)

L'objectiu d'un entorn virtual és principalment crear, per dir-ho d'alguna forma, una nova "instancia" de python. En aquest lloc podem tenir paquest diferents als que tenim per defecte. En comparació es podría considerar com una nova dimensió de python.

El procés d'activació es bastant senzill. Primer executarem la seguent comanda al directori on volguem fer servir l'entorn. Aquesta será l'encarregada de crear un directori amb tot el que necessita venv: 

Amb linux:
* `python3 -m venv .venv`

Amb windows:
* `python -m venv .venv`


Ara ho hem d'activar. Bàsicament el que fa aquesta "activació" (les comandes a continuació) es re definir variables temporals de la terminal, modificant rutes i/o el mateix prompt:

Amb linux:
* `source .venv/bin/activate`

Amb Windows:
* `.venv\Scripts\activate`

I boom, ja hauriem de ser-hi dins. Si veiem un `(.venv)` a l'inici del nostre prompt, és que tot ha anat bé.

![Foto terminal venv activado](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/venv.png?raw=true)

Si volem tornar a la nostra terminal de tota la vida podem o bé petar el procés de la terminmal actual o fer servir la comanda `deactivate`:

![Foto terminal venv deactivate](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/deactivate.png?raw=true)

Ara que tenim el nostre entorn virtual, ens podem facilitar una mica la vida. Podem descarregar l'extensió anomenada [Python Environment Manager](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-environment-manager) amb l'objectiu de facilitar l'administració d'entorns virtuals. Mira que bonic:

![Extensió Python Environment Manager](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/pythonenvextension.png?raw=true)

#### 2. Execució del programari

Abans s'executar el script hem d'instalar els paquets requerits pel mateix.

Els que necessitem son feedparser i flask:

```
pip install feedparser
pip install flask
```

![Instalació feedparser](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/installfeedparser.png?raw=true)

![Instalació flask](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/installflask.png?raw=true)


Iniciar el programa és molt fàcil. Obrim la ruta on es troba el nostre arxiu `app.py` i executem la comanda `flask run` i ja ho hem encés

![Execució del programari](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/flaskrun.png?raw=true)

#### 3. Modes: remot i local

Al codi podem veure clarament que tenim dos formes d'agafar les dades.

![Remot Local Codi](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/remotlocal.png?raw=true)

Segons la [documentació de feedparser](https://pythonhosted.org/feedparser/introduction.html), podem obtenir el xml de pràcticament qualsevol lloc, ja siguin arxius locals, remots o fins i tot cadenes de text. Així que simplement, el que fem al codi és o seleccionar una ruta local amb els nostres arxius i secció depenent d'una variable o ruta remota (domini [lavanguardia.com](https://www.lavanguardia.com)) al seu rss on la ruta també compta amb la nostra variable de secció.

![Documentació feedparser](https://github.com/marcjaengarrido/daw/blob/main/m4/uf3/flask/feedparser.png?raw=true)


