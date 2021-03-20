![discord logo](https://logos-download.com/wp-content/uploads/2021/01/Discord_Logo_full.png)

# Projet : Bot-discord

Dans le cadre de la formation MS CLOUD de l'école du numérique simplon.co, notre équipe à réalisé un Bot sur l'application de chat Discord. Ce bot est déployé sur une machine virtuelle de Microsoft Azure.


## Equipe de developpement

Thibault: lien github

Mouny: lien github

joshua: lien github

![simplon-logo](https://simplon.co/storage/2693/logo-simplon_23.png)

## Technologie utilisées

**TypeScript**

=> bot

=> tests

=> logs

**Ansible** 

=> déploiement

## CI et team management

**https://www.notion.so/** 

=> Timeline du projet

**https://github.com/** 

=> Versionnement

=> Taches

=> Intégration continue de tests


## Déploiement du bot

Etape 1 : Cloner le dépot pour avoir le fichier playbook.yml et le hosts
via l'invité de commandes:

```~ git clone https://github.com/thibault-Merelle/Bot-Discord```


Etape 2 : Mettre en place l'environnement de déploiement

Dans le fichier hosts : 

=> Mettre l'ip de la vm

=> Mettre le nom d'utilisateur de la vm


Etape 3 : Lancer le déploiement depuis le dossier Bot-Discord
via l'invité de commandes :

```~ ansible-playbook -i hosts  playbook.yml --key-file votre_key.pem```

Etape 4 : Insérer la clé privée discord du bot.

## Actions du bot

Répondre à deux phrases

hello le robot

=> hello le @user

bonjour

=> bye

## Monitoring 

Une fois le bot en ligne, il est possible de suivre l'activité du bot depuis le fichier "Bot-Discord/logs/logs.txt" qui se trouve sur la vm

## Evolution du bot

Tirer 2 personnes au hasard en ligne sur le channel ou se trouve le bot, depuis la commande "/help"
