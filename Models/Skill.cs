using MvcTaskManagerAPI.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.Models
{
	public class Skill
	{
		[Key]
		public int SkillID { get; set; }
		public string SkillName { get; set; }
		public string SkillLevel { get; set; }
		public string Id { get; set; } // Foreign Key

		[ForeignKey("Id")]
		public virtual ApplicationUser ApplicationUser { get; set; }
	}
}
