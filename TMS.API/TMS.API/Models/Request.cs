using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;

namespace TMS.API.Models
{
    public class Request
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        [StringLength(250)]
        public string Description { get; set; }
        public User User { get; set; }
        public ICollection<RequestDetail> RequestDetails { get; set; }
        public Request()
        {
            RequestDetails = new Collection<RequestDetail>();
        }
    }
}
