using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TrieuMinhHa.Orenda.MultiTenancy.Dto;

namespace TrieuMinhHa.Orenda.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

