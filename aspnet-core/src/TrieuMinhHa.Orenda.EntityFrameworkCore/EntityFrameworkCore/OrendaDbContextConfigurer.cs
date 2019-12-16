using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace TrieuMinhHa.Orenda.EntityFrameworkCore
{
    public static class OrendaDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<OrendaDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<OrendaDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}
