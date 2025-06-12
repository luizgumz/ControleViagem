using ControleViagem.Data;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<ViagemContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("ViagemContext"))
);
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo { Title = "ControleViagem API", Version = "v1" });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

// Enable serving static files
app.UseStaticFiles();

app.UseAuthorization();

app.MapControllers();

// Fallback to index.html for SPA
app.MapFallbackToFile("index.html");

app.Run();
