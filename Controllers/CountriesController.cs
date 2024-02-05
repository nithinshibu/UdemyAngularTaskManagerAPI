﻿using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MvcTaskManagerAPI.Identity;
using MvcTaskManagerAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcTaskManagerAPI.Controllers
{
	public class CountriesController : Controller
	{
		private readonly ApplicationDbContext db;
		public CountriesController(ApplicationDbContext db)
		{
			this.db = db;
		}
		[Route("api/countries")]
		public IActionResult GetCountries()
		{
			List<Country> countries = this.db.Countries.OrderBy(x=>x.CountryName).ToList();
			return Ok(countries);
		}

        [HttpGet]
        [Route("api/countries/searchbycountryid/{CountryID}")]
        //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public IActionResult GetByCountryID(int CountryID)
        {
            Country country = db.Countries.Where(temp => temp.CountryID == CountryID).FirstOrDefault();
            if (country != null)
            {
                return Ok(country);
            }
            else
                return NoContent();
        }

        [HttpPost]
        [Route("api/countries")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public Country Post([FromBody] Country country)
        {
            db.Countries.Add(country);
            db.SaveChanges();

            Country existingCountry = db.Countries.Where(temp => temp.CountryID == country.CountryID).FirstOrDefault();
            return existingCountry;
        }

        [HttpPut]
        [Route("api/countries")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public Country Put([FromBody] Country country)
        {
            Country existingCountry = db.Countries.Where(temp => temp.CountryID == country.CountryID).FirstOrDefault();
            if (existingCountry != null)
            {
                existingCountry.CountryName = country.CountryName;
                db.SaveChanges();
                return existingCountry;
            }
            else
            {
                return null;
            }
        }

        [HttpDelete]
        [Route("api/countries")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public int Delete(int CountryID)
        {
            Country existingCountry = db.Countries.Where(temp => temp.CountryID == CountryID).FirstOrDefault();
            if (existingCountry != null)
            {
                db.Countries.Remove(existingCountry);
                db.SaveChanges();
                return CountryID;
            }
            else
            {
                return -1;
            }
        }
    }

    
}
