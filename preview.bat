@echo off
echo ===================================================
echo   Iniciando Corpo de Musa (Ambiente Local)
echo ===================================================
echo.
echo [1] Verificando dependencias...
call npm install
echo.
echo [2] Iniciando servidor de desenvolvimento...
echo.
echo O site abrirá automaticamente no seu navegador.
echo Pressione CTRL + C para parar o servidor.
echo.
start http://localhost:8082
call npm run dev
pause
