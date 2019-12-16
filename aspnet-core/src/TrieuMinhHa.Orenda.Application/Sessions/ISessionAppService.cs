using System.Threading.Tasks;
using Abp.Application.Services;
using TrieuMinhHa.Orenda.Sessions.Dto;

namespace TrieuMinhHa.Orenda.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
