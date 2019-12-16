using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using TrieuMinhHa.Orenda.Configuration;
using TrieuMinhHa.Orenda.Web;

namespace TrieuMinhHa.Orenda.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class OrendaDbContextFactory : IDesignTimeDbContextFactory<OrendaDbContext>
    {
        public OrendaDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<OrendaDbContext>();
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            OrendaDbContextConfigurer.Configure(builder, configuration.GetConnectionString(OrendaConsts.ConnectionStringName));

            return new OrendaDbContext(builder.Options);
        }
    }
}
