﻿using Bugeto_Store.Application.Interfaces.Contexts;
using Bugeto_Store.Common.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bugeto_Store.Application.Services.Users.Commands.UserSatusChange
{
    public interface IUserSatusChangeService
    {
        ResultDTO Execute(long UserId);
    }

    public class UserSatusChangeService : IUserSatusChangeService
    {
        private readonly IDataBaseContext _context;


        public UserSatusChangeService(IDataBaseContext context)
        {
            _context = context;
        }

        public ResultDTO Execute(long UserId)
        {
            var user = _context.Users.Find( UserId);
            if (user == null)
            {
                return new ResultDTO
                {
                    IsSuccess = false,
                    Message = "کاربر یافت نشد"
                };
            }

            user.IsActive = !user.IsActive;
            _context.SaveChanges();
            string userstate = user.IsActive == true ? "فعال" : "غیر فعال";
            return new ResultDTO()
            {
                IsSuccess = true,
                Message = $"کاربر با موفقیت {userstate} شد!",
            };
        }
    }
}