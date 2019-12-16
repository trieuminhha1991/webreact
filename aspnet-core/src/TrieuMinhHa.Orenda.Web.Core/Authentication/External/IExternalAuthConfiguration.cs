using System.Collections.Generic;

namespace TrieuMinhHa.Orenda.Authentication.External
{
    public interface IExternalAuthConfiguration
    {
        List<ExternalLoginProviderInfo> Providers { get; }
    }
}
