using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace TMS.API.Controllers.Resources
{
    public class RequestResource
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Description { get; set; }
        public UserResource User { get; set; }
        public ICollection<RequestDetailResource> RequestDetails { get; set; }
        public RequestResource()
        {
            RequestDetails = new Collection<RequestDetailResource>();
        }
    }
}
