#!/usr/bin/env bash
# exit on error
set -o errexit

poetry install
pip install render
pip install django
pip install setuptools

python manage.py collectstatic --no-input
python manage.py migrate
