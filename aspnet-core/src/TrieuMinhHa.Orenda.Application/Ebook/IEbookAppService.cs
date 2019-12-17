using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TrieuMinhHa.Orenda.Roles.Dto;
using TrieuMinhHa.Orenda.Users.Dto;

namespace TrieuMinhHa.Orenda.Ebook
{
    public interface IEbookAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task<ListResultDto<RoleDto>> GetAll();

        Task ChangeLanguage(ChangeUserLanguageDto input);
    }
}
