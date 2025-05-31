namespace ControleViagem.Models
{
    public class Viagem
    {
        public int Id { get; set; }
        public string Destino { get; set; }
        public DateTime Data { get; set; }
        public string Transporte { get; set; }
        public double Custo { get; set; }
    }
}
