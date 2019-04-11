TO DO
- dokończyć filtrowanie
- dodać routing - każdy produkt na włąsnej stronie
- strona produktu
- stworzyć bazę danych
- dodać do bazy danych dane
- podpiąć bazę do frontu
- podpiąć bazę do sekcji admin - wyświetlanie ilości magazynowej każdego produktu
- DALSZE KROKI: zamówienia


Łukasz!

Jaki jest problem - routing nie działa - a dokładniej - klikając w <Link> nic się nie dzieje.
Routing (ścieżki) jest zdefiniowany w pliku strona1. 
Elementy <Link> są wstawione w:
- App - w divie admin  -  i tu działa. Po kliknięciu w link wyświetla się plik zdefiniowany w roucie (czyli plik strona2)
- presentational/shop/ProductListComponent - i tu nie działa. Po kliknięciu w link nic się nie dzieje. Ale co ciekawe, jeśli z ręki wpiszę w pasku przegląradki url - np. /prod/2, to plik strona2 wyświetla się i match.props.id przyjmuje jako parametr 2.

Czemu nie działa?