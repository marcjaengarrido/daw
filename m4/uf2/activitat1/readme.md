# Documentació
![gif épico](https://raw.githubusercontent.com/marcjaengarrido/daw/main/m4/uf2/activitat1/python.gif)


> L'objectiu d'aquesta documentació és **explicar el funcionament** del que sembla més complexe i/o avançat a l'[activitat 1](https://github.com/marcjaengarrido/daw/blob/main/m4/uf2/activitat1/enunciat.md).


---
La funció `.getElementsByTagName()` agafa **tots** els valors que coincideixin amb el parámetre. Per tant, si per exemple tenim 3 elements amb el mateix nom, la funció ens **tornarà una llista** amb aquestos elements.
Es per això mateix que en fiquem un for. Volem mostrar el nom de cada treballador. **Un nom PER CADA treballador**. 
<br>Com ja sabem, la funció `.getElementsByTagName()` busca a elements a través del nom indicat. la funció es per així dir-ho una propietat de treballador, que en aquest cas és un sol element tret de treballadors. Estem buscant elements *dins* de teballador.
<br>Finalment, per a extreure el valor de l'element resultant (primer element de la llista) li fem `.firstChild.nodeValue`
```py
treballadors = arxiuXML.getElementsByTagName("person")
for treballador in treballadors
    print(treballador.getElementsByTagName("name")[0].firstChild.nodeValue)
```
---
Aquí en lloc d'extreure el valor, volem l'atribut. En aquest cas, fem servir una funció en lloc de propietat (`.getAttribute()`) que retorna el valor d'aquest
```py
treballador.getElementsByTagName('name')[0].getAttribute('gender')
```
Vaig a posar per exemple
```html
<menjars>
  <menjar premium="si" ocult="no" identificador="302">
    <nom>Pizza rica</nom>
    <preu>19.99</preu>
  </menjar>
</menjars>
```
Tenint en compte que tomem com a base el següent codi
```py
rael.getElementsByTagName('menjars')[0].getElementsByTagName('menjar')[0]
```
| Valor | Com accedir-hi al valor |
| ----------------------- | ----------------------- |
|si| `.getAttribute('premium')` |
|no| `.getAttribute('ocult')` |
|302| `.getAttribute('identificador')` |
|Pizza rica| `.getElementsByTagName('nom')[0].firstChild.nodeValue` |
|19.99| `.getElementsByTagName('preu')[0].firstChild.nodeValue` |

---
Aquí només juntem el que ja sabem parlant en térmes d'obtenir informació... Lo més avançat que trobem potser es la forma amb la cuál generem el `textHTML`. Començcem posant el `<head>` i l'inici del `<body>` i per cada treballador fem una estructura html que fa sentit per si misma. Després en sortir del bucle simplement tanquem el `<body>` i ja.
```py
textHTML = "<html><head><title>Diaris DOM</title></head><body>"
for treballador in treballadors:
    IDTreballador = treballador.getAttribute("id")
    nomTreballador = treballador.getElementsByTagName("name")[0].firstChild.nodeValue
    edadTreballador = treballador.getElementsByTagName("age")[0].firstChild.nodeValue
    sexeTreballador = treballador.getElementsByTagName("name")[0].getAttribute("gender")
    naixement = treballador.getElementsByTagName("naixement")[0].firstChild.nodeValue
    textHTML += f"<h2>{IDTreballador} - {nomTreballador}</h2><ul><li>age - {edadTreballador}</li><li>sex - {sexeTreballador}</li><li>naixement - {naixement}</li></ul>"
textHTML += "</body></html>"
```
---
Finalment generem l'arxiu .html. Aquí simplement especifiquem que obrim un arxiu amb permissos d'escriptura (`open("archivo", "w")`) i hi llançem tot el contingut de `textHTML` a l'arxiu.
```py
with open("resultat.html", "w") as arxiu:
    arxiu.write(textHTML)
```

## A partir de ahora veremos
datos **que definitivamente** debemos *incluir* en nuestra _documentación_,
### ya que explica
*las aplicaciones que* tiene **nuestro** codigo en la vida real:
1. Oficina de trabajo
* Tarea de script de transformación de `XML` a `HTML`
* Reestructuración de archivos `XML`
* Etcétera 
2. Casa
