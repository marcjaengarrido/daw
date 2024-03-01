# Documentació

> Aquesta documentació es basa en explicar el funcionament del que sembla més complexe i/o avançat a l'activitat 1
---
La funció `.getElementsByTagName()` agafa tots els valors que coincideixin amb el parámetre. Per tant, si per exemple tenim 3 elements amb el mateix nom, la funció ens tornarà una llista amb aquestos elements.
Es per això mateix que en fiquem un for. Volem mostrar el nom de cada treballador. Un nom PER CADA treballador. 
<br>Com ja sabem, la funció `.getElementsByTagName()` busca a elements a través del nom indicat. la funció es per així dir-ho una propietat de treballador, que en aquest cas és un sol element tret de treballadors. Estem buscant elements DINS de teballador.
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
Bla bla bla
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
Bla blka 2
```py
with open("resultat.html", "w") as arxiu:
    arxiu.write(textHTML)
```
