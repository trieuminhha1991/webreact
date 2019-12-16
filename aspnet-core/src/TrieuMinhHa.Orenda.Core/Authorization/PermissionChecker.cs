using Abp.Authorization;
using TrieuMinhHa.Orenda.Authorization.Roles;
using TrieuMinhHa.Orenda.Authorization.Users;

namespace TrieuMinhHa.Orenda.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
