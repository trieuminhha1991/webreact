using System.Threading.Tasks;
using TrieuMinhHa.Orenda.Configuration.Dto;

namespace TrieuMinhHa.Orenda.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
