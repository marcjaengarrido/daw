h

```py
from xml.dom import minidom


print("\n1. Programa que llegeix un xml i treu per pantalla el nom de l'element arrel. introduim parse() i Document.documentElement")
arxiuXML = minidom.parse("datos.xml")
root_element = arxiuXML.documentElement
print(f"Element rael: {root_element.tagName}")


print("\n2. Treu per pantalla una llista amb les dades de l'etiqueta person (Només dels elements, no dels atributs) getElementsByTagName() i firstchild")
treballadors = arxiuXML.getElementsByTagName("person")
for treballador in treballadors:
    print(treballador.getElementsByTagName("name")[0].firstChild.nodeValue) 


print("\n3. Afegir a la llista del punt 2 els dos atributs que té el fitxer en cada element person. getAttribute()")
for treballador in treballadors:
    print(f"Qui es? {treballador.getElementsByTagName('name')[0].firstChild.nodeValue}\n Edad: {treballador.getElementsByTagName('age')[0].firstChild.nodeValue}\n Sexe: {treballador.getElementsByTagName('name')[0].getAttribute('gender')}")


print("\n4. Mostrar per pantalla tot un document xml. toxml()")
print(arxiuXML.toxml())


print("\n5. Generar un document html per pantalla a partir d'un xml.")
textHTML = "<html><head><title>Diaris DOM</title></head><body>"
for treballador in treballadors:
    IDTreballador = treballador.getAttribute("id")
    nomTreballador = treballador.getElementsByTagName("name")[0].firstChild.nodeValue
    edadTreballador = treballador.getElementsByTagName("age")[0].firstChild.nodeValue
    sexeTreballador = treballador.getElementsByTagName("name")[0].getAttribute("gender")
    naixement = treballador.getElementsByTagName("naixement")[0].firstChild.nodeValue
    textHTML += f"<h2>{IDTreballador} - {nomTreballador}</h2><ul><li>age - {edadTreballador}</li><li>sex - {sexeTreballador}</li><li>naixement - {naixement}</li></ul>"
textHTML += "</body></html>"
print(textHTML)
"""
<html><head><title>Diaris DOM</title></head>
   <body>
       <h2>P001 - John</h2>
       <ul>
           <li>age - 30</li>
           <li>sex - male</li>
           <li>maixement - 1985-11-24</li>
       </ul>
       <h2>P002 - Jane</h2>
       <ul>
           <li>age - 21</li>
           <li>sex - female</li>
           <li>maixement - 2002-05-11</li>
       </ul>
   </body>
</html>
"""


print("\n6. Punto 5 pero guardado en archivo")
with open("resultat.html", "w") as arxiu:
    arxiu.write(textHTML)
    print("Desat")
```
