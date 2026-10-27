@echo off
set PATH=%~dp0tools\node-v20.18.0-win-x64;%PATH%
echo ========================================================
echo   MAISON D'OR // Atelier Haute Joaillerie Next.js Server
echo ========================================================
echo Starting Next.js at http://localhost:3000...
node node_modules\next\dist\bin\next dev -p 3000
