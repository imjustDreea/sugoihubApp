@echo off
REM --- Ajusta la ruta a tu Node portable ---
set NODE_DIR=C:\Users\practicas2.SHOCK.000\Documents\node-v22.19.0-win-x64

REM --- Agregamos Node y npm al PATH ---
set PATH=%NODE_DIR%;%PATH%

REM --- Entramos al proyecto ---
cd /d %~dp0

REM --- Ejecutamos npm start ---
npm run dev
