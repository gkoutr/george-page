using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using System.Web.Http;

namespace george_site.Controllers
{
    [Route("api/about")]
    //[ApiController]
    public class AboutController : ApiController
    {
        [HttpGet]
        [Route("jobs")]
        public IEnumerable<Job> GetJobs()
        {
            string jsonText = File.ReadAllText("./Data/job.json");
            var jobs = JsonConvert.DeserializeObject(jsonText);
            return null;
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
    }
}