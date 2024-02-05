using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using MvcTaskManagerAPI.Models;
using TaskStatus = MvcTaskManagerAPI.Models.TaskStatus;
using Task = MvcTaskManagerAPI.Models.Task;

namespace MvcTaskManagerAPI.Identity
{
	public partial class ApplicationDbContext : IdentityDbContext<ApplicationUser>
	{
		//IdentityDbContext<ApplicationUser,ApplicationRole,String>
		public ApplicationDbContext(DbContextOptions options) : base(options)
		{

		}

		public DbSet<ClientLocation> ClientLocations { get; set; }
		public DbSet<Project> Projects { get; set; }
		public DbSet<ApplicationRole> ApplicationRoles { get; set; }

		public DbSet<Country> Countries { get; set; }
		public DbSet<Skill> Skills { get; set; }

		public DbSet<TaskPriority> TaskPriorities { get; set; }

		public DbSet<Models.TaskStatus> TaskStatuses { get; set; }
		public DbSet<Task> Tasks { get; set; }
		public DbSet<TaskStatusDetail> TaskStatusDetails { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuidler)
		{
			base.OnModelCreating(modelBuidler);

			modelBuidler.Entity<Country>().HasData(
				new Country { CountryID = 1, CountryName = "China" },
				new Country { CountryID = 2, CountryName = "United States" },
				new Country { CountryID = 3, CountryName = "Indonesia" },
				new Country { CountryID = 4, CountryName = "Brazil" },
				new Country { CountryID = 5, CountryName = "Pakistan" },
				new Country { CountryID = 6, CountryName = "Nigeria" },
				new Country { CountryID = 7, CountryName = "Bangladesh" },
				new Country { CountryID = 8, CountryName = "Russia" },
				new Country { CountryID = 9, CountryName = "Japan" },
				new Country { CountryID = 10, CountryName = "Mexico" },
				new Country { CountryID = 11, CountryName = "Philippines" },
				new Country { CountryID = 12, CountryName = "Vietnam" },
				new Country { CountryID = 13, CountryName = "Ethiopia" },
				new Country { CountryID = 14, CountryName = "Egypt" },
				new Country { CountryID = 15, CountryName = "Germany" },
				new Country { CountryID = 16, CountryName = "Iran" },
				new Country { CountryID = 17, CountryName = "Turkey" },
				new Country { CountryID = 18, CountryName = "Congo" },
				new Country { CountryID = 19, CountryName = "Thailand" },
				new Country { CountryID = 20, CountryName = "France" },
				new Country { CountryID = 21, CountryName = "United Kingdom" },
				new Country { CountryID = 22, CountryName = "Italy" },
				new Country { CountryID = 23, CountryName = "South Africa" },
				new Country { CountryID = 24, CountryName = "South Korea" },
				new Country { CountryID = 25, CountryName = "Vatican City" }
			);

			//adding some initial data
			modelBuidler.Entity<ClientLocation>().HasData(
				new ClientLocation() { ClientLocationID = 1, ClientLocationName = "New Delhi" },
				new ClientLocation() { ClientLocationID = 2, ClientLocationName = "Boston" },
				new ClientLocation() { ClientLocationID = 3, ClientLocationName = "Tokyo" },
				new ClientLocation() { ClientLocationID = 4, ClientLocationName = "Sydney" },
				new ClientLocation() { ClientLocationID = 5, ClientLocationName = "Berlin" },
				new ClientLocation() { ClientLocationID = 6, ClientLocationName = "Paris" },
				new ClientLocation() { ClientLocationID = 7, ClientLocationName = "Rio de			Janeiro" },
				new ClientLocation() { ClientLocationID = 8, ClientLocationName = "Cape Town" }

				);

			modelBuidler.Entity<Project>().HasData(new Project()
			{
				ProjectID = 1,
				ProjectName = "Project A",
				DateOfStart = DateTime.Parse("2022-01-01"),
				TeamSize = 10,
				Active = true,
				Status = "In Progress",
				ClientLocationID = 1
			},

			new Project()
			{
				ProjectID = 2,
				ProjectName = "Project B",
				DateOfStart = DateTime.Parse("2022-02-15"),
				TeamSize = 8,
				Active = false,
				Status = "Completed",
				ClientLocationID = 2
			},
			new Project()
			{
				ProjectID = 3,
				ProjectName = "Project C",
				DateOfStart = DateTime.Parse("2022-03-20"),
				TeamSize = 15,
				Active = true,
				Status = "On Hold",
				ClientLocationID = 3
			});


			modelBuidler.Entity<TaskPriority>().HasData(
				new TaskPriority() { TaskPriorityID = 1, TaskPriorityName = "Urgent" },
				new TaskPriority() { TaskPriorityID = 2, TaskPriorityName = "Normal" },
				new TaskPriority() { TaskPriorityID = 3, TaskPriorityName = "Below Normal" },
				new TaskPriority() { TaskPriorityID = 4, TaskPriorityName = "Low" }
			 );

			modelBuidler.Entity<TaskStatus>().HasData(
			   new Models.TaskStatus() { TaskStatusID = 1, TaskStatusName = "Holding" }, //Tasks that need to be documented still
			   new TaskStatus() { TaskStatusID = 2, TaskStatusName = "Prioritized" }, //Tasks that are placed in priority order; so need to start ASAP
			   new TaskStatus() { TaskStatusID = 3, TaskStatusName = "Started" }, //Tasks that are currently working
			   new TaskStatus() { TaskStatusID = 4, TaskStatusName = "Finished" }, //Tasks that are finished workng
			   new TaskStatus() { TaskStatusID = 5, TaskStatusName = "Reverted" } //Tasks that are reverted back, with comments or issues
			);



		}



		


	}
}
