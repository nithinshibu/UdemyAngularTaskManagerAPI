﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.Controllers
{
	public class HomeController : Controller
	{
		//[Route("")]
		[Route("home/index")]
		public IActionResult Index()
		{
			return View();
		}
	}
}
