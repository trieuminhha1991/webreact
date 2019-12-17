using Abp.Application.Services;
using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using TrieuMinhHa.Orenda.PbEbooks.Dto;

namespace TrieuMinhHa.Orenda.PbEbooks
{
    public class EBookAppService : ApplicationService, IEbookAppService
    {
        public Task<ListResultDto<EbookListDto>> GetAll()
        {
            throw new NotImplementedException();
        }
        public Task CreateOrEdit(CreatorEditEbookDto input)
        {
            throw new NotImplementedException();
        }

        public Task Delete(EntityDto input)
        {
            throw new NotImplementedException();
        }

        
    }

}
