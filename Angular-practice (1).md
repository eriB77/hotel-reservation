# Javascript algoritmikus feladatok
Adott egy objektumlista, amelyben 7 ügyfél található, akik foglaltak a hotelben. Le szeretnénk szűrni ezeket a vendégeket két szempont szerint:

- becsekkolt-e már
 - hányan érkeznek - az érkezők száma nagyobb vagy egyenlő, mint a vizsgált érték
 
 Egy metódust kell megírnod:
- a hotelFilter() metódust.
- A metódus három paramétert kap: az eredeti listát, az érkezők számát, és azt, hogy megérkezett-e már a vendég. 
- A metódus a szűrést követően adja vissza egy szűrt listában a vendégek neveit!
- Törekedj a funkcionális elvek használatára
- Feldathoz tartozó lista:
```
    { guestName: 'John Doe', country: 'England', numberOfGuests: 4, alreadyCheckedIn: true },
    { guestName: 'Jane Harmon', country: 'USA', numberOfGuests: 7, alreadyCheckedIn: true },
    { guestName: 'Sarah Johnson', country: 'England', numberOfGuests: 2, alreadyCheckedIn: true },
    { guestName: 'Hanna Kovács', country: 'Hungary', numberOfGuests: 4, alreadyCheckedIn: false },
    { guestName: 'Tim Olson', country: 'Sweden', numberOfGuests: 1, alreadyCheckedIn: true },
    { guestName: 'Robert Wegener', country: 'Deutschland', numberOfGuests: 4, alreadyCheckedIn: true },
    { guestName: 'Tom Hardy', country: 'England', numberOfGuests: 8, alreadyCheckedIn: false }
```

# Angular bevezető projekt 
- [Projekthez tartozó melléklet](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/Forms/AllItems.aspx?id=%2Fprojects%2Fastrum%2FKosztly%2FFE%20Onboarding)
- Készíts egy új projektet és telepítsd a szükséges függőségeket
- Csatold a projektedhez a mellékletben található json servert és indítsd el
- Add hozzá az Angular Materialt a projekthez 

## 1.FELADAT
### Routing (Hotel, Restaurant)
- Készíts egy nav-bar-t, amelyhez két tab tartozik: 'Hotel', 'Restaurant'
- A 'Hotel' oldala a '/hotel' elérési úton legyen elérhető.
- A 'Restaurant' oldala a '/restaurant' elérési úton legyen elérhető.
- Amennyiben rossz az elérési út, egy '404 not found' oldalra navigáljon.

## 2. FELADAT
### Űrlapok és validátorok használata (Hotel)
1. Készíts Material segítségével egy form-ot, amivel szálláshelyeket lehet regisztrálni.
2. Formázd saját ízlésed szerint
3. Form beviteli mezők a következők legyenek:
- name
- city
- category
-- Választható opciók és értékek a select mező esetében: "Hotel", "Apartman", "GuestHouse"
4. Helyezz el egy gombot a formon belül.
 - Felirata: 'Save'
- Ha a form 'invalid' (bármelyik mezője nem kap értéket), akkor a gomb 'disabled', vagyis nem kattintható.
- A gomb alatt jelenjen meg egy tájékozató üzenet, hogy miért nem kattintható
5. Készíts a egy reaktivForm-ot a következő validátorokkal:
- name: min 5, max 30 karakter és nagybetűvel kezdődjön.
- city:  min 5, max 30 karakter. Csak betűket és szóközt tartalmazhat!
- category: kijelöltnek kell lennie (választania kell a felhasználónak)
6.  Adott egy "saveHotel" metódus. Visszatérési értékei legyenek a form értékei.
 - Ha minden beviteli mező helyesen van kitöltve, és rákattint a felhasználó a 'Save' gombra, akkor le kell futnia a metódusnak.
![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/hotel%20form.png)
 
# 3. FELADAT
### HTTP hívás, és renderelés (Hotel)
###### A mellékletben található, elindított server felé tudsz kéréseket indítani.
1. Készíts egy Materialos táblázatot az alábbi elemekkel:
    -  'Name', 'City', 'Category'
2. Készíts egy Service osztályt, ahol a hotelhez tartozó lekérdezéseket fogod tárolni.
- Készíts a Service osztályon belül egy "saveHotel" metódust és kösd össze a korábban elkészített hotel formmal.(/hotel)
- Készíts a Service osztályon belül egy "getHotelList" lekérdezést. (/hotel)
3. Kösd össze a megjelenítő komponenst a service osztállyal, és rendereld ki a táblázatot.
4. Formázd ízlésed szerint a táblázatot.
![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/hotel%20table.png?csf=1&e=ymwCWk)

# 4. FELADAT
### Szülő-Gyerek komponens interakció, adatkötések, dírektívák és service osztály (Restaurant)
###### A mellékletben található, elindított server felé tudsz kéréseket indítani.
1. Készíts egy szülő komponenst.
    - Készíts egy restaurant service osztályt, ahol majd a HTTP hívásokat is kezeled.
    - Injektáld be a restaurant service osztályt a szülő komponensbe.
2. Készíts egy gyerek komponenst, amely az ételek táblázatban való listázásáért, és a rendelés felvételéért felelős.(/restaurant)
    - A rendelés felvétele, az adott étel képére kattintással történjen meg.
3. Készíts egy gyerek komponenst, amely a már megrendelt ételeket listázza és az árukat összesíti.

![image info](https://sharepoint.lechnerkozpont.hu/projects/astrum/Kosztly/FE%20Onboarding/restaurant%20order.png?csf=1&e=twkKYh)










