using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace TrieuMinhHa.Orenda.Controllers
{
    public abstract class OrendaControllerBase: AbpController
    {
        protected OrendaControllerBase()
        {
            LocalizationSourceName = OrendaConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}
