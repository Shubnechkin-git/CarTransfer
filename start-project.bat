@echo off
echo Запуск проекта...

:: Открыть окно с backend
start cmd /k "cd backend && npm run start"

:: Открыть окно с frontend
start cmd /k "cd frontend && npm start"

echo Проект запускается...
pause
