using MvcTaskManagerAPI.Identity;
using MvcTaskManagerAPI.ServiceContracts;
using MvcTaskManagerAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using MvcTaskManagerAPI.Models;
using Microsoft.IdentityModel.Tokens;

namespace MvcTaskManagerAPI.Services
{
	public class UserService : IUsersService
	{
		private readonly AppSettings _appSettings;
		private readonly ApplicationUserManager _applicationUserManager;
		private readonly ApplicationSignInManager _applicationSignInManager;
		private readonly ApplicationDbContext _db;

		public UserService(ApplicationUserManager applicationUserManager, ApplicationSignInManager applicationSignInManager, IOptions<AppSettings> appSettings, ApplicationDbContext db)
		{
			this._applicationUserManager = applicationUserManager;
			this._applicationSignInManager = applicationSignInManager;
			this._appSettings = appSettings.Value;
			this._db = db;
		}

		public async Task<ApplicationUser> Authenticate(LoginViewModel loginViewModel)
		{
			var result = await _applicationSignInManager.PasswordSignInAsync(loginViewModel.Username, loginViewModel.Password, false, false);

			if (result.Succeeded)
			{
				var applicationUser = await _applicationUserManager.FindByNameAsync(loginViewModel.Username);
				applicationUser.PasswordHash = null;

				//if(await this._applicationUserManager.IsInRoleAsync(applicationUser, "Admin"))
				//{
				//	applicationUser.Role = "Admin";
				//}
				//else if (await this._applicationUserManager.IsInRoleAsync(applicationUser, "Employee"))
				//{
				//	applicationUser.Role = "Employee";
				//}
				if (applicationUser.NormalizedUserName == "ADMIN")
				{
					applicationUser.Role = "Admin";
				}
				else
				{
					applicationUser.Role = "Employee";
				}

				var tokenHandler = new JwtSecurityTokenHandler();
				var key = System.Text.Encoding.ASCII.GetBytes(_appSettings.Secret);
				var tokenDescriptor = new SecurityTokenDescriptor()
				{
					Subject = new ClaimsIdentity(new Claim[]{
						new Claim(ClaimTypes.Name,applicationUser.Id),
						new Claim(ClaimTypes.Email,applicationUser.Email),
						new Claim(ClaimTypes.Role,applicationUser.Role),
						}),
					Expires = DateTime.UtcNow.AddMinutes(60),
					SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)

				};

				var token = tokenHandler.CreateToken(tokenDescriptor);
				applicationUser.Token = tokenHandler.WriteToken(token);
				return applicationUser;
			}
			else
			{
				return null;
			}
		}

		public async Task<ApplicationUser> Register(SignUpViewModel signupViewModel)
		{
			ApplicationUser applicationUser = new ApplicationUser();
			applicationUser.FirstName = signupViewModel.PersonName.FirstName;
			applicationUser.LastName = signupViewModel.PersonName.LastName;
			applicationUser.Email = signupViewModel.Email;
			applicationUser.PhoneNumber = signupViewModel.Mobile;
			applicationUser.ReceiveNewsLetter = signupViewModel.ReceiveNewsLetter;
			applicationUser.CountryID = signupViewModel.CountryID;
			applicationUser.Gender = signupViewModel.Gender;
			applicationUser.Role = "Employee";
			applicationUser.UserName = signupViewModel.Email;
			applicationUser.DateOfBirth = Convert.ToDateTime(signupViewModel.DateOfBirth);

			var result = await _applicationUserManager.CreateAsync(applicationUser, signupViewModel.Password);
			if (result.Succeeded)
			{
				if ((await _applicationUserManager.AddToRoleAsync(await _applicationUserManager.FindByNameAsync(signupViewModel.Email), "Employee")).Succeeded)
				{
					var result2 = await _applicationSignInManager.PasswordSignInAsync(signupViewModel.Email, signupViewModel.Password, false, false);
					if (result2.Succeeded)
					{
						
						//token
						var tokenHandler = new JwtSecurityTokenHandler();
						var key = System.Text.Encoding.ASCII.GetBytes(_appSettings.Secret);
						var tokenDescriptor = new Microsoft.IdentityModel.Tokens.SecurityTokenDescriptor()
						{
							Subject = new ClaimsIdentity(new Claim[] {
						new Claim(ClaimTypes.Name, applicationUser.Id),
						new Claim(ClaimTypes.Email, applicationUser.Email),
						new Claim(ClaimTypes.Role, applicationUser.Role)
					}),
							Expires = DateTime.UtcNow.AddHours(8),
							SigningCredentials = new Microsoft.IdentityModel.Tokens.SigningCredentials(new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey(key), Microsoft.IdentityModel.Tokens.SecurityAlgorithms.HmacSha256Signature)
						};
						var token = tokenHandler.CreateToken(tokenDescriptor);
						applicationUser.Token = tokenHandler.WriteToken(token);

						//Skills
						foreach (var sk in signupViewModel.Skills)
						{
							Skill skill = new Skill();
							skill.SkillName = sk.SkillName;
							skill.SkillLevel = sk.SkillLevel;
							skill.Id = applicationUser.Id;
							skill.ApplicationUser = null;
							this._db.Skills.Add(skill);
							this._db.SaveChanges();
						}

						return applicationUser;
					}
					else
					{
						return null;
					}
				}
				else
				{
					return null;
				}
			}
			else
			{
				return null;
			}


		}

		public async Task<ApplicationUser> GetUserByEmail(string email)
		{
			return await _applicationUserManager.FindByEmailAsync(email);
		}
	}
}
