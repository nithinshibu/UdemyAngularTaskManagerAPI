using MvcTaskManagerAPI.Identity;
using MvcTaskManagerAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.ServiceContracts
{
	public interface IUsersService
	{
		Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel);
		Task<ApplicationUser> Register(SignUpViewModel signupViewModel);
		Task<ApplicationUser> GetUserByEmail(string Email);
		
	}
}
