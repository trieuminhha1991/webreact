using Microsoft.AspNetCore.Antiforgery;
using TrieuMinhHa.Orenda.Controllers;

namespace TrieuMinhHa.Orenda.Web.Host.Controllers
{
    public class AntiForgeryController : OrendaControllerBase
    {
        private readonly IAntiforgery _antiforgery;

        public AntiForgeryController(IAntiforgery antiforgery)
        {
            _antiforgery = antiforgery;
        }

        public void GetToken()
        {
            _antiforgery.SetCookieTokenAndHeader(HttpContext);
        }
    }
}
