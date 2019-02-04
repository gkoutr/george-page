using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using Microsoft.AspNetCore.Mvc;

namespace george_site.Controllers
{
    [Route("api/[controller]")]
    //[ApiController]
    public class AboutController : Controller
    {
        
        [HttpGet("[action]")]
        public IEnumerable<Job> GetJobs()
        {
            
            string jsonText = System.IO.File.ReadAllText("./App_Data/job.json");
            var jobs = JsonConvert.DeserializeObject<IEnumerable<Job>>(jsonText);
            return jobs;
        }

        [HttpGet("[action]")]
        public IEnumerable<School> GetSchools()
        {

            string jsonText = System.IO.File.ReadAllText("./App_Data/school.json");
            var schools = JsonConvert.DeserializeObject<IEnumerable<School>>(jsonText);
            return schools;
        }
    }

    public class Job
    {
        
        public int Id { get; set;}
        public string CompanyName { get; set; }
        public string Logo { get; set; }
        public string JobTitle { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Location { get; set; }
        public string[] JobDuties { get; set; }
    }

    public class School
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Logo { get; set; }
        public string Major { get; set; }
        public string Degree { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string Location { get; set; }
    }
}