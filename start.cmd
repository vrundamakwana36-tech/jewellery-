@echo off
set PATH=%~dp0tools\node-v20.18.0-win-x64;%PATH%
echo ========================================================
echo   MAISON D'OR // Starting Production Server
echo ========================================================
node node_modules\next\dist\bin\next start -p 3000
