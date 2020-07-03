#!/bin/bash

SCRIPT_DIR=$(cd $(dirname $(readlink -f $0 || echo $0));pwd -P)
cd ${SCRIPT_DIR}

docker ps | grep 'postgres-database' && docker-compose down

docker-compose up -d --build
