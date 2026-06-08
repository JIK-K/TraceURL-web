#!/bin/bash

domains="traceurl.p-e.kr"
email="dnswlrsla@gmail.com"
rsa_key_size=4096

echo "### Requesting Let's Encrypt certificate for $domains ..."
docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    --email $email \
    --agree-tos \
    --no-eff-email \
    --rsa-key-size $rsa_key_size \
    -d $domains" certbot

echo "### 인증서 발급이 완료되었습니다. "