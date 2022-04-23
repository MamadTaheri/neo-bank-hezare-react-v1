using Bugeto_Store.Application.Interfaces.Contexts;
using Bugeto_Store.Common;
using System.Collections.Generic;
using System.Linq;

namespace Bugeto_Store.Application.Services.Users.Queries.GetUsers
{
    public class GetUsersService : IGetUsersService
    {
        private readonly IDataBaseContext _context;
        public GetUsersService(IDataBaseContext context)
        {
            _context = context;
        }
        public ResultGetUserDto Execute(RequestGetUserDto request)
        {
            var users = _context.Users.AsQueryable();
            if (!string.IsNullOrWhiteSpace(request.SearchKey))
            {
                users = users.Where(q => q.FullName.Contains(request.SearchKey) && q.Email.Contains(request.SearchKey));
            }
            int rowsCount = 0;
            var usersList = users.ToPaged(request.Page, 20, out rowsCount).Select(q => new GetUsersDto
            {
                Email = q.Email,
                FullName = q.FullName,
                Id = q.Id,
            }).ToList();

            return new ResultGetUserDto
            {
                Rows = rowsCount,
                Users = usersList
            };
        }
    }
}
