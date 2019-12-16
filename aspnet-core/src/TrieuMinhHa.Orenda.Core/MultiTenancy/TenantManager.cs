using Abp.Application.Features;
using Abp.Domain.Repositories;
using Abp.MultiTenancy;
using TrieuMinhHa.Orenda.Authorization.Users;
using TrieuMinhHa.Orenda.Editions;

namespace TrieuMinhHa.Orenda.MultiTenancy
{
    public class TenantManager : AbpTenantManager<Tenant, User>
    {
        public TenantManager(
            IRepository<Tenant> tenantRepository, 
            IRepository<TenantFeatureSetting, long> tenantFeatureRepository, 
            EditionManager editionManager,
            IAbpZeroFeatureValueStore featureValueStore) 
            : base(
                tenantRepository, 
                tenantFeatureRepository, 
                editionManager,
                featureValueStore)
        {
        }
    }
}
