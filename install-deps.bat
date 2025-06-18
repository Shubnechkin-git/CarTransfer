@echo off
echo Установка зависимостей frontend...
cd frontend
call npm install

echo Установка зависимостей backend...
cd ../backend
call npm install

echo Все зависимости установлены!
pause
