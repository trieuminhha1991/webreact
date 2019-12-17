using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TrieuMinhHa.Orenda.PbEbooks.Dto;

namespace TrieuMinhHa.Orenda.PbEbooks
{
    public interface IEbookAppService : IApplicationService
    {
        Task<ListResultDto<EbookViewDto>> GetAll(EbooktoViewInput input);
        Task CreateOrEdit(CreatorEditEbookDto input);

        Task Delete(EntityDto input);
    }
}
