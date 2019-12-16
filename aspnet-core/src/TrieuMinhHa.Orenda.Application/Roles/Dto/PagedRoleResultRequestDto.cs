using Abp.Application.Services.Dto;

namespace TrieuMinhHa.Orenda.Roles.Dto
{
    public class PagedRoleResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
    }
}

