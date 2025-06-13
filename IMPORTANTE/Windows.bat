@echo off
echo Restaurando pacotes NuGet...
dotnet restore

echo Aplicando migrações (se tiver)...
dotnet ef database update

echo Executando o projeto...
dotnet run
pause
exit