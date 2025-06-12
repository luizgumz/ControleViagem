namespace ControleViagem.Models
{
    public class Viagem
    {
        public int Id { get; set; }
        public string Destino { get; set; } = string.Empty;
        public DateTime Data { get; set; }
        public string Transporte { get; set; } = string.Empty;
        public double Custo { get; set; }
    }
}
