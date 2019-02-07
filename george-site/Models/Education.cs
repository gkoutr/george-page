using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace george_site.Models
{
    public class Education
{
    public IEnumerable<School> SchoolList { get; set; }
    public IEnumerable<Certification> CertList { get; set; }
    public IEnumerable<Skill> SkillList { get; set; }
}
}
