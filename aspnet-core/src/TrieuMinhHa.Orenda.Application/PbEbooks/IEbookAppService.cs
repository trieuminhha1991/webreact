using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TrieuMinhHa.Orenda.PbEbooks.Dto;

namespace TrieuMinhHa.Orenda.PbEbooks
{
    public interface IEbookAppService : IApplicationService
    {
        Task<ListResultDto<EbookListDto>> GetAll();
        Task CreateOrEdit(CreatorEditEbookDto input);

        Task Delete(EntityDto input);
    }
}
