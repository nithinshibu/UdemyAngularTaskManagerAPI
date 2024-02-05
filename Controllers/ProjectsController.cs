using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MvcTaskManagerAPI.Identity;
using MvcTaskManagerAPI.Models;
using MvcTaskManagerAPI.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.Controllers
{
	//[Authorize]
	//[Authorize(AuthenticationSchemes =JwtBearerDefaults.AuthenticationScheme)]
	public class ProjectsController : Controller
	{

		private ApplicationDbContext _dbContext;

		public ProjectsController(ApplicationDbContext dbContext)
		{
			this._dbContext = dbContext;
		}


		[HttpGet]
		[Route("api/projects")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult Get()
		{
			//Thread.Sleep(1000);
			List<Project> projects = _dbContext.Projects.Include("ClientLocation").ToList();
			List<ProjectViewModel> projectsViewModel = new List<ProjectViewModel>();
			foreach (var project in projects)
			{
				projectsViewModel.Add(new ProjectViewModel()
				{
					ProjectID = project.ProjectID,
					ProjectName = project.ProjectName,
					TeamSize = project.TeamSize,
					DateOfStart = project.DateOfStart,
					Active = project.Active,
					ClientLocation = project.ClientLocation,
					ClientLocationID = project.ClientLocationID,
					Status = project.Status

				});
			}

			return Ok(projectsViewModel);
		}

		[HttpGet]
		[Route("api/projects/search/{searchby}/{searchtext}")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult Search(string searchBy, string searchText)
		{
			List<Project> projects = new List<Project>();

			if (searchBy == "ProjectID")
				projects = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.ProjectID.ToString().Contains(searchText)).ToList();
			else if (searchBy == "ProjectName")
				projects = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.ProjectName.Contains(searchText)).ToList();
			else if (searchBy == "DateOfStart")
				projects = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.DateOfStart.ToString().Contains(searchText)).ToList();
			else if (searchBy == "TeamSize")
				projects = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.TeamSize.ToString().Contains(searchText)).ToList();

			List<ProjectViewModel> projectsViewModel = new List<ProjectViewModel>();
			foreach (var project in projects)
			{
				projectsViewModel.Add(new ProjectViewModel()
				{
					ProjectID = project.ProjectID,
					ProjectName = project.ProjectName,
					TeamSize = project.TeamSize,
					DateOfStart = project.DateOfStart,// project.DateOfStart.ToString("dd/MM/yyyy"),
					Active = project.Active,
					ClientLocation = project.ClientLocation,
					ClientLocationID = project.ClientLocationID,
					Status = project.Status

				});
			}

			return Ok(projectsViewModel);
		}

		[HttpGet]
		[Route("api/projects/searchbyProjectID/{ProjectID}")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult SearchbyProjectID(int ProjectID)
		{
			Project project = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == ProjectID).FirstOrDefault();


			ProjectViewModel projectsViewModel = new ProjectViewModel()
			{
				ProjectID = project.ProjectID,
				ProjectName = project.ProjectName,
				TeamSize = project.TeamSize,
				DateOfStart = project.DateOfStart,// project.DateOfStart.ToString("dd/MM/yyyy"),
				Active = project.Active,
				ClientLocation = project.ClientLocation,
				ClientLocationID = project.ClientLocationID,
				Status = project.Status

			};


			return Ok(projectsViewModel);
		}


		[HttpPost]
		[Route("api/projects")]
		//[Authorize]
		//[ValidateAntiForgeryToken]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
		public IActionResult Post([FromBody] Project project)
		{
			project.ClientLocation = null;
			//we don't want to insert Client location while inserting project details.
			_dbContext.Projects.Add(project);
			_dbContext.SaveChanges();

			Project existingProject = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();

			ProjectViewModel projectsViewModel = new ProjectViewModel()
			{
				ProjectID = existingProject.ProjectID,
				ProjectName = existingProject.ProjectName,
				TeamSize = existingProject.TeamSize,
				DateOfStart = existingProject.DateOfStart,
				Active = existingProject.Active,
				ClientLocation = existingProject.ClientLocation,
				ClientLocationID = existingProject.ClientLocationID,
				Status = existingProject.Status

			};

			return Ok(projectsViewModel);
		}

		[HttpPut]
		[Route("api/projects")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

		public IActionResult Put([FromBody] Project project)
		{

			Project existingProject = _dbContext.Projects.Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();

			if (existingProject != null)
			{
				existingProject.ProjectName = project.ProjectName;
				existingProject.DateOfStart = project.DateOfStart;
				existingProject.TeamSize = project.TeamSize;
				existingProject.Active = project.Active;
				existingProject.ClientLocationID = project.ClientLocationID;
				existingProject.Status = project.Status;
				existingProject.ClientLocation = null;
				_dbContext.SaveChanges();

				existingProject = _dbContext.Projects.Include("ClientLocation").Where(temp => temp.ProjectID == project.ProjectID).FirstOrDefault();

				ProjectViewModel projectsViewModel = new ProjectViewModel()
				{
					ProjectID = existingProject.ProjectID,
					ProjectName = existingProject.ProjectName,
					TeamSize = existingProject.TeamSize,
					DateOfStart = existingProject.DateOfStart,
					Active = existingProject.Active,
					ClientLocation = existingProject.ClientLocation,
					ClientLocationID = existingProject.ClientLocationID,
					Status = existingProject.Status

				};

				return Ok(projectsViewModel);
			}
			else
			{
				return null;
			}

		}

		[HttpDelete]
		[Route("api/projects")]
		[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]

		public int Delete(int ProjectID)
		{

			Project existingProject = _dbContext.Projects.Where(temp => temp.ProjectID == ProjectID).FirstOrDefault();

			if (existingProject != null)
			{
				_dbContext.Projects.Remove(existingProject);
				_dbContext.SaveChanges();
				return ProjectID;
			}
			else
			{
				return -1;
			}

		}

	}
}
