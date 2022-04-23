using Bugeto_Store.Application.Services.Users.Queries.GetUsers;
using Microsoft.AspNetCore.Mvc;

namespace EndPoint.Site.Areas.Admin.Controllers
{
    public class UsersController : Controller
    {
        private readonly IGetUsersService _getUsersService;
        public UsersController(IGetUsersService getUsersService)
        {
            _getUsersService = getUsersService;
        }
        [Area("Admin")]
        public IActionResult Index(string searchkey, int page=1)
        {
            return View(_getUsersService.Execute(new RequestGetUserDto
            {
                SearchKey = searchkey,
                Page = page
            }));
        }
    }
}
