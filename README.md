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

### Dockerfile :
    In corespondenta cu specificul microserviciului cream cate un fisier Dockerfile, si construim imaginea respectiva
### Docker-compose:
    Pentru a rula toate microserficiile, cream un fisier docker-compose, si il rulam, avand acces la porturile expuse,
        in cazul de fata, pentru a vizualiza pagina SchoolManager, accesam localhost:3001
### School Manager
    Proiectul ofera posibilitatea de a adauga, edita si vizualiza elevii si clasele unei scoli dpdv a unui manager.
    Managerul, trebuie sa fie logat, sau sa-si creeze un cont, pentru a putea efectua activitatile mai sus mentionate.
### Docker-swarm
    Pentru a rula intr-un swarm, replicam serviciul de gui, iar baza de date o atasam nodului manager.
### Kong
    Serviciul de Kong la fel este atasat de nodul manager




