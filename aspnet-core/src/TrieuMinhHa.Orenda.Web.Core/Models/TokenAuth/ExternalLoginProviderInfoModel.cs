using Abp.AutoMapper;
using TrieuMinhHa.Orenda.Authentication.External;

namespace TrieuMinhHa.Orenda.Models.TokenAuth
{
    [AutoMapFrom(typeof(ExternalLoginProviderInfo))]
    public class ExternalLoginProviderInfoModel
    {
        public string Name { get; set; }

        public string ClientId { get; set; }
    }
}
