using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.Models
{
	public class Project
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ProjectID { get; set; }
		public string ProjectName { get; set; }
		public DateTime DateOfStart { get; set; }
		public int? TeamSize { get; set; }
		public bool Active { get; set; }
		public string Status { get; set; }
		public int ClientLocationID { get; set; }

		[ForeignKey("ClientLocationID")]
		public virtual ClientLocation ClientLocation { get; set; }
	}
	
}
