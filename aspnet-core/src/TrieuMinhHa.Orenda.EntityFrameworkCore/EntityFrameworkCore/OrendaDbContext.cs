using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using TrieuMinhHa.Orenda.Authorization.Roles;
using TrieuMinhHa.Orenda.Authorization.Users;
using TrieuMinhHa.Orenda.MultiTenancy;
using TrieuMinhHa.Orenda.Authorization.Ebook;
using TrieuMinhHa.Orenda.Authorization.EbookRelationship;

namespace TrieuMinhHa.Orenda.EntityFrameworkCore
{
    public class OrendaDbContext : AbpZeroDbContext<Tenant, Role, User, OrendaDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public virtual DbSet<Ebook> Ebooks { get; set; }
        public virtual DbSet<PbClass> PbClasses { get; set; }
        public virtual DbSet<PbPlace> PbPlaces { get; set; }
        public virtual DbSet<PbRank> PbRanks { get; set; }
        public virtual DbSet<PbStatus> PbStatuses { get; set; }
        public virtual DbSet<PbSubject> PbSubjects { get; set; }
        public virtual DbSet<PbSubjectEducation> PbSubjectEducations { get; set; }
        public virtual DbSet<PbTypeEbook> PbTypeEbooks { get; set; }
        public virtual DbSet<PbTypeFile> PbTypeFiles { get; set; }
        public OrendaDbContext(DbContextOptions<OrendaDbContext> options)
            : base(options)
        {
        }
    }
}
