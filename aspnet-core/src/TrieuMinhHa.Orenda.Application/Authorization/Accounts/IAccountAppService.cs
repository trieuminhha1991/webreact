using System.Threading.Tasks;
using Abp.Application.Services;
using TrieuMinhHa.Orenda.Authorization.Accounts.Dto;

namespace TrieuMinhHa.Orenda.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
