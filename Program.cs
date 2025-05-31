using ControleViagem.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configurar o banco de dados SQLite usando a string de conexão do appsettings.json
builder.Services.AddDbContext<ViagemContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("ViagemContext")));

// Adicionar o serviço MVC e controladores
builder.Services.AddControllers();

var app = builder.Build();

// Configurar o pipeline de requisições
//app.UseHttpsRedirection();

app.MapGet("/", () => "Página não encontrada. Erro 404! :{");

app.UseAuthentication();

app.MapControllers();

app.Run();
