using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using TrieuMinhHa.Orenda.Authorization;
using TrieuMinhHa.Orenda.Authorization.Roles;
using TrieuMinhHa.Orenda.Authorization.Users;
using TrieuMinhHa.Orenda.Editions;
using TrieuMinhHa.Orenda.MultiTenancy;

namespace TrieuMinhHa.Orenda.Identity
{
    public static class IdentityRegistrar
    {
        public static IdentityBuilder Register(IServiceCollection services)
        {
            services.AddLogging();

            return services.AddAbpIdentity<Tenant, User, Role>()
                .AddAbpTenantManager<TenantManager>()
                .AddAbpUserManager<UserManager>()
                .AddAbpRoleManager<RoleManager>()
                .AddAbpEditionManager<EditionManager>()
                .AddAbpUserStore<UserStore>()
                .AddAbpRoleStore<RoleStore>()
                .AddAbpLogInManager<LogInManager>()
                .AddAbpSignInManager<SignInManager>()
                .AddAbpSecurityStampValidator<SecurityStampValidator>()
                .AddAbpUserClaimsPrincipalFactory<UserClaimsPrincipalFactory>()
                .AddPermissionChecker<PermissionChecker>()
                .AddDefaultTokenProviders();
        }
    }
}
