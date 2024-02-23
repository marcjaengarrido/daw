Aqui es veu com blah
```py
root_element = arxiuXML.documentElement
```
Blah blah
```py
treballadors = arxiuXML.getElementsByTagName("person")
    print(treballador.getElementsByTagName("name")[0].firstChild.nodeValue)
```

```py
treballador.getElementsByTagName('name')[0].getAttribute('gender')
```

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

```py
with open("resultat.html", "w") as arxiu:
    arxiu.write(textHTML)
```
