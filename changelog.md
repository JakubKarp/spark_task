- żeby uruchomić serwer musisz uruchomić/ komendy w oddzielnych konsolach: mongod i mongo (z głównego katalogu), nodemon server (z katalogu src/data. de facto ta komenda wykonuje komendę node server.js ), na koniec - npm start (żeby uruchomić frontend/reacta)

GOAL
- aplikacja 1. etap ma spełniać następujące funkcjonalności:
        PO STRONIE UŻYTKOWNIKA
    - filtrowanie produktów dwustopniowe - z wybranego filtra można wyfiltrować głębiej [zrobione]
    - wyświetlanie karty pojedynczego produktu [częściowo - jest routing, nie ma podpiętych danych i nie ostylowane]
    - po powrocie z karty produktu zachowane są filtry
    - dodanie produktu do koszyka
    - wyświetlanie stanu koszyka
    - wyświetlanie koszyka
    - wysłanie zamówienia - w uproszczonej wersji bez kroków o adresie i sposobie dostawy - info o zamówieniu ma trafić do bazy (bez kto, tylko co i ile)
        PO STRONIE ADMINA
    - wyświetlanie listy dostępnych produktów i ich stanów magazynowych [zrobione]
    - wyświetlanie listy zamówionych produktów
    - dodawanie nowych produktów do bazy
    - kasowanie produktów

TO DO
- strona produktu - redux
- w sekcji admin - pełny panel
- DALSZE KROKI: zamówienia [front zamówienia, wypychanie zamówienia do bazy, wyświetlanie w panelu admin zamówień]
- dodać obsługę obrazków do Mongo - w 1. etapie tego nie ruszamy

TROUBLES
- nie wiem czy dobrze wywołuję getProducts() w ProductContainer - wielokrotne renderowanie


- 27.07.19
    - po powrocie z karty produktu nie zachowane są filtry - rozwiązane. Refaktor reducera, bez pośrednika w postaci products, visibleProducts bezpośrednio zaaplikowane do product container
- 2.06.19
    - próby redux/router - strona produktu
    - panel admin wyświetlanie listy dostępnych produktów i ich stanów magazynowych - bez stylowania
    - oodzielny reducer dla admin
- 1.06.19
    - rozwiązanie problemów z reduxem - były źle czyszczone filtry
- 25.05.19
    - pełne podpięcie bazy do frontu i wyświetlanie produktów (probelmy z reduxem nie rozwiązane)
- 12.05.19
    - dodanie produktów do bazy danych
    - podpięcie bazy do frontu
- 17.04.19
    - podłączenie serwera i bazy danych. Pierwsze testowe zaciągnięcie danych.
- 12.04.19
    - pierwsze przymiarki do połączenia z Mongo. Utworzenie bazy.
- 11.04.19
    - dodanie routingu do każdego produktu
- marzec
    - ukończone filtrowanie