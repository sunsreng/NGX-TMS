using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using TMS.API.Controllers.Resources;
using TMS.API.Models;
using TMS.API.Persistence;

namespace TMS.API.Controllers
{
    [Produces("application/json")]
    [Route("api/requests")]
    public class RequestsController : Controller
    {
        private readonly TMSDbContext context;
        private readonly IMapper mapper;

        public RequestsController(TMSDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }
        public async Task<IEnumerable<RequestResource>> GetRequests()
        {
            var request = await context.Requests.Include(r => r.RequestDetails).ToListAsync();

            return mapper.Map<List<Request>, List<RequestResource>>(request);
        }
    }
}