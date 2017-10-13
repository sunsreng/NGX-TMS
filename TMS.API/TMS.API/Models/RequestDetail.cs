using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TMS.API.Models
{
    [Table("RequestDetails")]
    public class RequestDetail
    {
        public int Id { get; set; }
        public int Action { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        public int Category { get; set; }
        public bool IsActive { get; set; }

        public Request Request { get; set; }
        public int RequestId { get; set; }
    }
}
