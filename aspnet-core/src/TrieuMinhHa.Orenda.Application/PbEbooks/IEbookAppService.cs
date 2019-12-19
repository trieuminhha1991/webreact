using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TrieuMinhHa.Orenda.PbEbooks.Dto;

namespace TrieuMinhHa.Orenda.PbEbooks
{
    public interface IEbookAppService : IApplicationService
    {
        Task<ListResultDto<EbookViewDto>> GetAll(EbooktoViewInput input);
        Task Delete(EntityDto input);
        Task<EbookViewDto> Create(EbookListDto input);
    }
}
