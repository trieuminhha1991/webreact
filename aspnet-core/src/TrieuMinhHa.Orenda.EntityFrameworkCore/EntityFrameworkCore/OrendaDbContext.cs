using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using TrieuMinhHa.Orenda.Authorization.Roles;
using TrieuMinhHa.Orenda.Authorization.Users;
using TrieuMinhHa.Orenda.MultiTenancy;

namespace TrieuMinhHa.Orenda.EntityFrameworkCore
{
    public class OrendaDbContext : AbpZeroDbContext<Tenant, Role, User, OrendaDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public OrendaDbContext(DbContextOptions<OrendaDbContext> options)
            : base(options)
        {
        }
    }
}
