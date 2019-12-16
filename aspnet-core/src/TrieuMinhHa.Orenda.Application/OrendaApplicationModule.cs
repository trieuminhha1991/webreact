using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TrieuMinhHa.Orenda.Authorization;

namespace TrieuMinhHa.Orenda
{
    [DependsOn(
        typeof(OrendaCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class OrendaApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<OrendaAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(OrendaApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}
