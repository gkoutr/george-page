using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using Microsoft.AspNetCore.Mvc;
using System.Web;
using george_site.Models;

namespace george_site.Controllers
{
    [Route("api/[controller]")]
    public class AboutController : Controller
    {
  //      const filePath = path.resolve(__dirname, './build', 'index.html')
  //fs.readFile(filePath, 'utf8', function(err, data)
  //      {
  //          if (err)
  //          {
  //              return console.log(err);
  //          }
  //          data = data.replace(/\$OG_TITLE / g, 'About Page');
  //          data = data.replace(/\$OG_DESCRIPTION / g, "About page description");
  //          result = data.replace(/\$OG_IMAGE / g, 'https://i.imgur.com/V7irMl8.png');
  //          response.send(result);
  //      });
        
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
            string skillText = System.IO.File.ReadAllText("./App_Data/skills.json");
            var schools = JsonConvert.DeserializeObject<IEnumerable<School>>(schoolText);
            var certs = JsonConvert.DeserializeObject<IEnumerable<Certification>>(certText);
            var skills = JsonConvert.DeserializeObject<IEnumerable<Skill>>(skillText);
            var edu = new Education
            {
                SchoolList = schools,
                CertList = certs,
                SkillList = skills
            };
            return edu;
        }

        [HttpGet("[action]")]
        public IEnumerable<Post> GetPosts()
        {
            string postText = System.IO.File.ReadAllText("./App_Data/post.json");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(postText);
            return posts;
        }
        [HttpGet("[action]/{id}")]
        public Post GetPostById(int id)
        {
            string path = @"ClientApp\public\index.html";

                using (StreamReader reader = new StreamReader(path))
                {
                //"    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\">"
                String line = String.Empty;
                    while ((line = reader.ReadLine()) != null)
                    {
                        //MessageBox.Show(line);
                    }

                }
            string postText = System.IO.File.ReadAllText("./App_Data/post.json");
            var posts = JsonConvert.DeserializeObject<IEnumerable<Post>>(postText);
            return posts.Where(x => x.Id == id).FirstOrDefault();
        }
    }

}