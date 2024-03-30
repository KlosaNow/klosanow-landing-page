#!/bin/bash
set -e
sudo chown ubuntu:root -R /home/ubuntu/klosanow/landing
sudo systemctl start klosanow-landing.service

sleep 5s
