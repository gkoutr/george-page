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
        public Education GetEducation()
        {

            string schoolText = System.IO.File.ReadAllText("./App_Data/school.json");
            string certText = System.IO.File.ReadAllText("./App_Data/certification.json");
            var schools = JsonConvert.DeserializeObject<IEnumerable<School>>(schoolText);
            var certs = JsonConvert.DeserializeObject<IEnumerable<Certification>>(certText);
            var edu = new Education
            {
                SchoolList = schools,
                CertList = certs
            };
            return edu;
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

    public class Education
    {
        public IEnumerable<School> SchoolList { get; set; }
        public IEnumerable<Certification> CertList { get; set; }
    }

    public class Certification
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Organization { get; set; }
        public string OrgLogo { get; set; }
        public string Exam { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
        public string CredentialUrl { get; set; }
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