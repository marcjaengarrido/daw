# ENUNCIAT
1. Programa que llegeix un xml i treu per pantalla el nom de l'element arrel.

`introduim parse()` i `Document.documentElement`

3. Treu per pantalla una llista amb les dades de l'etiqueta person (Només dels elements, no dels atributs)

`getElementsByTagName()` i `firstchild`

5. Afegir a la llista del punt 2 els dos atributs que té el fitxer en cada element person.

`getAttribute()`

4. Mostrar per pantalla tot un document xml.

`toxml()`

5. Generar un document html per pantalla a partir d'un xml. Hauria de ser alguna cosa així (independent del contingut de cada element person i del nombre d'elements person):
```html
<html>
   <head>
      <title>Diaris DOM</title>
   </head>
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
```

6. El mateix que 5 però desat en un fitxer html i no escrit per pantalla.
