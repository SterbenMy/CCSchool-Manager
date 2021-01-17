# Proiect la Sisteme de calcul Cloud (CC)

## Aplicatie pentru gestionarea elevilor unei scoli

### Macari Cristian
### Natalia Bobu
### Liviu Cernei

Scopul proiectului din cadrul materiei Cloud Computing este de a realiza întreg ciclul de viață al unei aplicații cloud native, de la etapa de concepție până la etapa de deployment.


## Structura proiectului
    1. Un microserviciu care se ocupa de authentificare si autorizare -- acest serviu se afla in folderul AuthBack. 
    2. Un microserviciu care se ocupa elevi si clase -- acest serviciu se afla  in folderul BackStudentiClase
    3. Un microserviciu care ofera o interfata (frontendul) -- este sursa din CCSCHOOL-MANAGER
    4. O baza de date -  Am folosit ca bd MongoDB si ne conectam ca admin.
    5. Portainer pentru asigurarea gestiunii din UI a clusterului
    6. Kong pentru servirea publica a rutelor

## To Start Project

### Docker-compose :
    Introducem toate imaginile  'docker build -t imagine_nume'
    'docker-compose up -d'
    'docker-compose start' (rulare local)


