#!/bin/bash
sleep 30s
# Check if port 3001 is running
if ! nc -z localhost 3000; then
  echo "Port 3000 is not running"
  exit 1
else
  echo "Port 3000 is running"
fi