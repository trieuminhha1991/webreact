using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TrieuMinhHa.Orenda.Configuration;

namespace TrieuMinhHa.Orenda.Web.Host.Startup
{
    [DependsOn(
       typeof(OrendaWebCoreModule))]
    public class OrendaWebHostModule: AbpModule
    {
        private readonly IHostingEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public OrendaWebHostModule(IHostingEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(OrendaWebHostModule).GetAssembly());
        }
    }
}
