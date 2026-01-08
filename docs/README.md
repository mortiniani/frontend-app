# Project: frontend-app
# Author: [Your Name]

"""
A high-quality, scalable, and maintainable frontend application.

This project utilizes modern web development best practices and is built using industry-standard technologies.
"""

import os
from setuptools import setup, find_packages

# Project metadata
NAME = 'frontend-app'
VERSION = '1.0.0'

# Project dependencies
REQUIREMENTS = [
    'flask==2.0.2',
    'flask-sqlalchemy==2.5.1',
    'flask-login==0.5.0',
    'flask-wtf==1.0.3',
    'wtforms==3.0.1',
    'sqlalchemy==1.4.39',
    'pandas==1.4.2',
    'numpy==1.22.4',
    'scipy==1.7.3',
    'matplotlib==3.5.1',
    'seaborn==0.11.2',
    'pandas-datareader==0.9.0',
    'beautifulsoup4==4.11.1',
    'requests==2.28.1',
    'lxml==4.9.1',
    'pytz==2022.5',
]

# Project setup
setup(
    name=NAME,
    version=VERSION,
    packages=find_packages(),
    install_requires=REQUIREMENTS,
    author='[Your Name]',
    author_email='[Your Email]',
    description='A high-quality, scalable, and maintainable frontend application.',
    long_description=__doc__,
    license='MIT',
    keywords='frontend-app',
    url='https://github.com/[Your GitHub Username]/frontend-app',
    classifiers=[
        'Development Status :: 5 - Production/Stable',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.8',
        'Programming Language :: Python :: 3.9',
        'Programming Language :: Python :: 3.10',
    ],
)