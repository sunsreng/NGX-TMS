namespace TMS.API.Controllers.Resources
{
    public class RequestDetailResource
    {
        public int Id { get; set; }
        public int Action { get; set; }
        public string Description { get; set; }
        public int Category { get; set; }
        public bool IsActive { get; set; }
    }
}