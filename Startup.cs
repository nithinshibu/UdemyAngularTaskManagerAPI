using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MvcTaskManagerAPI.Identity;
using MvcTaskManagerAPI.ServiceContracts;
using MvcTaskManagerAPI.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using MvcTaskManagerAPI.Models;

namespace MvcTaskManagerAPI
{
	public class Startup
	{
		public IConfiguration Configuration { get; set; }

		public Startup(IHostingEnvironment env)
		{
			var builder = new ConfigurationBuilder().SetBasePath(env.ContentRootPath).AddJsonFile("appsettings.json");
			Configuration = builder.Build();
		}


		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.Configure<CookiePolicyOptions>(options =>
			{
				// This lambda determines whether user consent for non-essential cookies is needed for a given request.
				options.CheckConsentNeeded = context => true;
				options.MinimumSameSitePolicy = SameSiteMode.None;
			});


			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
			services.AddEntityFrameworkSqlServer().AddDbContext<ApplicationDbContext>(options=> options.UseSqlServer(Configuration.GetConnectionString("DevConnection"),b=>b.MigrationsAssembly("MvcTaskManagerAPI")));


			services.AddTransient<IRoleStore<ApplicationRole>, ApplicationRoleStore>();
			services.AddTransient<UserManager<ApplicationUser>, ApplicationUserManager>();
			services.AddTransient<SignInManager<ApplicationUser>, ApplicationSignInManager>();
			services.AddTransient<RoleManager<ApplicationRole>, ApplicationRoleManager>();
			services.AddTransient<IUserStore<ApplicationUser>, ApplicationUserStore>();
			services.AddTransient<IUsersService, UserService>();

			services.AddIdentity<ApplicationUser, ApplicationRole>().AddEntityFrameworkStores<ApplicationDbContext>().AddUserStore<ApplicationUserStore>().AddUserManager<ApplicationUserManager>().AddRoleManager<ApplicationRoleManager>().AddSignInManager<ApplicationSignInManager>().AddRoleStore<ApplicationRoleStore>().AddDefaultTokenProviders();

			services.AddScoped<ApplicationRoleStore>();
			services.AddScoped<ApplicationUserStore>();

			//Configure JWT Authentication
			var appSettingsSection = Configuration.GetSection("AppSettings");
			services.Configure<AppSettings>(appSettingsSection);
			var appSettings = appSettingsSection.Get<AppSettings>();
			var key = System.Text.Encoding.ASCII.GetBytes(appSettings.Secret);

			//services.AddAuthentication(x => {
			//	x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
			//	x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			//}).AddJwtBearer(x=> {
			//	x.RequireHttpsMetadata = false;
			//	x.TokenValidationParameters = new TokenValidationParameters()
			//	{
			//		ValidateIssuerSigningKey = true,
			//		IssuerSigningKey = new SymmetricSecurityKey(key),
			//		ValidateIssuer = false,
			//		ValidateAudience = false
			//	};
			//});
			services.AddAuthentication(x => {
				//x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				//x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

			}).AddCookie().AddJwtBearer(x => {
				x.RequireHttpsMetadata = false;
				x.TokenValidationParameters = new TokenValidationParameters()
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(key),
					ValidateIssuer = false,
					ValidateAudience = false
				};
			});

			services.AddAntiforgery(options=>
			{
				options.Cookie.Name = "XSRF-Cookie-TOKEN";
				options.HeaderName = "X-XSRF-Token";
			});


		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public async void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}
			else
			{
				app.UseExceptionHandler("/Error");
			}
			app.UseAuthentication();

			app.UseStaticFiles();
			app.UseCookiePolicy();
			//app.UseRewriter(new RewriteOptions().AddRedirect("^$", "/home/index"));
			app.UseMvc();
			//app.UseMvc(routes =>
			//{
			//	routes.MapRoute(
			//		name: "default",
			//		template: "home/index/{id?}",
			//		defaults: new { controller = "Home", action = "Index" }
			//	);
			//});

			IServiceScopeFactory serviceScopeFactory = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>();

			using (IServiceScope scope = serviceScopeFactory.CreateScope())
			{
				var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<ApplicationRole>>();

				var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

				//Create Admin Role
				if(!await roleManager.RoleExistsAsync("Admin"))
				{
					var role = new ApplicationRole();
					role.Name = "Admin";
					await roleManager.CreateAsync(role);
				}

				//Create Admin User
				if(await userManager.FindByNameAsync("admin") == null)
				{
					var user = new ApplicationUser();
					user.UserName = "admin";
					user.Email = "admin@gmail.com";
					var userPassword = "Admin123#";

					var chkUser = await userManager.CreateAsync(user, userPassword);
					if (chkUser.Succeeded)
					{
						await userManager.AddToRoleAsync(user, "Admin");
					}

				}

				//Create Employee Role
				//Create Admin Role
				if (!await roleManager.RoleExistsAsync("Employee"))
				{
					var role = new ApplicationRole();
					role.Name = "Employee";
					await roleManager.CreateAsync(role);
				}

			}

			app.Run(async (context) =>
			{
				await context.Response.WriteAsync("Hello World");
			});
		}
	}
}
