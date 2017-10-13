using Microsoft.EntityFrameworkCore;
using TMS.API.Models;

namespace TMS.API.Persistence
{
    public class TMSDbContext : DbContext
    {
        public TMSDbContext(DbContextOptions<TMSDbContext> options) : base(options)
        {

        }
        public DbSet<Request> Requests { get; set; }
    }
}
