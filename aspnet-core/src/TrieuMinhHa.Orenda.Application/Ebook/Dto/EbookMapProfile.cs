using Abp.AutoMapper;
using Abp.Modules;
using AutoMapper;
using TrieuMinhHa.Orenda.Authorization.Ebook;

namespace TrieuMinhHa.Orenda.Ebook.Dto
{
    [DependsOn(typeof(AbpAutoMapperModule))]
    public class EbookMap : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Modules.AbpAutoMapper().Configurators.Add(config =>
            {
                config.CreateMap<EbookListDto, Ebook>();
            });
        }
    }
}
