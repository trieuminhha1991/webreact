using System.Linq;
using AutoMapper;
using Abp.Authorization;
using TrieuMinhHa.Orenda.Authorization.Ebook;

namespace TrieuMinhHa.Orenda.PbEbooks.Dto
{
    class EbookMapProfile : Profile
    {
        public EbookMapProfile()
        {
            // Role and permission
            CreateMap<EbookListDto,Ebook >();
        }
    }
}
