using ControleViagem.Models;
using Microsoft.EntityFrameworkCore;

namespace ControleViagem.Data
{
    public class ViagemContext : DbContext
    {
        public ViagemContext(DbContextOptions<ViagemContext> options) : base(options) { }

        public DbSet<Viagem> Viagens { get; set; }
    }
}
