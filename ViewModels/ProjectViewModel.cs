using MvcTaskManagerAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.ViewModels
{
	public class ProjectViewModel
	{
		public int ProjectID { get; set; }
		public string ProjectName { get; set; }
		public DateTime DateOfStart { get; set; }
		public int? TeamSize { get; set; }
		public bool Active { get; set; }
		public string Status { get; set; }
		public int ClientLocationID { get; set; }
		public ClientLocation ClientLocation { get; set; }
	}
}
