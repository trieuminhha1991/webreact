using Abp.MultiTenancy;
using TrieuMinhHa.Orenda.Authorization.Users;

namespace TrieuMinhHa.Orenda.MultiTenancy
{
    public class Tenant : AbpTenant<User>
    {
        public Tenant()
        {            
        }

        public Tenant(string tenancyName, string name)
            : base(tenancyName, name)
        {
        }
    }
}
