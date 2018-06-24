#!/bin/sh

ssh root@lift.jantimpe.com <<EOF
    cd ~/lift.jantimpe.com
    git pull
    docker-compose down
    docker-compose -f docker-compose.yml -f docker-compose.prod.yml up --build
    exit
EOF